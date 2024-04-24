const list = document.getElementById("list")
let cars;
let wishlistItems;
if (localStorage.getItem("cars")) {
    cars = JSON.parse(localStorage.getItem("cars"))
}
else {
    cars = []
    localStorage.setItem("cars", JSON.stringify(cars))
}
if (localStorage.getItem("wishlistItems")) {
    wishlistItems = JSON.parse(localStorage.getItem("wishlistItems"))
}
else {
    wishlistItems = []
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
}
if (localStorage.getItem("id")) {
    id = JSON.parse(localStorage.getItem("id"))
}
else {
    id = 0;
    localStorage.setItem("id", JSON.stringify(id))
}
const renderUI = (items) => {
    list.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        const { id, name, variety, image, fuel, gearBox, capacity, price } = items[i]
        list.innerHTML += `
            <div class="col-3">
        <div class="card">
            <div class="card__title">
                <div class="card__title__description">
                    <h4>${name}</h4>
                    <p>${variety}</p>
                </div>
                <div class="card__title__wishlist">
                    <button onclick="addToWishlist(${id})">
                    <i class="fa-solid fa-heart ${checkWislistItem(id) ? "wishlist-item" : ""
            }"></i>
                    </button>
                </div>
            </div>
            <div class="card__image">
                <img src="${image}" alt="" />
            </div>
            <div class="card__info">
                <div class="fuel">
                    <i class="fa-solid fa-gas-pump"></i>
                    <p>${fuel}L</p>
                </div>
                <div class="gearbox">
                    <i class="fa-solid fa-gear"></i>
                    <p>${gearBox}</p>
                </div>
                <div class="capacity">
                    <i class="fa-solid fa-user-group"></i>
                    <p>${capacity}</p>
                </div>
            </div>
            <div class="card__bottom">
                <div class="price">
                    <h3>${price}$/</h3>
                    <p>day</p>
                </div>
                <div class="rent">
                <button class="btn btn-primary"><i class="fa-solid fa-basket-shopping"></i></button>
                    <button onclick="deleteHandler(${id})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div>
    
    </div>
            `;
    }
};
const checkWislistItem = (id) => {
    const target = wishlistItems.find((item) => item.id == id)
    if (target) {
        return true
    }
    else {
        return false
    }
}
const addToWishlist = (id) => {
    const target = cars.find((car) => car.id == id)
    const wishlistTarget = wishlistItems.find((item) => item.id == id)
    if (!wishlistTarget) {
        wishlistItems.push(target)
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
        checkWislistItem(id);
        renderUI(cars)
    }
    else {
        let indexOfTarget = wishlistItems.indexOf(wishlistTarget)
        wishlistItems.splice(indexOfTarget, 1)
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
        renderUI(cars)
    }
}

function deleteHandler(id){
    let confirmDelete=confirm("Are you sure delete it?")
    if(confirmDelete){
        const target=cars.find(car=>car.id==id)
        const indexOfTarget=cars.indexOf(target)
        cars.splice(indexOfTarget,1)
        localStorage.setItem("cars",JSON.stringify(cars))
        localStorage.setItem("id", JSON.stringify(id))
        renderUI(cars)
    }

}
renderUI(cars)
console.log(cars);








