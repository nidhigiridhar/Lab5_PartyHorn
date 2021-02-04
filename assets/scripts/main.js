// main.js

var aud = document.getElementById("horn-sound");

// handle changes in volume-number element 
var volNumber = document.getElementById("volume-number")
volNumber.addEventListener("input", changeVolNum);

function changeVolNum() {

    let soundLevel = volNumber.value; // get sound level value that was input 
    aud.volume = (soundLevel / 100); // change volume according to input 
    document.querySelector('#volume-slider').value = soundLevel; // set value of slider

    // change volume icon based on volume level 
    if (soundLevel <= 100 && soundLevel >= 67) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    } 
    else if (soundLevel <= 66 && soundLevel >= 34) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    }
    else if (soundLevel <= 33 && soundLevel >= 1) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    }
    else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true; // disable honk button when volume is 0
    }
}

// handle changes in volume-slider element 
var volSlider = document.getElementById("volume-slider")
volSlider.addEventListener("input", changeVolSlider);

function changeVolSlider() {

    let soundLevel = volSlider.value; // get sound level value that was input 
    aud.volume = (soundLevel / 100); // change volume according to input 
    document.querySelector('#volume-number').value = soundLevel; // set value of slider

    // change volume icon based on volume level 
    if (soundLevel <= 100 && soundLevel >= 67) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    } 
    else if (soundLevel <= 66 && soundLevel >= 34) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    }
    else if (soundLevel <= 33 && soundLevel >= 1) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    }
    else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true; // disable honk button when volume is 0
    }
}

// change audio sound and horn image based on radio selection 
if (document.querySelector('input[name="radio-sound"]')){
    document.querySelectorAll('input[name="radio-sound"]').forEach((elem) => {
        elem.addEventListener("click", function(event){
            var item = event.target.id;

            // air horn is selected 
            if (item == "radio-air-horn") {
                document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
                document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
            }

            // car horn is selected 
            else if (item == "radio-car-horn") {
                document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
                document.getElementById("sound-image").src = "./assets/media/images/car.svg";
            }

            // party horn is selected
            else {
                document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
                document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
            }
        });
    });
}



// play audio when Honk button is pressed
var button = document.getElementById("honk-btn")
button.addEventListener("click", function(event) {
    let sound = document.getElementById("horn-sound");
    sound.play();
    event.preventDefault(); // prevent page from reloading when button is pressed
}); 
