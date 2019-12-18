/* Kod som körs vid start */
/* Välja ut element vi skall jobba med  */
const elementBild =  document.querySelector("img");
var bildNr = 1;

/* Kod som körs efter start, när man klickar på en miniatyr */
function föreBild() {
    bildNr -= 1;
    if (bildNr == 0) {
        bildNr = 8
    }
    elementBild.src = "./foton/photo-" + bildNr + ".jpg";
}
function nästaBild(params) {
    bildNr += 1;
    if (bildNr == 9) {
        bildNr = 1
    }
    elementBild.src = "./foton/photo-"+ bildNr + ".jpg";
}
function play() {
    setInterval(1000, nästaBild);
}