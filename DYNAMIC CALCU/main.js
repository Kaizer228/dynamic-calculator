let UserInputNumber = "";

function appendNumber(UserNumberInput) {
  UserInputNumber += UserNumberInput;
  updateResult();
}

function appendOperator(UserOperator) {
  UserInputNumber += UserOperator;
  updateResult();
}

function clearResult() {
  UserInputNumber = "";
  updateResult();
}

function calculateResult() {
  try {
    const result = eval(UserInputNumber);
    UserInputNumber = result.toString();
    updateResult();
  } catch (error) {
    currentInput = "Error";
    updateResult();
  }
}

function DeleteNumber() {
  UserInputNumber = UserInputNumber.slice(0, -1);
  updateResult();
}

function updateResult() {
  document.getElementById("result").value = UserInputNumber;
}

const darkModeToggle = document.getElementById("darkModeToggle");
const BlackEl = document.getElementById("Black");
let isDarkMode = true;

darkModeToggle.addEventListener("click", function () {
  isDarkMode = !isDarkMode;

  //it will execute if the value of isDarkMode is !false inshort true
  if (isDarkMode == true) {
    document.body.style.backgroundColor = "white";
    BlackEl.style.color = "black";
  }
   //it will execute the negation switching if the button is clicked its switch
   // to original value to true into !isDarkMode in short false cause the original value is
   // true it will negate 
  if (!isDarkMode) {
    document.body.style.backgroundColor = "#272829";
    BlackEl.style.color = "white";
  }
});