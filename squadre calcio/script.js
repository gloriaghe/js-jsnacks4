// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e 
//stampiamo tutto in console.


const squadreCalcio = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Yuventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Bologna",
        puntiFatti: 0,
        falliSubiti: 0
    }
];



squadreCalcio.forEach((element) => {
    element.puntiFatti = Math.floor(Math.random() * 40); 
    element.falliSubiti = Math.floor(Math.random() * 30); 
});

console.log(squadreCalcio);

//nuovo array con ciclo map

const newSquadre = squadreCalcio.map ((element) => {
    const {nome, falliSubiti} = element;
    return {nome, falliSubiti}
});

console.log(newSquadre);