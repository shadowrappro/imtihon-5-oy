import { carsLists } from "./car.js";
import { addCar, deleteCar, editCar, emptyInput, infoShow, showTrue } from "./functions.js";
import { darkMode, elAddAcceleration, elAddButton, elAddCategory, elAddColorCode, elAddColorName, elAddCountry, elAddDescription, elAddDoorCount, elAddEngine, elAddFuelConsumptionCity, elAddFuelConsumptionCombined, elAddFuelConsumptionHighway, elAddFuelType, elAddGeneration, elAddHorsepower, elAddMaxSpeed, elAddModal, elAddName, elAddSeatCount, elAddSubmit, elAddTrim, elAddYear, elBody, elCarsContainer, elEditModal, elInfoModal, elOverlay } from "./html-elements.js";
import { uiChangerCars } from "./ui-changer.js";

uiChangerCars(carsLists);

elCarsContainer.addEventListener("click", (evt) => {
    if (evt.target.alt === "Delete") {
        if (confirm("Rostdan ham bu modelni o'chirmoqchimisiz?")) {
            deleteCar(evt.target.id)
            showTrue("Model muvaffaqiyatli o'chirildi")
        }
    }

    if (evt.target.alt === "Edit") {
        elEditModal.classList.remove("hidden")
        elOverlay.classList.remove("hidden")
        elBody.classList.add("overfloww")
        editCar(evt.target.id);
    }
    
    if (evt.target.alt === "Info") {
        elOverlay.classList.remove("hidden")
        elInfoModal.classList.remove("hidden")
        elBody.classList.add("overfloww")
        infoShow(evt.target.id)
        
    }
})

window.addEventListener("click", (evt) => {
    if (evt.target.innerText === "Add Car") {
        elBody.classList.add("overfloww")
        elAddModal.classList.remove("hidden")
        elOverlay.classList.remove("hidden")
    }

    if (evt.target.id === "infoClose") {
        elInfoModal.classList.add("hidden")
        elOverlay.classList.add("hidden")
        elBody.classList.remove("overfloww")
    }

    if (evt.target.id === "editClose") {
        elEditModal.classList.add("hidden")
        elOverlay.classList.add("hidden")
    }

    if (evt.target.id === "close") {
        elAddModal.classList.add("hidden")
        elOverlay.classList.add("hidden")
    }

    if (evt.target.id === "overlay") {
        elBody.classList.remove("overfloww")

        elInfoModal.classList.add("hidden")
        elOverlay.classList.add("hidden")

        elEditModal.classList.add("hidden")
        elOverlay.classList.add("hidden")

        elAddModal.classList.add("hidden")
        elOverlay.classList.add("hidden")
    }
})

document.addEventListener('keydown', (evt) => {
    if (evt.which == 27) {
        elBody.classList.remove("overfloww")

        elInfoModal.classList.add("hidden")
        elOverlay.classList.add("hidden")

        elEditModal.classList.add("hidden")
        elOverlay.classList.add("hidden")

        elAddModal.classList.add("hidden")
        elOverlay.classList.add("hidden")
    }
})

elAddSubmit.addEventListener("click", (evt) => {
    const name = elAddName.value
    const trim = elAddTrim.value
    const year = elAddYear.value
    const generation = elAddGeneration.value
    const category = elAddCategory.value
    const country = elAddCountry.value
    const color = elAddColorCode.value
    const colorName = elAddColorName.value
    const doorCount = elAddDoorCount.value
    const seatCount = elAddSeatCount.value
    const maxSpeed = elAddMaxSpeed.value
    const acceleration = elAddAcceleration.value
    const engine = elAddEngine.value
    const horsepower = elAddHorsepower.value
    const fuelType = elAddFuelType.value
    const city = elAddFuelConsumptionCity.value
    const highway = elAddFuelConsumptionHighway.value
    const combined = elAddFuelConsumptionCombined.value
    const description = elAddDescription.value
    const fuelConsumption = {
        city,
        highway,
        combined,
    };

    let i = 0;
    
    carsLists.forEach(el => {
        if (el.id > i) {
            i += el.id
        }
    });

    let vaqtinchaId = i + 1;    

    const id = vaqtinchaId

    const result = {
        name, trim,year, generation, category, country, color,
        colorName, doorCount, seatCount, maxSpeed, acceleration,
        engine, horsepower, fuelType, description, fuelConsumption, 
        id,
    };


    addCar(result)


    elAddModal.classList.add("hidden")
    elOverlay.classList.add("hidden")
    elBody.classList.remove("overfloww")
    emptyInput();
    showTrue("Model muvaffaqiyatli qo'shildi")
})

// Dark Mode
if (localStorage.getItem('theme') === 'dark') {
    elBody.classList.add('dark');
} else {
    elBody.classList.remove('dark')
}

darkMode.addEventListener("click", (evt) => {
    if (elBody.classList.contains("dark")) {
        elBody.classList.remove("dark");
        localStorage.setItem('theme', 'light');
    } else {
        elBody.classList.add("dark");
        localStorage.setItem('theme', 'dark');
    }
});