const restaurantMenuElement = document.getElementById('restaurant-menu')

// This is a function that will add a burger image to the restaurant menu when the function is called.
function addBurgerImageToRestaurantMenu(burger){
    const imgElement = document.createElement('img')
    imgElement.src = burger.image
    restaurantMenuElement.appendChild(imgElement)
}

function displayBurgerDetails(burger){
    console.log(burger)
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
    }
})

// At some point, we'll search for a <form> from the DOM (<form> doesn't exist yet, so we'll need to add it to the index.html file)