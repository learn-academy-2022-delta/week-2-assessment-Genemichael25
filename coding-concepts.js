// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer: ["D","e","l","t","a","2","0","2","2"]
// b) Verify and explain: Missed empty character (" ") in between Delta and 2022 , The variable cohort is assigned the string "Delta 2022". By using the split built in method, we are taking the string and separating it according to the quotation marks. The quotation marks with no space ("") seperate each character by itself, including spaces. If there was a space in between the quotes after split ( .split(" ")), it would seperate the string by words ("Delta", "2022").


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: undefined, This is because we didn't ask for a return in the function. The parameter and string interpolation are correct but its missing the return in line 20. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: In this problem, .map is iterating over each element and multipliying it by 2. The output will be an array with the same number of elements. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11,13,15]
// b) Verify and explain: The array onlyOdds is being iterated over using filter. It is taking each value in the array and using modulo to see if the value is divided by 2, is there NOT (!) a remainder of 0. If the remainder did equal 0, this would indicate the number was even and did not meet the criteria for being filtered into the new array we see as the output.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: This is using dot notation to get to languages within the object myCodingSkills. Then we are asking for the element at index 0, which gives us back the first one, JavaScript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student:"George", cohort:"Bravo", year:2022}
// b) Verify and explain: I missed the class name (Learn) before the key value pairs, but everything else logged as expected. We are using the class Learn to make a new object (learnStudent). When the object is created, only the value of "George" was passed and the rest of the key:value pairs remain the same.
