const etaPasseggeroStr = prompt(`Quanti anni hai?`);
const etaPasseggero = parseInt(etaPasseggeroStr);
console.log(etaPasseggero);

const kmViaggioStr = prompt(`Quanti km devi percorrere?`);
const kmViaggio = parseInt(kmViaggioStr);
console.log(kmViaggio);

const prezzoBigliettoIntero = kmViaggio * 0.21;
console.log(prezzoBigliettoIntero);

const scontoMinorenni = prezzoBigliettoIntero * 20 / 100

const scontoOver = prezzoBigliettoIntero * 40 / 100

let prezzoBigliettoFinale
if (etaPasseggero <= 17) {
    prezzoBigliettoFinale = prezzoBigliettoIntero - scontoMinorenni
} else if (etaPasseggero >= 65) {
    prezzoBigliettoFinale = prezzoBigliettoIntero - scontoOver
} else prezzoBigliettoFinale = prezzoBigliettoIntero
console.log(prezzoBigliettoFinale);




