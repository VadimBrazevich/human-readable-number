module.exports = function toReadable (number) {
    
    if (number == 0) return "zero"
    else if (number/100 < 1 && number / 10 < 1 ) return getUnitsName(number)
    else if (number/100 < 1) return getTensName(number)
    else if (number%100 < 10) return `${getHundredsName(number)} ${getUnitsName(number%10)}`.trim()
    else return `${getHundredsName(number)} ${getTensName(number%100)}`
}

function getUnitsName(number){
    switch (number){
        case 1:
            return "one";
            
        case 2:
            return "two";
            
        case 3:
            return "three";
            
        case 4:
            return "four";
            
        case 5:
            return "five";
            
        case 6:
            return "six";
            
        case 7:
            return "seven";
            
        case 8:
            return "eight";
            
        case 9:
            return "nine";
            
        default:
            return "";
            
    }
}

function getTensName(number){
    switch (Math.floor(number/10)) {
        case 1:
        switch (number) {
            case 10:
                return "ten";
                
            case 11:
                return "eleven";
                
            case 12:
                return "twelve";
                
            case 13:
                return "thirteen";
                
            case 15:
                return "fifteen";
                
            case 18:
                return "eighteen";
                
            default:
                return `${getUnitsName(number%10)}teen`
                
            }
        case 2:            
            return `twenty ${getUnitsName(number%10)}`.trim();
            
        case 3:
            return `thirty ${getUnitsName(number%10)}`.trim();
            
        
        case 4:
            return `forty ${getUnitsName(number%10)}`.trim();
            
        case 5:
            return `fifty ${getUnitsName(number%10)}`.trim();
            
        case 8:
            return `eighty ${getUnitsName(number%10)}`.trim();

        default:
            return `${getUnitsName(Math.floor(number/10))}ty ${getUnitsName(number%10)}`.trim();
    }
}

function getHundredsName(number){
    return `${getUnitsName(Math.floor(number/100))} hundred`
}
