/**
 * Module for handling the whale translator functionality
 */
export function whaleTranslator() {
  const whaleForm = document.getElementById('whale-form');
  const textInput = document.getElementById('text');
  const resultDisplay = document.getElementById('whale-result');

  whaleForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validate input
    if (!textInput.value.trim()) {
      showError('Please enter some text to translate');
      return;
    }

    translateToWhale();
  });

  /**
   * Shows an error message in the modal
   * @param {string} message - Error message to display
   */
  function showError(message) {
    resultDisplay.textContent = message;
    resultDisplay.classList.remove('active');
  }

  /**
   * Translates the input text to whale language
   */
  function translateToWhale() {
    const input = textInput.value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let resultArray = [];

    // Process each character in the input
    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      // Check if the character is a vowel
      if (vowels.includes(char)) {
        resultArray.push(char);

        // Double 'e' and 'u' as per whale language rules
        if (char === 'e' || char === 'u') {
          resultArray.push(char);
        }
      }
    }

    // Join the result array into a string
    const whaleText = resultArray.join('').toUpperCase();

    // Display the result
    if (whaleText.length === 0) {
      showError('Your text doesn\'t contain any vowels. Whales can\'t speak without vowels!');
      return;
    }

    const resultText = `🐋 ${whaleText} 🐋`;

    // Also update the result display area
    resultDisplay.innerHTML = `
      <p>Whale says: <strong>${resultText}</strong></p>
    `;
    resultDisplay.classList.add('active');
  }
}
