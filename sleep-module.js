/**
 * Module for handling the sleep debt calculator functionality
 * @param {Object} modal - Modal dialog interface
 */
export function setupSleepCalculator(modal) {
  const sleepForm = document.getElementById('sleep-form');
  const resultDisplay = document.getElementById('sleep-result');
  
  // Daily recommended sleep hours
  const IDEAL_DAILY_SLEEP = 7;
  const IDEAL_WEEKLY_SLEEP = IDEAL_DAILY_SLEEP * 7;
  
  // Day input fields
  const dayInputs = [
    document.getElementById('monday'),
    document.getElementById('tuesday'),
    document.getElementById('wednesday'),
    document.getElementById('thursday'),
    document.getElementById('friday'),
    document.getElementById('saturday'),
    document.getElementById('sunday')
  ];
  
  // Set default values of 0 for all inputs
  dayInputs.forEach(input => {
    if (!input.value) {
      input.value = 0;
    }
  });
  
  sleepForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Validate all inputs
    let isValid = true;
    let missingDays = [];
    
    dayInputs.forEach((input, index) => {
      const dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][index];
      
      if (input.value === '' || isNaN(input.value)) {
        missingDays.push(dayName);
        isValid = false;
      } else if (parseFloat(input.value) < 0 || parseFloat(input.value) > 24) {
        modal.show({
          title: 'Invalid Sleep Hours',
          message: `<p>Sleep hours for ${dayName} must be between 0 and 24.</p>`
        });
        isValid = false;
      }
    });
    
    if (!isValid) {
      if (missingDays.length > 0) {
        showError(`Please enter valid sleep hours for: ${missingDays.join(', ')}`);
      }
      return;
    }
    
    calculateSleepDebt();
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
   * Calculates the total sleep hours for the week
   * @returns {number} Total sleep hours
   */
  function getTotalSleepHours() {
    return dayInputs.reduce((total, input) => {
      return total + (parseFloat(input.value) || 0);
    }, 0);
  }
  
  /**
   * Calculates and displays the sleep debt
   */
  function calculateSleepDebt() {
    const totalSleepHours = getTotalSleepHours();
    const sleepDebt = IDEAL_WEEKLY_SLEEP - totalSleepHours;
    
    let title, message, resultText;
    
    // Calculate the daily average
    const dailyAverage = (totalSleepHours / 7).toFixed(1);
    
    if (Math.abs(sleepDebt) < 0.1) {
      // Perfect sleep
      title = 'Perfect Sleep Schedule!';
      message = `
        <p>You slept exactly ${IDEAL_WEEKLY_SLEEP} hours this week, which is perfect!</p>
        <p>Daily average: ${dailyAverage} hours (recommended: ${IDEAL_DAILY_SLEEP} hours)</p>
      `;
      resultText = `Perfect sleep schedule! You slept exactly ${IDEAL_WEEKLY_SLEEP} hours this week.`;
    } else if (sleepDebt > 0) {
      // Sleep debt
      title = 'Sleep Debt Alert';
      message = `
        <p>You need ${sleepDebt.toFixed(1)} more hours of sleep this week.</p>
        <p>You slept a total of ${totalSleepHours.toFixed(1)} hours (recommended: ${IDEAL_WEEKLY_SLEEP} hours)</p>
        <p>Daily average: ${dailyAverage} hours (recommended: ${IDEAL_DAILY_SLEEP} hours)</p>
        <p>Tips to improve sleep:</p>
        <ul>
          <li>Maintain a consistent sleep schedule</li>
          <li>Avoid caffeine in the evening</li>
          <li>Create a relaxing bedtime routine</li>
        </ul>
      `;
      resultText = `Sleep Debt: You need ${sleepDebt.toFixed(1)} more hours of sleep. Daily average: ${dailyAverage} hours.`;
    } else {
      // Extra sleep
      const extraSleep = Math.abs(sleepDebt);
      title = 'Extra Sleep';
      message = `
        <p>You've slept ${extraSleep.toFixed(1)} hours more than recommended this week.</p>
        <p>You slept a total of ${totalSleepHours.toFixed(1)} hours (recommended: ${IDEAL_WEEKLY_SLEEP} hours)</p>
        <p>Daily average: ${dailyAverage} hours (recommended: ${IDEAL_DAILY_SLEEP} hours)</p>
      `;
      resultText = `Extra Sleep: You've slept ${extraSleep.toFixed(1)} hours more than recommended. Daily average: ${dailyAverage} hours.`;
    }
    
    // Display the result
    modal.show({
      title,
      message
    });
    
    // Also update the result display area
    resultDisplay.textContent = resultText;
    resultDisplay.classList.add('active');
  }
}
