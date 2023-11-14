// Hai ricevuto una risposta JSON da un database contenente informazioni su libri e loro autori. Analizza il JSON e usa la distrutturazione degli oggetti per estrarre e registrare le seguenti informazioni per ogni libro: titolo, nome e cognome dell'autore, e il numero di pagine se il libro ne ha più di 300.

const arrayJSON = [
    {
        "title": "Il Grande Gatsby",
        "author": {
            "firstName": "F. Scott",
            "lastName": "Fitzgerald"
        },
        "details": {
            "pages": 180,
            "language": "Inglese"
        }
    },
    {
        "title": "Guerra e Pace",
        "author": {
            "firstName": "Lev",
            "lastName": "Tolstoj"
        },
        "details": {
            "pages": 1225,
            "language": "Russo"
        }
    },
    {
        "title": "1984",
        "author": {
            "firstName": "George",
            "lastName": "Orwell"
        },
        "details": {
            "pages": 328,
            "language": "Inglese"
        }
    }
];

for(i=0; i<arrayJSON.length; i++){
    const object = arrayJSON[i];
    const {title, author, details} = object;
    let numeroPagine = (details.pages>300)? details.pages: '';

    console.log(title, `First Name: ${author.firstName}, Last Name: ${author.lastName}`, numeroPagine);
}
