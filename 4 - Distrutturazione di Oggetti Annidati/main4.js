// Utilizza la distrutturazione degli oggetti per estrarre la `via` e la `citta` dall'oggetto `indirizzo` all'interno dell'oggetto `utente`.

const utente = {
    nome: "Alice",
    indirizzo: {
        via: "123 Via degli Aceri",
        citta: "Paese delle Meraviglie"
    }
};

const {nome, indirizzo: { via, citta } } = utente;
// console.log(via, citta);