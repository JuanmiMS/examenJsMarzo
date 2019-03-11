var data = require('../data/raffles.js');
console.log('data', data)


let { model, colour, code, avaliable, price } = data.sole.shoe;
console.log('data', model, colour, code, avaliable, price)


document.getElementById("titleMP").innerHTML = "<h1>" + model + "</h1>";
document.getElementById("colorMP").innerHTML = "<h2>" + colour + "</h2>";
document.getElementById("infoMP").innerHTML = "<h3>" + avaliable + " | " + price + " | " + code + "</h3>";
document.getElementById("priceMP").innerHTML = "<h1>" + avaliable + " | " + price + "</h3>";