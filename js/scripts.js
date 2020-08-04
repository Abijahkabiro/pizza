function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}
function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("number").value;
    return parseInt(selectedNumber);
}
function onions() {
    var onion = 0;
    var addOnion = document.getElementById("topping");
    if (addOnion.checked === true) {
        onion= 70;
    }
    return parseInt(onion);
}