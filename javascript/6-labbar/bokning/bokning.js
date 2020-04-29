/* Start */
/* Element vi använder */
const elementRum = document.querySelectorAll('input[name="rum"]');
const elementAntalNätter = document.querySelector('select');
const elementTillägg = document.querySelectorAll('input[name="tillägg"]');
const elementKampanjkod = document.querySelector("#kampanjkod");
const elementKnapp = document.querySelector('button');
const elementP = document.querySelector('p');

/* Läsa av bokningen */
elementKnapp.addEventListener("click", räknaUt);


/* Räkna ut kostnaden */
function räknaUt() {
    var kostnad = 0,
        rumspris;

    /* Läsa av bokningen */
    /* Vilket typ av rum har valts? */
    if (elementRum[0].checked == true) {
        rumspris = 500;
    }
    if (elementRum[1].checked == true) {
        rumspris = 850;
    }
    if (elementRum[2].checked == true) {
        rumspris = 1050;
    }

    /* Hur många nätter har valts */
    var antalNätter = elementAntalNätter.value;
    kostnad = rumspris * antalNätter;

    /* Vilka tillägg har valts? */
    if (elementTillägg[0].checked == true) {
        kostnad = kostnad + 20;
    }
    if (elementTillägg[1].checked == true) {
        kostnad = kostnad + 200;
    }
    if (elementTillägg[2].checked == true) {
        kostnad = kostnad + 100;
    }
    if (elementTillägg[3].checked == true) {
        kostnad = kostnad + 100;
    }
    console.log(kostnad);


    var kampanjkod = elementKampanjkod.value;
    if (kampanjkod == "påsklov20") {
        kostnad = kostnad * 0.9;
    }
    var kampanjkod = elementKampanjkod.value;
    if (kampanjkod == "sommar20") {
        kostnad = kostnad * 0.85;
    }
    var kampanjkod = elementKampanjkod.value;
    if (kampanjkod == "höstlov20") {
        kostnad = kostnad * 0.95;
    }
    console.log(kostnad);

    /* Visa kostnaden */
    elementP.textContent = "Din val ger en kostnad på " + kostnad;
}