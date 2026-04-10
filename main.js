//Liste som lagrer alle poster
let poster = [
];

//Kjøres når brukeren trykker på knappen
function leggTilPost() {
    //Henter verdiene som brukeren har skrevet inn i inputfeltene
    let tekst = document.getElementById("tekst").value;
    let belop = document.getElementById("belop").value;
    let type = document.getElementById("type").value;

  //Lager et objekt (en post) med informasjon fra brukeren
    let post = {
    tekst: tekst,
    belop: belop,
    type: type,
   };
   //Legger posten inn i lista(model)
   poster.push(post);
   //Oppdaterer visningen slik at nye data vises på skjermen
   updateView();
}
//Denne funksjonen viser alle poster og regner ut summer
function updateView() {
    //Variabel for å bygge opp HTML som skal vises
    let html = "";
// Variabler for å holde styr på totalsummer
    let inntektSum = 0;
    let utgiftSum = 0;
//Går igjennom alle poster i lista
    for (let i = 0; i < poster.length; i++) {
//Henter en post av gangen
        let p = poster[i];
//Legger til tekst som skal vises på skjermen
        html += p.tekst + " - " + p.belop + " - " + p.type + "<br>";
//Sjekker om posten er inntekt eller utgift og legger til riktig sum
    if (p.type === "inntekt") {
        inntektSum += Number(p.belop);
    } else {
        utgiftSum += Number(p.belop);
    }
    }
//Regner ut saldo (inntekt - utgift)
    let saldo = inntektSum - utgiftSum;
//Viser lista med poster på nettsiden
    document.getElementById("liste").innerHTML = html;
//Viser totalsummer
    document.getElementById("inntektSum").innerHTML = "Inntekt: " + inntektSum;
    document.getElementById("utgiftSum").innerHTML = "Utgift: " + utgiftSum;
    document.getElementById("saldo").innerHTML = "Saldo: " + saldo;
}
 
