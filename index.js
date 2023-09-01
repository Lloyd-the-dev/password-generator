const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let purpleEl = document.getElementById("purple-el")
let firstSide
let secondSide
let btn = document.getElementById("btn")
let purpleEs = document.getElementById("purple-es")
btn.addEventListener("click", ()=> {
    firstSide = ""
    secondSide = ""
    let i = 1
    while(i <= 15){
        let ansOne = Math.floor(Math.random() * 91)
        let ansTwo = Math.floor(Math.random() * 91)
        firstSide += characters[ansOne]
        secondSide += characters[ansTwo]
        i++
    }
     purpleEl.value = firstSide
     purpleEs.value = secondSide
})
function purpleElFunction() {
    // Get the text field
    let copyText1 = document.getElementById("purple-el");
    
    // Select the text field
    copyText1.select();
    copyText1.setSelectionRange(0, 99999); // For mobile devices

  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText1.value);

    
    // Alert the copied text
    alert("Password copied to clipboard");
}
function purpleEsFunction(){
    let copyText2 = document.getElementById("purple-es");
    copyText2.select();
    copyText2.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText2.value);

    alert("Password copied to clipboard");

  
}
