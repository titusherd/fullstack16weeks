console.log("hej");

const input = document.getElementById('name');
const welcomeMsg = document.getElementById('welcomeMsg');

input.addEventListener("keyup", () => {
    const name = input.value;

    welcomeMsg.textContent = `Hej ${name}!`;
});
