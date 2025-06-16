import "./contact.css"

let buildContact = function () {
    const contentDiv = document.querySelector("#content");

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactWrapper");

    contactDiv.textContent = "Contact: 123 456 7891"

    contentDiv.appendChild(contactDiv);
}

export {buildContact}