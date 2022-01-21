const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Welcome to our password validator tool, Please input a password to validate. You will need 2 special charcters or numbers and 10 total characters to pass:  ",
  function (input) {
    passwordInput = input;
    passwordArray = [];
    trueArray = [];

    // for loop that creates an array made up of each character of users input password
    for (let i = 0; i < passwordInput.length; i++) {
      passwordArray.push(passwordInput[i]);
    }
    // console log to test success of for loop
    // console.log(passwordArray)

    // for loop that tests each variable for special characters and numbers
    for (let i = 0; i < passwordArray.length; i++) {
      switch (passwordArray[i]) {
        case "!":
          trueArray.push("True");
          break;
        case "@":
          trueArray.push("True");
          break;
        case "#":
          trueArray.push("True");
          break;
        case "$":
          trueArray.push("True");
          break;
        case "%":
          trueArray.push("True");
          break;
        case "^":
          trueArray.push("True");
          break;
        case "&":
          trueArray.push("True");
          break;
        case "*":
          trueArray.push("True");
          break;
        case "(":
          trueArray.push("True");
          break;
        case ")":
          trueArray.push("True");
          break;
        case "-":
          trueArray.push("True");
          break;
        case "1":
          trueArray.push("True");
          break;
        case "2":
          trueArray.push("True");
          break;
        case "3":
          trueArray.push("True");
          break;
        case "4":
          trueArray.push("True");
          break;
        case "5":
          trueArray.push("True");
          break;
        case "6":
          trueArray.push("True");
          break;
        case "7":
          trueArray.push("True");
          break;
        case "8":
          trueArray.push("True");
          break;
        case "9":
          trueArray.push("True");
          break;
        case "0":
          trueArray.push("True");
          break;

        default:
      }
    }
    // console.log(trueArray);

    let numberofSpecialCharacters = trueArray.length;

    let characterCheck = false;
    let passwordLength = false;

    if (numberofSpecialCharacters > 0) {
      characterCheck = true;
    }

    // console.log(characterCheck);

    if (passwordInput.length >= 10) {
      passwordLength = true;
    } else {
      passwordLength = false;
    }
    // console.log(passwordLength);

    if (characterCheck === false && passwordLength === false) {
      console.log(
        "\nPassword failed, under 10 characters and need at least 2 special characters or numbers"
      );
    } else if (characterCheck === true && passwordLength === false) {
      console.log("\nPassword failed, under 10 characters");
    } else if (characterCheck === false && passwordLength === true) {
      console.log("\nPassword failed, Be sure to include 2 special charcters or numbers");
    } else if (characterCheck === true && passwordLength === true) {
      console.log("\nCongrats, your password passes our validation tool\n" + " _______  _______  _        _______  _______  _______ _________ _______  _ \n" + "(  ____ \(  ___  )( (    /|(  ____ \(  ____ )(  ___  )\__   __/(  ____ \( )\n" + "| (    \/| (   ) ||  \  ( || (    \/| (    )|| (   ) |   ) (   | (    \/| |\n" + "| |      | |   | ||   \ | || |      | (____)|| (___) |   | |   | (_____ | |\n" + "| |      | |   | || (\ \) || | ____ |     __)|  ___  |   | |   (_____  )| |\n" +"| |      | |   | || | \   || | \_  )| (\ (   | (   ) |   | |         ) |(_)\n" + "| (____/\| (___) || )  \  || (___) || ) \ \__| )   ( |   | |   /\____) | _ \n" + "(_______/(_______)|/    )_)(_______)|/   \__/|/     \|   )_(   \_______)(_)\n");
    }

    readline.close();
  }
);

// tokens = input.split(' ');

// mathSymbol = tokens[0];
// num1 = Number(tokens[1]);
// num2 = Number(tokens[2]);
// num3 = Number(tokens[3]);
