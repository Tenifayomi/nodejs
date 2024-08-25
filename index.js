//var or let or const
var name = 'Moses'
console.log(name)
//redeclare
var name = 'Teni'
console.log(name)
//reassign
name = 'larry'
console.log(name)

let userName = 'Tommy'
console.log(userName) //let key word cannot redeclare but can reassign
userName = 'Temmy'
console.log(userName)


const Gender = 'Female' // cannot redeclare or reassign

//arithmetic op
var fig1 = 3
var fig2 = 10
console.log(fig1 + fig2) // +, -, /, *, % = modulus will give the remainder

//data types in javascript
// strings
//integer
//boolean
//object or arrays
//null
//big Int
//undefined
//symbol

var School = 'Applick'
 console.log(typeof(School))

 var age = 26
 console.log(typeof(age))

 var fig = 120n
 console.log(typeof(fig))

 var phone
 console.log(typeof(phone))

 var bug = null
 console.log(typeof(bug))

// var sym = symbol('work')
 //console.log(typeof(sym));

 var user = {name:'Adam',age: 26, gender: 'male'}

 console.log(user)
 console.log(typeof(user))

 var network = ['mtn', 'glo', 23, false, {gender:'male'}]
 console.log(network)
 console.log(typeof(network))

 // == check value equality
 // === checks for data types

 //strings
 var award = 'Headies   '

 console.log(award.length)
 console.log(award[0])

 //string methods
console.log(award.length)

 var newAward = award.trim()

 console.log(newAward.length)

 var another = newAward.replace('H', 'T')
 console.log(another)

 console.log(another.toLowerCase())
 
 console.log(another.toUpperCase())

 console.log(another.includes('K'))
 
 console.log(another.includes('e'))


 //number methods
var num2 = 32
 console.log(num2.toExponential(2));

 var num1 = 32.12445


  console.log(num1.toFixed(2));
  
 var convertedNum=  num1.toLocaleString()
 console.log(convertedNum);

 console.log(num1.toPrecision(4))


 //Math methods
 console.log(Math.PI);
 var pi = Math.PI
 console.log(pi.toPrecision(3))

  console.log(Math.random()); // GIVES A RANDOM NUMBER BETWEEN 0 AND 1

  console.log(Math.round(23.12345));

  console.log(Math.floor(23.7654));

  console.log(Math.ceil(23.7654));

  

  //functions are blocks of codes that perform a particular task and run only when it is called

  //anonymous function
  // named function
  //arrow function

//anon
  function SayHello(){
    console.log('Hello')
  }
  SayHello()
  SayHello()
  SayHello()

//named
  const greet = function(){
    console.log('You are welcome')
  }

greet()

  //arrow
  const add = ()=>{
    console.log('Add')
  }

  add()

  //return

  function square(number){
    return(
        //number **2
        //"The square of " + number + " is: " + (number**2)
        `The square of ${number} is ${number**2}`
    )

  }
  console.log(square(5))

  //declare a function that calculate age
  //declare a function thatchecks calculate area of a circle

  function calculateAge(DOB){
    var year = new Date().getFullYear()
    return(
      //`You are ${2024- DOB} years old`
        `You are ${year - DOB} years old`
    )
  }
  console.log(calculateAge(1998))

  // function Area(Radius){ 
  //   var Fig = Math.PI
  //   return(
  //       `Area of a circle is ${Fig * Radius**2}`
  //   )
  // }
  // console.log(Area(4))

  const Area = (Radius)=>{
    var fig = Math.PI
    return(
        `Area of a circle is ${fig * Radius**2}`
    )
  }
  
  console.log(Area(4))

  //date
  var date  =new Date()
 console.log(date)
 console.log(date.getFullYear())
 console.log(date.getHours())

var day = date.getDay()
 var month = date.getMonth()
 var year = date.getFullYear()

console.log(`Today's date is ${day} : ${month +1} : ${year}`)

console.log(date.toDateString())


   
var hours = date. getHours()
 var min = date.getMinutes()
 var sec = date.getSeconds()

console.log(`The time is ${hours} : ${min} : ${sec}`)


let userAge = 20
let country = 'NGR'

if(userAge >= 18 && country == 'NGR'){
    console.log('Eligible to vote')
}else if( userAge >=25 && country !='NGR'){
    console.log('Eligible to vote')
}else{
    console.log('Not eligible')
}
   
//Ternary Operator
let myAge = 18
let town = 'UAR'
const vote = myAge >= 18 && town == 'NGR' ? "Eligible to vote from ternary" : myAge >=25 && town !='NGR' ?  "Eligible to vote from ternary" : "not eligible to vote from ternary"

console.log(vote)

//Switch Op
 var dayofweek = 'wednesday'
 switch(dayofweek){
    case "Monday":
        console.log('hello Monday')
        break;
        case "Tuesday":
            console.log('hello Tuesday')
            break;
            case "Thursday":
                console.log('hello Thursday')
                break;
        default:
            console.log("Invalid input")
 }

var dayofweek = day
switch(dayofweek){
   case 1:
       console.log('Hello Monday')
       break;
    case 2:
        console.log('Hello Tuesday')
           break;
    case 3:
        console.log('Hello wednesday')
            break;
    case 4:
        console.log('Hello Thursday')
            break;
    case 5:
        console.log('TGIF')
            break;
    default:
        console.log("Invalid input")
}

// console.log(dayofweek)

