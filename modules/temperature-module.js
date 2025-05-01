/**
 * Module for handling the temperature converter functionality
 * @param {Object} modal - Modal dialog interface
 */
export function setupTemperatureConverter(modal) {
  const tempForm = document.getElementById('temp-form');
  const tempInput = document.getElementById('temperature');
  const toFahrenheitBtn = document.getElementById('to-fahrenheit');
  const toCelsiusBtn = document.getElementById('to-celsius');
  const resultDisplay = document.getElementById('temp-result');
  
  // Listen for form submission (convert to Fahrenheit)
  tempForm.addEventListener('submit', (event) => {
    event.preventDefault();
    convertToFahrenheit();
  });
  
  // Listen for "To Celsius" button click
  toCelsiusBtn.addEventListener('click', () => {
    convertToCelsius();
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
   * Validates the temperature input
   * @returns {boolean} Whether the input is valid
   */
  function validateInput() {
    if (!tempInput.value.trim()) {
      showError('Please enter a temperature to convert');
      return false;
    }
    
    if (isNaN(tempInput.value)) {
      showError('Please enter a valid number for temperature');
      return false;
    }
    
    return true;
  }
  
  /**
   * Converts Celsius to Fahrenheit and displays the result
   */
  function convertToFahrenheit() {
    if (!validateInput()) return;
    
    const celsius = parseFloat(tempInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    const roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
    
    // Display the result
    const resultText = `${celsius}°C = ${roundedFahrenheit}°F`;
    
    modal.show({
      title: 'Temperature Conversion',
      message: `
        <p>${resultText}</p>
        <p><small>Conversion Formula: °F = (°C × 9/5) + 32</small></p>
      `
    });
    
    // Also update the result display area
    resultDisplay.innerHTML = `
      <p>${resultText}</p>
      <div class="temp-visual">
        <div class="temp-scale celsius" style="height: ${Math.min(Math.max(celsius * 2 + 50, 0), 100)}%"></div>
        <div class="temp-scale fahrenheit" style="height: ${Math.min(Math.max((fahrenheit - 32) * 5/9 * 2 + 50, 0), 100)}%"></div>
        <div class="temp-label">C</div>
        <div class="temp-label">F</div>
      </div>
    `;
    resultDisplay.classList.add('active');
  }
  
  /**
   * Converts Fahrenheit to Celsius and displays the result
   */
  function convertToCelsius() {
    if (!validateInput()) return;
    
    const fahrenheit = parseFloat(tempInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    const roundedCelsius = Math.round(celsius * 10) / 10;
    
    // Display the result
    const resultText = `${fahrenheit}°F = ${roundedCelsius}°C`;
    
    modal.show({
      title: 'Temperature Conversion',
      message: `
        <p>${resultText}</p>
        <p><small>Conversion Formula: °C = (°F − 32) × 5/9</small></p>
      `
    });
    
    // Also update the result display area
    resultDisplay.innerHTML = `
      <p>${resultText}</p>
      <div class="temp-visual">
        <div class="temp-scale fahrenheit" style="height: ${Math.min(Math.max(fahrenheit * 0.5, 0), 100)}%"></div>
        <div class="temp-scale celsius" style="height: ${Math.min(Math.max((celsius + 20) * 2, 0), 100)}%"></div>
        <div class="temp-label">F</div>
        <div class="temp-label">C</div>
      </div>
    `;
    resultDisplay.classList.add('active');
  }
}
