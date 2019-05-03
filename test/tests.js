//THIS IS THE QUNIT TESTING AREA, IT IS NOT YOUR SITE JS FILE RIGHT NOW
const test = QUnit.test;

import scoreQuiz from '../src/jsfunction.js';


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

test('TDD success test', function(assert) {
    //Arrange

    // Set up your parameters and expectations
    const cuddleAnswer = 'always';
    const sayAnswer = 'I love you';
    const do1Answer = 'kindness';
    const hissAnswer = 'forever';
    const hydrateAnswer = 'diedrate';
    const expected = 5;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = scoreQuiz(cuddleAnswer, sayAnswer, do1Answer, hissAnswer, hydrateAnswer);

    //Assert
    assert.equal(result, expected);
});