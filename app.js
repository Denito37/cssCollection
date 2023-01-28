import { tips } from "./tips.js";

const info = document.querySelectorAll('.info');
const closeInfo = document.querySelectorAll('.close');
const infoSug = document.querySelectorAll('.info .sug')
const infoCode = document.querySelectorAll('.info code')

const trash = document.querySelector('.trash');
const add = document.querySelector('.add');
const claim = document.querySelector('.claim');
const submit = document.querySelector('.submit');
const buttonArray = [trash,add,claim,submit];

const tabOne = document.querySelector('.one');
const tabTwo = document.querySelector('.two');
const tabThree = document.querySelector('.three');
const tabArray = [tabOne,tabTwo,tabThree];

const menuBlock = document.querySelector('.menuBlock');
const blurBlock = document.querySelector('.blurBlock');
const infoBlock = document.querySelector('.infoBlock');
const cta = document.querySelector('.cta')
const blockArray = [infoBlock,blurBlock,menuBlock,cta];

let i = 0
let j = 0

// * Populate tip section with code & suggestions
infoSug.forEach(sug =>{
    sug.innerHTML = tips[i].suggestion
    i += 1;
})
infoCode.forEach(code =>{
    console.log(infoCode);
    code.innerHTML = tips[j].code
    j += 1;
})
// * hide tips
for(let i = 0; i<info.length; i++){
    hideTip(info[i]);
}
// * reveal tips on click
for(let i = 0; i< buttonArray.length;i++){
    buttonArray[i].addEventListener('click', () =>{
        for(let i = 0; i< 11;i++){hideTip(info[i]);}
        revealTip(info[i])
    })
}
for(let i = 0; i< tabArray.length;i++){
    tabArray[i].addEventListener('click', () =>{
        for(let i = 0; i< 11;i++){hideTip(info[i]);}
        revealTip(info[buttonArray.length+i])
    })
}
for(let i = 0; i< blockArray.length;i++){
    blockArray[i].addEventListener('click', () =>{
        for(let i = 0; i< 11;i++){hideTip(info[i]);}
        revealTip(info[blockArray.length + tabArray.length + i])
    })
}
// * hide tips on click
for(let i=0 ;i< closeInfo.length;i++){
    closeInfo[i].addEventListener('click', () =>{
        for(let j = 0; j < info.length;j++){
            hideTip(info[j]);
        }
    })
}

function revealTip(item){
        item.style.width = 'clamp(200px, 80vw, 400px)';
        item.style.height = '100%';
        item.style.right = 'auto';
        item.style.top = '5rem';
        item.style.opacity = '1';
        item.style.transition = 'opacity .25s ease-in';
}
function hideTip(item){
        item.style.width = '0';
        item.style.height = '0';
        item.style.opacity = '0';
        item.style.top = '-100rem';
        item.style.left = '0';
        item.style.transition = 'opacity 0s ease-in';
}