const bookingForm = document.getElementById("bookingForm");


// problem with eventlistener returning null??????

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    console.log("log form");

    // destructuring assignment
    const { value: companyName } = document.getElementById("companyName");
    const { value: email } = document.getElementById("email");
    const { value: contact } = document.getElementById("contact-person");
    const { value: contactNumber } = document.getElementById("contactNumber");
    const { value: eventSelector } = document.getElementById("event-selector");
    const { value: ticket } = document.getElementById("ticket-form-number");
    const ticketString = ticket.toString();

    // Perform form validation
    if (!companyName && email && contact && contactNumber && eventSelector && ticketString.trim()) {
        alert("Please fill in all required fields.");
        return;
    }

    window.location.href = "confirmation.html";

});


