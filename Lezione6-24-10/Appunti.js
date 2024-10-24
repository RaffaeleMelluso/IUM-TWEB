/**
     Usiamo ajax, ma solo delle librerie per la comunicazione client server asincrona.
    Javascript è single tread, ma con node js possiamo spostare la computazione usando la programmazione ad eventi
    Es. riempire un form facendo una post.
    L'HTTP protocol non ha memoria (stateless) e ha una direzione rest (directional).
    I siti oggi sono single page, cioè la stessa pagina è composta da elementi nascosti che vengono modificati.
    Ajax è un middleware, SI TROVA NEL BROWSER, fatto in javascript, è event based.
    Funziona mandando dei jason data tramite http request.
*/

function extractFormData(form) {

    //converte da form a formdata
    const formData = new FormData(form);

    //converte i dati del form in oggetti semplici
    const data = {};
    formData.forEach((value,key) => {
        data[key] = value;
    });
    return data;
}
/**usiamo axios*/
/**codice per il submitForm*/

/*se ho*/
//{"firstName":"Mario","lastName":"Rossi","email":"}

/**ma ho */
//{'{"firstname":"Mario","lastName":"Rossi","email":"}'}

/*in ajax, vuol dire che ho fatto un json del json*/

/**
 * AXIOS
 * è una libreria da includere su html
 * permette di gestire i dati tramite get e post
 */
axios.get('/user')
.then(res => {
    console.log("CIAO")
})
.catch(err => {
    console.error(err); 
})
.then({/*codice da eseguire comunque*/});

function sendAxiosQuery() {
    axios.post('/user', {
        firstName: 'Mario',
        lastName: 'Rossi',
        email: 'hello@hello.it'
    });
}
/** Axios nel lato del post controlla in automatico se ci sono errori
 *  JS fetch invece non lo fa, devi controllare tu a mano
 *  Axios è supportato da tutti i browser
 *  Noi usiamo solo axios per fare le chiamate durante il corso
 *  Possiamo usare le promises anche con axios
 */
