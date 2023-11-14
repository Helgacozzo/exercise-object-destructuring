// Utilizza la distrutturazione degli oggetti per estrarre il `titolo` e l'`anno` dal seguente oggetto e registrarli nella console.

const film = {
    titolo: "Inception",
    regista: "Christopher Nolan",
    anno: 2010,
    valutazione: 8.8
};

const {titolo,regista,anno,valutazione} = film;

console.log(titolo, anno);