import scoreQuiz from 'jsfunction.js';

const cuddle = document.getElementById('cuddle');
const say = document.getElementById('say');
const do1 = document.getElementById('do1');
const hiss = document.getElementById('hiss');
const hydrate = document.getElementById('hydrate');
//DO I NEED A BUTTON.GETELEMENTBYID HERE???LMAO YES I DO 

const submitButton = document.getElementById('submit-button');
const htmlParagraph = document.getElementById('html-paragraph');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const cuddleValue = cuddle.value;
    const sayValue = say.value;
    const do1Value = do1.value;
    const hissValue = hiss.value;
    const hydrateValue = hydrate.value;

    console.log(cuddleValue, 'cuddle');
    console.log(sayValue, 'sayvalue');
    console.log(do1Value, 'dovalue');
    console.log(hissValue, 'hissvalue');
    console.log(hydrateValue, 'hydratevalue');

});

scoreQuiz();

