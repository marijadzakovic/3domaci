const keyboardInput=document.getElementById("keyboard-input");
const submit=document.getElementById("submit");
let inputText="";
/*
function numberOfCharacters() {
    return keyboardInput.value;
   
}*/
let input = localStorage.getItem('input');
function returnText() {
  input = keyboardInput.value
  localStorage.setItem('input', input)
  
}
submit.addEventListener('click', returnText);


console.log(input)
numberOfChars=input;
i=0;

let cubesContainer=document.getElementById('cubes-container');

while(i<numberOfChars){
    let divContainer=document.createElement('div');
    divContainer.className="input-container";
  
    let cube = document.createElement('input');
    cube.className="input-field";
    cube.setAttribute("type", "text");
    cube.setAttribute("maxlength", "1");
    let button2=document.createElement('button');
    button2.innerText="X";
    button2.className="x-button";
    divContainer.appendChild(cube);
    divContainer.appendChild(button2);
    cubesContainer.appendChild(divContainer);
    i++;
}
let button=document.createElement('button');
button.className="plus-button";
button.innerText="+";
cubesContainer.appendChild(button);

let xbuttons = document.getElementsByClassName('x-button');

for (let element of xbuttons){
    element.addEventListener('click', () => {
        element.parentElement.remove();
    })
}

let plusButton=document.getElementsByClassName('plus-button')[0];
plusButton.addEventListener('click', () => {
    let divContainer=document.createElement('div');
    divContainer.className="input-container";
  
    let cube = document.createElement('input');
    cube.setAttribute("type", "text");
    cube.className="input-field";
    let button2=document.createElement('button');
    button2.innerText="X";
    button2.className="x-button";
    divContainer.appendChild(cube);
    divContainer.appendChild(button2);
    cubesContainer.appendChild(divContainer);
})

function checkPalindrome(str){
    const len=str.length;
    
    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function myFunc(total, el){
    return total+el
}
let chars=[];
let string=""
let inputs=document.getElementsByClassName('input-field');
for (let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('change', (e) => {
        if (!(/^[A-Za-z\s]$/.test(e.target.value))){
            alert("Try again, enter only character a-z, A-Z or space!")
            // not allow the number to be written
            inputs[i].innerHTML=""
        } else {
            chars[i]=inputs[i].value;   
          
        } 
        if (checkPalindrome(chars.reduce(myFunc))){
            console.log(chars.reduce(myFunc));
            document.getElementById("message").innerHTML+="Unijeta rijec je palindrom!<br/>";
        } else {
            document.getElementById("message").innerHTML+="Unijeta rijec nije palindrom!<br/>" ;
        } 
       
    })
}
















