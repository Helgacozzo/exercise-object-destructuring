const utente = {
    nome: "Alice",
    eta: 25,
    hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
    indirizzo: {
        via: "123 Via degli Aceri",
        citta: "Paese delle Meraviglie"
    }
};

const stringaConvertita = JSON.stringify(utente);
// console.log(stringaConvertita);