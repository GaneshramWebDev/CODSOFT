const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const SpecialChars = ["+", "-", "*", "/", "%", "="];

let output = "";

const calculate = (btnvalue) => {
  if (btnvalue === "=" && btnvalue !== "") {
    output = eval(display.value);
  } else if (btnvalue === "AC") {
    output = " ";
  } else if (btnvalue === "Del") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === " " && SpecialChars.includes(btnvalue)) return;
    output+=btnvalue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
