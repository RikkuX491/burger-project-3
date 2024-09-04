const restaurantMenuElement = document.getElementById('restaurant-menu')

let lastBurgerId = 0

// This is a function that will add a burger image to the restaurant menu when the function is called.
function addBurgerImageToRestaurantMenu(burger){
    const imgElement = document.createElement('img')
    imgElement.src = burger.image
    restaurantMenuElement.appendChild(imgElement)

    imgElement.addEventListener('mouseover', () => {
        displayBurgerDetails(burger)
    })

    imgElement.addEventListener('click', () => {
        imgElement.remove()
    })
}

function displayBurgerDetails(burger){
    const burgerIdElement = document.getElementById("burger-id")
    burgerIdElement.textContent = `Burger # ${burger.id}`

    const burgerImageElement = document.getElementById('burger-image')
    burgerImageElement.src = burger.image

    const burgerNameElement = document.getElementById('burger-name')
    burgerNameElement.textContent = burger.name

    const burgerPriceElement = document.getElementById('burger-price')
    burgerPriceElement.textContent = `$${burger.price}`
}

function handleSubmit(event){
    event.preventDefault()
    
    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newPriceInputElement = document.getElementById('new-price')

    const newBurger = {
        id: lastBurgerId + 1,
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        price: Number(newPriceInputElement.value)
    }

    addBurgerImageToRestaurantMenu(newBurger)

    lastBurgerId++
    
    event.target.reset()
}

fetch("http://localhost:3000/burgers")
.then(response => response.json())
.then(burgers => {
    burgers.forEach(addBurgerImageToRestaurantMenu)

    if(burgers.length === 0){
        alert("Warning: There are no burgers in the database!")
    }
    else{
        displayBurgerDetails(burgers[0])
        lastBurgerId = burgers[burgers.length - 1].id
    }
})

const newBurgerFormElement = document.getElementById('new-burger-form')
newBurgerFormElement.addEventListener('submit', handleSubmit)