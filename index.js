// This is a function that will add a burger image to the restaurant menu when the function is called.
function addBurgerImageToRestaurantMenu(burger){
    console.log(burger)
}

fetch("http://localhost:3000/burgers")
.then(response => response.json())
.then(burgers => {
    burgers.forEach(addBurgerImageToRestaurantMenu)
})

// At some point, we'll search for a <form> from the DOM (<form> doesn't exist yet, so we'll need to add it to the index.html file)