//; const x = 30

//const y = '30'

//const message = 'witaj świecie!'

//function showMessage(){alert(message)}

//
//let a = 21
//let b = 17

//alert(a + b)

// access 
//let age = prompt('How old are you?')
//confirm('Question')
//if (age >= 18) {
   // alert('access granted!')} else 
   // {confirm('Do you have permission from your parents?')}
    

//let answer = confirm('Wiadomość')
//console.log(answer)


//
//let text = ''; 

//for (let i = 0; i <10; i++) {
//    text = text + i + ', '
// }

//console.log(text);

//function showNumber(n) {for(let i = 0; i < n; i++) 
//{console.log('Liczba ', i);}

//let number = prompt('Ile liczb wypisać?');

//showNumber(number);

//var sekcjaTest = document.getElementById("test");

//vartestText = document.getElementById('testText')
//var button = document.getElementById('testButton')
//sekcjaTest.style.backgroundColor = 'red';
//testText.innerHTML = 'Mam na imię Diana';
//button.style.backgroundColor = 'green';

let a =15;
let b =5;

testText.innerHTML = a + b;

button.addEventListener('click', function(){
    console.log("kliknięty przycisk");
})

var mobileMenuIcon = document.getElementById("mobile-menu-icon");
var menu = document.getElementById('main-menu');
if (mobileMenuIcon){
    mobileMenuIcon.addEventListener('click', function(){
        mobileMenuIcon.classList.toggle("opened");
        menu.classList.toggle("opened");
    }}