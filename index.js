// Wishlist area
let wishlistItems = [];

function addToWishlist() {
    let carName = document.querySelector('.card__title__description h4').textContent;
    let carType = document.querySelector('.card__title__description p').textContent;
    let carImage = document.querySelector('.card__image img').src;
    let carFuel = document.querySelector('.fuel p').textContent;
    let carGearbox = document.querySelector('.gearbox p').textContent;
    let carCapacity = document.querySelector('.capacity p').textContent;
    let carPrice = document.querySelector('.price h3').textContent;
    let car = {
        name: carName,
        type: carType,
        image: carImage,
        fuel: carFuel,
        gearbox: carGearbox,
        capacity: carCapacity,
        price: carPrice
    };
    if (!wishlistItems.some(item => item.name === car.name)) {
        wishlistItems.push(car);
    }
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
}

window.onload = function() {
    let storedWishlistItems = localStorage.getItem('wishlistItems');
    if (storedWishlistItems) {
        wishlistItems = JSON.parse(storedWishlistItems);
    }
}
// -------------------------------------------------------------------------------
// Form Area
const form = document.getElementById("form");
const nameInp = document.getElementById("name");
const varietyInp = document.getElementById("variety");
const imageInp = document.getElementById("image");
const fuelInp = document.getElementById("fuel");
const gearBoxSel = document.getElementById("gearbox");
const capacitySel = document.getElementById("capacity");
const priceInp = document.getElementById("price");
const cardCol = document.getElementById("card-col");

const items = [];
let id = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newItem = {
        id: id,
        name: nameInp.value,
        variety: varietyInp.value,
        image: imageInp.value,
        fuel: fuelInp.value,
        gearbox: gearBoxSel.value,
        capacity: capacitySel.value,
        price: priceInp.value
    };
    id++;
    items.push(newItem);
    renderUI(items);
});

const renderUI = (cars) => {
    cardCol.innerHTML = "";
    cars.forEach(car => {
        cardCol.innerHTML += `
            <div class="card">
                <div class="card__title">
                    <div class="card__title__description">
                        <h4>${car.name}</h4>
                        <p>${car.variety}</p>
                    </div>
                    <div class="card__title__wishlist">
                        <button onclick="addToWishlist()">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="card__image">
                    <img src="${car.image}" alt="" />
                </div>
                <div class="card__info">
                    <div class="fuel">
                        <i class="fa-solid fa-gas-pump"></i>
                        <p>${car.fuel}</p>
                    </div>
                    <div class="gearbox">
                        <i class="fa-solid fa-gear"></i>
                        <p>${car.gearbox}</p>
                    </div>
                    <div class="capacity">
                        <i class="fa-solid fa-user-group"></i>
                        <p>${car.capacity}</p>
                    </div>
                </div>
                <div class="card__bottom">
                    <div class="price">
                        <h3>${car.price}</h3>
                        <p>day</p>
                    </div>
                    <div class="rent">
                        <button>Rent Now</button>
                    </div>
                </div>
            </div>
        `;
    });
};



