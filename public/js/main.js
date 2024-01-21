


//function to copy the newpassword
function copy() {
    let copyText = document.getElementById("password").innerText;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Copied the text: " + copyText);
        })
}


//all listes of characters
const lowerListe = "abcdefghijklmnopqrstuvwxyz"
const upperListe = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberListe = "0123456789"
const SymbolesListe = "&/$@#%"

//function to generate a password with random characters 
let generatePassword = (length, numbers, upperCase, lowerCase, symboles)=>{
    // variable to stock the characters choosed by the user
    let characters = ''

    //check what characters has been choosed
    if (numbers.checked) {
      characters += numberListe
    }
    if (upperCase.checked) {
      characters += upperListe
    }
    if (lowerCase.checked) {
      characters += lowerListe
    }
    if (symboles.checked) {
      characters += SymbolesListe
    }
    //if no choice ask user to make a choice
    if (!numbers.checked && !upperCase.checked && !lowerCase.checked && !symboles.checked) {
        alert("Faites un choix")
    }
    //array to push all random characters 
    let password = []

    //loop to push randomly characters in array 
    while(password.length < length){
        const character = characters[Math.floor(Math.random()*characters.length)]

        password.push(character)
    }

    //Join all characters in one word
    return password.join('')
}


//function to generate the password 
let generate = () =>{
    let limite = document.getElementById('length').value
    let upper = document.getElementById("upper")
    let lower = document.getElementById("lower")
    let numbers = document.getElementById("numbers")
    let symboles = document.getElementById("symboles")

    let newPassword = generatePassword(limite,numbers,upper,lower,symboles)

    //modify the P Tag text with the password
    document.querySelector("#password").innerText = newPassword
    
}


document.querySelector("#generator").addEventListener("click",generate)

document.querySelector("button").addEventListener("click",copy)