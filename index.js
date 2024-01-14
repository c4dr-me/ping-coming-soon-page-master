
    const form = document.querySelector(".submit");
    const emailInput = document.getElementById("txt");
    const errorContainer = document.getElementById("error-container");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const enteredEmail = emailInput.value.trim();
      const isValidEmail = validateEmail(enteredEmail);
  
      if (!isValidEmail) {
        // Display error message and update ARIA attributes
        errorContainer.textContent = "Please enter a valid email address";
        errorContainer.classList.add("invalid");
        emailInput.style.border = "1px solid hsl(354, 100%, 66%)";
        emailInput.setAttribute("aria-invalid", "true");

        // Append the error message below the input
        emailInput.parentNode.appendChild(errorContainer);
    } else {
        // Clear error message and update ARIA attributes for a valid email
        errorContainer.textContent = "";
        emailInput.style.border = "";
        emailInput.setAttribute("aria-invalid", "false");
    }
});
  
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       /* ^: Asserts the start of the string.
      [^\s@]+: Matches one or more characters that are not whitespace or '@'.
      @: Matches the '@' symbol.
      [^\s@]+: Matches one or more characters that are not whitespace or '@'.
      \.: Escapes the dot '.' to match a literal dot.
      [^\s@]+: Matches one or more characters that are not whitespace or '@'.
      $: Asserts the end of the string. */
      return emailRegex.test(email);
    }


  