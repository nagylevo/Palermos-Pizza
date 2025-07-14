let imagePlace = document.getElementById("introducers");
let images = ["/changing_introducers/pizza.jpg", "/changing_introducers/lasagne.png", "/changing_introducers/spaghetti.jpg", "/changing_introducers/tiramisu.jpg", "/changing_introducers/soup.jpg", "/changing_introducers/dessert.jpg", "/changing_introducers/ice_cream.jpg", "/changing_introducers/cocktail_red.png", "/changing_introducers/cocktail_blue.jpg", "/changing_introducers/salad.jpg", "/changing_introducers/cake.png"];
imagePlace.setAttribute("draggable", "false");
let tempoArray = [];
let random = 0;

setInterval(function () {
    do {
        random = Math.floor(Math.random() * images.length);
    }
    while (tempoArray[tempoArray.length - 1] == random)

    tempoArray.push(random);
    imagePlace.src = images[random];

}, 2200);
