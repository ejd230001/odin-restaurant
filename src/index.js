import "./reset.css"
import "./styles.css"
import {buildHome} from "./home.js"
import {buildMenu} from "./menu.js"
import {buildContact} from "./contact.js"

function initializePage() {
    buildHome();

    const homeButton = document.querySelector(".home");
    const menuButton = document.querySelector(".menu");
    const contactButton = document.querySelector(".contact");

    homeButton.addEventListener("click", clearContent);
    homeButton.addEventListener("click", buildHome);

    menuButton.addEventListener("click", clearContent);
    menuButton.addEventListener("click", buildMenu);

    contactButton.addEventListener("click", clearContent);
    contactButton.addEventListener("click", buildContact);
}

function clearContent() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
}

initializePage();