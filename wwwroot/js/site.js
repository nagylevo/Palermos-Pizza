let imagePlace = document.getElementById("introducers");
let images = ["/changing_introducers/pizza.jpg", "/changing_introducers/lasagne.png", "/changing_introducers/spaghetti.jpg", "/changing_introducers/tiramisu.jpg"];
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
