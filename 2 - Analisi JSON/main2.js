// Converti la seguente stringa JSON in un oggetto JavaScript e registra l'`email` e l'`id` nella console.
// '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}'

const stringa = '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}';
const oggetto = JSON.parse(stringa); 

// console.log(oggetto.email, oggetto.id);