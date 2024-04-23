const randomstring = require("randomstring");

const passwordLength = document.getElementById("password-length");
const generateButton = document.getElementById("generate-button");
const password = document.getElementById("password");

console.log(length);

generateButton.addEventListener('click', () => {
    const length = Number(passwordLength.value);
    const pass = randomstring.generate(length);
    password.value = pass;
})