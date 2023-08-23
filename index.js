const passwordBox = document.getElementById("password");
const length = 12;
const buttonEl = document.getElementById("buttonEl");
const copyPwd= document.getElementById("copy");


//Get all the alpahabets, numbers, characters
const number = "1234567890";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "~!@#$%^&*()_+<>?|}{=_-/.,';"

//create an all characters variable
const allChars = number + upperCase + lowerCase + specialChars;

//Create a function for the generate password button
function createPasssword(){
    let password = "";
    password += number[Math.floor(Math.random()*number.length)];
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += specialChars[Math.floor(Math.random()*specialChars.length)];
    
    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
    
    console.log(password)
    return password;
}
//Create a functio for the copy command
function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    //document.execCommand("copy");
}
copyPwd.addEventListener("click", function(){
    copyPassword();
    setTimeout(function(){
        passwordBox.value = "";
    }, 3000)
})

buttonEl.addEventListener("click", function(){
    createPasssword()
})
