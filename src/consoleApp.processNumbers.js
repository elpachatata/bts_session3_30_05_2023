// READ THE FILE helloWorld.js AND EXTRACT THE FUNCTION IN A VARIABLE
const processNumbersFunction = require("./processNumbers.js");
// CALL/INVOKE THE FUNCTION
const obj = {
    numbers: [1, 2, 3, 4],
};
const response = processNumbersFunction(obj);
// LOG THE RESPONSE IN MY CONSOLE
 console.log(response);
