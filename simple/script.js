// Script to perform classic operations


// Function to remove a substring
function removeString(stringToModify, stringToRemove) {
    while (stringToModify.includes(stringToRemove)) {
        console.log(stringToModify.indexOf(stringToRemove))
        stringToModify = stringToModify.substring(0,stringToModify.indexOf(stringToRemove)) + stringToModify.substring(stringToModify.indexOf(stringToRemove)+2)
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
console.log(findStringInArray(correctNames,userName))
console.log(findStringInArray(badNames,userName))

//console.log(badNames.findIndex(includes(userName)))


// Test it from the collections
switch (userName) {
    case findStringInArray(correctNames,userName) :{
        console.log("OKI")
        break
    }
    case findStringInArray(badNames,userName) :{
        console.log("NOK")
        break
    }
    default :{
        console.log("N/A")
    }
}

// Simple loop with concatenation
for (let i=1; i<=5; i++) {
    userName += "/*" + i
}
console.log(userName)

// Remove the "/*"
userName = removeString(userName,"/*")
console.log(userName)

