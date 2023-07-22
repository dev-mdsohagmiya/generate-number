const readline = require("readline");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInput.question("How many number do you need?: ", (value1) => {
  generateAndSavePhoneNumbers(value1);
});

const fs = require("fs");

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random USA phone number
function generateUSAPhoneNumber() {
  const areaCode = getRandomNumber(200, 999).toString();
  const prefix = getRandomNumber(200, 999).toString();
  const lineNumber = getRandomNumber(1000, 9999).toString();
  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

// Function to generate and save USA phone numbers to a text file
function generateAndSavePhoneNumbers(count) {
  const phoneNumbers = [];
  for (let i = 0; i < count; i++) {
    phoneNumbers.push(generateUSAPhoneNumber());
  }

  const data = phoneNumbers.join("\n");

  fs.writeFile("usa_phone_numbers.txt", `${data}`, "utf8", (err) => {
    if (err) {
      console.error("Error saving phone numbers:", err);
    } else {
      console.log(
        `Successfully saved ${count} phone numbers to usa_phone_numbers.txt`
      );
    }
  });
}

// Usage
const numberOfPhoneNumbers = 10; // You can change this value to generate more or fewer numbers
