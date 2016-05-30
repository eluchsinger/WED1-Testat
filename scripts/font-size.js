window.addEventListener("load", registerFontSlider);

/**
 * Registers the events for the font slider.
 */
function registerFontSlider() {
    var fontSlider = document.getElementById("font-slider");
    var bodyTag = document.getElementsByTagName("body")[0];
    
    fontSlider.onchange = function () {
        console.log("New Font Size Value: " + fontSlider.value);
        bodyTag.style.fontSize = fontSlider.value + "pt";
    };
}