Webcam.set({
width: 310,
height: 300,
image_format: 'png',
png_quality: 90,

constraints: {
    facingMode: "environment"
}
})

camera = document.getElementById("camera");
Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src= "' + data_uri + '">'

    }

    )

}

console.log('ml5 Version: ', ml5.version) ; 

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log("Model Loaded")
}

function check() {
    img = document.getElementById("captured_img");
    classifier.classify(img, got_results);
}

function got_results(error, result) {
if (error) {
    console.log(error)
}
else {
   console.log(result)
   document.getElementById("object_name").innerHTML = result[0].label ;
}
}