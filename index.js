
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
          errorContainer.style.color = "red"; // Adjusted values as suited for the design
          errorContainer.style.display = "block";
          errorContainer.style.fontSize = "0.8em";
          errorContainer.style.textAlign = "start";
          errorContainer.style.paddingLeft = "0.9em";
          emailInput.style.border = "1px solid hsl(354, 100%, 66%)";
        emailInput.setAttribute("aria-invalid", "true");
      } else {
       
        errorContainer.textContent = "";
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


  