const eCanvas = document.querySelector("canvas");
var ctx = eCanvas.getContext("2d");
eCanvas.width = 400;
eCanvas.height = 300;


const eBokstav = document.querySelector("#bokstav");
const eKnapp = document.querySelector("button");
const eResultat = document.querySelector("#resultat");

var stader = [
    "Abu Dhabi",
    "Abuja",
    "Accra",
    "Addis Abeba",
    "Alger",
    "Amman",
    "Amsterdam",
    "Andorra la Vella",
    "Ankara",
    "Antananarivo",
    "Apia",
    "Asjchabad",
    "Asmara",
    "Astana",
    "Asuncion",
    "Aten",
    "Bagdad",
    "Baku",
    "Bamako",
    "Bandar Seri Begawan",
    "Bangkok",
    "Bangui",
    "Banjul",
    "Basseterre",
    "Beirut",
    "Belgrad",
    "Belmopan",
    "Berlin",
    "Bern",
    "Bisjkek",
    "Bissau",
    "Bogota",
    "Brasilia",
    "Bratislava",
    "Brazzaville",
    "Bridgetown",
    "Bryssel",
    "Budapest",
    "Buenos Aires",
    "Bukarest",
    "Canberra",
    "Caracas",
    "Castries",
    "Chisinau",
    "Colombo",
    "Conakry",
    "Dakar",
    "Damaskus",
    "Dhaka",
    "Dili",
    "Djibouti",
    "Dodoma",
    "Doha",
    "Dublin",
    "Dusjanbe",
    "Funafuti",
    "Freetown",
    "Gaborone",
    "Georgetown",
    "Gitega",
    "Guatemala City",
    "Hanoi",
    "Harare",
    "Havanna",
    "Helsingfors",
    "Honiara",
    "Islamabad",
    "Jakarta",
    "Jerevan",
    "Jerusalem",
    "Juba",
    "Kabul",
    "Kairo",
    "Kampala",
    "Katmandu",
    "Khartoum",
    "Kiev",
    "Kigali",
    "Kingston",
    "Kingstown",
    "Kinshasa",
    "Kuala Lumpur",
    "Kuwait",
    "Köpenhamn",
    "Libreville",
    "Lilongwe",
    "Lima",
    "Lissabon",
    "Ljubljana",
    "Lome",
    "London",
    "Luanda",
    "Lusaka",
    "Luxemburg",
    "Madrid",
    "Majuro",
    "Malabo",
    "Male",
    "Managua",
    "Manama",
    "Manila",
    "Maputo",
    "Maseru",
    "Mbabane",
    "Mexico City",
    "Minsk",
    "Mogadishu",
    "Monaco",
    "Monrovia",
    "Montevideo",
    "Moroni",
    "Moskva",
    "Muskat",
    "N'Djamena",
    "Nairobi",
    "Nassau",
    "Naypyidaw",
    "New Delhi",
    "Ngerulmud",
    "Niamey",
    "Nicosia",
    "Nouakchott",
    "Nukualofa",
    "Nuuk",
    "Oslo",
    "Ottawa",
    "Ouagadougou",
    "Palikir",
    "Panama City",
    "Paramaribo",
    "Paris",
    "Peking",
    "Phnom Penh",
    "Podgorica",
    "Port Louis",
    "Port Moresby",
    "Port of Spain",
    "Port-au-Prince",
    "Porto-Novo",
    "Port Vila",
    "Prag",
    "Praia",
    "Pretoria",
    "Pristina",
    "Pyongyang",
    "Quito",
    "Rabat",
    "Reykjavik",
    "Riga",
    "Riyadh",
    "Rom",
    "Roseau",
    "Saint George's",
    "Saint Johns",
    "San Jose",
    "San Marino",
    "San Salvador",
    "Sanaa",
    "Santiago de Chile",
    "Santo Domingo",
    "São Tome",
    "Sarajevo",
    "Seoul",
    "Singapore",
    "Skopje",
    "Sofia",
    "Stockholm",
    "Sucre",
    "Suva",
    "Taipei",
    "Tallinn",
    "Tarawa",
    "Tasjkent",
    "Tbilisi",
    "Tegucigalpa",
    "Teheran",
    "Thimphu",
    "Tirana",
    "Tokyo",
    "Torshamn",
    "Tripoli",
    "Tunis",
    "Ulan Bator",
    "Vaduz",
    "Valletta",
    "Vatikanstaden",
    "Victoria",
    "Vientiane",
    "Vilnius",
    "Warszawa",
    "Washington DC",
    "Wellington",
    "Wien",
    "Windhoek",
    "Yamoussoukro",
    "Yaounde",
    "Zagreb"
];
var index = Math.floor(Math.random() * stader.length);
console.log(index);

var slumpadStad = stader[index];
console.log(slumpadStad);

var fel = 0;

var resultat = "";

for (var i = 0; i < slumpadStad.length; i++) {
    resultat += "_ ";
}

eKnapp.addEventListener("click", function() {
    var gissning = eBokstav.value;
    console.log(gissning);

    var rättGissat = false;

    for (var i = 0; i < slumpadStad.length; i++) {
        console.log(i, slumpadStad[i]);

        var slumpadBokstav = slumpadStad[i].toLowerCase();

        if (gissning == slumpadBokstav) {
            console.log("Bokstav hittad", gissning);
            resultat += gissning + " ";
            rättGissat = true
        } else {
            resultat += "_ ";

        }
    }

    console.log("Rättgissat -", rättGissat);

    if (rättGissat == false) {
        fel++;
        console.log("Antal felgissningar =", fel);
    }

    eResultat.value = resultat;

    if (fel == 1) {
        ctx.arc(200,600, 400, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (fel == 2) {
        ctx.moveTo(200, 420);
        ctx.lineTo(200, 30);
        ctx.stroke();
    }

    if (fel == 3) {
        ctx.moveTo(200, 30);
        ctx.lineTo(400, 70);
        ctx.stroke();
    }
    if (fel == 4) {
        ctx.moveTo(400, 30);
        ctx.lineTo(400, 70);
        ctx.stroke();
    }
    if (fel == 5) {
        ctx.moveTo(430, 130);
        ctx.arc(400,100, 30, 0, 2 * Math.PI);
        ctx.stroke();
    }
    if (fel == 6) {
        ctx.moveTo(400, 130);
        ctx.lineTo(400, 250);
        ctx.stroke();
    }
    if (fel == 7) {
        ctx.moveTo(400, 150);
        ctx.lineTo(400, 200);
        ctx.stroke();
    }
    if (fel == 8) {
        ctx.moveTo(400, 150);
        ctx.lineTo(350, 200);
        ctx.stroke();
    }
    if (fel == 9) {
        ctx.moveTo(400, 250);
        ctx.lineTo(350, 350);
        ctx.stroke();
        ctx.font = " bold 60px sans-serif!";
        ctx.fillText("Game Over!", 100, 100);
    }
});