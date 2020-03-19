/*
 * HW - Citipix Solution
 *
 * Requirements:
 *
 * 1) Call .value on inputs to get the string value of your user's input
 * 2) Store user input in var city
 * 3) Make sure to clean the city variable (trim for whitespace and evaluate lowercase if you can - look these up!! explore JS!!)
 * 4) Figure out when the user clicks the 'submit' button with an event handler
 * 5) Create if / else if / else conditionals to control the flow of your application
 * 6) Use the && || logic operators in your conditionals as necessary
 * 6) BONUS: try out a switch statement if you're feeling frisky
 * 7) Write at least six different lines of pseudocode and display them inline as JavaScript comments
 * 8) Prevent a form submission using the event.preventDefault() function
 * 9) Try to use a callback function for the event handling - you can use a normal function if that's easier for you
 *
 * If a user submits:
 * "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
 * "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
 * "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
 * "Austin" or "ATX" make the background of the page austin.jpg
 * "Sydney" or "SYD" make the background of the page sydney.jpg
 *
 * Good luck!
 */

// SOLUTION WITH CONDITIONAL STATEMENTS
console.log("Loaded");
// Get DOM object city-form ID, which is on the form element
var cityFormCapture = document.getElementById("citipix-form");

// Put an event listener on the form, we are looking for the submit method
// Notice in the event listener callback function, we pass the event in - this allows us to capture the event in process
cityFormCapture.addEventListener("submit", function(event) {
  // True form submissions go to a backend service, but we want to handle things in the front-end
  // So here we stop the propogation to the backend, which is the default behavior
  event.preventDefault();

  // Get the text input fields values with .value on the input
  // In our case it has an ID so we're cool
  // .value is one of the properties that is natively part of the form object when you save it from the DOM
  var city = document.getElementById("city-type").value;

  // You always want to scan and clean data when you get it from the browser
  // Use .trim() to get rid of potential white space from the original
  // Use .toLowerCase() to avoid needing account for upper and lower cases
  var cleanedCity = city.trim().toLowerCase();

  // Before we add, clear out the other classes so we're starting fresh - important step!
  document.body.classList = "";

  // Run text through each set of conditions, notice use of 'or' || statement
  // NYC conditional
  if (
    cleanedCity === "new york" ||
    cleanedCity === "new york city" ||
    cleanedCity === "nyc"
  ) {
    document.body.classList.add("nyc");
  }
  // SF conditional
  else if (
    cleanedCity === "san francisco" ||
    cleanedCity === "bay area" ||
    cleanedCity === "sf"
  ) {
    document.body.classList.add("sf");
  }
  // LA conditional
  else if (
    cleanedCity === "los angeles" ||
    cleanedCity === "la" ||
    cleanedCity === "lax"
  ) {
    document.body.classList.add("la");
  }
  // Austin conditional
  else if (cleanedCity === "austin" || cleanedCity === "atx") {
    document.body.classList.add("austin");
  }
  // Sydney conditional
  else if (cleanedCity === "sydney" || cleanedCity === "syd") {
    document.body.classList.add("sydney");
  }

  // Resets form value -
  // Investigate these new JS methods...
  cityFormCapture.reset();
});

// SWITCH CASE SOLUTION

// // Get DOM object city-form ID, which is on the form element
// var cityFormCapture = document.getElementById("citipix-form");

// // Put an event listener on the form, we are looking for the submit method
// // Notice in the event listener callback function, we pass the event in - this allows us to capture the event in process
// cityFormCapture.addEventListener("submit", function(event) {
//   // True form submissions go to a backend service, but we want to handle things in the front-end
//   // So here we stop the propogation to the backend, which is the default behavior
//   event.preventDefault();

//   // Get the text input fields values with .value on the input
//   // In our case it has an ID so we're cool
//   // .value is one of the properties that is natively part of the form object when you save it from the DOM
//   var city = document.getElementById("city-type").value;

//   // You always want to scan and clean data when you get it from the browser
//   // Use .trim() to get rid of potential white space from the original
//   // Use .toLowerCase() to avoid needing account for upper and lower cases
//   var cleanedCity = city.trim().toLowerCase();

//   // Before we add, clear out the other classes so we're starting fresh - important step!
//   document.body.classList = "";

//   // This time we're using a switch statement, very similar to if/else in logic
//   // Just different syntax, using switch, case and break keywords
//   // Switches are to compare equality (===), the comparison is built into the `case` keyword
//   // So cleanedCity is compared against each case to see if it's true
//   // It falls through the cases until a match is hit, then it goes through the instructions until it hits break
//   // Notice how we can combine cases together that have the same instruction
//   // This way, we can keep our code a bit more tidy
//   switch (cleanedCity) {
//     // NYC conditional
//     case "new york":
//     case "new york city":
//     case "nyc":
//       document.body.classList.add("nyc");
//       break;

//     // SF conditional
//     case "san francisco":
//     case "bay area":
//     case "sf":
//       document.body.classList.add("sf");
//       break;

//     // LA conditional
//     case "los angeles":
//     case "la":
//     case "lax":
//       document.body.classList.add("la");
//       break;

//     // Austin conditional
//     case "austin":
//     case "atx":
//       document.body.classList.add("austin");
//       break;

//     // Sydney conditional
//     case "sydney":
//     case "syd":
//       document.body.classList.add("sydney");
//       break;
//   }

//   // Resets form value -
//   // Investigate these new JS methods...
//   cityFormCapture.reset();
// });
