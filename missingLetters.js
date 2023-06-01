const missingLetters = (input01, input02) => {
    let arr1 = input01.split(' ');
    let arr2 = input02.split(' ');

    return arr1.filter(item => !arr2.includes(item));
}

module.exports = missingLetters;