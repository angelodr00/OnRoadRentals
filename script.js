// Gestione del form di contatto
document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const car = e.target.car.value;
    const rentalDuration = e.target['rental-duration'].value;
    const monthlyKm = e.target['monthly-km'].value;
    const downPayment = e.target['down-payment'].value;
    const specialRequests = e.target['special-requests'].value;

    // Puoi inviare questi dati al server tramite una richiesta API (ad esempio, usando fetch)
    console.log("Lead ricevuto:", { name, email, phone, car, rentalDuration, monthlyKm, downPayment, specialRequests });

    // Messaggio di conferma
    alert("Grazie per averci contattato! Ti risponderemo al più presto.");
    e.target.reset();  // Resetta il form
});
