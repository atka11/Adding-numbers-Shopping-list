const shoppingList = document.getElementsByClassName("shopping-list")[0];
const clear = document.getElementById("clear");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");
let itemArray = [];


userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    addItem();
})

function addItem(){
    let h2 = document.createElement("h2");
    let item = userInput.value;
    console.log(item);
    h2.innerHTML = '- ' + item;

    if (itemArray.includes(item) === true){
       alert("This item is already on the list.");
    }
    else{
        allItems.insertAdjacentElement("beforeend", h2);
        itemArray.push(item);
        console.log(itemArray);
   }

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    userInput.value = "";
}

clear.addEventListener("click", function(){
    // console.log(allItems.children);
    for (i = 0; i < allItems.children.length; i++){
        if (allItems.children[i].style.textDecoration === "line-through"){
        let itemValue = allItems.children[i].innerHTML;
        console.log(typeof(itemValue));
        let itemValueTrim = itemValue.replace('-','').trim();
        console.log(itemValueTrim);        
        console.log(itemArray.indexOf(itemValueTrim));
        console.log(itemArray,itemValueTrim);

        if (itemArray.indexOf(itemValueTrim) !== -1){
        let index = itemArray.indexOf(itemValueTrim);
        itemArray.splice(index,1)
        console.log(itemArray)
        allItems.children[i].innerHTML = ''
        // console.log(allItems.children[i].innerHTML);
        // allItems.children[i].innerHTML = "";
        }
    
    }
    }
})