// Main module for Mr. Funny's Interactive Calculators
import { factsORjokes } from './modules/factjoke-module.js';
import { setupWeightCalculator } from './modules/weight-module.js';
import { setupWhaleTranslator } from './modules/whale-module.js';
import { setupSleepCalculator } from './modules/sleep-module.js';
import { setupTemperatureConverter } from './modules/temperature-module.js';
import { setupPetAgeCalculator } from './modules/petAgeCalculator.js';

// Initialize all calculator modules
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all calculator modules
  factsORjokes();
 /*  setupFactJokeGenerator(modal);
  setupWeightCalculator(modal);
  setupWhaleTranslator(modal);
  setupSleepCalculator(modal);
  setupTemperatureConverter(modal);
  setupPetAgeCalculator(modal); */
});

document.querySelector('button').addEventListener('click', factsORjokes);

