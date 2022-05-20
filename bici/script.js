// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// ++++BONUS creazione nuovo array identico al precedente, ma con aggiunta nuova bc

const myArrBici = [
    {
        "nome": "Bianchi",
        "peso": 5,
    },
    {
        "nome": "Atala",
        "peso": 7,
    },
    {
        "nome": "Cinelli",
        "peso": 6,
    },
    {
        "nome": "Casati",
        "peso": 4,
    }
];

let[bicileggera] = myArrBici;
//let bicileggera = myArrBici[0];


myArrBici.forEach((element) =>{
    if(element.peso < bicileggera.peso){
        bicileggera = element;
    }
});

console.log(bicileggera);

//stampo a schermo

const {peso, nome} = bicileggera;

document.querySelector("h1").innerHTML = 
    `<ul>
        <li>Nome: ${nome}</li>
        <li>Peso: ${peso}</li>
    </ul>`;

//bonus
const nuovaBici = {
    nome : "Bicicletta",
    peso: 8
};

const bici2 = [...myArrBici, nuovaBici];

console.log("array 2bici", bici2);
console.log("array bici invariato", myArrBici);