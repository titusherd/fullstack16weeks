import Typed from 'typed.js';
import confetti from 'canvas-confetti';

const typed = new Typed('#information', {
    strings: ['This SPA site build without framework.', 'design inspired by jamesdaly.me'],
    typeSpeed: 50,
    loop: true
});

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('click', () => {
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
    });
});