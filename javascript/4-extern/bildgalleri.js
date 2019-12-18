/* Kod som körs vid start */
/* Välja ut element vi skall jobba med  */
const elementBildruta = document.querySelector("#bildruta");

/* Kod som körs efter start, när man klickar på en miniatyr */
function visaBild(nr) {
    elementBildruta.innerHTML = "<img src=\"./foton/photo-" + nr + ".jpg\" alt=\"foto 1\">";
}