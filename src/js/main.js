var data = require('../data/raffles.js');

window.onload = function () {
    printShoe();
    showFilters();
    showRaffles();
    showWin();
    checkWin();
};

function printShoe() {
    let { model, colour, code, avaliable, price } = data.sole.shoe;
    document.getElementById("titleMP").innerHTML = "<h1>" + model + "</h1>";
    document.getElementById("colorMP").innerHTML = "<h2>" + colour + "</h2>";
    document.getElementById("infoMP").innerHTML = "<h3>" + avaliable + " | " + price + " | " + code + "</h3>";
}

function showFilters(){
    let raffles = data.sole.raffles;
    let alreadyAdded = [];
    for (var raffle in raffles) {
        let country = raffles[raffle].country;
        
        if(!alreadyAdded.includes(country)){
            let filter = `<a href="#" id='${country}' onClick="updateFilter('${country}', this.id)">${country}</a></li>`
            
            let node = document.createElement("li");
            node.innerHTML = filter;
            document.getElementById("filters").appendChild(node);
            alreadyAdded.push(country);    
        }
    }
}

function showRaffles() {
    let raffles = data.sole.raffles;

    for (var raffle in raffles) {
        let { Closes, Opens, Sizes, collection, country, logo, purchase, url } = raffles[raffle];

        //Creamos cada caja
        let box = `<img src=${logo} />
            <p class="titleR">${raffle}</p>
            <p>${country}</p>
            <p>${purchase}</p>
            <p>${collection}</p>
            <p>${Sizes}</p>        
            <p>Opens - ${Opens}</p>        
            <p>Closes - ${Closes}</p>
            ${buttonColor(Opens, url, Closes)}
            <br/>
            ${alreadyEntered(raffle)}
            ${checkWin(raffle)}
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

function checkWin(raffle) {
    let entered = localStorage.getItem(raffle+"Win")
    
    //check if not null
    if(!entered){
        return `<p onClick="updateWin(this.id, ${entered})" class="buttonWin" value=false id="${raffle+'Win'}">¿Has ganado?</p>`
    }
    else{
        if(entered == "ganado"){
            return `<p onClick="updateWin(this.id, ${entered})" class="buttonWin" style="background-color: #75D69C;"  id="${raffle+'Win'}">W</p>`
        }
        else{
            return `<p onClick="updateWin(this.id, ${entered})" class="buttonWin" style="background-color: #FF6F69;"  id="${raffle+'Win'}">L</p>`

        }
        
    }
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

function showWin(raffle){
    let entered = localStorage.getItem(raffle)
    return `<p onClick="updateWin(this.id, ${entered})" class="buttonWin" value=false id="${raffle+'Win'}">¿Has ganado?</p>`
}

