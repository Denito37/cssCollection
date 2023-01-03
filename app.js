const info = document.querySelectorAll('.info');
const closeInfo = document.querySelectorAll('.close');
const trash = document.querySelector('.trash');
const add = document.querySelector('.add');
const claim = document.querySelector('.claim');
const submit = document.querySelector('.submit');
const buttonItemArray = [trash,add,claim,submit];

for(let i = 0; i<info.length; i++){
    info[i].style.display = 'none';
}
for(let i = 0; i< buttonItemArray.length;i++){
    buttonItemArray[i].addEventListener('click', () =>{
        info[i].style.display= 'block'
    })
}
for(let i=0 ;i< closeInfo.length;i++){
    closeInfo[i].addEventListener('click', () =>{
        for(let j = 0; j < info.length;j++){
            info[j].style.display = "none";
        }
    })
}