const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const shawarmaQuestion = document.querySelector(".shawarma-question");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");

// Function to hide the buttons
function hideButtons() {
  btnGroup.style.display = "none";
}

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Felt soo nice to see that! 😘<br>Love you the most<br>Your order has been placed Mohatarma.";
  gif.src = "https://c.tenor.com/Mtl9qlqu7tcAAAAC/tenor.gif";
  gif.style.width = "200px";
  gif.style.height = "auto";
  shawarmaQuestion.style.display = "none";
  hideButtons();  // Hide the buttons
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  // Calculate new random positions within the allowed range
  const randomX = Math.floor(Math.random() * (maxX / 2)) - (maxX / 4);
  const randomY = Math.floor(Math.random() * (maxY / 2)) - (maxY / 4);

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Hide the buttons when No is clicked
noBtn.addEventListener("click", () => {
  hideButtons();  // Hide the buttons
  question.innerHTML = "Oh no! You chose No! 😔";
  gif.src = "https://c.tenor.com/ujcEuvveic0AAAAC/sad-dog.gif";  // Change to another GIF for "No"
  gif.style.width = "200px";
  gif.style.height = "auto";
