const tBody = document.getElementById("tBody")
let basketItems;
if (localStorage.getItem("basketItems")) {
    basketItems = JSON.parse(localStorage.getItem("basketItems"))
}
else {
    basketItems = []
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
}

const renderUI = (items) =>{
    tBody.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        tBody.innerHTML += `
            <tr>
                <td class="td">${i+1}</td>
                <td><img width="120px" src="${items[i].item.image}"/></td>
                <td class="td">${items[i].item.name}</td>
                <td class="td">${items[i].item.price}$</td>
                <td class="td">${items[i].totalPrice}$</td>
                <td class="tdBtn">
                    <button onclick="deleteItemFromBasket(${items[i].item.id})" class="btn btn-danger">Delete</button>
                </td>
                <td class="td">${items[i].count}</td>
                <td class="tdBtn">
                    <button onclick="addToBasket(${items[i].item.id})" class="btn btn-primary">Add</button>
                </td>
            </tr>
        `
    }
}

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
    renderUI(basketItems)
    }
    else {
        basketTarget.count++
        basketTarget.totalPrice = basketTarget.price * basketTarget.count
        localStorage.setItem("basketItems", JSON.stringify(basketItems))
        renderUI(basketItems)
    }
}

function deleteItemFromBasket(id) {
    let target = basketItems.find((x) => x.item.id == id)
    if (target.count > 1) {
        target.count--;
    target.totalPrice = target.count * target.price
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    renderUI(basketItems);
  } else {
    const indexOftarget = basketItems.indexOf(target)
    basketItems.splice(indexOftarget,1)
    localStorage.setItem("basketItems",JSON.stringify(basketItems))
    renderUI(basketItems)
  }
}

renderUI(basketItems)

