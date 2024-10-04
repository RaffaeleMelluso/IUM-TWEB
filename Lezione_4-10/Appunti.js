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