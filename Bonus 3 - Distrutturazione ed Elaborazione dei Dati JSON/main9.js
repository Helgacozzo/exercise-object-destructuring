// Hai ricevuto una stringa JSON contenente un array di prodotti con i loro prezzi e quantità. Scrivi una funzione che analizza il JSON e calcola il valore totale di ogni prodotto (prezzo moltiplicato per la quantità). Utilizza la distrutturazione degli oggetti per estrarre le proprietà necessarie. Quindi, registra il nome del prodotto e il suo valore totale.
const listaProdotti= [
    {
        "product": "Laptop",
        "price": 1200,
        "quantity": 5
    },
    {
        "product": "Telefono",
        "price": 500,
        "quantity": 10
    },
    {
        "product": "Tablet",
        "price": 750,
        "quantity": 3
    }
]

const analizzaProdotti = (array) =>{
    for(i=0; i<array.length; i++){
        const oggetto = array[i];
        const {product, price, quantity} = oggetto;
        const valoreTot = price * quantity;
        console.log(`${product}: ${valoreTot}`);
    }
}

analizzaProdotti(listaProdotti);