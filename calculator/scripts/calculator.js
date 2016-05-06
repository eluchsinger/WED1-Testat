/**
 * Load
 */
window.addEventListener('load', function() {
input = document.getElementById("input");
output = document.getElementById("output");
    
    output.innerText = "Guten Tag, ich bin Rechni :)";
    
    document.getElementById("key-0").addEventListener('click', clickNumber);
    document.getElementById("key-1").addEventListener('click', clickNumber);
    document.getElementById("key-2").addEventListener('click', clickNumber);
    document.getElementById("key-3").addEventListener('click', clickNumber);
    document.getElementById("key-4").addEventListener('click', clickNumber);
    document.getElementById("key-5").addEventListener('click', clickNumber);
    document.getElementById("key-6").addEventListener('click', clickNumber);
    document.getElementById("key-7").addEventListener('click', clickNumber);
    document.getElementById("key-8").addEventListener('click', clickNumber);
    document.getElementById("key-9").addEventListener('click', clickNumber);


});




/**
 * Functions
 */

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
    var value = this.value;
    input.value += value;
}

function clickFunction(){
    
}

var betweenProfit;









/**
 * Calcuation
 */

