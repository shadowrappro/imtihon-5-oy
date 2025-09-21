import { elCarsContainer, elCarsTemplate } from "./html-elements.js";

export function uiChangerCars(carsLists) {
    elCarsContainer.innerHTML = "";
    carsLists.forEach(element => {
        let clone = elCarsTemplate.content.cloneNode(true)
        let elTitle = clone.querySelector(".car-title")
        let elPragreff = clone.querySelector(".car-paragreff")
        let elCountry = clone.querySelector(".car-country")
        let elTurkum = clone.querySelector(".car-turkum")
        let elColor = clone.querySelector(".car-color")
        let elDeleteButton = clone.querySelector(".delete-btn")
        let elEditButton = clone.querySelector(".edit-btn")
        let elInfoButton = clone.querySelector(".info-btn")
        let elColorName = clone.querySelector(".car-colorName")

        elTitle.innerText = element.name;
        elPragreff.innerText = element.description;
        elCountry.innerText = element.country;
        elTurkum.innerText = element.category;
        elColor.innerText = "";
        elColor.style.backgroundColor = element.color;
        elColorName.innerText = element.colorName;
        elDeleteButton.id = element.id;
        elEditButton.id = element.id
        elInfoButton.id = element.id

        elCarsContainer.append(clone)
    });
}