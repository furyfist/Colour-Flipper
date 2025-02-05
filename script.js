let colour_hex = document.querySelector('#colour'); // current hex of colour
let flip_btn = document.querySelector('#flip'); // Button reference
let body = document.body; 

function hex() {

    let hex = '#' + Math.floor(Math.random() *16777215).toString(16).padStart(6, '0');
    //The padStart() method pads a string with another string (multiple times) until it reaches a given length.
    return hex;
}

// Change background and text on button click
flip_btn.addEventListener("click", function() {
    let newColor = hex();
    body.style.backgroundColor = newColor;
    colour_hex.innerHTML = newColor;
});
