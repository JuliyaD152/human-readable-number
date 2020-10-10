module.exports = function toReadable (number) {
    if(number === 0) return 'zero';
    if(number === 100) return 'one hundred';

    let firstNum = [' ','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoItemNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tensNum = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number.toString().length <=2) return amountItemNum(number, firstNum, twoItemNum, tensNum);
    else if(number.toString().length === 3 && number % 100 ===0){
        return (firstNum[(Math.floor(number / 100))] + ' hundred');
    } else if (number.toString().length === 3){
        return (firstNum[Math.floor(number/100)] +  ' hundred ' + amountItemNum(number%100, firstNum,twoItemNum, tensNum));
    }else {
        return "Number to long!";
    }

    function amountItemNum(num, firstNum, twoItemNum, tensNum){
        if(num.toString().length === 1){
            return firstNum[num];
        }else if(num >= 10 && num <= 19){
            return twoItemNum[num%10];
        }else if(num >= 20 && (num%10 === 0)){
            return tensNum[(num/10)-2];
        }else if(num >20){
            return (tensNum[Math.floor(num/10 - 2)] + ' ' +  firstNum[num%10]);
        }
    }

};
