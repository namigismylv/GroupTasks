const list = document.getElementById("list")
let cars;
let wishlistItems;
let basketItems;
if (localStorage.getItem("basketItems")) {
    basketItems = JSON.parse(localStorage.getItem("basketItems"))
}
else {
    basketItems = []
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
}
if (localStorage.getItem("wishlistItems")) {
    wishlistItems = JSON.parse(localStorage.getItem("wishlistItems"))
}
else {
    wishlistItems = []
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
}
if (localStorage.getItem("cars")) {
    cars = JSON.parse(localStorage.getItem("cars"))
}
else {
    cars = []
    localStorage.setItem("cars", JSON.stringify(cars))
}

const addToWishlist = (id) => {
    const target = cars.find((car) => car.id == id);
    const wishlistTarget = wishlistItems.find((item) => item.id == id);
    if (!wishlistTarget) {
        wishlistItems.push(target)
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
        checkWishlistItem(id);
        renderUI(wishlistItems)
    }
    else {
        let indexOfTarget = wishlistItems.indexOf(wishlistTarget)
        wishlistItems.splice(indexOfTarget, 1)
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
        renderUI(wishlistItems)
    }
}
const checkWislistItem = (id) => {
    target = wishlistItems.find((item) => item.id == id)
    if (target) {
        return true
    }
    else {
        false
    }
}
const renderUI = (items) => {
    if(items.length<1){
        list.innerHTML="<h1>Wishlistdə item yoxdur...</h1>"
    }
    else{
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
                        <i class="fa-solid fa-heart ${checkWislistItem(id) ? "wishlist-item" : ""} "></i>
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
                        <button onclick="addToBasket(${id})" class="btn btn-primary"><i class="fa-solid fa-basket-shopping"></i></button>
                    </div>
                </div>
            </div>
        
        </div>
                `;
        }

    }
};

const addToBasket = (id) => {
    const basketTarget = basketItems.find((x) => x.item.id == id)
    if (!basketTarget){
    const target = cars.find((car) => car.id == id)
    let newBasketItem = {
        item: target,
        count: 1,
        price: target.price,
        totalPrice: target.price
    }
    basketItems.push(newBasketItem)
    localStorage.setItem("basketItems",JSON.stringify(basketItems))
    }
    else {
        basketTarget.count++
        basketTarget.totalPrice = basketTarget.price * basketTarget.count
        localStorage.setItem("basketItems", JSON.stringify(basketItems))
    }
}

renderUI(wishlistItems)
