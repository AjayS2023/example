const reloadButton = document.getElementById('reload-button');
const randomNumberElement = document.getElementById('random-number');

// Function to generate a new random number
const generateRandomNumber = () => {
  fetch('/random-number')
    .then((response) => response.json())
    .then((data) => {
      randomNumberElement.textContent = `${data.number} years old!`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// Handle the reload button click event
reloadButton.addEventListener('click', generateRandomNumber);

// Generate a random number initially
generateRandomNumber();
