

// This function runs when the user clicks "Generate Meal Plan"
function generateMealPlan() {
  // Grab the values the user typed in for name, email, and their goal
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const goal = document.getElementById("goal").value;

  // These are the days of the week and the meals they are planning for
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const meals = ["Breakfast", "Snack 1", "Lunch", "Snack 2", "Dinner"];

  // This makes sure that the email looks like a real one before continuing
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return; // This stops the function if the email is bad
  }

  // This opens a brand new tab where the meal plan will be shown
  let newWindow = window.open('', '_blank');

  // This starts building the new page using document.write()
  // Everything they write here shows up in the new tab
  newWindow.document.write(`
    <html>
    <head>
      <title>Weekly Meal Plan</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f7fff7;
          padding: 20px;
          color: #333;
        }
        h1, h2 {
          color: #2e7d32;
        }
        .day {
          margin-bottom: 20px;
          padding: 10px;
          border-left: 5px solid #66bb6a;
          background-color: #ecfdf5;
          border-radius: 6px;
        }
        ul {
          list-style-type: square;
        }
      </style>
    </head>
    <body>
      <h1>Weekly Meal Plan for ${name}</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Goal for the Week:</strong> ${goal || 'N/A'}</p>
  `);

  // This loops through each day and shows the meals for that day
  days.forEach(day => {
    newWindow.document.write(`<div class='day'><h2>${day}</h2><ul>`);
    meals.forEach(meal => {
      const inputId = `${day}-${meal}`;
      const value = document.getElementById(inputId).value || '(not entered)';
      newWindow.document.write(`<li><strong>${meal}:</strong> ${value}</li>`);
    });
    newWindow.document.write(`</ul></div>`);
  });

  // This script makes the print box pop up automatically
  newWindow.document.write(`
      <script>
        window.onload = function() {
          window.print();
        }
      <\/script>
    </body>
    </html>
  `);

  // Close the document so the new page loads everything
  newWindow.document.close();
}

// This clears all the inputs in the form when the user clicks "Clear Planner"
function clearForm() {
  document.getElementById("mealForm").reset();
}
