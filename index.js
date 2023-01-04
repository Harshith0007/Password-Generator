const characters= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let lengthofpass = document.getElementById("passwordlengthentry")

function copyPassword1() {
    navigator.clipboard.writeText(pass1.textContent)
    alert("Password Copied")
}


function copyPassword2() {
        navigator.clipboard.writeText(pass2.textContent)
        alert("Password Copied")
}


function generator(){
   pass1.textContent = getPassword()
   pass2.textContent = getPassword()
}

function getPassword(){
    if (lengthofpass.value > 15){
    lengthofpass.value = 15
    
    } else if(lengthofpass.value < 5){
    lengthofpass.value = 5
    }
    let pass = ""
    for(let i = 0; i < lengthofpass.value; i++){
        let ind = Math.floor(Math.random()*91)
        pass+=characters[ind]
    }
    return pass
}
