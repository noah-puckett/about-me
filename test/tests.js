//THIS IS THE QUNIT TESTING AREA, IT IS NOT YOUR SITE JS FILE RIGHT NOW
const test = QUnit.test;

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

    if(sayValue === 'I love you'){
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


test('ohgod TDD FAIL', function(assert) {
    //Arrange

    // Set up your parameters and expectations
    const cuddleAnswer = 'failing';
    const sayAnswer = 'failing';
    const do1Answer = 'failing';
    const hissAnswer = 'failing';
    const hydrateAnswer = 'failing';
    const expected = 0;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = scoreQuiz(cuddleAnswer, sayAnswer, do1Answer, hissAnswer, hydrateAnswer);

    //Assert
    assert.equal(result, expected);
});