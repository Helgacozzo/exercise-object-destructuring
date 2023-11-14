// Dato il JSON degli utenti, scrivi una funzione che distruttura ogni oggetto utente per estrarre il nome, l'email e l'indirizzo dell'utente. Se l'indirizzo non è fornito, la funzione dovrebbe assegnare un valore predefinito di "Indirizzo non fornito". Registra le informazioni estratte per ogni utente.

const listaNomi = [
    {
        "name": "Alice",
        "email": "alice@example.com",
        "address": "123 Via Acero, Meraviglia"
    },
    {
        "name": "Bob",
        "email": "bob@example.com"
    },
    {
        "name": "Charlie",
        "email": "charlie@example.com",
        "address": "456 Via Olmo, Sognilandia"
    }
]

const destruttura = (lista)=>{
    for(i=0; i<lista.length; i++){
    const object = lista[i];
    const {name, email, address='Indirizzo non fornito'} = object;   
    console.log(name, email, address); 
    }

}

destruttura(listaNomi);