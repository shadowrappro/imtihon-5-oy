import { cars } from "./data.js";
import { uiChangerCars } from "./ui-changer.js";

export let carsLists = localStorage.getItem('car') ? JSON.parse(localStorage.getItem('car')) : cars

export function changeCar(value) {
    carsLists = value;
    localStorage.setItem('car', JSON.stringify(carsLists))
    uiChangerCars(carsLists)
}