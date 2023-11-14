// Utilizza la distrutturazione degli oggetti per estrarre il `nome` e l'`eta` dall'oggetto `persona`. Se l'`eta` non è fornita, dovrebbe avere un valore predefinito di `30`.



const persona = {
    nome: "Bob"
};

const {nome, eta= 30} = persona;
// console.log(nome, eta);