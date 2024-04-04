// const heading = document.getElementById("heading")
// heading.textContent = "Devscale Indonesia"

// const heading3 = document.getElementById("heading3")
// heading3.textContent = "4 April 2024"

// const headings = document.getElementsByTagName("h1")
// for (let i = 0; i < headings.length; i++) {
//     headings[i].style.color = "red"
// }

// const helloText = document.createElement("p")
// helloText.textContent = "Hello, World!"

// document.body.append(helloText)

// // append container
// const container = document.getElementById("container")

// const newHeading = document.createElement("h1")
// newHeading.textContent = "I'm from Container!"

// container.append(newHeading)

// event listener
// const box = document.getElementById("box")
// const greet = document.getElementById("greet")

// box.addEventListener("keyup", () => {
//     greet.textContent = `Hey, ${box.value}!`
// })

const textarea = document.getElementById("textarea")
const container = document.getElementById("container")
const submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    // container.append(textarea.value)
    let text = textarea.value

    const newTweet = document.createElement("p")
    newTweet.classList.add("text-xl", "font-bold", "text-gray-800")
    newTweet.textContent = text

    container.append(newTweet)
})



