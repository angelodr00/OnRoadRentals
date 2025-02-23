// Gestione del form di contatto
document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const car = e.target.car.value;
    const message = e.target.message.value;

    // Puoi aggiungere qui una funzione per inviare i dati a un server (come una API)
    console.log("Lead ricevuto:", { name, email, car, message });

    // Simula una risposta positiva
    alert("Grazie per averci contattato! Ti risponderemo al più presto.");
    e.target.reset();
});
