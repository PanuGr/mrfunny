// Main module for Mr. Funny's Interactive Calculators
import { factsORjokes } from './modules/factjoke-module.js';
import { weightCalculator } from './modules/weight-module.js';
import { setupWhaleTranslator } from './modules/whale-module.js';
import { setupSleepCalculator } from './modules/sleep-module.js';
import { setupTemperatureConverter } from './modules/temperature-module.js';
import { setupPetAgeCalculator } from './modules/petAgeCalculator.js';

// Initialize all calculator modules
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all calculator modules
  weightCalculator();
  /*  setupFactJokeGenerator(modal);
   setupWhaleTranslator(modal);
   setupSleepCalculator(modal);
   setupTemperatureConverter(modal);
   setupPetAgeCalculator(modal); */
});

const jokesButton= document.getElementById('fact-joke-btn');
const weightButton= document.getElementById('weight-form');
const weightInput = document.getElementById('weight-form')

jokesButton.addEventListener('click', factsORjokes);
weightButton.addEventListener('submit', weightCalculator);
