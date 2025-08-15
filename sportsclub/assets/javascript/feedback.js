document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    change(); // Call your validation function
});

function change() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let rating = document.getElementById("rating").value.trim();
    let message = document.getElementById("message").value.trim();
    let isValid = true;

    // Regex patterns
    let nameRegex = /^[A-Za-z ]+$/; // Allow spaces too
    let emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    let messageRegex = /^[a-zA-Z0-9\s.,!?'-]+$/;

    if (!nameRegex.test(name)) {
        alert("Invalid name. Only letters and spaces are allowed.");
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        isValid = false;
    }

    if (rating === "") {
        alert("Please select a rating.");
        isValid = false;
    }

    if (!messageRegex.test(message) || message.length < 5) {
        alert("Feedback must be at least 5 characters and contain only letters, numbers, spaces, and punctuation.");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("formMessage").textContent = "✅ Data Submitted!";
        setTimeout(() => {
            document.getElementById("formMessage").textContent = "";
        }, 4000);

        let feedbackData = { name, email, rating, message };
        localStorage.setItem("Feedback", JSON.stringify(feedbackData));

        document.getElementById("feedbackForm").reset();
    }
}
