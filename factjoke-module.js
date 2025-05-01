/**
 * Module for handling the Facts and Jokes button functionality
 * @param {Object} modal - Modal dialog interface
 */
export function setupFactJokeGenerator(modal) {
  const factJokeBtn = document.getElementById('fact-joke-btn');
  const resultDisplay = document.querySelector('#fact-joke-title').closest('.calculator-card').querySelector('.result-display') || 
                        document.createElement('div');
  
  if (!resultDisplay.classList.contains('result-display')) {
    resultDisplay.classList.add('result-display');
    resultDisplay.setAttribute('aria-live', 'polite');
    factJokeBtn.after(resultDisplay);
  }
  
  // Array of interesting facts
  const facts = [
    "The hashtag symbol is technically called an octothorpe.",
    "Banging your head against a wall for one hour burns 150 calories.",
    "Some cats are allergic to people.",
    "The unicorn is the national animal of Scotland.",
    "M&M stands for Mars and Murrie.",
    "Coca-Cola was the first soft drink in space.",
    "About 700 grapes go into one bottle of wine.",
    "The speed of a computer mouse is measured in Mickeys.",
    "If Facebook was a country, it would have 1 billion more people than China."
  ];
  
  // Array of jokes
  const jokes = [
    "What's the best thing about Switzerland?...I don't know, but the flag is a big plus.",
    "Hear about the new restaurant called Karma?...There's no menu. You get what you deserve.",
    "Why don't scientists trust atoms?...Because they make up everything.",
    "How do you drown a hipster?...Throw him in the mainstream.",
    "What did the left eye say to the right eye?...Between you and me, something smells.",
    "What do you call a magic dog?...A labracadabrador.",
    "What did the shark say when he ate the clownfish?...This tastes a little funny.",
    "What is an astronaut's favorite part on a computer?...The space bar.",
    "Once my dog ate all the Scrabble tiles...He kept leaving little messages around the house.",
    "Did you hear about the two people who stole a calendar?...They both got 6 months."
  ];
  
  factJokeBtn.addEventListener('click', () => {
    modal.show({
      title: 'What would you like?',
      message: 'Do you want to hear an interesting fact or a joke?',
      buttons: [
        {
          text: 'Interesting Fact 🤓',
          action: showFact
        },
        {
          text: 'Joke 😃',
          action: showJoke
        }
      ]
    });
  });
  
  /**
   * Shows a random fact in the modal
   */
  function showFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    
    modal.show({
      title: 'Interesting Fact',
      message: `<p>${randomFact}</p>`
    });
    
    // Also update the result display area
    resultDisplay.textContent = randomFact;
    resultDisplay.classList.add('active');
  }
  
  /**
   * Shows a random joke in the modal
   */
  function showJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    
    // Split the joke into setup and punchline
    const [setup, punchline] = randomJoke.split('...');
    
    modal.show({
      title: 'Here\'s a Joke',
      message: `<p>${setup}</p><p><strong>${punchline}</strong></p>`
    });
    
    // Also update the result display area
    resultDisplay.innerHTML = `<p>${setup}</p><p><strong>${punchline}</strong></p>`;
    resultDisplay.classList.add('active');
  }
}
