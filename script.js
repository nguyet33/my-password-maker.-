// Assignment code here
var characterLength = 8;
var choiceArr = [];

var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterArr = [
  "!",
  "@",
  "#",
  "$%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "/",
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPromts = getPrompts(); // return true or false. If false, not right propmts
  var passwordText = document.querySelector("#password");

  if (correctPromts) {
    //making a new password based on line 98
    var Newpassword = generatePassword();
    passwordText.value = Newpassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  //make password based on prompt 
  var password = "";
  //for loop to create randomization based on user input by prompt 
  for(var i = 0; i < characterLength; i++) {
    var randomize = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomize];
  }
  return password;
}

//making password based upon user input. But I set the standard.
function getPrompts() {
  choiceArr = [];
  //line above is to restart the array

  characterLength = parseInt(
    prompt(
      "What would you like the length of your strong password to be? (8-128 characters"
    )
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    //checking to meet requirement
    alert(
      "character length has to be a number, 8-128 digits. Please correct and try again."
    );
    return false;
  }
  //concat the user choices to the correct var
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }
  return true;
}
