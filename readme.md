! Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
    - text, una stringa che indica il testo del todo;
    - done, un booleano (true/false) che indica se il todo è stato fatto oppure no.

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// Una volta creato l'obj array in data, creo un 'ul' e aggiungo al 'li' il v-for.
    All'interno del 'li' ci sarà un 'p' a cui è collegato 'text' e che avrà una classe a seconda del valore di 'done'. Il valore di 'done' cambierà al click con una funzione (da true a false e viceversa).

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// Accanto al 'p' ci sarà una 'i', cliccando la quale l'oggetto a quell'indice verrà eliminato dall'array.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Aggiungo l'input con il v-model per una variabile ('newContent') e assegno all'input e al bottone "aggiungi" una funzione: questa creerà un nuovo oggetto con 'text'='newContent' e 'done'=false, lo aggiungerà all'array e ripulirà il valore di 'newContent' (con un'altra funzione).

BONUS:
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente