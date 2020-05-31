/* Element vi använder */
const elementRutaTal1 = document.querySelector("#tal1");
const elementRutaTal2 = document.querySelector("#tal2");

const elementKnappPlus = document.querySelector("#plus");
const elementKnappMinus = document.querySelector("#minus");
const elementKnappGånger = document.querySelector("#gånger");
const elementKnappDividera = document.querySelector("#dividera");
const elementKnappUpphöjt = document.querySelector("#upphöjt");
const elementKnappPi = document.querySelector("#pi");

const elementRutaResultat = document.querySelector("#resultat");

/* Lyssna på om man klickar på + knappen */
elementKnappPlus.addEventListener("click", summera);

function summera() {
    /* Läs av tal1 & 2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 + tal2 */
    var summa = tal1 + tal2;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}
/* Lyssna på om man klickar på - knappen */
elementKnappMinus.addEventListener("click", subtraktion);

function subtraktion() {
    /* Läs av tal1 & 2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 - tal2 */
    var summa = tal1 - tal2;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}

/* Lyssna på om man klickar på * knappen */
elementKnappGånger.addEventListener("click", multiplikation);

function multiplikation() {
    /* Läs av tal1 & 2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 * tal2 */
    var summa = tal1 * tal2;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}

/* Lyssna på om man klickar på / knappen */
elementKnappDividera.addEventListener("click", division);

function division() {
    /* Läs av tal1 & 2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 / tal2 */
    var summa = tal1 / tal2;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}
elementKnappUpphöjt.addEventListener("click", upphöjt);

function upphöjt() {
    /* Läs av tal1 & 2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 / tal2 */
    var summa = tal1 ** tal2;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}
elementKnappPi.addEventListener("click", pi);

function pi() {
    /* Läs av tal1 & 2 */
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    /* Räkna ut tal1 / tal2 */
    var summa = tal1 * tal2 * 3.14;

    /* Skriver ut svaret i resultat rutan */
    elementRutaResultat.value = summa;
}