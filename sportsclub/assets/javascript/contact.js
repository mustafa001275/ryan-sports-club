function change() {
    let name = document.getElementById('name').value.trim();
    let number = document.getElementById('number').value.trim();
    let age = document.getElementById('age').value.trim();
    let email = document.getElementById('email').value.trim();
    let isValid = true;

    // Regex patterns
    let nameRegex = /^[A-Za-z]+$/;
    let numberRegex = /^\+92-(\d{3})-(\d{7})$/;
    let ageRegex = /^(?:[1-9][0-9]?|100)$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    // let messageRegex = /^[a-zA-Z0-9\s.,!?'-]+$/;

    // Name validation
    if (!nameRegex.test(name)) {
        alert("Invalid name. Only letters are allowed.");
        isValid = false;
    }

    // Number validation
    if (!numberRegex.test(number)) {
        alert("Invalid number. Format: +92-xxx-xxxxxxx");
        isValid = false;
    }

    // Age validation
    if (!ageRegex.test(age)) {
        alert("Invalid age. Must be between 1 and 100.");
        isValid = false;
    }

    // Email validation
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.color = 'red';
        document.getElementById('emailError').textContent = 'Email should include @ and end with .com';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Message validation
    // if (!messageRegex.test(message)) {
    //     document.getElementById('messageError').style.color = 'red';
    //     document.getElementById('messageError').textContent = 'Message should only contain letters, numbers, spaces, and punctuation.';
    //     isValid = false;
    // } else {
    //     document.getElementById('messageError').textContent = '';
    // }

    // If all validations pass
    if (isValid) {
        document.getElementById('formMessage').textContent = "✅ Data Submitted!";
        setTimeout(() => {
            document.getElementById('formMessage').textContent = "";
        }, 4000);
        let userData = { name, number, email, };
        localStorage.setItem('Data', JSON.stringify(userData));

        // Clear fields
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
        document.getElementById('age').value = '';
        document.getElementById('email').value = '';
        // document.getElementById('message').value = '';
    }
}
