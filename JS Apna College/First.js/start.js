// let age = 82;
// if (age > 60){
//     console.log("Senior");
// } else if (age < 30){
//     console.log("Junior");

// }
// let age = 46;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result)
// age >= 18 ? console.log("adult") : console.log("not adult");

// let score = prompt("Enter score");
// if (score <= 100 && score > 79){
//     console.log("Grade: A");
// }else if (score <= 79 && score > 70){
//     console.log("Grade: B") 
    
// }else if (score <= 69 && score > 60){
//     console.log("Grade: C") ;
    
// }else if (score <= 59 && score > 50){
//     console.log("Grade: D");
    
// }else if (score <= 49 && score > 0){
//     console.log("Grade: F"); 
    
// }
// let n;
// let num = prompt("Guess the number")
// for (i=0;i<5;i++){
//     let num = prompt("Guess the Number again");
//     if(num == 23){
//         console.log("correct guess");
//         n = true;
//         break;
//     }else{
//         console.log("wrong");
//         n = false;
//     }
// }
// if(n == false){
//     console.log("Times up")
// }
// let str1 = "Ganesh Sharma"
// console.log(str1.slice());


// let firstName = prompt("Enter your First Name");
// let lastName = prompt("Enter your Last Name");
// firstName = firstName.trim();
// firstName = firstName.toLowerCase();
// lastName = lastName.trim();
// lastName = lastName.toLowerCase();
// fullName = lastName + firstName             
// let userName = "@" + fullName + fullName.length;
// console.log(userName);


// let marks = [97, 44, 55, 87, 12, 56, 98];
// let avgMarks = 0;
// for(let mark of marks){
//     avgMarks += mark;
    
// }
// avgMarks = avgMarks/marks.length;
// console.log(avgMarks)

// let price = [100, 345, 456, 654, 1000, 56, 87];
// let dis = []
// for(i=0;i<=6;i++){
//     dis[i] = price[i] - price[i]*10/100;
    
// }
// console.log(dis);

//DOM Manipulation - Properties

// tagName

// let firstElement = document.querySelector("p");
// console.dir(firstElement);
// let allElement = document.querySelectorAll("p");
// console.dir(allElement);
// let heading = document.querySelector("h2");

// let i = 1;
// let divs = document.querySelectorAll(".box");
// for(div of divs){
//     div.innerText = `This is div ${i}`;
//     i++;
// }

// let dives = document.querySelector(".box");
// console.log(dives.setAttribute("class", "dabba"));

// let dives = document.querySelector(".bada");
// console.log(dives.setAttribute("class","dabba"));



// const body = document.querySelector(".bada")

// const box = document.querySelector("#f")
// ranMethod = () =>{
//     const xPosition = Math.floor(Math.random() * (body.clientWidth));
//     const yPosition = Math.floor(Math.random() * (body.clientHeight));

//     box.style
//     box.style.left = `${xPosition}px`
//     box.style.top = `${yPosition}px`
// }
// box.addEventListener('mouseover',ranMethod);    

// let body = document.querySelector("body")

// let newBtn = document.createElement('button');
// newBtn.innerText = "click me"
// body.prepend(newBtn);
// newBtn.style.backgroundColor  = 'red'
// newBtn.style.color = 'white'

// let p = document.createElement('p');
// p.innerText = 'New';
// let newClass = document.createElement('div');
// newClass.prepend(p);
// body.prepend(newClass);
// newClass.setAttribute('class','box')
// newClass.setAttribute("class","dabba")
// // let div = document.querySelector('newClass')
// //classList use

// // newClass.classList.add("another")


// newClass.setAttribute('class', 'box another')


//inheritence

class Person {
    canEat (food) {
        console.log("eats");
        this.food = food;
        console.log("Fav food", food)
    }
    canSleep () {
        console.log("sleeps");
    }

    work (){
        console.log("do nothing")
    }
}

class Engineer extends Person  {
    canCode () {
        console.log("codes");
    }
    work (){
        console.log("build something")
    }
}

class Doctor extends Person{
    work () {
        console.log("treat patients")
    }
}

let Ganesh = new Engineer;
let sakshi = new Doctor








