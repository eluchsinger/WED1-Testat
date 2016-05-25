/**
 * UI, Load
 */
window.addEventListener('load', function() {
    output.value = "Guten Tag, ich bin Rechni :)";
    input = document.getElementById("input");
    output = document.getElementById("output");
    
    for (i = 0; i < document.getElementsByClassName("number").length; i++) { 
        document.getElementsByClassName("number")[i].addEventListener('click', clickNumber);
    }
    
    for (i = 0; i < document.getElementsByClassName("operator").length; i++){
        document.getElementsByClassName("operator")[i].addEventListener("click", clickOperation);
    }
    
    document.getElementById("key-c").addEventListener(('click'), cFunction);
    document.getElementById("key-=").addEventListener(('click'), doIt);
    
});
/**
 * UI, Functions
 */

function clickNumber() {
    input.value += this.value;
    
    if(input.value.length > 20){
        output.value = "Ihre Zahl ist zu lang :o"
        input.value = "";
    }
}

function clickOperation(){
    operation.operator = this.value;
    
    if (input.value != ""){
        if (output.value == "Guten Tag, ich bin Rechni :)" || output.value == "Bitte rechnen Sie etwas vernünftiges ;)" || output.value == "Ihre Zahl ist zu lang :o"){
            operation.value = input.value;
            input.value = "";
        } 
    }
    output.value = operation.value + " " + operation.operator;
}

function doIt(){
    if (operation.value == ""){
        output.value = "Bitte rechnen Sie etwas vernünftiges ;)"
        operation.value = "";
    } else if(input.value == 0 && operation.operator == "/") {
        output.value = "Bitte rechnen Sie etwas vernünftiges ;)"
        operation.value = "";
    } else {
        operation.value = calculate(operation.value, input.value);
        output.value = operation.value;
        operation.value = "";
    }
    input.value = "";
}

function cFunction() {
    output.value = "Guten Tag, ich bin Rechni :)";
    operation.value = "";
    input.value = "";
}

/**
 * Core
 */
operation = {value:"", operator:""};

function calculate(p1, p2){
    switch (operation.operator) {
        case "+":
            console.log("+");
            return parseInt(p1) + parseInt(p2); 
        case "-":
            console.log("-");
            return parseInt(p1) - parseInt(p2); 
        case "/":
            console.log("/");
            return parseInt(p1) / parseInt(p2); 
        case "*":
            return parseInt(p1) * parseInt(p2); 
        default:
            console.log("unknown operation")
            break;
    }
}