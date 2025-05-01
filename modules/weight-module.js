/**
 * Module for handling the weight calculator functionality
 * @param {Object} modal - Modal dialog interface
 */
export function setupWeightCalculator(modal) {
  const weightForm = document.getElementById('weight-form');
  const weightInput = document.getElementById('weight');
  const planetSelect = document.getElementById('planets');
  const resultDisplay = document.getElementById('weight-result');
  
  // Planet gravity factors relative to Earth
  const PLANET_FACTORS = {
    mercury: 0.37,
    venus: 0.887,
    mars: 0.3711,
    jupiter: 2.479,
    saturn: 1.044,
    uranus: 0.887,
    neptune: 1.115,
    pluto: 0.062,
    moon: 0.162
  };
  
  // Planet emoji representations
  const PLANET_EMOJIS = {
    mercury: '☿️',
    venus: '♀️',
    mars: '♂️',
    jupiter: '♃',
    saturn: '♄',
    uranus: '♅',
    neptune: '♆',
    pluto: '♇',
    moon: '🌙'
  };

  // Planet descriptions
  const PLANET_DESCRIPTIONS = {
    mercury: 'the closest planet to the Sun',
    venus: 'the hottest planet in our solar system',
    mars: 'the red planet',
    jupiter: 'the largest planet in our solar system',
    saturn: 'the ringed planet',
    uranus: 'the sideways planet',
    neptune: 'the windiest planet',
    pluto: 'the dwarf planet',
    moon: 'Earth\'s natural satellite'
  };
  
  weightForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Validate input
    if (!weightInput.value || isNaN(weightInput.value) || weightInput.value <= 0) {
      showError('Please enter a valid weight (a positive number)');
      return;
    }
    
    calculateWeight();
  });
  
  /**
   * Shows an error message in the modal
   * @param {string} message - Error message to display
   */
  function showError(message) {
    modal.show({
      title: 'Error',
      message: `<p>${message}</p>`
    });
    
    resultDisplay.textContent = '';
    resultDisplay.classList.remove('active');
  }
  
  /**
   * Calculates and displays the weight on the selected planet
   */
  function calculateWeight() {
    const earthWeight = parseFloat(weightInput.value);
    const selectedPlanet = planetSelect.value;
    
    if (!PLANET_FACTORS[selectedPlanet]) {
      showError('Please select a valid planet');
      return;
    }
    
    // Calculate the weight on the selected planet
    const planetWeight = Math.round((earthWeight * PLANET_FACTORS[selectedPlanet]) * 100) / 100;
    const emoji = PLANET_EMOJIS[selectedPlanet] || '';
    const description = PLANET_DESCRIPTIONS[selectedPlanet] || '';
    
    // Display the result
    const resultText = `On ${selectedPlanet} ${emoji} (${description}), you would weigh ${planetWeight} kg.`;
    
    modal.show({
      title: `Your Weight on ${selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)}`,
      message: `<p>${resultText}</p>`
    });
    
    // Also update the result display area
    resultDisplay.textContent = resultText;
    resultDisplay.classList.add('active');
  }
}
