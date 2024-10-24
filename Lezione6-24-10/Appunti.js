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