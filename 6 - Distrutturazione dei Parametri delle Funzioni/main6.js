// Scrivi una funzione `presentati` che prende un oggetto con le proprietà `nome` e `occupazione` e registra un messaggio nella console.

const persona = {
    nome: "Jane",
    occupazione: "sviluppatrice"
};

const presentati = (obj) =>{
    const {nome, occupazione} = obj;
    console.log(`Ciao, sono ${nome} e di mestiere faccio la ${occupazione}`);
}

presentati(persona);
