import "./menu.css"
import spaghetti from "./spaghetti.jpg"

function buildMenu() {
    const contentDiv = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuWrapper")

    const spaghettiImage = document.createElement("img");
    spaghettiImage.src = spaghetti;
    menuDiv.appendChild(spaghettiImage);
    
    contentDiv.appendChild(menuDiv);
}

export {buildMenu}
