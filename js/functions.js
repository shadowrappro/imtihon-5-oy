import { carsLists, changeCar } from "./car.js";
import { elAddAcceleration, elAddCategory, elAddColorCode, elAddColorName, elAddCountry, elAddDescription, elAddDoorCount, elAddEngine, elAddFuelConsumptionCity, elAddFuelConsumptionCombined, elAddFuelConsumptionHighway, elAddFuelType, elAddGeneration, elAddHorsepower, elAddMaxSpeed, elAddName, elAddSeatCount, elAddSubmit, elAddTrim, elAddYear, elEditAcceleration, elEditCategory, elEditColorCode, elEditColorName, elEditCountry, elEditDescription, elEditDoorCount, elEditEngine, elEditFuelConsumptionCity, elEditFuelConsumptionCombined, elEditFuelConsumptionHighway, elEditFuelType, elEditGeneration, elEditHorsepower, elEditMaxSpeed, elEditModal, elEditName, elEditSeatCount, elEditSubmit, elEditTrim, elEditYear, elOverlay } from "./html-elements.js";

// Add Car
export function addCar(obj) {
    carsLists.push(obj)
    changeCar(carsLists);
}

// Delete Car
export function deleteCar(id) {
    const result = carsLists.filter((el) => {
        return el.id != id
    })
    changeCar(result)
}

// Error / True message
export function showTrue(message) {
    let elTrue = document.getElementById("myToast");
    elTrue.innerText = message;
    elTrue.className = "true show";
    setTimeout(() => {
      elTrue.className = "true";
    }, 2000);
}

// inputni tozalash
export function emptyInput() {
    elAddName.value = ""
    elAddTrim.value = ""
    elAddYear.value = ""
    elAddGeneration.value = ""
    elAddCategory.value = ""
    elAddCountry.value = ""
    elAddColorCode.value = ""
    elAddColorName.value = ""
    elAddDoorCount.value = ""
    elAddSeatCount.value = ""
    elAddMaxSpeed.value = ""
    elAddAcceleration.value = ""
    elAddEngine.value = ""
    elAddHorsepower.value = ""
    elAddFuelType.value = ""
    elAddFuelConsumptionCity.value = ""
    elAddFuelConsumptionHighway.value = ""
    elAddFuelConsumptionCombined.value = ""
    elAddDescription.value = ""
}

export function infoShow(id) {
    carsLists.forEach(el => {
        console.log(id);
        if (el.id == id) {
            console.log(id);
            
            const elName = document.getElementById("infoName")
            const elTrim = document.getElementById("infoTrim")
            const elAvlod = document.getElementById("infoAvlod")
            const elYear = document.getElementById("infoYear")
            const elKategoriya = document.getElementById("infoKategoriya")
            const elMamlakat = document.getElementById("infoMamlakat")
            const elRangKodi = document.getElementById("infoRangKodi")
            const elRangNomi = document.getElementById("infoRangNomi")
            const elEshikSoni = document.getElementById("infoEshikSoni")
            const elOrindiqSoni = document.getElementById("infoOrindiqSoni")
            const elMaksTezlik = document.getElementById("infoMaksTezlik")
            const elDvigatel = document.getElementById("infoDvigatel")
            const elOtKuchi = document.getElementById("infoOtKuch")
            const elYoqilgi = document.getElementById("infoYoqilgi")
            const elShYS = document.getElementById("infoShYS")
            const elTYS = document.getElementById("infoTYS")
            const elAYS = document.getElementById("infoAYS")
            const elTavsif = document.getElementById("infoTavsif")
            const elTezlanish = document.getElementById("InfoTezlanish")

            elName.innerText = el.name;
            elTrim.innerText = el.trim;
            elAvlod.innerText = el.generation;
            elYear.innerText = el.year;
            elKategoriya.innerText = el.category;
            elMamlakat.innerText = el.country;
            elRangKodi.style.backgroundColor = el.color;
            elRangNomi.innerText = el.colorName;
            elEshikSoni.innerText = el.doorCount;
            elOrindiqSoni.innerText = el.seatCount;
            elMaksTezlik.innerText = el.maxSpeed;
            elTezlanish.innerText = el.acceleration;
            elDvigatel.innerText = el.engine;
            elOtKuchi.innerText = el.horsepower;
            elYoqilgi.innerText = el.fuelType;
            elShYS.innerText = el.fuelConsumption.city;
            elTYS.innerText = el.fuelConsumption.highway;
            elAYS.innerText = el.fuelConsumption.combined;
            elTavsif.innerText = el.description;
        }
    });
}

export function editCar(id) {
    let result = carsLists.find((element) => element.id == id);
    elEditName.value = result.name
    elEditTrim.value = result.trim
    elEditYear.value = result.year
    elEditGeneration.value = result.generation
    elEditCategory.value = result.category
    elEditCountry.value = result.country
    elEditColorCode.value = result.color
    elEditColorName.value = result.colorName
    elEditDoorCount.value = result.doorCount
    elEditSeatCount.value = result.seatCount
    elEditMaxSpeed.value = result.maxSpeed
    elEditAcceleration.value = result.acceleration
    elEditEngine.value = result.engine
    elEditHorsepower.value = result.horsepower
    elEditFuelType.value = result.fuelType
    elEditDescription.value = result.description
    elEditFuelConsumptionCity.value = result.fuelConsumption.city
    elEditFuelConsumptionHighway.value = result.fuelConsumption.highway
    elEditFuelConsumptionCombined.value = result.fuelConsumption.combined

    function handler() {
        editPushCar(result)
        elEditSubmit.removeEventListener("click", handler)
    }

    elEditSubmit.addEventListener("click", handler)
}

export function editPushCar(obj) {
    obj.name = elEditName.value;
    obj.trim = elEditTrim.value;
    obj.year = elEditYear.value;
    obj.generation = elEditGeneration.value;
    obj.category = elEditCategory.value;
    obj.country = elEditCountry.value;
    obj.color = elEditColorCode.value;
    obj.colorName = elEditColorName.value;
    obj.doorCount = elEditDoorCount.value;
    obj.seatCount = elAddSeatCount.value;
    obj.maxSpeed = elEditMaxSpeed.value;
    obj.acceleration = elEditAcceleration.value;
    obj.engine = elEditEngine.value;
    obj.horsepower = elEditHorsepower.value;
    obj.fuelType = elEditFuelType.value
    obj.description = elEditDescription.value
    obj.fuelConsumption = {
        city: elEditFuelConsumptionCity.value,
        highway: elEditFuelConsumptionHighway.value,
        combined: elEditFuelConsumptionCombined.value
    }

    elEditModal.classList.add("hidden")
    elOverlay.classList.add("hidden")

    elEditName.value = ""
    elEditTrim.value = ""
    elEditYear.value = ""
    elEditGeneration.value = ""
    elEditCategory.value = ""
    elEditCountry.value = ""
    elEditColorCode.value = ""
    elEditColorName.value = ""
    elEditDoorCount.value = ""
    elEditSeatCount.value = ""
    elEditMaxSpeed.value = ""
    elEditAcceleration.value = ""
    elEditEngine.value = ""
    elEditHorsepower.value = ""
    elEditFuelType.value = ""
    elEditDescription.value = ""
    elEditFuelConsumptionCity.value = ""
    elEditFuelConsumptionHighway.value = ""
    elEditFuelConsumptionCombined.value = ""

    changeCar(carsLists)
}