module.exports = function toReadable (number) {
    let word;
    let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr1119 = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let digitsNumber = number % 10;
    let dozensNumber = number % 100 - digitsNumber;
    let hundredsNumber = Math.floor(number / 100);
        
    if (number < 10) {
        word = digits[number];    
    } else if (number > 10 && number < 20) {
        word = arr1119[number - 10]; 
    } else if (number >= 10 && number < 100 && number % 10 === 0) { 
        word = dozens[number / 10 - 1];
    } else if (number >= 20 && number < 100 && number % 10 != 0) {
        word = dozens[Math.floor(number / 10) - 1] + " " + digits[digitsNumber];
    } else if (number >= 100 && number % 100 === 0) {
        word = digits[number/100] + " hundred";
    } else if (number >= 100 && number % 10 === 0) {
        word = digits[hundredsNumber] + " hundred " + dozens[ dozensNumber/10 - 1];
    } else if (number >= 100 && dozensNumber < 10 && number % 10 != 0) {
        word = digits[hundredsNumber] + " hundred " + digits[digitsNumber];
    } else if (number >= 100 && dozensNumber > 9 && dozensNumber < 20  && number % 10 != 0) {
        word = digits[hundredsNumber] + " hundred " + arr1119[number % 100 - 10];
    } else if (number >= 100 && dozensNumber >= 20  && number % 10 != 0) {
        word = digits[hundredsNumber] + " hundred " + dozens[dozensNumber / 10 - 1] + " " + digits[digitsNumber];
}
return word;
}
