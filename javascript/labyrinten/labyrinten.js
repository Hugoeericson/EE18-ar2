const eNamn = document.querySelector("#namn");
const eVerb = document.querySelector("#verb");
const eKnapp = document.querySelector("button");
const eOutput = document.querySelector("#output");

var rum = "entrén";

eOutput.innerHTML += "Du är i " + rum + ".<br>";

/* Vad händer när vi klickar på gå */
eKnapp.addEventListener("click", function() {
    /* Läs av input rutorna */
    var namn = eNamn.value;
    var verb = eVerb.value;

    if (rum == "entrén") {
        if (verb == "fram") {
            rum = "kafeterian";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "höger") {
            rum = "bibloteket";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        } else if (verb == "vänster") {
            rum = "rum 1";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "kafeterian") {
        if (verb == "tillbaka") {
            rum = "entrén";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "bibloteket") {
        if (verb == "tillbaka") {
            rum = "entrén";
            eOutput.innerHTML += "Du är i " + rum + ".<br>";
        }
    } else if (rum == "rum 1") {
        rum = "rum 2";
        eOutput.innerHTML += "Du är i " + rum + ".<br>";
    } else if (verb == "fram") {
        rum = "rum 4";
        eOutput.innerHTML += "Du har kommit till " + rum + " och är vid en återvändsgränd.<br>";
    } else if (verb == "tillbaka") {
        rum = "rum 2";
        eOutput.innerHTML += "Du är i " + rum + ".<br>";
    } else if (verb == "höger") {
        rum = "rum 3";
        eOutput.innerHTML += "Du är i " + rum + ".<br>";
    } else if (verb == "vänster") {
        rum = "rum 5";
        eOutput.innerHTML += "Du är i " + rum + ".<br>";
    } else if (verb == "fram") {
        rum = "mål";
        eOutput.innerHTML += "Du är i " + rum + ".<br>";
    }
})