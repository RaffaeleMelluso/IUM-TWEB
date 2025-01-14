/*
*appunti di javascript 
*scripting, no main. Simile a python
*è un linguaggio ad eventi   
*/
/**
 * Scope of a variable=campo di attuazione
 * Come fare variabili:
 */
/**
 * posso scrivere anche fuori dalle funzioni, se dichiaro una variabile fuori è globale
 */
function ciao(){
    let x =5; //non si usa var perche essa è pubblica, mentre let è solo per la funzione
    const a=1; //costante
    let y=x+a;
    x="john"; //va bene
}
/**
 * abbiamo diversi tipi possibili
 * String
 * Number
 * Bigint
 * Boolean
 * Undefined    vuol dire che è senza valore
 * Null         ha valore nullo
 * Symbol
 * Object, che si dividono in:
 *  -Object
 *  -array
 *  -date
 */
//Oggetti javascript, stessa sintassi dei json
function ciao1(x,y){
    const persona={
        nome:"a",
        cognome:"joajo",
        getname: function(){
            return this.name;
        }
    }
}
//array
const v=[]
v[0]=1
v[1]=2
/**
 * ci sono molti metodi per gli array
 * gli oggetti sono array e gli array sono oggetti
 */
let lenght=v.length;

/**per controllare che sia uguale ==
 * per controllare che sia uguale e stesso tipo ===
 * non uguale o tipo diverso !==
 * operatore ?
 */

/**
 * operazioni 
 * esponente **
 * 
 */

/**
 * gli eventi vengono richiamati in html ad es <element event="funzione()">
 */

/**nei cicli mi raccomando ad usare delle variabili dichiarate lì perchè
 * se le scrivi anche da altre parti le va a beccare e le modifica
 */

/**le funzioni possono essere assegnate nelle variabili per poi chiamarle */

num=[1,2,3];
let txt="";
num.foreach(funzione);
document.getElementById("demo").innerHTML = txt;

function funzione(value,index,arr){
    txt+=index;
}
/**map crea un'altro array, posso usarlo per fare operazioni su tutto l'array */
/**reduce riduce tutto l'array ad un solo elemento con un'operazione che gli
 * impostiamo noi
 */

/**booleans */
let x=0;
Boolean(x); //trasforma 0 in falso, anche la stringa vuota o null è falso
let x= 10/ "Hallo";

/**operatore nullo */
let name=null;
let text="missing";
let result = name ?? text; //(name?)? text : nulla, l'operatore ? serve per vedere se è null

let [x,y,z]= person; //vengono presi i parametri in ordine

/**use strict  permette di usare js in strict mode */

/**Operatore freccia => (fat arrow), serve per dichiarare funzioni anonime */
let funzione = (a,b)=>a*b;



/*LEZIONE 9/10 JAVASCRIPT 2*/

/**ripetizione*/

for(key in object){ //lavora sugli indici
    console.log(key);
}
for(value of object){ //lavora sui valori
    console.log(value);
}

/**DOM elements */

getElementById("demo").innerHTML = "Hello Dolly!";
/**prende l'oggetto con id demo e ne modifica il testo */

getElementByClassName("demo").innerHTML = "Hello Dolly!";
/**prende tutti gli oggetti con classe demo e ne modifica il testo */

document.getElementById("demo").addEventListener("click", myFunction);
/**toglie gli elementi da html nelle definizioni dei tag e li mette tutti nel documento javascript */

window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = "ciao";
    myfunction(p1,p2);
}
/** evento relativo alla modifica della finestra */

/**quando ho due oggetti con lo stesso evento sovrapposti, si attiva per entrambi l'evento se ad esempio pigiamo il pulsante */

/**browser object model, permette ad esempio di cambiare pagina o modificare gli url
 * si usa per situazioni dinamiche, come far funzionare il link solo in una certa situazione
 * (es form non completo)
*/

window.history.back(); //torna alla pagina precedente

/**TIMING EVENTS */

setTimeout(function(){alert("Hello")},3000); //dopo 3 secondi appare l'alert

/**non usare jQuery */




