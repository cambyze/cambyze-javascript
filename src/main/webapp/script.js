// Script to perform classic operations


// Function to remove a substring
function removeString(stringToModify, stringToRemove) {
    while (stringToModify.includes(stringToRemove)) {
        console.log(stringToModify.indexOf(stringToRemove))
        stringToModify = stringToModify.substring(0, stringToModify.indexOf(stringToRemove)) + stringToModify.substring(stringToModify.indexOf(stringToRemove) + 2)
    }
    return stringToModify
}

function findStringInArray(strings, stringToSearch) {
    for (i in strings) {
        if (stringToSearch === strings[i]) {
            return stringToSearch
        }
    }
    return "### " + stringToSearch + "NOT FOUND ###"
}


function findStringInArray2(strings, stringToSearch) {
    for (let string of strings) {
        if (stringToSearch === string) {
            return stringToSearch
        }
    }
    return "### " + stringToSearch + "NOT FOUND ###"
}

// test the structure of an email
function validateEmail(input) {

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return input.value.match(validRegex);
}


console.log("Cambyze home page")


// Prompt a user name
let userName = prompt("Enter your name: ")
console.log(userName)
let saveUsername = userName



// Test if not empty
if (userName.length === 0) {
    console.log("The user name must be entered")
}

console.log(correctNames)
console.log(badNames)
console.log(findStringInArray(correctNames, userName))
console.log(findStringInArray2(correctNames, userName))
console.log(findStringInArray(badNames, userName))

//console.log(badNames.findIndex(includes(userName)))


// Test it from the collections
switch (userName) {
    case findStringInArray(correctNames, userName): {
        console.log("OKI")
        break
    }
    case findStringInArray(badNames, userName): {
        console.log("NOK")
        break
    }
    default: {
        console.log("N/A")
    }
}

// Simple loop with concatenation
for (let i = 1; i <= 5; i++) {
    userName += "/*" + i
}
console.log(userName)

// Remove the "/*"
userName = removeString(userName, "/*")
console.log(userName)

// Creation of a class
class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName
        this._lastName = lastName
    }
 
    getFullName() {
        return `${this._firstName} ${this._lastName}`
    }
 }
 
 const me = new Person("Thierry", "NESTELHUT")
 
 // Returns name + last name
 console.log(me.getFullName())

// The result variable is constant, but not its members.
 const result = {
    field1: "value1",
    field2: "value2",
    fieldWithTypeInteger: 42,
    fieldWithTypeFloat: 42.12345,
    fieldWithTypeBoolean: true,
    "this is a field with weird chars ?/! so we have to add doublequotes around the name": "Whatever",
  }
  // change the value of 1 field of the object
  result.fieldWithTypeBoolean = false
  console.log(result)


  // example 1
const obj1 = {
    a: 1,
    b: 2,
  }
  
  // example 2
  const a = 1
  const b = 2
  const obj2 = {
    "a": a,
    "b": b,
  }
  
  // example 3
  const obj3 = { a, b }
  
  // returns an object made of 3 identical objects
  console.log({ obj1, obj2, obj3 })


const isObj1EqualToObj2 = (obj1 === obj2)
const isObj1EqualToObj3 = (obj1 === obj3)
const isObj2EqualToObj3 = (obj2 === obj3)

// returns an object made of 3 identical objects + the booleans
console.log({ 
  obj1, 
  obj2, 
  obj3, 
  isObj1EqualToObj2, 
  isObj1EqualToObj3, 
  isObj2EqualToObj3,
})

let y // x has no value at all, it is undefined
const isItUndefined = (y === undefined)
console.log({ y, isItUndefined })

// Null is not undefined
const x = null
const isItUndefined2 = (x === undefined)
console.log({ x, isItUndefined2 })

const obj = { lastName: "PARKER" }
const { firstName = "default first name", lastName } = obj // firstName is NOT undefined anymore
console.log({obj, firstName,  lastName})

const length = y?.length // will NOT fail, length will be "undefined"
console.log({ length })
const length2 = y?.length || 0 // length will be 0, even though firstName is undefined
console.log({ length2 })


function countNumbers(array) {
    let count = 0
    for (let item of array) {
      // add 1 if the item is an number  
      if (typeof item === "number") count++
    }
    return count
  }
  
  const someArray = [1, "bla", "groot", true, 42.12345] 
  const anotherArray = [1, 2, 3, 4]
  const count1 = countNumbers(someArray)
  const count2 = countNumbers(anotherArray)
  
  // return an object with 2 fields count1 and count2
  console.log({ count1, count2 })



  const superHeroes = [
    { name: "SUPERMAN", lastName: "PARKER", firstName: "Peter" },
    { name: "SPIDERMAN", lastName: "KENT", firstName: "Clark" },
    { name: "IRONMAN", lastName: "STARK", firstName: "Tony" },
  ]
  const lastNames = superHeroes.map(it => it.lastName) // we define an anonymous function that takes an superheroe item and returns his lastName
  console.log(lastNames) // lastNames is an array of strings

  // will return the fist item that matches the criteria "its lastName is KENT"
  const superman = superHeroes.find(it => it.lastName === "KENT")
  console.log(superman)
