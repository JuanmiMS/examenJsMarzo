var data = require('../data/raffles.js');

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
            <p id="titleR">${raffle}</p>
            <p>${country}</p>
            <p>${purchase}</p>
            <p>${collection}</p>
            <p>${Sizes}</p>        
            <p>Opens - ${Opens}</p>        
            <p>Closes - ${Closes}</p>
            ${buttonColor(Opens, url, Closes)}
            <br/>
            <br/>
            ${alreadyEntered(raffle)}
            </a>
        `

        let node = document.createElement("div");
        node.className = "box"
        node.innerHTML = box;
        document.getElementById("raffles").appendChild(node);
    }
}

function alreadyEntered(raffle) {
    let entered = localStorage.getItem(raffle)
    return !entered ? `<p onClick="updateMark(this.id, ${entered})" value=false id="${raffle}">Mark as entered </p>` : `<p onClick="updateMark(this.id, ${entered})" id="${raffle}">Entered </p>`

}

function buttonColor(status, url, closes) {

    if (closes === "closed") { return `<a class="button redButton" href="${url}" target="_blank">CLOSED</a>` }

    switch (status) {
        case "live":
            colorBtn = "greenButton"
            text = "ENTER RAFFLE"
            break;
        case "announced":
            colorBtn = "greyButton"
            text = "ANNOUNCED "
            break;
        default:
            colorBtn = "redButton"
            text = "CLOSED"
    }
    return `<a class="button ${colorBtn}" href="${url}" target="_blank">${text}</a>`

}


