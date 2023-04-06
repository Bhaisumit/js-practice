console.log("lo mai chl diya")
// talk about varibales 
var score=34;
var score=5;
console.log(score);
// now a days we use let
let points=25;
points=35
console.log(points)
// point to be noted 
// let and var me reassignment toh hojata h at least but const me reaassingment bhi nahi hota hai
// constanst
const a=10;
console.log(a)

// data types in js
// numbers, strings ,boolean,null(special data type ),
let cv=345; //number
console.log(cv)
let bo="sumit" //string
console.log(bo)
const ap=null; //null
console.log(ap)
// undefined variable declared but not intialized
let c;//undefined
console.log(c)
//Object(complex data structure)
//Symbol

//lets talk about briefly of string
let firstName="sumit";
let lastName="chandola"
console.log(firstName,lastName)//automatically created space b/w first and last name(it is the property of console.log)

// string concatentaion
// method 1 using + operator
let fullname=firstName+ " "+lastName
console.log(fullname);
//method 2 using template literals
let fullName=`i want to become ${firstName} ${lastName}`
console.log(fullName);
// getting string character
console.log(firstName[3])
// string methods
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())

console.log(firstName.indexOf("m")) // it always return first matching index

let hobbies="    coding is not for me"
// trim method
let result=hobbies.trim()
// console.log(hobbies.trim());
console.log(result);

// indexOf
console.log(result.indexOf("not"))

//include method(imprtant)
console.log(result.includes("se")) // used to check whther the value inside include is present or not , if presnt it'll return true else return false



//slice method ( it is also imprtandt and most of time used)


let alphabet="Abcde"
let ans=alphabet.slice(0,4);
console.log(ans) //excluding the last index like in this example 4th index is not included

//important note doex not mutate original array

console.log("Original String=",alphabet)
console.log("extracted string =",ans)


//split method
let favcolors="brown , blue black gray";
let arrcolors=favcolors.split(",");
console.log(arrcolors)





//javascript srings are immutable
let str="hello"
str[0]="p" //strings are immutable
console.log(str)

str=str+"programmer"
console.log(str)

//Numbers
let scores=600;
console.log(scores,typeof scores)

// Mathmetical operators + - / % **

let aa=scores/2; //give quotient
console.log(aa)
console.log(aa%600 )  // give remainder

// important point : string +number = string ( bcox loosely typed language)


//loose equlaity(==) and strict equality operator(===)
let sir=34;
console.log(sir=="34") //loosely strict operator focus only on value not type 
    console.log(sir==="34") //strictl equality operator


    //type conversion
let stringtype="12";
console.log(stringtype,typeof stringtype);
// Numbeer method
let no=Number(stringtype)
console.log(no,typeof no)

//String method
let notype=12;
let stringtypes=String(notype);
console.log(stringtypes,typeof stringtypes)

//boolean method
let sumit=23;

let booleanvalueofage=Boolean(sumit);
console.log("boolean value of age is",booleanvalueofage)

//Arrays
let dishes=["biryani","gajarhalwa","rayta"]
console.log(dishes)
//modify the array
dishes[1]="kheer"
console.log(dishes[1])

//Join method

console.log(dishes.join(" "))
//indexOf
console.log(dishes.indexOf("biryani"))


//concat method
let newdishes=["sweetdish","panipori"]
let updatedish=dishes.concat(newdishes);
console.log(updatedish);

//push method is mutrator method it will change or modigy the array

console.log(updatedish.push("bhallay")) // return new length of array
console.log(updatedish);
//p0p
console.log(updatedish.pop())

//boolean value and comparison operators
let bool=true;
let string="true";
console.log(typeof bool, typeof string)

//METHODS RETURN BOOLEAN VALUES
let email="sumitchandola312.com"
let booleanValue=email.includes('@')
console.log(booleanValue)

//CONTROL FLOW
// FOR LOOPS
 for(let i=0;i<5;i++){
    console.log("hello")
 }
 //USECASE OF FOR LOOP
 let favfood=["soup","rayta","dhayni"]
 for(let i=0;i<favfood.length;i++){
    console.log(favfood[i])
 }
 //break and continue and also called jump statement

 //continue statement
 //used to skip some value of loop

 for(let i=0;i<=10;i++){
    if(i==2){
        break;
    }
    console.log("m bhar aagya",i)
    
 }
 //variable and block scope
//global scope
let cd=49;
 if(true){

    // let cd=49;
   let cd=50;
    console.log(cd);
 }
 console.log(cd)
 //TERNARY OPERATOR
 let age=19;
 if(age>18){
    console.log("Qualified");
 }
 else{
    console.log("fail")
 }

 //single line solytion
 let resulut=age>18?"Qualify":"fail"
 console.log(resulut)
 switch(age){
    case 15:
        
        case 16:
            
            case 17:
            
        resulut="THESE AGES ARE ALLOWED TO SIT IN EXAM"
break;
default:
    resulut="Not Allowed"
 }
 console.log(resulut)

 //function
 function nameOfFunction(){
    console.log("you are running function")
 }
 nameOfFunction()
 //Function Expression
 let fun=function(){//also called anonymous function
console.log("this is and example fo function expression")


 }
 // calling function
 fun()

 //Real example
 let invitation=function(name="unknown" ,time='night'){
    console.log(`welcome ${name} you are invited on our event at ${time}`)
 }
 invitation()

 //arrow function es6

 let source=()=>{
    return `hello `
 };
 console.log(source())

 // MOST IMPORTANT   -->
 //PASSING FUNCTION AS AN ARGUMENT (HIGHER ORDER FUNCTION EXAMPLE)

 //example-1
 let us=function(str){
    return str.toUpperCase();
 }
 let lower=function(str){
    return str.toLowerCase();
 }
 let transformer=function(str,fun){
    return fun(str)
 }
 console.log(transformer("hello",us))
 console.log(transformer("hello",lower))

 //example-2
 //fuction
 //function returning another function

 let compliment=function(msg){
    return function(nae){
        console.log(`${msg} ${nae}`)
    }
 }
 compliment("You r a good coder u know ")("sumit")

 //2nd method
 let complimented=compliment("You r a good coder u know ")
 complimented("Lurie")

 //complement is higher order function

 //function
 //immediately invoked function expression
 //executed only once 

 //now this is expression
 
  //talk this later

  //setimeout and setinterval
  //settimeout->run fuction "once " after "interval " of time
  //setinterval->run function repeatedly , starting after the intrvl of time, then repeating..


  //settimeout
function greeting(naame){
    console.log(`welcome ${naame} call`)
}
//   setTimeout(greeting,3000)
  //setinterval
  setInterval(greeting,2000,"spmi")


  //hoisting
  tests=45;
  console.log(tests)
  var tests;
 
  //intro to object


  let car={
    color:"red",
    tyres:"4"
  }
  car.color="voilet"
  console.log(car)
  console.log(car.color)


//delete properties of object
  let obj={
    prop1:"blue",
    prop2:"black"
  }
  delete obj.prop1; //always return true
  console.log(obj)

  //object inside array
  let block=[
    {username:"sumit",reason:"abusive"},
    {username:"mohit",reason:"harmful"}
]
for(let i=0;i<block.length;i++){
console.log(` blocked this person ${block[i].username} due to this reason ${block[i].reason}`)
}

//working with arrays methods

let arrays=["a","b","c","d"]
//reverse(mutate the original array)
const reverse=arrays.reverse()
console.log(arrays)

let nums=[1,2,3,4,5]
let conct=nums.concat(arrays);
// note it is not mutable function

console.log(...nums,...arrays) //spread operator
console.log(conct)
console.log(nums)

//slice method
//used to extract the part of an array
//Array.slice(startIndex,lastIndex(excluded))
//return new array of extracted element
 
let extractedarray=nums.slice(1,4)  //4th index is excluded
console.log(extractedarray)

//splice method
//used to add new elements into the array
//Array.splice(index,deleteValue,valueTobeAdded)
//Return deleted items in the form of array
// it also mutate original arry
let splicearray=nums.splice(2,2,3);
console.log(nums)
console.log(splicearray)

//at method

let nm="larray" //at method also wrks on strings
console.log(nm.at(-3)) 
console.log(nums.at(-1)) //return last element of nums array becox indes is -1
console.log(nums.at(-2)) //return second lasst element


//map method
// it create new array from original array by aplying transformation function

let salaries=[3000,50000,3999,39990]
let newsalaries=salaries.map(salary=>{
    let incrementedAmount=salary/2;
    return salary + incrementedAmount;
})
console.log(newsalaries)
//length of new aray is always equal to original array

//filter method(used to perform filteration on array)

let gifts=["watch","ring","chochlate","mangopipe"]
// now we want to filter only" watch and ring" gifts
let filteredArray=gifts.filter(gift=>{
    if(gift!=="watch"){
        return gift
    }
})
console.log(filteredArray)


//reduce method

//run reduce function for each array element
//Aray.reduce(function(total,currentValue),initalValue))
//it return single value

//sum of all elemets using reduce method

let num=[1,4,5,6,3]
let sum=num.reduce(function(total,currentVal){
    return total+currentVal;
},0)
console.log(sum)

//ARRAY DESTRUCTURING
let itemss=[3,4,5,3,2]
// let x=itemss[0];
// let y=itemss[1];
// let z=itemss[2];
// console.log(x,y,z)

//now we do above example with help of array destructuring

let [x,y,z]=itemss;
console.log(x,y,z)

//example 2
let hotel={
    namee:"dahpa",
    locationi:"delhi",
    categories:["cinemese","italina","indian"]
}
let[fist,,thrd]=hotel.categories;
console.log(fist,thrd)

//destructuring of nested arrays

let supers=[2,3,[6,9]];
// let[ad,,bd]=nums;
let [ad,,[bd,cdd]]=supers
console.log(ad,bd,cdd)


// DESTRUCTURING OF OBJEECTS
let{namee,locationi}=hotel;
console.log(namee,locationi)

