
// Assignment Code


var generateBtn = document.querySelector("#generate");

//Generator funtions - https://net-comber.com/charset.html

var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharString = "!()?[]`~;:!@#$%^&*+=";
var numbersString = "0123456789";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(characterAmount, includeUppercase, icludeNumbers, includeSymbols) {
  let charCodes = lowerCaseString
  if (includeUppercase) charCodes = charCodes.concat(upperCaseString)
  if (includeSymbols) charCodes = charCodes.concat(specialString)
  if (includeNumbers) charCodes = charCodes.concat(numbersString)
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random()* characterAmount)]
    passwordCharacters.push(String.fromCharCode(characterCode))
   }
   return passwordCharacters.join("")
 }

var generatePassword = function(){
  var password=[];
  var passwordLength = window.prompt("Enter a number between 8 - 128 characters:");
  if (!passwordLength) {
    window.alert("Please choose a number between 8 - 128 characters. Please try again.");
    return;
  }
  //checks to see if the number entered is a number
  else if(isNaN(passwordLength)){
    window.alert("Please choose a number not a character. Please try again");
    return;
  }
  else if (passwordLength >= 8 || passwordLength <= 128) {
    console.log(passwordLength);
  }
//confirm password with options window
  var lowerCase = confirm("Would you like to include lowercase letters in your password?");
  console.log(lowerCase);
  var upperCase = confirm("Would you like to include uppercase letters in your password?");
  console.log(upperCase);
  var numbers = confirm("Would you like to include numbers in your password?");
  console.log(numbers);
  var special = confirm("Would you like to include special characters in your password?");
  console.log(special);
  textarea.textContent = password;
  return password;
}
