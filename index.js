module.exports = Inflect;

function Inflect( word_base, number, suffix_array) {
    var self = this;
    var result = word_base;

    var numberStr = number+"";

    if( numberStr.length > 0)
    {
        var lastDigit = 1*numberStr[numberStr.length-1];

        if( lastDigit == 1)
            result += suffix_array[1];
        else if( 2 <= lastDigit && lastDigit <= 4 )
            result += suffix_array[2];
        else
            result += suffix_array[0];

        return result;
    }
    return result;
}