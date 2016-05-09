/**
 * Load
 */
window.addEventListener('load', function() {
    operation = {value:"", operator:null};
    output.innerText = "Guten Tag, ich bin Rechni :)";
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

function add(p1, p2) {
    return p1 + p2;              
}

function divide(p1, p2) {
    return p1 / p2;              
}

function minus(p1, p2) {
    return p1 - p2;              
}

function multiply(p1, p2) {
    return p1 * p2;
}

function clickNumber() {
    input.value += this.value;
}

function clickOperation(){
    operation.operator = this.value;
    
    if (input.value != ""){
        if (output.value == "Guten Tag, ich bin Rechni :)"){
            operation.value = input.value;
            input.value = "";
        } else {
            input.value = "";
        } 
    }
    output.value = operation.value + " " + operation.operator;
}

function doIt(){
    if (operation.value == ""){
        output.value = "Bitte rechnen Sie etwas vernünftiges ;)"
    } else {
        operation.value = calculate(operation.value, input.value);
        output.value = operation.value;
    }
    input.value = "";
}

function cFunction() {
    output.innerText = "Guten Tag, ich bin Rechni :)";
    operation.value = "";
    input.value = "";
}

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