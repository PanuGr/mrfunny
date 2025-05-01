// Main module for Mr. Funny's Interactive Calculators
import { setupModal } from './modules/modal.js';
import { setupFactJokeGenerator } from './modules/factJoke.js';
import { setupWeightCalculator } from './modules/weightCalculator.js';
import { setupWhaleTranslator } from './modules/whaleTranslator.js';
import { setupSleepCalculator } from './modules/sleepCalculator.js';
import { setupTemperatureConverter } from './modules/temperatureConverter.js';
import { setupPetAgeCalculator } from './modules/petAgeCalculator.js';

// Initialize the modal system first as other modules will use it
const modal = setupModal();

// Initialize all calculator modules
document.addEventListener('DOMContentLoaded', () => {
  // Display welcome message
  showWelcomeMessage();
  
  // Initialize all calculator modules
  setupFactJokeGenerator(modal);
  setupWeightCalculator(modal);
  setupWhaleTranslator(modal);
  setupSleepCalculator(modal);
  setupTemperatureConverter(modal);
  setupPetAgeCalculator(modal);
});

/**
 * Shows a welcome message to the user when the page loads
 */
function showWelcomeMessage() {
  setTimeout(() => {
    const userName = localStorage.getItem('userName');
    
    if (!userName) {
      modal.show({
        title: 'Welcome!',
        message: `
          <p>Hello stranger! What's your name?</p>
          <input type="text" id="user-name-input" class="modal-input" placeholder="Your name">
        `,
        showInput: true,
        callback: (inputValue) => {
          if (inputValue && inputValue.trim()) {
            localStorage.setItem('userName', inputValue.trim());
            modal.show({
              title: `Welcome ${inputValue.trim()}!`,
              message: `
                <p>This project contains a series of small javascript applications, mostly calculators.</p>
                <p>If you like this project, you can find more at 
                <a href="http://digisolutech.netlify.app/" target="_blank">Panagiotis Panagiotakopoulos's website</a>.</p>
                <p>Enjoy! 😀</p>
              `
            });
          }
        }
      });
    } else {
      modal.show({
        title: `Welcome back, ${userName}!`,
        message: 'Glad to see you again! Enjoy the calculators!'
      });
    }
  }, 500);
}
