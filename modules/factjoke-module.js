//RANDOM ANSWERS
export const factsORjokes = () => {

  const facts = confirm(`Do you wanna know some interesting facts?🤓`);
  if (facts === false) {
    const joke = confirm('Very well. Would you like to hear a joke instead?😃');
    if (joke === true) {
      fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          alert(data.joke);
        });
    }

  } else {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
      .then(response => response.json())
      .then(data => {
        alert(data.text);
      });
  }
}
