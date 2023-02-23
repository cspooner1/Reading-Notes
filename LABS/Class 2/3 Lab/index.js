let name ="";
let age = "";
let school = "";
let color = "";
let job = "";
let cook = "";

let questionsAnswered=0

function displayname() {
    let answer = prompt("Name?");
    alert ("What it do " + answer);
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
   if (checkAnswer == 5){
    alert("Thank you for taking my quiz")
   }
}

let button = document.querySelector("button");

