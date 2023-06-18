function processNumbers (obj) {
    const numbers = obj.numbers;
    const max = Math.max(...numbers);
    let sum= 0;
    numbers.forEach((number=> sum = sum + number));
    const result = {
        totalSum: sum,
        maximumNumber: max,
    };    
    return result;

module.exports = processNumbers;
}