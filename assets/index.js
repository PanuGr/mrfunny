//WELCOME MESSAGE
const welcome = () => {
    const link = "http://panagiotis.netlify.app/";
    const name = prompt("Hello stranger! What's your name?");
    if (name) {
        alert(`Welcome ${name}. This project contains a series of small javascript applications, mostly calculators. 
If you like this project, you can find more of my projects on my personal site: ${link}. 
Enjoy 😀`)
    }
}
window.addEventListener('load', welcome)

//RANDOM ANSWERS
document.querySelector('button').addEventListener('click', fact)
function fact() {
    let randomNumber=Math.floor(Math.random() * 9);
    const facts = confirm(`Do you wanna know some interesting facts?🤓`);
    if (facts === false) {
        const joke = confirm('Very well. Would you like to hear a joke instead?😃');
        if (joke === true) {
            let jokeSentence = ["What's the best thing about Switzerland?...I don't know, but the flag is a big plus",
                "Hear about the new restaurant called Karma?...There's no menu. You get what you deserve",
                "Why don't scientists trust atoms?...Because they make up everything", "How do you drown a hipster?...Throw him in the mainstream",
                "What did the left eye say to the right eye?...Between you and me, something smells",
                "What do you call a magic dog?...A labracadabrador", "What did the shark say when he ate the clownfish?...This tastes a little funny",
                "What is an astronaut's favorite part on a computer?...The space bar", "Once my dog ate all the Scrabble tiles...He kept leaving little messages around the house",
                "Did you hear about the two people who stole a calendar?...They both got 6 months"
            ];
            alert( jokeSentence[randomNumber]);
        }

    } else {
        let fact = ["The hashtag symbol is technically called an octothorpe.", "Banging your head against a wall for one hour burns 150 calories.", "Some cats are allergic to people.",
            "The unicorn is the national animal of Scotland.", "M&M stands for Mars and Murrie.", "Coca-Cola was the first soft drink in space.", "About 700 grapes go into one bottle of wine.",
            "The speed of a computer mouse is measured in Mickeys.", "If Facebook was a country, it would have 1 billion more people than China."];
            alert(fact[randomNumber]);
    }
}


//WEIGHT ON DIFFERENT PLANETS
const calculateWeight = () => {
    const planetList = document.getElementsByTagName('option');
    const earthWeight = parseFloat(document.getElementById('weight').value);
    for (let i = 0; i < planetList.length; i++) {
        if (planetList[i].selected) {
            switch (planetList[i].value) {
                case 'mercury':
                    alert(Math.round(earthWeight * 0.37, 2) + 'kg');
                    break;
                case 'venus':
                    alert(Math.round(earthWeight * 0.887, 2) + 'kg');
                    break;
                case 'mars':
                    alert(Math.round(earthWeight * 0.3711, 2) + 'kg');
                    break;
                case 'jupiter':
                    alert(Math.round(earthWeight * 2.479, 2) + 'kg');
                    break;
                case 'saturn':
                    alert(Math.round(earthWeight * 1.044, 2) + 'kg');
                    break;
                case 'uranus':
                    alert(Math.round(earthWeight * 0.887, 2) + 'kg');
                    break;
                case 'neptune':
                    alert(Math.round(earthWeight * 1.115, 2) + 'kg');
                    break;
                case 'pluto':
                    alert(Math.round(earthWeight * 0.062, 2) + 'kg');
                    break;
                case 'moon':
                    alert(Math.round(earthWeight * 0.162, 2) + 'kg');
                    break;
            }
        }
    }
}

//WHALE LANGUAGE
const whale = () => {
    let input = document.getElementById('text').value;
    const vowels = ["a", "e", "o", "i", "u"];
    let resultArray = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (input[i] === vowels[j]) {
                resultArray.push(input[i]);
                if (input[i] === "e") {
                    resultArray.push("e");
                } else if (input[i] === "u") {
                    resultArray.push("u");
                }
            }
        }
    }
    document.getElementById('text').value = resultArray.join("");
};

//SLEEP CALCULATOR
const getSleepHours = () => {
    let m = document.getElementsByName('days')[0].valueAsNumber;
    let t = document.getElementsByName('days')[1].valueAsNumber;
    let w = document.getElementsByName('days')[2].valueAsNumber;
    let th = document.getElementsByName('days')[3].valueAsNumber;
    let f = document.getElementsByName('days')[4].valueAsNumber;
    let s = document.getElementsByName('days')[5].valueAsNumber;
    let su = document.getElementsByName('days')[6].valueAsNumber;
    let array = [];
    array.push(m, t, w, th, f, s, su);
    return array.reduce((a, b) => { return a + b });
};
const calculateSleepDebt = () => {
    const SleepHours = getSleepHours(), idealHours = 49;
    if (SleepHours === idealHours) {
        alert("You sleep perfectly");
    } else if (SleepHours > idealHours) {
        alert("You've slept " + (SleepHours - idealHours) + " hours extra");
    } else {
        console.log(
            alert("You should sleep " + (idealHours - SleepHours) + " hours more")
        );
    }
};

let t = document.getElementById("temperature");
const age = document.getElementById('myAge');

//TEMPERATURE CONVERTER
const convertToF = () => {
    //get the input in numbers
    if (t.value === "") {//check for empty inputs
        alert('Add a temperature to convert');
    }
    else { //convert to Fahrenheit
        const celsius = parseFloat(t.value);
        const fahre = Math.round(10 * ((celsius * 1.8) + 32)) / 10;
        alert(fahre + ' degrees');
    }
}
const convertToC = () => {
    if (t.value === "") {
        alert('Add a temperature to convert');
    }
    else {//convert Celsius
        const fahre = parseFloat(t.value);
        const celsius = Math.round(10 * ((fahre - 32) * 5 / 9)) / 10;
        alert(celsius + ' degrees');
    }
}


//PET AGE CONVERTER
const dogToHuman = () => {
    const myAge = parseFloat(document.getElementById('myAge').value);
    if (myAge < 1) {
        alert(`Your dog is a ${myAge * 15}-years old.`);
    }
    else if (myAge === 1) {
        alert('Your dog is a 15-years old.');
    }
    else if (myAge > 1 && myAge <= 2) {  //calculate till the 2nd dog-year
        const earlyYears = ((myAge * 9) / 2 + 15);
        alert(`Your dog is a young adult. ${earlyYears} years old.`);
    }
    else {//calculate the late years without counting the 2 early dog-years
        const lateYears = 24 + (myAge - 2) * 5;
        alert(`Your dog is growing older. ${lateYears} years old by now.`);
    }
}
const catToHuman = () => {
    const myAge = parseFloat(document.getElementById('myAge').value);
    if (myAge <= 2) {
        const earlyYears = (myAge * 25) / 2;
        alert(`Your cat is ${earlyYears} years old.`);
    } else {
        const lateYears = 25 + (myAge - 2) * 4;
        alert(`Your cat is growing older.  ${lateYears} years old by now.`);
    }
}
const rabbitToHuman = () => {
    const myAge = parseFloat(document.getElementById('myAge').value);
    if (myAge <= 1) {
        const earlyYears = myAge * 20;
        alert(`Your rabbit is ${earlyYears} years old.`);
    } else {
        const lateYears = 20 + (myAge - 1) * 8;
        alert(`Your rabbit is growing older. He is ${lateYears} years old by now.`);
    }
}

