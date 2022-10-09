function allAnimals() {
    let chickens = parseInt(document.getElementById("howManyChickens").value);
    let geese = parseInt(document.getElementById("howManyGeese").value);
    // console.log(chickens);
    let total = chickens + geese;
    document.getElementById("total-number").innerHTML = "You are thinking about getting " + total + " farm animals.";
    // console.log(total);
}

function reset() {
    document.getElementById("howManyChickens").value = "0";
    document.getElementById("howManyGeese").value = "0";
}