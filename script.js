
gsap.to(".main", {
    xPercent: -83.3,

    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom -500%",

        scrub: 3,
        pin: true,
    }
});

// Contact Form submission via Formsubmit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const message = document.getElementById('messageInput').value;
    const submitBtn = document.querySelector('.submit-btn');
    
    // Change button text while sending
    submitBtn.innerText = "Sending...";

    // Send data to your email using formsubmit.co API
    fetch("https://formsubmit.co/ajax/mihirsahunov@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
            message: message,
            _subject: "New Contact Form Submission from " + name,
            _template: "table" // Formats the email as a clean table
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Message sent successfully! \\n\\nNOTE: The first time you do this, formsubmit.co will send an activation email to mihirsahunov@gmail.com. Please click the activation link in that email to allow future messages through.");
        submitBtn.innerText = "Send Message";
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error sending the message.");
        submitBtn.innerText = "Send Message";
    });
});
