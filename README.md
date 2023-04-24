Vue Email List
===
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
## Procedimento
1. La prima cosa da fare è richiamare nell'head le cdn di vue e axios;
2. Nello script dopo aver richiamato vue, nel data si creano due dati: apiUrl che conterrà la URL che ci serve, ed emails che è un array vuoto;
3. Nel methods andremo a creare la funzione che effettuerà la chiamata API, che verrà attivata poi nel mounted, ottenendo un oggetto con due chiavi: success e response, in cui abbiamo rispettivamente un valore booleano e l'email, quindi ciò che ci servirà è response
4. Dato che ce ne servono 10, creo un ciclo for all'interno della funzione getApi, che avrà al suo interno la chiamata API, pushando il result.data.response nell'array emails
