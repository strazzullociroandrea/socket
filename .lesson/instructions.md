# Instructions  

A partire da questo:
https://replit.com/@CRISTIANNOBILI1/Socketio-simple-chat

svolgere le seguenti modifiche:
Estendere la semplice chat qui mostrata con le seguenti funzioni:

1) Ad ogni avvio l'applicazione chiede il nome dell'utente. Modificare l'invio dei messaggi dal client al server facendo in modo che venga inviato quindi:
- nome dell'utente;
- messaggio della chat.

2) Ad ogni ricezione lato server del suddetto messaggio, il server reinvia il messaggio in broadcast aggiungendo anche la data ora corrente. Il client deve quindi mostrare per ogni messaggio:
- nome dell'utente;
- data ora del messaggio;
- il messaggio stesso.

3) E' possibile intercettare anche la disconnessione dell'utente con questo codice:

socket.on('disconnect', () => {
    console.log('user disconnected');
  });

Ogni volta che una socket si disconnette mandare un messaggio in broadcast indicando che quella socket si è disconnessa.

  