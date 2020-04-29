/* element vi jobbar med */
const elementAngeantal = document.querySelector("#antal");
const elementFrukt = document.querySelector("#frukt");
const elementSkicka = document.querySelector("#skicka");
const elementRadera = document.querySelector("#radera");
const elementOutput = document.querySelector("#output");
const elementFel = document.querySelector("#fel");

elementSkicka.addEventListener("click", output);

elementRadera.addEventListener("click", radera);

function output() {
    var antal = elementAngeantal.value;
    var frukt = elementFrukt.value;
    
    if (antal == "") {
        elementFel.innerHTML = "Du har inte valt antal!";
    }
    if (frukt == "") {
        elementFel.innerHTML = "Du har inte valt frukt!";
    }
    if (frukt != "äpplen") {
        elementFel.innerHTML = "Välj äpplen istället för  " + frukt;
    }

    if (antal <= 1) {
        antal = "ett";
    }
    if (antal >= 2) {
        antal = "två";
    }


    elementOutput.textContent = "Daktorn säger: " + antal + " " +  frukt + " om dagen håller doktorn borta."; 
}

function radera() {
    elementAngeantal.value = "";
    elementFrukt.value = "";
    
    if (antal == "") {
        elementFel.innerHTML = "";
    }
}