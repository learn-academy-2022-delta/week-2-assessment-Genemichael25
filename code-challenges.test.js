// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.

// describe("functionName", () => {
//   it("describes what my test and function does", () => {
//     expect(functionName("pass any params needed")).toEqual("Expect output")
//   })
// })

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("easyThree", () => {
  it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    const num1 = 15
    // Expected output: "15 is divisible by three"
    const num2 = 0
    // Expected output: "0 is divisible by three"
    const num3 = -7
    // Expected output: "-7 is not divisible by three"
    expect(easyThree(num1)).toEqual("15 is divisible by three")
    expect(easyThree(num2)).toEqual("0 is divisible by three")
    expect(easyThree(num3)).toEqual("-7 is not divisible by three")
    })
})

// ReferenceError: easyThree is not defined

// b) Create the function that makes the test pass.

//Pseudocode:
// Declare the function called easyThree
// Set a parameter as anyNum
// Use a conditional statement to decide if any number is evenly divisible by 3
    // Use modulo and strictly equal to 0
// Use JEST to test 

const easyThree = (anyNum) => {
    if (anyNum % 3 === 0){
        return `${anyNum} is divisible by three`
    } else {
        return `${anyNum} is not divisible by three`
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("firstCapital", () => {
  it("takes in an array of words and returns an array with all the words capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    expect(firstCapital(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(firstCapital(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

//ReferenceError: firstCapital is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function called firstCapital
// Set the parameter as an array
// Use map to iterate over each element in the array
    // Take the first character (index 0) of each word using charAt and capitalize it using toUpperCase
    // Combine it with the rest of the word which we can slice at index 1

const firstCapital = (array) => {
    return array.map (word => word.charAt(0).toUpperCase() + word.slice(1))
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  it("takes in a string and logs the index of the first vowel", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
})
})

//ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.

//Pseudocode:
// Declare a function called firstVowel
// Take a string and put into newArray
// Assign the variable vowels
// Use map to iterate over the new array and compare to vowels 
    // Return using indexOf 
    // This was my first thought when approaching this problem, but I couldn't get it to pass. 

// const firstVowel = (string) => {
//     let newArray = [string.split("")]
//      let vowels = ["a","e", "i", "o", "u"]
//         newArray.map (string => string === vowels);{
    //             return string.indexOf(vowels)
    //         }
    //     }

// Declare a function called firstVowel
// Use a for loop to check for the vowels
    // Set a conditional statement using OR (||)
// Return the index of the first vowel

const firstVowel = (string) => {
    for(let i = 0; i < string.length; i++){
            if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
        return i
    }}
}   
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total