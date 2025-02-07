// Script to manage the web page

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

// Modify the class of a div by listening an event
let baliseUnderline = document.getElementById("underline")
baliseUnderline.addEventListener("click",() => {
    let baliseVarText = document.getElementById("vartext")
    baliseVarText.setAttribute("class","content-underline")
})
let baliseNormal = document.getElementById("normal")
baliseNormal.addEventListener("click",() => {
    let baliseVarText = document.getElementById("vartext")
    baliseVarText.setAttribute("class","content")
})

// Listen the keyboard
document.addEventListener('keydown', (event) => {
    console.log(event.key);
});

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
