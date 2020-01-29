/* globala variabler och konstanter */
var frågor = [
    "richter presenterar sin skala som mäter styrkan i jordbävningar", 
    "Orädd flr människor och oförmögen att flyga dör den sista dronten på mauritus",
    "Marianne Fredriksson romandebuterar med Evas bok",
    "Språkråder noterar nyordet yuppienalle.",
    "pullman uppfinner sovvagnen",
    "ett av världens första havsbaserade vindkraft tas i bruk i blekinge",
    "wonderful thing utbrister arkeologen howard carter när han tittar in i Tutankhamuns grav.",
    "Den s k pappamånaden införs i föräldrarförsäkringen",
    "Goodyear lanserar vulkaniserat gummi",
    "Shakespeare gifter sig med Anne Hathaway"
];
var årtal = [
    1680, 1980,1990,1864, 1990, 1922, 1994, 1839, 1582, 1935
];
var slumptal = 0,
    poäng = 0,
    varv = 10;

/* Element som vi använder */
const elementKontainer = document.querySelector(".kontainer");
const elementFrågaRuta = document.querySelector("textarea");
const elementÅrtalruta = document.querySelector("#årtal");
const elementKnappSkicka = document.querySelector("#skicka");
const elementKnappNästa = document.querySelector("#nästa");
const elementPoängRuta = document.querySelector("#poäng");
const elementTummeUpp = document.querySelector("#upp");
const elementTummeNed = document.querySelector("#ned");


/* Skapa en funktion som slumpar fram en fråga */
function nyFråga() {
    /* slumpar fram ett tal från 1-10 */
    slumptal = Math.floor(Math.random() * 10);
    console.log(slumptal);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);

    /* skiver frågan i textrutan */
    elementFrågaRuta.value = frågor[slumptal];
    /* ta bort gamla årtalet */
    elementÅrtalruta.value = "";

    /* gömmer tummarna */
    elementTummeUpp.style.display = "none";
    elementTummeNed.style.display = "none";
}

/* körs i starten */
nyFråga();

/* slumpar fram en ny fråga när man klickar på knappen */
elementKnappNästa.addEventListener("click", nyFråga);

/* Läser av gissningen och kollar om svaret är korrekt */
elementKnappSkicka.addEventListener("click", kollaSvaret);

function  kollaSvaret() {
    /* Läser av gissningen */
    var gissning = elementÅrtalruta.value;
    /* skriver ut gissningen i consolen */
    console.log(gissning);
    
    /* hämtar det rätta svaret */
    var årtalet = årtal[slumptal];
    console.log(årtalet);

    /* kollar om gissningen är korrekt */
    if (gissning == årtalet) {
        console.log("Rätt Svar! Bra jobbat!");
        elementTummeUpp.style.display = "block";
        elementTummeNed.style.display = "none";

        /* lägg till en poäng */
        poäng++;
    } else {
        console.log("Fel svar! Försök igen!");
        elementTummeUpp.style.display = "block";
        elementTummeNed.style.display = "none";
    }

    /* skriver ut hur många poäng man har */
    elementPoängRuta.value = poäng;

    /* räkna ner varv */
    varv--;

    /* spelet är slut */
    if (varv == 0) {
        if (poäng == 10) {
            elementKontainer.innerHTML = "Du har vunnit!";
        } else {
            elementKontainer.innerHTML = "Du har förlorat!";
        }
    }
}
