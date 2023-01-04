const info = document.querySelectorAll('.info');
const closeInfo = document.querySelectorAll('.close');
const infoPara = document.querySelectorAll('.info code, .info .sug')

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
const infoBlock = document.querySelector('.infoBlock');
const blockArray = [infoBlock,menuBlock];

for(let i = 0; i<info.length; i++){
    hideTip(info[i]);
}
for(let i = 0; i< buttonArray.length;i++){
    buttonArray[i].addEventListener('click', () =>{
        revealTip(info[i])
    })
}
for(let i = 0; i< tabArray.length;i++){
    tabArray[i].addEventListener('click', () =>{
        revealTip(info[buttonArray.length+i])
    })
}
for(let i = 0; i< blockArray.length;i++){
    blockArray[i].addEventListener('click', () =>{
        revealTip(info[blockArray.length + tabArray.length + i + 2])
    })
}
for(let i=0 ;i< closeInfo.length;i++){
    closeInfo[i].addEventListener('click', () =>{
        for(let j = 0; j < info.length;j++){
            hideTip(info[j]);
        }
    })
}

function revealTip(item){
        item.style.width = '320px';
        item.style.height = 'fit-content';
        item.style.right = 'auto';
        item.style.top = '0';
        item.style.opacity = '1';
        item.style.transition = 'opacity .25s ease-in';
}
function hideTip(item){
        item.style.width = '0';
        item.style.height = '0';
        item.style.opacity = '0';
        item.style.right = '10rem'; //* causes overflow
        item.style.top = '0';
        item.style.transition = 'opacity 0s ease-in';
}