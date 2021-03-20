function fact(facts) {
    let randomNumber = Math.round(Math.random());
    console.log(randomNumber)
    return facts[randomNumber];
}

module.exports = fact;