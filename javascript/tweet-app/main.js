console.log("Hello");

const input = document.getElementById('input');
// console.log(input);
const button = document.getElementById('tweet');
// console.log(button);
const container = document.getElementById('tweet-container');
// console.log(container);

button.addEventListener('click', () => {
    const tweet = input.value;
    console.log(tweet);
    const tweetElement = document.createElement('p');
    tweetElement.classList.add("text-xl", "px-4", "py-2", "border", "border-gray-300", "rounded", "px-2", "bg-transparent");
    tweetElement.textContent = tweet;

    container.append(tweetElement);
});

