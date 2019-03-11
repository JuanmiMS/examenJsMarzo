function updateMark(raffle) {
    if (localStorage.getItem(raffle)) {
        localStorage.removeItem(raffle);
        document.getElementById(raffle).innerHTML = "Mark as entered"
    }
    else {
        localStorage.setItem(raffle, true);
        document.getElementById(raffle).innerHTML = "Entered"
    }
}   

function updateFilter(country){
    let countryIn = document.getElementById(country);
    if (countryIn.id === "All"){
        let elems = document.querySelectorAll(".selected");

        [].forEach.call(elems, function(el) {
            el.classList.remove("selected");
        });

    var arrAllListTags = document.querySelectorAll('.box');
    for(element in arrAllListTags){
        arrAllListTags[element].classList.add("mostrar")
    }

    document.getElementById("All").classList.add("selected")
    }
    else{
        if(!countryIn.classList.contains("selected")){
            countryIn.className = "selected";
            document.getElementById("All").classList.remove("selected")
    }
    else{
        countryIn.classList.remove("selected");
    }
    }

    var arrAllListTags = document.querySelectorAll('.box');
    for(element in arrAllListTags){
        if(!arrAllListTags[element].innerHTML.includes(country)){
            arrAllListTags[element].classList.add("esconder")
        }
        else{
            arrAllListTags[element].classList.add("mostrar")
        }

    }

}

function updateWin(raffle){

    let id= document.getElementById(raffle);

    if(confirm("¿Has ganado?")){
        localStorage.setItem(raffle, "ganado");
        id.innerHTML = "GANADO";
        id.style.backgroundColor = "#75D69C";

    }
    else{
        localStorage.setItem(raffle, "perdido");
        id.innerHTML = "PERDIDO";
        id.style.backgroundColor = "#FF6F69"
    }

}
