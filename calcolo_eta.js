// Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

num1 = 2; 
num2 = 8; 
num3 = 2; 
num4 = 4; 
num5 = 2; 

sum = num1 + num2 + num3 + num4 + num5; 
textSomma = 'La somma è: '; 
media = sum / 5; 
textMedia = 'La media è: ';

console.log(textSomma + sum);
console.log(textMedia + media);

// Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
// - l'età della persona,
// - quanti anni sono necessari per raggiungere i 100
// Restituisca in output entrambi i risultati.

// “Hai  25 anni e ti mancano 75 anni per compierne 100”

annoCorrente = 2021; 
annoNascita = 1990; 
etaPersona = annoCorrente - annoNascita;
anniMancanti = 100 - etaPersona;

console.log('Hai ' + etaPersona + ' anni e ti mancano ' + anniMancanti + ' per compierne 100');


// Scrivi un programma che dati sette valori relativi alle temperature della settimanaZ
// stabilisca la giornata più calda e quella più fredda.
// Esempio:
//   Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
//   “La temperatura piu’ calda e’ 31 quella piu’ fredda -6”

l = 23; 
ma = 21; 
me = 29; 
g = 29; 
v = 24; 
s = 19; 
d = 18; 

tempMax = Math.max(l, ma, me, g, v, s, d);
tempMin = Math.min(l, ma, me, g, v, s, d);

console.log('La temperatura più calda è: ' + tempMax);
console.log('La temperatura più fredda è: ' + tempMin);

if (tempMax == 29){
    console.log('Mercoledì e giovedì');
}

if (tempMin == 18){
    console.log('Domenica');
}









