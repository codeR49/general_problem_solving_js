// Program to find Hide that PIN!

/* Write a function that converts a given PIN to a series of texts that
ensures it can be sent out in plain sight without anyone knowing it. You
first convert the given input number into binary and then use the table
below to generate the string equivalent.
1 = pop
10 = double rip
100 = hide your mints
1000 = fall
10000 = reverse the order of the output.
Examples:
3 -> binary 11 -> 1 + 10 -> output -> [“pop”,”double rip”]
19 -> binary 10011 -> 1 + 10 + 10000 -> output -> [“double rip”,”pop”]
NOTE: Please note the reversal operation in the second example due to the
presence of 10000 */

//This method returns the secret pin
let hidePin = ( number ) => {
    
    let binaryNumber = parseInt(number.toString(2));
    
    let secretPin = []
    const factor = 1;

    let resultOnesTens = oneTensHundredThousand( binaryNumber, res = [], factor)
    
    for(let i=0; i<resultOnesTens.length; i++){
        
        switch(resultOnesTens[i]){
            case 1: 
                secretPin.push("pop")
                break
            case 10: 
                secretPin.push("double rip")
                break
            case 100:
                secretPin.push("hide your mints")
                break
            case 1000:
                secretPin.push("fall")
                break
            case 10000:
                secretPin.reverse()
                break
            
        }
    }

    return secretPin;
}

// This method converts the number to one, tens, hundred.. and store it in an array
let oneTensHundredThousand = ( number , res, factor) => {
    if(number){
        const value = (number % 10) * factor;
        res.unshift(value);
        return oneTensHundredThousand(Math.floor(number / 10), res, factor * 10);
     };
     
     return res.sort();
     
};
const input = prompt("Enter the number to get a secret pin: ");
let resultHidePin = hidePin(input)

console.log(resultHidePin);