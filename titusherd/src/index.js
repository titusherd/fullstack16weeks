// import Typed from 'typed.js';

// // const typed = new Typed('#information', {
// //     strings: ['This SPA site build without framework.', 'design inspired by jamesdaly.me'],
// //     typeSpeed: 50,
// //     loop: true
// // });

const homeNav = document.getElementById('home-nav');
const aboutNav = document.getElementById('about-nav');
const contactNav = document.getElementById('contact-nav');

function changeContent(page) {
    // event.preventDefault();
    var contentDiv = document.getElementById('content');

    switch (page) {
        case 'home':
            homeNav.classList.add('bg-black', 'text-white');
            aboutNav.classList.remove('bg-black', 'text-white');
            contactNav.classList.remove('bg-black', 'text-white');
            contentDiv.innerHTML = `
				<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-12.png">
				<h2>
					Welcome to the Home Page!
				</h2>
				<p>
					This is the main page of our SPA.
				</p>
				<p>
					Explore the different sections using
					the navigation menu.
				</p>
			`;
            break;
        case 'about':
            homeNav.classList.remove('bg-black', 'text-white');
            aboutNav.classList.add('bg-black', 'text-white');
            contactNav.classList.remove('bg-black', 'text-white');
            contentDiv.innerHTML = `
				<h2>About Us</h2>
				<p>
					This is the about page content. Learn more 
					about our purpose and team.
				</p>
				<p>
					We're passionate about creating engaging and
					informative SPAs.
				</p>
			`;
            break;
        case 'contact':
            contactNav.classList.add('bg-black', 'text-white');
            homeNav.classList.remove('bg-black', 'text-white');
            aboutNav.classList.remove('bg-black', 'text-white');
            contentDiv.innerHTML =
                `<h2>Contact Us</h2> 
				<p>
					Feel free to reach out to us!
				</p> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
            break;

        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}
