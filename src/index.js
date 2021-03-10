module.exports = function toReadable(number) {
    if (!number || number == 0) return "zero";

    const numArr = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let str = "";
    let num = 0;

    if (number >= 100) {
        num = (number / 100) | 0;
        str = `${numArr[num]} hundred`;
        number -= num * 100;
    }

    if (number > 19) {
        num = (number / 10) | 0;
        number -= num * 10;
        str = `${str} ${tens[num]} ${numArr[number]}`;
    } else {
        str = `${str} ${numArr[number]}`;
    }

    return str.trim();
};
