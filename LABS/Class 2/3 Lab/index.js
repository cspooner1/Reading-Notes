let name = "";
let age = "";
let school = "";
let color = "";
let job = "";
let cook = "";

let questionsAnswered = 0

function displayname() {
    let answer = prompt("Name?");
    alert("What it do " + answer);
    document.getElementById("name").innerHTML = "What it do " + answer;
    console.log("What it do " + answer);
}

function displayage() {
    age = prompt("Am I 19 or not?");
    age.toUpperCase();
    if (age == "y" || age == "Y" || age == "Yes" || age == "yes") {
        alert("Your actually smart!");
        document.getElementById("age").innerHTML += age;
    } else if (age == "") {
        alert("WHY DIDNT YOU ANSWER!!!");
    } else {
        alert("Your Wrong!!!");
    }
    console.log()
    questionsAnswered += 1
}

function displayschool() {
    school = prompt("Did I gradute early?");
    school.toUpperCase();
    if (school == "y" || school == "Y" || school == "yes" || school == "Yes") {
        alert("I knew you could it!");
        document.getElementById("school").innerHTML += school;
    } else if (school == "") {
        alert("WHY DIDNT YOU ANSWER!!!");
    } else {
        alert("Your Wrong!!!");
    }
    questionsAnswered += 1
}

function displaycolor() {
    color = prompt("Is my favorite color yellow?");
    color.toUpperCase();
    if (color == "n" || color == "N" || color == "no" || color == "No") {
        alert("You have a decent IQ!");
        document.getElementById("color").innerHTML += color;
    } else if (color == "") {
        alert("WHY DIDNT YOU ANSWER!!!");
    } else {
        alert("Your Wrong!!!");
    }
    questionsAnswered += 1
}

function displayjob() {
    job = prompt("Do I not want to be a Software Developer?");
    job.toUpperCase();
    if (job == "n" || job == "N" || job == "no" || job == "No") {
        alert("Your very bright aint ya");
        document.getElementById("job").innerHTML += job;
    } else if (job == "") {
        alert("WHY DIDNT YOU ANSWER!!!");
    } else {
        alert("Your Wrong!!!");
    }
    questionsAnswered += 1
}

function displaycook() {
    cook = prompt("Am I a good chef?");
    cook.toUpperCase();
    if (cook == "y" || cook == "Y" || cook == "yes" || cook == "Yes") {
        alert("I know you better had gotten it right!!");
        document.getElementById("cook").innerHTML += cook;
    } else if (cook == "") {
        alert("WHY DIDNT YOU ANSWER!!!");
    } else {
        alert("Your Wrong!!!");
    }
    questionsAnswered += 1
    if (checkAnswer == 5) {
        alert("Thank you for taking my quiz")
    }
}

function displaynumber() {
    number = prompt("Guess a number between 1 and 10!")

    while (number != 7) {
        if (number < 7) {
            alert("Your answer is too low! Try again!")
            number = prompt("Please guess number again!");
        } else if (number > 7) {
            alert("Your number is too high! Try again!");
            number = prompt("Please guess again");
        }
    }
    alert("You are correct!")
}
const array = ["A. Fortnite", " B. Rainbow 6 Siege", " C. Assassins Creed ", " D. Tekken 7"];
const list = document.getElementById("list");

function Answerchoices() {
    alert("Answers: " + array);
}
function displaygames() {
    
   let answer = prompt("Answer with the letter choice for the game only.")
    
    for (let i = 0; i < 6; i++) {


        if (answer == "C" || answer == "D" || answer == "d" || answer == "c") {
            alert("Correct!");
            document.getElementById("answer").innerHTML += answer;
            break
            ;

        } else {
            alert("incorrect");
            answer = prompt("Please Try Again")
                ;
        }
    }



}

let button = document.querySelector("button");

