function scoreQuiz(cuddleValue, sayValue, do1Value, hissValue, hydrateValue) {

    cuddleValue = cuddleValue.toLowerCase();
    sayValue = sayValue.toLowerCase();
    do1Value = do1Value.toLowerCase();
    hissValue = hissValue.toLowerCase();
    hydrateValue = hydrateValue.toLowerCase();

    let score = 0;

    if(cuddleValue === 'always'){
        score ++;
    }

    if(sayValue === 'i love you'){
        score ++;
    }

    if(do1Value === 'kindness'){
        score ++;
    }

    if(hissValue === 'forever'){
        score ++;
    }

    if(hydrateValue === 'diedrate'){
        score ++;
    }

    return score;

}

export default scoreQuiz;