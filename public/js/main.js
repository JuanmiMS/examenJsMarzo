(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

var shoe = {
    "model": "Sacai x Nike LDV Waffle",
    "colour": "Varsity Blue/Del Sol/Varsity Red",
    "code": "BV0073-400",
    "avaliable": "07/03/19",
    "price": "180$"
};

var raffles = {

    "Antonia Milano": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg",
        "country": "Italy",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "4 to 12 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.antonia.it/164-shoes"
    },

    "END": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/End.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "5 to 12 UK",
        "Opens": "live",
        "Closes": "07/03 @ 12AM GMT",
        "url": "https://launches.endclothing.com/"
    },

    "Foot Patrol": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/FootPatrol.png",
        "country": "France",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "36.5 to 47.5 EU",
        "Opens": "live",
        "Closes": "04/02 @ 10AM CET",
        "url": "https://www.footpatrol.com/customer-service/raffle-fr/"
    },

    "Holypop": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/HolyPop.png",
        "country": "Italy",
        "purchase": "Online FCFS",
        "collection": "Postage Available",
        "Sizes": "TBC",
        "Opens": "announced",
        "Closes": "07/02 @ 12AM CET",
        "url": "https://www.holypopstore.com/en/footwear"
    },

    "Offspring": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/OffSpring.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "3.5 to 7 UK",
        "Opens": "live",
        "Closes": "closed",
        "url": "https://www.offspring.co.uk/release-dates"
    },

    "SNS": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SNS.jpg",
        "country": "Swe, UK, Ger, Fr",
        "purchase": "Online Raffle",
        "collection": "Post and Collect",
        "Sizes": "4 to 13 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.sneakersnstuff.com/en/937/sns-raffles"
    },

    "Solebox": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg'git",
        "country": "Germany",
        "purchase": "In-Store/Online",
        "collection": "Post and Collect",
        "Sizes": "41 to 46 EU",
        "Opens": "announced",
        "Closes": "When sold out",
        "url": "https://www.solebox.com/en/Footwear/"
    },

};

exports.sole = {
    "shoe": shoe,
    "raffles": raffles
};
},{}],2:[function(require,module,exports){
var data = require('../data/raffles.js');


console.log('data2', data)
},{"../data/raffles.js":1}]},{},[2]);
