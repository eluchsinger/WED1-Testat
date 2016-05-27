/**
 * UI, Load
 */
window.addEventListener('load', function() {
    output.value = "Guten Tag, ich bin Rechni :)";
    input = document.getElementById("input");
    output = document.getElementById("output");
    
    var numbers = document.getElementsByClassName("number");
    var operators = document.getElementsByClassName("operator");
    
    for (i = 0; i < numbers.length; i++) { 
        numbers[i].addEventListener('click', clickNumber);
    }
    
    for (i = 0; i < operators.length; i++){
        operators[i].addEventListener("click", clickOperation);
    }
    
    document.getElementById("key-c").addEventListener(('click'), cFunction);
    document.getElementById("key-=").addEventListener(('click'), doIt);
    
});
/**
 * UI, Functions
 */

function clickNumber() {
    input.value += this.value;
    operation.input = input.value;
    
    if(operation.input.length > 20){
        output.value = "Ihre Zahl ist zu lang :o"
        input.value = "";
        operation.input = input.value;
    }
}

function clickOperation(){
    operation.operator = this.value;
    
    if (operation.input != ""){
        if (output.value == "Guten Tag, ich bin Rechni :)" 
            || output.value == "Bitte rechnen Sie etwas vernünftiges ;)" 
            || output.value == "Ihre Zahl ist zu lang :o"){
            operation.value = operation.input;
            input.value = "";
            operation.input = input.value;
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
        operation.value = calculate(operation.value, operation.input);
        output.value = operation.value;
    }
    input.value = "";
    operation.input = input.value;
}

function cFunction() {
    output.value = "Guten Tag, ich bin Rechni :)";
    operation.value = "";
    input.value = "";
    operation.input = "";
}

/**
 * Core
 */
operation = {value:"", operator:"", input:""};

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