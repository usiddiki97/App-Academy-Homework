const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function teaAndBiscuits() {
    reader.question('Would you like some tea?', (firstRes) => {
        console.log(`You replied ${firstRes}.`);

        reader.question('Would you like some biscuits?', (secondRes) => {
            console.log(`You replied ${secondRes}.`);

            const firstAns = (firstRes === 'yes') ? 'do' : 'don\'t';
            const secondAns = (secondRes === 'yes') ? 'do' : 'don\'t';
            console.log(`So you ${firstAns} want tea and you ${secondAns} want biscuits.`);
            reader.close();
        });
    });
};

teaAndBiscuits();

