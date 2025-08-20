document.addEventListener("DOMContentLoaded", () => {
  // ✅ Handle form submission
  const form = document.querySelector("#form form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Remove old message if it exists
    const oldMsg = this.querySelector(".success-msg");
    if (oldMsg) oldMsg.remove();

    // Create new success message
    let msg = document.createElement("p");
    msg.textContent = "✅ Membership submitted successfully!";
    msg.classList.add("success-msg"); // for reuse
    msg.style.color = "green";
    msg.style.marginTop = "10px";

    this.appendChild(msg);

    // Reset form after 2s (optional)
    setTimeout(() => {
      this.reset();
    }, 2000);
  });

  // ✅ Handle plan selection
  const buttons = document.querySelectorAll(".select-btn");
  const planSelect = document.querySelector("#form select");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const plan = button.getAttribute("data-plan");
      planSelect.value = plan; // set dropdown value
      document.getElementById("form").scrollIntoView({ behavior: "smooth" });
      planSelect.focus();
    });
  });
});
