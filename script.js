// Select the input and result display elements
const input = document.querySelector(".input");
const result = document.querySelector(".result");

// Function to handle button clicks
function buttonClick(id) {
  if (id === "=") {
    // Evaluate the current input when "=" is clicked
    calculateResult();
  } else if (id === "C") {
    // Clear the input and result when "C" is clicked
    input.textContent = "";
    result.textContent = "";
  } else {
    // Append the clicked button's value to the input field
    if (id !== "+" && id !== "-" && id !== "×" && id !== "÷") {
      input.textContent += id; // Append numbers or "."
    } else {
      input.textContent += ` ${id} `; // Add spaces around operators
    }
  }
}

// Function to evaluate the input and display the result
function calculateResult() {
  let expression = input.textContent;

  // Replace the operators for JavaScript evaluation
  expression = expression.replace(/×/g, "*").replace(/÷/g, "/");

  try {
    // Evaluate the expression and display the result
    const evaluatedResult = eval(expression);
    result.textContent = evaluatedResult;
  } catch (error) {
    // Handle invalid expressions
    result.textContent = "Error";
  }
}

// Optional: Add a "C" button for clearing input and result
const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.classList.add("operationBtn");
clearButton.setAttribute(
  "style",
  "border-radius:25px; padding: 13px; background-color:red; color:white; font-size:1.2rem; border:none;"
);
clearButton.onclick = () => buttonClick("C");
document.querySelector(".buttons").appendChild(clearButton);
