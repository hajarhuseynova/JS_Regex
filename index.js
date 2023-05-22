const inputName=document.getElementById("inputName");
const inputPassword=document.getElementById("inputPassword");
const first=document.querySelector(".first");
const second=document.querySelector(".second");
const third=document.querySelector(".third");
const fourth=document.querySelector(".fourth");
const fifth=document.querySelector(".fifth");
const error=document.querySelector(".error")
inputPassword.addEventListener("keyup",()=>{
    first.style.color="black"
    second.style.color="black"
    third.style.color="black"
    fourth.style.color="black"
    fifth.style.color="black"

   var letters = /[a-zA-Z]/g;
   var upperCaseLetters = /[A-Z]/g;
   var number=/[0-9]/g;
   var another=/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/
   if(letters.test(inputPassword.value)) {
     first.style.color="red"
    }
    if(upperCaseLetters.test(inputPassword.value)) {
        second.style.color="red"
     }
     if(number.test(inputPassword.value)) {
        third.style.color="red"
     }
     if(inputPassword.value.length>=8) {
        fourth.style.color="red"
     }
    if(another.test(inputPassword.value)) {
           fifth.style.color="red"
     }
})
