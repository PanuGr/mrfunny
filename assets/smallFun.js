//TIP CALCULATOR
const qualityList = document.getElementsByName('quality');
const qualityCheck = () => {
    for (let i = 0; i < qualityList.length; i++) {
        if (qualityList[i].checked) {
            const cost = parseInt(document.getElementById('cost').value);
            switch (qualityList[i].value) {
                case "ok":
                    alert(cost * 0.10 + "€");
                    break;
                case "good":
                    alert(cost * 0.15 + "€");
                    break;
                case "excellent":
                    alert(cost * 0.20 + "€");
                    break;
            }
        }
    }
};

//WEIGHT ON DIFFERENT PLANETS
function calculateWeight() {
    const planetList = document.getElementsByTagName('option');
    const earthWeight = parseFloat(document.getElementById('weight').value);
    for (let i = 0; i < planetList.length; i++) {
        if (planetList[i].selected) {
            switch (planetList[i].value) {
                case 'mercury':
                    alert(_.round(earthWeight * 0.37, 2) + 'kg');
                    break;
                case 'venus':
                    alert(_.round(earthWeight * 0.887, 2) + 'kg');
                    break;
                case 'mars':
                    alert(_.round(earthWeight * 0.3711, 2) + 'kg');
                    break;
                case 'jupiter':
                    alert(_.round(earthWeight * 2.479, 2) + 'kg');
                    break;
                case 'saturn':
                    alert(_.round(earthWeight * 1.044, 2) + 'kg');
                    break;
                case 'uranus':
                    alert(_.round(earthWeight * 0.887, 2) + 'kg');
                    break;
                case 'neptune':
                    alert(_.round(earthWeight * 1.115, 2) + 'kg');
                    break;
                case 'pluto':
                    alert(_.round(earthWeight * 0.062, 2) + 'kg');
                    break;
                case 'moon':
                    alert(_.round(earthWeight * 0.162, 2) + 'kg');
                    break;
            }
        }
    }
}

//WHALE LANGUAGE
function whale() {
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
    return _.sum(array);
};
const calculateSleepDebt = () => {
    const SleepHours = getSleepHours();
    const idealHours = 49;
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

//RANDOM ANSWERS
const link = "http://panagiotis.netlify.app/";
document.querySelector('button').addEventListener('click', start)
function start() {
    const name = prompt("Hello stranger! What's your name?");
    if (name === null) {
        alert(`Goodbye. We can play some other time. You can find more interesting stuff in my website ${link} `);
    } else {
        alert(`Welcome to my game ${name}. Let's have some fun 🤓`);
        return fact();
    }
};

function fact() {
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
            for (
                let i = _.random(9);
                i < jokeSentence.length;
            ) {
                alert(jokeSentence[i]);
                alert(`Thanks for playing with me ${name}. You can find more interesting stuff in my website ${link}`);
                break;
            };
        }
        else {
            alert(`Thanks for playing with me ${name}. You can find more interesting stuff in my website ${link}`);
        }
    } else {
        let fact = ["The hashtag symbol is technically called an octothorpe.", "Banging your head against a wall for one hour burns 150 calories.", "Some cats are allergic to people.",
            "The unicorn is the national animal of Scotland.", "M&M stands for Mars and Murrie.", "Coca-Cola was the first soft drink in space.", "About 700 grapes go into one bottle of wine.",
            "The speed of a computer mouse is measured in 'Mickeys.'", "If Facebook was a country, it would have 1 billion more people than China."];
        for (
            let i = _.random(9);
            i < fact.length;
        ) {
            alert(fact[i]);
            alert(`Thanks for playing with me ${name}. You can find more interesting stuff in my website ${link}`);
            break;
        };
    }
}
