var data = require('../data/raffles.js');
// console.log('data', data)


window.onload = function () {
    printShoe();
    showRaffles();
};

function printShoe() {
    let { model, colour, code, avaliable, price } = data.sole.shoe;
    document.getElementById("titleMP").innerHTML = "<h1>" + model + "</h1>";
    document.getElementById("colorMP").innerHTML = "<h2>" + colour + "</h2>";
    document.getElementById("infoMP").innerHTML = "<h3>" + avaliable + " | " + price + " | " + code + "</h3>";
}

function showRaffles() {
    let raffles = data.sole.raffles;
    console.log('raffles', raffles)


    for (var raffle in raffles) {
        let { Closes, Opens, Sizes, collection, country, logo, purchase, url } = raffles[raffle];

        //Creamos cada caja
        let box = `<img src=${logo} />
            <p>${raffle}</p>
            <p>${country}</p>
            <p>${Sizes}</p>        
        `

        var node = document.createElement("div");
        node.className = "box"
        node.innerHTML = box;
        document.getElementById("raffles").appendChild(node);
    }


}
