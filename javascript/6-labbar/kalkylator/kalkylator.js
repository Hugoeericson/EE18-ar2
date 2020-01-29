/* Element vi jobbar med */
const elementFönster = document.querySelector("#fönster");
const elementKol4 = document.querySelector(".kol4");

elementKol4.addEventListener("click", tryck);
function tryck(event) {
    
    if (event.target.tagName == "BUTTON") {
        console.log(event.target.textContent);

        switch (event.target.textContent) {
            case "0":
                elementFönster.value = event.target.textContent;
                break;
            case "1":
                elementFönster.value = event.target.textContent;
                break;
            case "2":
                elementFönster.value = event.target.textContent;
                break;
            case "3":
                elementFönster.value = event.target.textContent;
                break;
            case "4":
                elementFönster.value = event.target.textContent;
                break;
            case "5":
                elementFönster.value = event.target.textContent;
                break;
            case "6":
                elementFönster.value = event.target.textContent;
                break;
            case "7":
                elementFönster.value = event.target.textContent;
                break;
            case "8":
                elementFönster.value = event.target.textContent;
                break;
            case "9":
                elementFönster.value = event.target.textContent;
                break;
        
            default:
                break;
        }

       // elementFönster.value = event.target.textContent;
    }
}