let menuItems = [
    {name: "Sushi"},
    {name: "Ice Cream"},
    {name: "Peaches"},

]; 

let menuList = document.getElementById("menu-list"); 

for(let i = 0; i < menuItems.length; i++){
    let itemElm = document.createElement("li");
    itemElm.innerText = menuItems[i].name; 
    if(menuItems[i].name === "Sushi"){
        itemElm.fontSize = "100px"
    
    }else if(menuItems[i].name ==="Ice Cream"){
        itemElm.style.outlineColor = "#FFC0CB"
    }

    menuList.appendChild(itemElm)
}