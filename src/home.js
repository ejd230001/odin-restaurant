import "./home.css"

let buildHome = function () {
    const contentDiv = document.querySelector("#content");

    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("homeWrapper");

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome");
    welcomeDiv.textContent = "Welcome to Our Home Page";

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.textContent = "Enjoy the finest meals, handcrafted with love."

    wrapperDiv.appendChild(welcomeDiv);
    wrapperDiv.appendChild(descriptionDiv);

    contentDiv.appendChild(wrapperDiv);

}

export {buildHome}