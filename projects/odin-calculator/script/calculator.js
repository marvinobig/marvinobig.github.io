const container1 = document
  .getElementById("row1")
  .addEventListener("click", (e) => {
    let backSpace = document.getElementById("backSpace");
    let AC = document.getElementById("clear");

    if (e.target == backSpace) {
      back();
    } else if (e.target == AC) {
      del();
    }
  });

const container2 = document
  .getElementById("row2")
  .addEventListener("click", (e) => {
    let inputDisplay = document.getElementById("inputDisplay");
    let calculation = document.getElementById("calculation");

    if (e.target.matches("button")) {
      if (inputDisplay.textContent === "") {
        inputDisplay.textContent = "";
      } else {
        calculation.textContent = "";
        inputDisplay.textContent += e.target.textContent;
        calculation.textContent += inputDisplay.textContent;
        inputDisplay.textContent = "";
      }
    }
  });

const container3 = document
  .getElementById("row3")
  .addEventListener("click", (e) => {
    let inputDisplay = document.getElementById("inputDisplay");
    let calculation = document.getElementById("calculation");


    if (e.target.matches("button")) {
      if (calculation.textContent.split(" ").length === 5) {
        calculation.textContent = "";
        inputDisplay.textContent = "";
        inputDisplay.textContent += e.target.textContent;
      }else {
        inputDisplay.textContent += e.target.textContent;
      }
    }
  });

const container4 = document
  .getElementById("row4")
  .addEventListener("click", (e) => {
    let inputDisplay = document.getElementById("inputDisplay");
    let calculation = document.getElementById("calculation");


    if (e.target.matches("button")) {
      if (calculation.textContent.split(" ").length === 5) {
        calculation.textContent = "";
        inputDisplay.textContent = "";
        inputDisplay.textContent += e.target.textContent;
      }else {
        inputDisplay.textContent += e.target.textContent;
      }
    }
  });

const container5 = document
  .getElementById("row5")
  .addEventListener("click", (e) => {
    let inputDisplay = document.getElementById("inputDisplay");
    let calculation = document.getElementById("calculation");


    if (e.target.matches("button")) {
      if (calculation.textContent.split(" ").length === 5) {
        calculation.textContent = "";
        inputDisplay.textContent = "";
        inputDisplay.textContent += e.target.textContent;
      }else {
        inputDisplay.textContent += e.target.textContent;
      }
    }
  });

const container6 = document
  .getElementById("row6")
  .addEventListener("click", (e) => {
    let inputDisplay = document.getElementById("inputDisplay");
    let calculation = document.getElementById("calculation");
    let decimal = document.getElementById("decimal");
    let sum = document.getElementById("sum");
    let deciCheck = inputDisplay.textContent.split("");
    let answerCheck = calculation.textContent.split(" ");

    if (e.target != sum && e.target != decimal) {
      if (calculation.textContent.split(" ").length === 5) {
        calculation.textContent = "";
        inputDisplay.textContent = "";
        inputDisplay.textContent += e.target.textContent;
      }else {
        inputDisplay.textContent += e.target.textContent;
      }
    } else if (e.target == sum) {
        if (!calculation.textContent.split(" ").includes("=")) {
          inputDisplay.textContent += e.target.textContent;
          calculation.textContent += inputDisplay.textContent;
          inputDisplay.textContent = ""
          total();
        }
    } else {
        if (inputDisplay.textContent === "" || deciCheck.includes(".") || 
          answerCheck.length === 5) {

          inputDisplay.textContent += "";
        } else {
          inputDisplay.textContent += e.target.textContent;
        }
    }
  });





function total() {
  let display = document.getElementById("calculation"); //Initialize a variable with display text content
  let displayCalculation = document.getElementById("inputDisplay");

  /* Initialize a new variable that contains a new array with the display 
    text content split into three elements within it */
  let displayArray = display.textContent.split(" ");

  //Initialize a new variable that turns the first array element into a number
  let firstNum = Number(displayArray[0]);

  //Initialize a new variable that turns the third array element into a number
  let secondNum = Number(displayArray[2]);

  /* If the array includes a plus it will add the first and third element together 
    and place the result into the sumDisplay as its text content */
  if (displayArray.includes("+")) {
    let result = firstNum + secondNum;
    let floatCheck = result.toString().split("");

    if (floatCheck.includes(".")) {
      displayCalculation.textContent = result.toFixed(2);
    } else {
      displayCalculation.textContent = result;
    }

    /* If the array includes a minus it will subtract the first and third element 
    and place the result into the sumDisplay as its text content */
  } else if (displayArray.includes("-")) {
    let result = firstNum - secondNum;
    let floatCheck = result.toString().split("");

    if (floatCheck.includes(".")) {
      displayCalculation.textContent = result.toFixed(2);
    } else {
      displayCalculation.textContent = result;
    }

    /* If the array includes a division sign it will divide the first and third 
    element and place the result into the sumDisplay as its text content */
  } else if (displayArray.includes("×")) {
    let result = firstNum * secondNum;

    let floatCheck = result.toString().split("");

    if (floatCheck.includes(".")) {
      displayCalculation.textContent = result.toFixed(2);
    } else {
      displayCalculation.textContent = result;
    }
    /* If the array includes a multiplication sign it will multiply the first 
    and third element and place the result into the sumDisplay as its text content */
  } else if (displayArray.includes("÷")) {
      if (secondNum === 0) { //if user divides by zero
        displayCalculation.textContent = "Nope";
      }else {
        let result = firstNum / secondNum;
        let floatCheck = result.toString().split("");

        if (floatCheck.includes(".")) {
          displayCalculation.textContent = result.toFixed(2);
        } else {
          displayCalculation.textContent = result;
        }
      }
  }
}





function back() {
  //Initialize a variable with display text content
  let display = document.getElementById("inputDisplay");

  /* Initialize a new variable that removes last letter 
  in the string */
  let editedText = display.textContent.slice(0, -1);

  display.textContent = editedText; //Displays string with the last letter removed
}





function del() {
  //Initialize a variable with display text content
  let inputDisplay = document.getElementById("inputDisplay");
  let calculation = document.getElementById("calculation");

  //Removes text content from display
  inputDisplay.textContent = "";
  calculation.textContent = "";
}
