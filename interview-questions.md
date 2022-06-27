# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is the part of the function where an argument will be passed. The parameter isn't necessarily assigned a value or data, but an argument will. For example, we can set a parameter as array. When we pass the argument, or an array, that array will have values.  

  Researched answer: A parameter is a variable that acts as a placeholder inside the parentheses of a function. By using it as a parameter, we can use the same variable in the logic portion of the function. We can then pass any argument through that parameter and receive different outputs according to the code. 



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The method .map() takes the predefined parameters of value, index, and array. Value is required, and the other two are optional. 

  Researched answer:The .map higher order function can take up to three parameters. They are value, index and array. As stated previously, the only one required is the value argument. The other two can be useful depending on the end goal with our code. One example would be multiplying the values by their index. In this case, we would want to use the second parameter.



3. What is the difference between map and filter?

  Your answer: The difference between map and filter is that map results in an array with the same number of elements it is iterating over. Filter can result in an array with fewer elements depending on the criteria, or what we are filtering out. They both iterate over each element in an array.

  Researched answer: While they are both higher order functions, they work a bit differently. Filter is useful for returning a subset of an array by checking each element against the criteria we have established. On the other hand, map will perform an action on each element and return an array of the same length. 



4. What is the difference between a function and a method?

  Your answer: A method is a function within an object. And a function is an action that is executed when invoked. It takes an input, and returns an output based on the code.

  Researched answer: A function is a block of code that can be used as many times as we need. It takes in an input, performs an action based on our code and provides an output. A method is a function within an object. It is a property of that object.



5. What is object destructuring?

  Your answer: Object destructuring is taking a value from an oject an assigning it to a variable. By doing this, we can then call on that data more easily.

  Researched answer: Object destructuring allows us to take the properties from an object and assign them to a variable. That is, we reference the key to get the value and assign it to a variable so we can access that data by recalling that variable. This can be very useful for nested objects. Heres an example.

  const student = {
  name: 'Gene',
  age : 31
};
  This is where the object destructuring takes place.
  const { name, age } = student;
  name;     // => 'Gene',
  age ; // => 31



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I am not too familiar with hoisting but I believe I have seen the term before. I think it has to do with variables but I would need to look into it a bit more. 

  Researched answer: Hoisting is when Javascript moves declarations of variables to the top of the current block. It does not however move the assigned values. This is why it is very crucial to declare variables before we get errors in our code due to hoisting. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: It is taking the properties and methods of an existing class and using them to create a new class.

2. React: React is a Javascript User Interface library that was created by Facebook. 

3. React state: It is a built in React object. It holds data and can change because of user interaction. When the state changes, the component it is holding information for will re-render.

4. React lifecycle methods: There are three main phases to each component in React and they are mounting, updating, and unmounting. 

5. DOM: Document Object Model allows for the modification of everything in an HTML page. It is not a programming language but instead an application programming interface.
