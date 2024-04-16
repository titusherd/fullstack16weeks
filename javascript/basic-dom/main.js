// const heading = document.getElementById('heading')
// heading.textContent = 'Hello World!' // This will change the text content of the first heading element to 'Hello World!'

const headings = document.querySelectorAll('#heading') // This will select all the h1 elements on the page
// const headings = document.getElementById('heading') // This will select all the h1 elements on the page

// headings.forEach(heading => {
//     heading.style.color = 'blue' // This will change the color of all the h1 elements to blue
// })



for (let index = 0; index < headings.length; index++) {
    // console.log(headings[index]);
    console.log(index);
    index % 2 != 0 ? headings[index].style.color = 'blue' : headings[index].style.color = 'red'
}

