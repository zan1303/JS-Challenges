

//1.


//9. Return a Boolean if a number is divisible by 10

//Change the "number" variable to get the TRUE/FALSE statement
const isDivisibleByTen = () => {
    const number = 500;
    if(number % 10 === 0) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}
isDivisibleByTen();

//10. Return the number of vowels in a string

let string = "I'm a developer";

const vowelCounter = () => {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let char of string.toLowerCase()) {
        if (vowels.includes(char)) {
            count += 1; 
        }
    }

    return count > 0 ? `Number of vowels: ${count}` : "No vowels found";
};

console.log(vowelCounter());