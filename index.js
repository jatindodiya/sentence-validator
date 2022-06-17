const { check_message } = require("./function");

function sentenceValidator( string ){

    return check_message(string)

}


module.exports = sentenceValidator