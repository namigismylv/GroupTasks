
const form = document.getElementById("form");
const nameInp = document.getElementById("name");
const varietyInp = document.getElementById("variety");
const imageInp = document.getElementById("image");
const fuelInp = document.getElementById("fuel");
const gearBoxSel = document.getElementById("gearbox");
const capacitySel = document.getElementById("capacity");
const priceInp = document.getElementById("price");
let cars;
let id;
if (localStorage.getItem("cars")) {
    cars = JSON.parse(localStorage.getItem("cars"));
}
else {
    cars = [];
    localStorage.setItem("cars", JSON.stringify(cars));
}
if (localStorage.getItem("id")) {
    id = JSON.parse(localStorage.getItem("id"))
}
else {
    id = 0;
    localStorage.setItem("id", JSON.stringify(id))
}
class Cars {
    constructor(name, variety, image, fuel, gearBox, capacity, price) {
        this.id = id
        this.name = name
        this.variety = variety
        this.image = image
        this.fuel = fuel
        this.gearBox = gearBox
        this.capacity = capacity
        this.price = price
        id++
        localStorage.setItem("id",id)
    }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const {
        nameVal,
        varietyVal,
        imageVal,
        fuelVal,
        gearbBoxVal,
        capacityVal,
        priceVal,
    } = getDataFromForm()
    let newCar=new Cars(
        nameVal,
        varietyVal,
        imageVal,
        fuelVal,
        gearbBoxVal,
        capacityVal,
        priceVal,
    )
    cars.push(newCar)
    localStorage.setItem("cars",JSON.stringify(cars))
    localStorage.setItem("id", JSON.stringify(id))
    resetForm();
})
function getDataFromForm() {
    let nameVal = nameInp.value
    let varietyVal = varietyInp.value
    let imageVal = imageInp.value
    let fuelVal = fuelInp.value
    let gearbBoxVal = gearBoxSel.value
    let capacityVal = capacitySel.value
    let priceVal = priceInp.value
    return {
        nameVal,
        varietyVal,
        imageVal,
        fuelVal,
        gearbBoxVal,
        capacityVal,
        priceVal,
    };
}
function resetForm() {
    nameInp.value = ""
    varietyInp.value = ""
    imageInp.value = ""
    fuelInp.value = ""
    gearBoxSel.value = ""
    capacitySel.value = ""
    priceInp.value = ""
}




