// Function to animate the card using GSAP
function animateCard() {
  // Elements to animate
  const greeting = document.querySelector('.greeting');
  const message = document.querySelector('.message');
  const loveBtn = document.querySelector('.love-btn');
  const heart = document.querySelector('.heart');
  const heartsContainer = document.querySelector('.heart-container');

  // Create the animation timeline
  const tl = gsap.timeline();

  // Animate the elements
  tl.from(greeting, { opacity: 0, y: -50, duration: 1 });
  tl.from(message, { opacity: 0, y: 50, duration: 1 });
  tl.from(loveBtn, { opacity: 0, scale: 0.5, duration: 0.5 });
  tl.from(heart, { opacity: 0.5, scale: 0.1, duration: 2 });
  
  // Generate and animate raining hearts
  const heartCount = 600;
  const hearts = [];
  
  for (let i = 0; i < heartCount; i++) {
    const heart2 = document.createElement('div');
    heart2.className = 'hearttwo';
    heart2.style.left = `${Math.random() * 100}%`;
    heart2.style.animationDuration = `${1 + Math.random() * 2}s`;
    heart2.style.animationDelay = `${Math.random() * 2}s`;
    heartsContainer.appendChild(heart2);
    hearts.push(heart2);
  }

  tl.from(hearts, { y: -100, opacity: 0.5, stagger: 0.2, ease: 'back.out(1.7)', duration: 2 });
}



// Call the animateCard function when the page has loaded
window.onload = function () {
  animateCard();
};
