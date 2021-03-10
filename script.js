// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //code goes here
  var passwordLength = parseInt(prompt("Please choose a number of characters no less than 8 and no more than 128."));

  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    console.log("Please choose a number of characters no less than 8 and no more than 128.");
    return alert("Please choose a number of characters no less than 8 and no more than 128");
  }


  var confirmNum = confirm("Would you like numbers in your generated password?");
  var confirmLower = confirm("Would you like to include lower case letters?");
  var confirmCap = confirm("Would you like to include capital letters?");
  var confirmSpecChar = confirm("Would you like to include special characters?");

  var num = "1234567890";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specChar = "!@#%&*";

  var userPassword = "";



  // while loop to check conditions to meet password length

  while (userPassword.length < passwordLength) {

    // check to confirm num
    if (confirmNum) {
      userPassword = userPassword + getRandomChars(num);
    }
    
    // check to confirm lower
    if (confirmLower) {
      userPassword = userPassword + getRandomChars(lower);
    }
    
    // check to confirm upper
    if (confirmCap) {
      userPassword = userPassword + getRandomChars(upper);
    }

    // check to confirm special characters
    if (confirmSpecChar) {
      userPassword = userPassword + getRandomChars(specChar);
    }
  }

  return userPassword.substring(0, passwordLength);

}

function getRandomChars(characters) {
  var index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

//checking
