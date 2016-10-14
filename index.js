module.exports = Inflect;

function Inflect( word_base, number, suffix_array) {
    var self = this;
    var result = word_base;

    var numberStr = number+"";
    number = Math.abs(number);

    if( numberStr.length > 0)
    {
        var lastDigit = 1*numberStr[numberStr.length-1];
        var last2Digits = 10*numberStr[numberStr.length-2]+lastDigit;

        if ( number > 10 && 11 <= last2Digits && last2Digits <= 14 ){
            result += suffix_array[0];
        } else {
            if( lastDigit == 1)
                result += suffix_array[1];
            else if( 2 <= lastDigit && lastDigit <= 4 )
                result += suffix_array[2];
            else
                result += suffix_array[0];
        }

        return result;
    }
    return result;
}