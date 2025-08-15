document.querySelector("#form form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let msg = document.createElement("p");
    msg.textContent = "✅ Membership submitted successfully!";
    msg.style.color = "green";
    msg.style.marginTop = "10px";
    
    this.appendChild(msg);
});
