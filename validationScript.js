    // JavaScript code for form validation

    document.addEventListener("DOMContentLoaded", function () {

        // Retrieve form elements
		
		
        let inputField = document.getElementById("inputField");
        let form = document.getElementById("myForm");
        let message = document.getElementById("message");

        // Add event listener to the form
        form.addEventListener("submit", function (event) {
            
            event.preventDefault(); // Prevent default form submission

            // Regular expression pattern for alphanumeric input
            let alphanumericPattern = /^[a-zA-Z0-9]+$/;

            // Check if the input value matches the pattern
            if (alphanumericPattern.test(inputField.value)) {
                
                // Valid input: display confirmation message
                message.textContent = "Input is valid! Form submitted successfully.";
				
                message.style.color = "green";
            } else {
                
                // Invalid input: display error message
                message.textContent = "Error: Please enter only alphanumeric characters.";
				
                message.style.color = "red";
            }
        });
    });


