/* Write a function that tells if a given number is perfect or not. A number is called perfect if the
sum of the factors of a number (excluding the number itself) is the number itself.
Return “Perfect” if the number is perfect
if the sum of factors is greater than the input return “Abundant”
if the sum of factors is lesser than the input return “Deficient”.
Example:
1) 6 -> factors(1,2,3) -> sum (1+2+3) = 6 (perfect number)
2) 12 -> factors(1,2,3,4,6) -> sum(1+2+3+4+6) = 16 > 12 (Abundant)
3) 8 -> factors(1,2,4) -> sum(1+2+4) = 7 < 8 (Deficient) */

//This method check whether the number is perfect and returns the keyword assigned to it.
let amIPerfect = ( number ) => {
    let sum = 1;
    for(let i = 2; i<number; i++){
        if(number % i == 0){
            sum += i;
        }
    }

    let abundantOrDeficientNumber = (sum > number)? ("Abundant") : ("Deficient");

    if(sum != number)
        return abundantOrDeficientNumber;
    
    return "Perfect"

}
const input = prompt("Enter the number?")
let resultPerfect = amIPerfect(input);
console.log(resultPerfect);