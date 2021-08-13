// Exercise 1 – JavaScript Clock
// Add an element to your page that displays the current date,
// time and which day of the week it is, and write a JavaScript 
//script that updates it every second so that it always shows the current time. 
// The expected output should be similar to: “Thursday, 07/01/2015 13:20:00”.
// Required Features:
// • A text display on the page, showing weekday, date and time.
// o The time should be updated in real time, to ensure it stays accurate.

function time(){
  let d = new Date();
  d = new Intl.DateTimeFormat('en-GB', { weekday:'long' }).format(d) +
             ', ' + new Intl.DateTimeFormat('en-GB', { dateStyle: 'short'}).format(d) +
             ' '+ new Intl.DateTimeFormat('en-GB', {timeStyle: 'medium' }).format(d)
  document.getElementById("currentTime").innerHTML = d;
}
setInterval(time, 1000);

// Exercise 2 – Leap Year Calendar
// Add an input field that lets you enter a year, and tie a script to 
//it that checks whether the year entered is a leap year.
// Required Features:
// • An input field that takes a year and calls the script when submitted.
//    The page should not be refreshed.
// • A script that checks whether the year entered is a leap year, and 
//presents the result on the page, as a message.

function findLeapYear(val){  
  if(((val.value % 4 == 0) && (val.value % 100 != 0)) || (val.value % 400 == 0))
  {
    return document.getElementById("isLeapYear").innerHTML =
             val.value + " is a leap year.";
  }else{
    return document.getElementById("isLeapYear").innerHTML =
             val.value + " is not a leap year.";
  }
}

// Exercise 3 – 1st of January = Sunday?
// Write a script that checks whether January 1st on any given year is a Sunday.
// Required Features:
// • An input field that takes a year and calls the script when submitted.
//   The page should not be refreshed.
// • A script that checks whether January 1st falls on a Sunday that year

function januaryFirstIsSunday(){
    let year = document.getElementById("isSunday").value;
    console.log(year) 
    const d = new Date(`01/01/${year}`).getDay();
    // Sunday - Saturday : 0 - 6
    if(d === 0)
    {
      document.getElementById("q3").innerHTML = "1st of January IS Sunday";
    }else{
      document.getElementById("q3").innerHTML = "1st of January IS NOT Sunday";
    }    
}

// Exercise 4 – Guessing game
// Add an input field that lets you enter a number between 1 and 10, and tie
// a script to it that checks  whether the number entered is the same as a
// random number created by the script.
// Required Features:
// • An input field that takes a number and calls the script when submitted.
//   The page should not be refreshed.
// • A script that checks whether the number entered is the same as the random
//   number, and  presents the result on the page, as a message either “Good 
//   Job” if guess is correct or “Did not match” if the numbers are not the same.

function guessNumber(){
  let number = document.getElementById("numberToguess").value;
  if(number < 1 || number >10 )
  {
    document.getElementById("q4").innerHTML =
             "The minimum number to be interd is 1 and the maximum is 10";
  }
  else{
    let randomNumber = Math.floor(Math.random()* 10);
    console.log(randomNumber)

    if(Number(number) === randomNumber)
    {
      document.getElementById("q4").innerHTML =
                `Congratulations! you guess the number ${randomNumber}`;
    }else{
      document.getElementById("q4").innerHTML = "You failed! Try again";
    } 
}   
}

// Exercise 5 – Days until Christmas
// Add an element to your page that displays the days until Christmas. 
// Required Features:
// • A text display on the page, showing the number of days.

let remainingDays = new Date("12-25-2021").getDate() - new Date().getDate();
document.getElementById("q5").innerHTML =
           `${remainingDays} days remaining until Christmas!`;

// Exercise 6 – Reverse input
// Add an input field that lets you enter a string of numbers or characters, 
// and tie a script to it that reverses the input and prints it on the page.
// Example: Input, 12345, Expected output: 54321
// Required Features:
// • An input field that takes a string of numbers or characters and calls 
// the script when submitted. The page should not be refreshed.
// • A script that reverse the input, and presents the result on the page, as a message

function reverseString(){
  let userInput = document.getElementById("reverse").value;
  let userInputArray = userInput.split("");
  let result = [];
  for (let index = userInputArray.length; index >= 0; index--) {
     result.push(userInputArray[index]);
  } 
  document.getElementById("q6").innerHTML =
             `The reversed string is : ${result.join().replaceAll(",", "")}`;    
}

// Exercise 7 – Text manipulation
// Add an input field that lets you enter a word, and tie a script to it that
// generates all combinations of that word.
// Example: Input: “Text” Expected output: T, Te, Tex, Text, e, ex, ext, x, xt, t
// Required Features:
// • An input field that takes a word and calls the script when submitted. The 
//  page should not be refreshed.
// • A script that manipulates the string and generates all combinations, and 
// presents the result on the page, as a message

function stringCombination(){
  let userInput = document.getElementById("textManip").value;
  let userInputArray = userInput.split("");
  let result = [];
  for (let i = 0; i < userInputArray.length; i++) {
    for (let j = i + 1; j <= userInputArray.length; j++) {
      let subString = userInput.substring(i,j)
      if(subString !== ""){
        result.push(subString);  
      }      
    }   
  }  
  
  console.log(result);
  document.getElementById("q7").innerHTML =
             `The combination of string is : ${result}`;    
}

// Exercise 8 – Text manipulation 2
// Add an input field that lets you enter a word, and tie a script to it that 
// organizes the letters in alphabetical order and dislays it.
// Example: Input: “javascript” Expected output: aaijprstv
// Required Features:
// • An input field that takes a word and calls the script when submitted. The
// page should not be refreshed.
// • A script that manipulates the string and puts the letters in alphabetical order,
// and presents the result on the page, as a message.

function alphabeticalOrder(){
  let userInput = document.getElementById("alphabetOrder").value;
  result = userInput.split("").sort().join().replaceAll(",",""); 
  document.getElementById("q8").innerHTML =
           `${userInput} string organized in alphabetical order is : ${result}`; 
}

// Exercise 9 – Text manipulation 3
// Add an input field that lets you enter a sentence, and tie a script to it does 
// two things; first converts the first letter of each word to upper case and second 
// finds the word with the most letters. Example: Input: “welcome to JavaScript” 
// Expected output: Welcome To JavaScript – the longest word is JavaScript
// Required Features:
// • An input field that takes a sentence and calls the script when submitted. The page
// should not be refreshed.
// • A script that manipulates the string and presents the result on the page.
// o Converts the first letter of each word.
// o Finds the longest word

function longestWord(){
  let userInput = document.getElementById("longestWord").value;
  userInputArray = userInput.split(" ");
  console.log(userInputArray)
  result = [];
  for (let i = 0; i < userInputArray.length; i++) {
    //capitalize the first letter:
    let firstLetter = userInputArray[i].charAt(0).toUpperCase();
    result.push(firstLetter + userInputArray[i].slice(1));
  }
  document.getElementById("q9").innerHTML =
           result.sort().join(",").replaceAll(",", " "); 
}

// Exercise 10 – Prime number
// Add an input field that lets you enter a number, and tie a script to it that
// checks whether the number entered is a prime or not.
// Required Features:
// • An input field that takes a number and calls the script when submitted.
// The page should not be refreshed.
// • A script that checks whether the number entered is a prime, and presents
// the result on the page, as a message.

function checkPrimeNumber(){
  let number = document.getElementById("isPrime").value;
  isPrime= false;

  if (number < 0)
    number = Math.abs(number);

  if(number === 1 || number == 2){
    document.getElementById("q10").innerHTML =
             "The number is prime number";
  }
  else{
    for (let index = 2; index <= number; index++) {
      if(number % index === 1)
      {
        isPrime = true;
        continue;
      }
      else{
        break;
      }
    }
  
    if(isPrime)
    {
      document.getElementById("q10").innerHTML =
               "The number is prime number";
    }
   else{
        document.getElementById("q10").innerHTML = 
                "The number is not a prime number";
      } 
  }  
}

// Exercise 11 – Type
// Create a method in JavaScript that accepts a single value as a parameter.The
// method should log the value type of the parameter to the console,  no matter what 
// it is (if a string is sent in, it should output “string” to the console, etc.).
// Required Features:
// • An input field that takes a value and calls the script when submitted.
// The page should not be refreshed.
// • A script that checks the type of the value entered and presents the
// result on the page, as a message

function checkTypeValue(testValue){
  console.log(typeof(testValue))
}

checkTypeValue(123);

// Exercise 12 – if loop statement
// Add a script for loop that will iterate from 0-15 and for every iteration
// display if the number is even or odd. Expected output: “0 is even” “1 is
// odd” “2 is even” “3 is odd”….
// Required Features:
// • A script that will loop for 15 times and display if the current number 
//is even or odd and presents the result on the page, as a message

function evenOrOdd(){
  for (let index = 0; index < 15; index++) {
    if(index %2 === 0)
    {
      console.log(`${index} is even`)
    }
    else{
      console.log(`${index} is odd`)
    }    
  }
}
evenOrOdd();

//TODO
// Exercise 13 – if loop statement
// Add a script to display the first 10 “happy numbers”.
// https://en.wikipedia.org/wiki/Happy_number
// Required Features:
// • A script that will find the first 10 happy numbers and presents 
// the result on the page, as a message


// Exercise 14 – Array
// Add a script to join the elements in an array into a string and display it.
// Sample array: var workDays = [“Monday”, “Tuesday”, “Wednesday”, “Thursday”, “Friday”];
// Expected output: Monday, Tuesday, Wednesday, Thursday and Friday are workdays.
// Required Features:
// • A script that will take the variables in an array and join them
// into a string and presents the result on the page, as a message

function joinArray(){
  var workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let result = workDays.join().replaceAll(",",", ");
  const index = result.lastIndexOf(",");  
  
  document.getElementById("q14").innerHTML = 
            result.substring(0, index)+ " and" +result.substring(index + 1)+
            " are work days";
}
joinArray()

// Exercise 15 – Array 2
// Add a script that will sort the numbers in an array according to size and 
// display it. Sample array: var numbers = [4, 1, 9, -2, 5]
// Expected output: -2, 1, 4, 5, 9.
// Required Features:
// • An input field that takes an array of numbers and calls the script
// when submitted. The page should not be refreshed.
// • A script that will take the numbers in an array and sort the according
// to size and presents the result on the page, as a message

function sortNumbers(){
let userInput = document.getElementById("sort").value;
  document.getElementById("q15").innerHTML = userInput.split(",").sort();
}

// Exercise 16 – Array 3
// Add a script that will remove duplicates items in an array.
// Required Features:
// • An input field that takes an array of items and calls the script when
// submitted. The page should not be refreshed.
// • A script that will find the duplicates of items in the array and 
// presents the result on the page, as a message 

function removeDuplicate(){
  let userInput = document.getElementById("duplicate").value;
  //convert userInput to array then to set and then to array again using [...] for displaying
  document.getElementById("q16").innerHTML = [...new Set(userInput.split(","))].join();

}

// Exercise 17 – Array 4
// Add a script that will remove the ‘null’ and ‘0’ values in an array.
// Required Features:
// • An input field that takes an array of values and calls the script when
// submitted. The page should not be refreshed.
// • A script that will find the ‘null’ and ‘0’ values in the array and 
// presents the result on the page, as a message

function removeNullAndZero(){
  let userInput = document.getElementById("nullAndZero").value;
  console.log(userInput.split(","))
  document.getElementById("q17").innerHTML =
            userInput.split(",").filter( x => x !=="" && x !=0 );
}

// Exercise 18 – Number of days in a month
// Add a script that will find and display the number of days in a given month.
// Required Features:
// • Two input fields that takes a month and a year and then calls the script
// when submitted. The page should not be refreshed.
// • A script that will find the month and year and gets the number of days
// in that month and presents the result on the page, as a message 

function numberOfDaysInMonth(){
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  const d = new Date(year, month, 0).getDate()
  document.getElementById("q18").innerHTML = `The number of days is ${d}`;

}

// Exercise 19 – Time Convertion
// Add a script that will convert the number of minutes into hours and minutes.
// Sample input: 96. Expected output: 1 hour(s) and 32 minute(s).
// Required Features:
// • An input field that take the number of minutes and calls the script when
// submitted. The page should not be refreshed.
// • A script that will convert the number of minutes into the number of hours
// and minutes and presents the result on the page, as a message

function convertMinutesToHour(){
  let minutes = document.getElementById("minutes").value;
  if(minutes < 60){
    document.getElementById("q19").innerHTML = `You have entered ${minutes} `;
  }else{
    let  hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60
    document.getElementById("q19").innerHTML = 
                    `You have entered ${hours}  and ${remainingMinutes} minutes`;
  }
}

// Exercise 20 – Get the age
// Add a script that will calculate the age from a given year. Sample input: 1980
// Expected output: The age is 36. 
// Required Features:
// • An input field that take a year and calls the script when submitted. 
// The page should not be refreshed.
// • A script that will calculate the time from the input until today presents
// the result on the page, as a message

function ConvertYearToage(){
  let year = document.getElementById("age").value;
  let age = new Date().getFullYear() - new Date(`01/01/${year}`).getFullYear();
  document.getElementById("q20").innerHTML = `Your age is ${age}`;
  
}
