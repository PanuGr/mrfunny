// Main module for Mr. Funny's Interactive Calculators
import { factsORjokes } from './modules/factjoke-module.js';
import { weightCalculator } from './modules/weight-module.js';
import { whaleTranslator } from './modules/whale-module.js';
import { setupSleepCalculator } from './modules/sleep-module.js';
import { setupTemperatureConverter } from './modules/temperature-module.js';
import { setupPetAgeCalculator } from './modules/petAgeCalculator.js';

// Initialize all calculator modules
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all calculator modules
  weightCalculator();
  whaleTranslator();
  setupSleepCalculator();
  setupTemperatureConverter();
  setupPetAgeCalculator();
});

document.getElementById('fact-joke-btn').addEventListener('click', factsORjokes);
