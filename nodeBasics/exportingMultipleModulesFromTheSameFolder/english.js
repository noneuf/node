const greetings = require('./greeting.json')

const greet = () => {
    console.log(greetings.en);
}

module.exports = greet;