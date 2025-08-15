
function change() {
    let type = document.getElementById('type').value.trim();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let isValid = true;

    // Regex patterns
    let nameRegex = /^[A-Za-z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let messageRegex = /^[a-zA-Z0-9\s.,!?'-]+$/;

    // Validation checks
    if (type === "") {
        alert("Please select a type.");
        isValid = false;
    }
    if (!nameRegex.test(name)) {
        alert("Invalid name. Only letters and spaces allowed.");
        isValid = false;
    }
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.color = 'red';
        document.getElementById('emailError').textContent = 'Enter a valid email.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }
    if (!messageRegex.test(message)) {
        document.getElementById('messageError').style.color = 'red';
        document.getElementById('messageError').textContent = 'Invalid message format.';
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    // If valid, save and show
    if (isValid) {
        let suggestionData = JSON.parse(localStorage.getItem('SuggestionData')) || [];
        suggestionData.push({ type, name, email, message });
        localStorage.setItem('SuggestionData', JSON.stringify(suggestionData));

        // Show on page
        displaySuggestions();

        // Clear form
        document.getElementById('type').value = '';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        document.getElementById('formMessage').textContent = "✅ Your " + type + " has been submitted successfully!";
        document.getElementById('formMessage').className = "mt-2 fw-bold text-success";

    }
}

