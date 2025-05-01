// petAgeCalculator.js - Pet age calculator functionality
export const setupPetAgeCalculator = (modal) => {
    const petForm = document.getElementById('pet-form');
    const petResult = document.getElementById('pet-result');
    const dogBtn = document.getElementById('dog-btn');
    const catBtn = document.getElementById('cat-btn');
    const rabbitBtn = document.getElementById('rabbit-btn');
    
    const validateAge = () => {
      const ageInput = document.getElementById('myAge');
      
      if (!ageInput.value || isNaN(parseFloat(ageInput.value)) || parseFloat(ageInput.value) <= 0) {
        petResult.textContent = "Please enter a valid age";
        petResult.classList.add('error');
        return null;
      }
      
      return parseFloat(ageInput.value);
    };
    
    const calculateDogAge = (event) => {
      event.preventDefault();
      const myAge = validateAge();
      
      if (myAge === null) return;
      
      let humanAge;
      if (myAge < 1) {
        humanAge = (myAge * 15).toFixed(1);
        petResult.textContent = `Your dog is ${humanAge} years old in human years.`;
      } else if (myAge === 1) {
        petResult.textContent = 'Your dog is 15 years old in human years.';
      } else if (myAge > 1 && myAge <= 2) {
        humanAge = ((myAge * 9) / 2 + 15).toFixed(1);
        petResult.textContent = `Your dog is a young adult, ${humanAge} years old in human years.`;
      } else {
        humanAge = (24 + (myAge - 2) * 5).toFixed(1);
        petResult.textContent = `Your dog is growing older, ${humanAge} years old in human years.`;
      }
      
      petResult.classList.remove('error');
    };
    
    const calculateCatAge = () => {
      const myAge = validateAge();
      
      if (myAge === null) return;
      
      let humanAge;
      if (myAge <= 2) {
        humanAge = ((myAge * 25) / 2).toFixed(1);
        petResult.textContent = `Your cat is ${humanAge} years old in human years.`;
      } else {
        humanAge = (25 + (myAge - 2) * 4).toFixed(1);
        petResult.textContent = `Your cat is growing older, ${humanAge} years old in human years.`;
      }
      
      petResult.classList.remove('error');
    };
    
    const calculateRabbitAge = () => {
      const myAge = validateAge();
      
      if (myAge === null) return;
      
      let humanAge;
      if (myAge <= 1) {
        humanAge = (myAge * 20).toFixed(1);
        petResult.textContent = `Your rabbit is ${humanAge} years old in human years.`;
      } else {
        humanAge = (20 + (myAge - 1) * 8).toFixed(1);
        petResult.textContent = `Your rabbit is growing older, ${humanAge} years old in human years.`;
      }
      
      petResult.classList.remove('error');
    };
    
    // Event listeners
    petForm.addEventListener('submit', calculateDogAge);
    catBtn.addEventListener('click', calculateCatAge);
    rabbitBtn.addEventListener('click', calculateRabbitAge);
    
    return {
      calculateDogAge,
      calculateCatAge,
      calculateRabbitAge
    };
  };