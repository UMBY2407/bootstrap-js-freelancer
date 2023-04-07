//-------------------------------------PROGRAMMA PRINCIPALE-------------------------------------//
let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



//-------------------------------------FUNZIONI------------------------------------------------//

function calculateCommitionPrice(event){
    event.preventDefault();

    console.log("FUNZIONAAAA!!!");
    
    let commitionPrice = 0;
    let hourRequestedStringa = document.getElementById('hours').innerHTML;
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
        console.log(commitionPrice)
    commitionPrice = commitionPrice * hourRequested;
    document.getElementById('price').innerHTML = commitionPrice.toFixed(2);
}