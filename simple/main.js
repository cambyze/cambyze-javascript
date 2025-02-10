// Script to manage the web page

let isButtonAlreadyPressed = false

// Find a HTML block by id
let baliseContent = document.getElementById("content")
console.log(baliseContent)
console.log(baliseContent.clientHeight)
console.log(baliseContent.clientWidth)

// Find the first element that matches selector
let baliseLabel = document.querySelector("#content label");
console.log(baliseLabel);

// Find a list of elements that match selector => NodeList
let inputRadioList = document.querySelectorAll(".content input");
console.log(inputRadioList);
for (i in inputRadioList) {
    console.log(inputRadioList[i]);
}

// Fill the input field automatically with the prompted userName
let baliseUserName = document.getElementById("username");
baliseUserName.setAttribute("value",saveUsername);

// Modify the class of a div by listening an event
let baliseUnderline = document.getElementById("underline")
baliseUnderline.addEventListener("click",() => {
    let baliseVarText = document.getElementById("vartext")
    baliseVarText.setAttribute("class","underline")
})
let baliseNormal = document.getElementById("normal")
baliseNormal.addEventListener("click",() => {
    let baliseVarText = document.getElementById("vartext")
    baliseVarText.setAttribute("class","normal")
})

// Listen the keyboard
document.addEventListener('keydown', (event) => {
    console.log(event.key);
});


// Listen the submit of the form block
let baliseEmail = document.getElementById("email")
const form = document.querySelector('form');

form.addEventListener("submit",(event) => {
    // to avoid the defaut action => ask a new page
    event.preventDefault();
    console.log("There is no refresh of the page");

    if (!isButtonAlreadyPressed && validateEmail(baliseEmail)) {
        isButtonAlreadyPressed = true
        // Create new elements with createElement
        let baliseVarBlock = document.getElementById("varblock")

        let newDiv = document.createElement("div")
        let newHeader= document.createElement("h1")
        let newText= document.createElement("p")

        newHeader.textContent="Result"
        newHeader.className="content"
        newText.textContent="It is a real success !!!"
        newText.className="content"

        newDiv.appendChild(newHeader)
        newDiv.appendChild(newText)
        baliseVarBlock.appendChild(newDiv)

        // Create new elements by interpolation
        let newText2="Isn't it, " + saveUsername + " ?"
        let div = `
                <div><p class="content">${newText2}</p></div>
                `;
        let baliseVarText2 = document.getElementById("varblock2")
        baliseVarText2.innerHTML = div
    }
});

