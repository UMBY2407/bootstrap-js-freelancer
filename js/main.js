//-------------------------------------PROGRAMMA PRINCIPALE-------------------------------------//
let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



//-------------------------------------FUNZIONI------------------------------------------------//

function calculateCommitionPrice(event){
    event.preventDefault();    
    let commitionPrice = 0;
    let hourRequestedStringa = document.getElementById('hours').value;
    let hourRequested = parseInt(hourRequestedStringa);
        console.log(hourRequested);
    let selectedCommition = document.getElementById("typeOfCommition").value;
    console.log(selectedCommition);

    switch(selectedCommition){
        case "Back-end":
            commitionPrice += 20.50;
        break;
        case "Front-end":
            commitionPrice += 15.30;
        break; 
        case "Analisys":
            commitionPrice += 33.60;
        break;
    }
        console.log(commitionPrice);
    
    let discountCodeUser = document.getElementById("discountCode").value;

    let isDoscountCodeAvailable = discountCodes.includes(discountCodeUser);

    if(isDoscountCodeAvailable){
        commitionPrice = commitionPrice * 0.25;
        discountCodes = removeElementFromArray(discountCodes, discountCodeUser);

        console.log("Il codice sconto è stato corettamente applicato!");
    } else if (discountCodeUser != "") {
        //Informare il cliente
        alert ("Il codice sconto non è valido! Nessuno Sconto Applicato");
            console.log("Il codice sconto non è valido!");
    } else {
        console.log("Nessuno Sconto Applicato");
    }

        console.log(commitionPrice);
    document.getElementById("price").innerHTML = commitionPrice.toFixed(2);
    commitionPrice = (commitionPrice * hourRequested);
    document.getElementById('price').innerHTML = commitionPrice.toFixed(2);
}

function removeElementFromArray(array, elementToRemove){

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

}