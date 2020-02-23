const operators = document.querySelectorAll(".operator");

const buttons = document.querySelectorAll(".buttons span:not(#equals)");
buttons.forEach(assignEventListener);

const screen = document.querySelector("#screen");
const equals = document.querySelector("#equals");
equals.addEventListener("click", event => {
  console.log(screen.textContent.split(""));
  const stringAsArray = screen.textContent.split("");
  const stringToEval = stringAsArray
    .map(character => {
      if (character === "÷") {
        return "/";
      } else if (character === "x") {
        return "*";
      } else {
        return character;
      }
    })
    .join("");

  screen.textContent = eval(stringToEval);
});

function assignEventListener(button) {
  button.addEventListener("click", addTextToScreen);
}

function addTextToScreen(event) {
  const buttonText = event.target.textContent;
  //   console.log(buttonText);
  screen.textContent += buttonText;
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", removeTextFromScreen);

function removeTextFromScreen(event) {
  screen.textContent = "";
}
