export const tips = [{
    code:"<p> .trash{</p><p>background-color: transparent; </p><p>transform: scale(.9);</p><p>transition: background-color .25s ease-in, transform .25s ease-in;</p><p>}</p><p>.trash:hover{</p> <p>background-color: var(--acc-clr);</p><p>transform: scale(1);</p><p>}</p>",
    suggestion:"Good to use for actions made in an application such as deleting your work."
},{
    code:"<p>.add{</p><p>background-color: transparent;</p><p>transition: transform .25s ease-in;</p><p>}</p><p>.add:hover{</p><p>transform: translateY(-.5rem);</p><p>}</p>",
    suggestion:"Good way to use to tell the user that you can intereact with this element"
},{
    code:"<p>.claim{</p><p>background-color: #222;</p><p>border: solid 2px #222;</p><p>transition: background-color .25s ease-in;</p><p>}</p><p>.claim:hover{</p><p>background-color: transparent;</p><p>}</p>",
    suggestion:"Visually appealing way to tell the user that you can intereact with this element"
},{
    code:"<p>.submit{</p><p>background-color: transparent;</p><p>border: solid 1px #222;</p><p>border-radius: 1rem;</p><p>transition: border .25s ease-in;</p><p>}</p><p>.submit:hover{</p><p>border: 3px solid #222;</p><p>font-weight: 800;</p><p>}</p>",
    suggestion:"Good to use to tell the user that you can intereact with this element"
},{
    code:"<p>.one{</p><p> border-radius: .5rem;</p><p>}</p><p>.one:focus,.one:hover {</p><p>filter: brightness(1.4);</p><p>}</p>",
    suggestion:"When u have a large amount of related content it could be a good idea to divide them into different tabs that rotate in & out "
},{
    code:"<p>.two:hover,.two:focus{</p><p>font-weight: 800;</p><p>}</p>",
    suggestion:"When u have a large amount of related content it could be a good idea to divide them into different tabs that rotate in & out "
},{
    code:"<p>.three{</p><p>position: relative;</p><p>}</p><p>.three::after{</p><p>content: '';</p><p>width: 0;</p><p>height: 0;</p><p>transition:all .25s ease-in;</p><p>}</p><p>.three:hover::after,.three:focus::after{</p><p>width: 100%;</p><p>height: 2px;</p><p>background: var(--acc-clr);</p><p>position: absolute;</p><p>bottom: 10px;</p><p>left: 0;</p><p>}</p>",
    suggestion:"When u have a large amount of related content it could be a good idea to divide them into different tabs that rotate in & out "
},{
    code:"<p>.infoBlock{</p><p>position: relative;</p><p>}</p><p>.infoBlock p{</p><p>position: absolute;</p><p>text-align: center;</p><p>bottom: 15%;</p><p>left: 20%;</p><p>right: 20%;</p><p>}</p>",
    suggestion:"Use to connect a blurb of info that related to an image"
},{
    code:"<p>.blurBlock img{</p><p>filter: blur(4px) sepia(25%);</p><p>transition: filter .25s ease-in;</p><p>}</p><p>.blurBlock img:hover{</p><p>filter: blur(0px) sepia(0%);</p><p>}</p>",
    suggestion:"A fun way to bring attention to an element you want the user to intereact with."
},{
    code:"<p>.block#{</p><p>/*Define block width & height*/</p><p>/*Define blocks grid placement*/</p><p>/*Define blocks z-index*/</p><p>position: absolute;</p><p>transition: width .25s ease-in;</p><p>}</p><p>.block#:hover{</p><p>/*Define block new width & height*/</p><p>/*Define blocks new grid placement*/</p><p>/*Define blocks new z-index*/</p><p>}</p>",
    suggestion:"use for a more interactive menu with 4 pages(you can even fit a 5th unrelated page in the middle)"
},{
    code:"<p>.cta{</p><p>position: fixed;</p><p>bottom: .5rem;</p><p>right: .5rem;</p><p>transition: transform .25s ease-in, color .25s ease-in;</p><p>}</p><p>.cta:hover{</p><p>transform: scale(1.15);</p><p>color: var(--acc-clr)</p><p>}</p>",
    suggestion:"Put call to action content here such as a contact component"
}];