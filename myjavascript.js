// Exercise 1 – JavaScript Clock
// Add an element to your page that displays the current date, time and which day of the week it 
// is, and write a JavaScript script that updates it every second so that it always shows the current time. 
// The expected output should be similar to: “Thursday, 07/01/2015 13:20:00”.
// Required Features:
// • A text display on the page, showing weekday, date and time.
// o The time should be updated in real time, to ensure it stays accurate.

function time(){
  let d = new Date();
  d = new Intl.DateTimeFormat('en-GB', { weekday:'long' }).format(d) + ', ' + new Intl.DateTimeFormat('en-GB', { dateStyle: 'short'}).format(d) +' '+ new Intl.DateTimeFormat('en-GB', {timeStyle: 'medium' }).format(d)
  document.getElementById("currentTime").innerHTML = d;
}
setInterval(time, 1000);

// Exercise 2 – Leap Year Calendar
// Add an input field that lets you enter a year, and tie a script to it that checks whether the year entered is 
// a leap year.
// Required Features:
// • An input field that takes a year and calls the script when submitted. The page should not be 
// refreshed.
// • A script that checks whether the year entered is a leap year, and presents the result on the page, 
// as a message.

function findLeapYear(val){  
  if(((val.value % 4 == 0) && (val.value % 100 != 0)) || (val.value % 400 == 0))
  {
    return document.getElementById("isLeapYear").innerHTML = val.value + " is a leap year.";
  }else{
    return document.getElementById("isLeapYear").innerHTML = val.value + " is not a leap year.";
  }
}

// Exercise 3 – 1st of January = Sunday?
// Write a script that checks whether January 1st on any given year is a Sunday.
// Required Features:
// • An input field that takes a year and calls the script when submitted. The page should not be 
// refreshed.
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
// Add an input field that lets you enter a number between 1 and 10, and tie a script to it that checks 
// whether the number entered is the same as a random number created by the script.
// Required Features:
// • An input field that takes a number and calls the script when submitted. The page should not be 
// refreshed.
// • A script that checks whether the number entered is the same as the random number, and 
// presents the result on the page, as a message either “Good Job” if guess is correct or “Did not 
// match” if the numbers are not the same.

function guessNumber(){
  let number = document.getElementById("numberToguess").value;
  if(number < 1 || number >10 )
  {
    document.getElementById("q4").innerHTML = "The minimum number to be interd is 1 and the maximum is 10";
  }
  else{
    let randomNumber = Math.floor(Math.random()* 10);
    console.log(randomNumber)

    if(Number(number) === randomNumber)
    {
      document.getElementById("q4").innerHTML = `Congratulations! you guess the number ${randomNumber}`;
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
document.getElementById("q5").innerHTML = `${remainingDays} days remaining until Christmas!`;

// Exercise 6 – Reverse input
// Add an input field that lets you enter a string of numbers or characters, and tie a script to it that reverses 
// the input and prints it on the page.
// Example: Input, 12345, Expected output: 54321
// Required Features:
// • An input field that takes a string of numbers or characters and calls the script when submitted. 
// The page should not be refreshed.
// • A script that reverse the input, and presents the result on the page, as a message
function reverseString(){
  userInput = document.getElementById("reverse").value;
  userInputArray = userInput.split("");
  let result = [];
  for (let index = userInputArray.length; index >= 0; index--) {
     result.push(userInputArray[index]);
  } 
  document.getElementById("q6").innerHTML = `The reversed string is : ${result.join().replaceAll(",", "")}`;    
}

// Exercise 7 – Text manipulation
// Add an input field that lets you enter a word, and tie a script to it that generates all combinations of that 
// word.
// Example: Input: “Text” Expected output: T, Te, Tex, Text, e, ex, ext, x, xt, t
// Required Features:
// • An input field that takes a word and calls the script when submitted. The page should not be 
// refreshed.
// • A script that manipulates the string and generates all combinations, and presents the result on 
// the page, as a message
function stringCombination(){
  userInput = document.getElementById("textManip").value;
  userInputArray = userInput.split("");
  let result = [];
  for (let i = 0; i < userInputArray.length; i++) {
     result.push(userInputArray[i]);
     while(i < userInputArray.length )
     {
      result.push(userInputArray[i]);
     }   
  } 
  
  console.log(result);
  document.getElementById("q7").innerHTML = `The combination of string is : ${result.join().replaceAll(",", "")}`;    
}