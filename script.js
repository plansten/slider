
let track=document.getElementById('slider__track');
let s1=document.getElementById('s1');
let s2=document.getElementById('s2');
let s3=document.getElementById('s3');
let s4=document.getElementById('s4');
let s5=document.getElementById('s5');
let s6=document.getElementById('s6');
let s7=document.getElementById('s7');
let s8=document.getElementById('s8');
let s9=document.getElementById('s9');
let step = 810;
let ourstep = 0;
let oursteps = 0;
let ourstepss = 0;
let elem = document.getElementsByClassName('slider__item')[5];
//elem.parentElement.insertBefore(elem, elem.previousSibling);
//console.log(elem);
//s1.style.transform = `translateX(300px)`;
var parentDiv = elem.parentNode;
parentDiv.insertBefore(elem, elem);


function moveleft(){
    ourstep=ourstep-step;
    //oursteps=oursteps+step;
    console.log(ourstep);
    //if(ourstep == -2430){ourstep=-1620}

    //s4.style.transform = `translateX(2430px)`;
    //s5.style.transform = `translateX(2430px)`;
    //s1.style.transform = `translateX(2430px)`;
    //s1.style.transform = `translateX(2430px)`;
    //s1.style.transform = `translateX(2430px)`;
    
    track.style.transform = `translateX(${ourstep}px)`;
    //s1.style.transform = `translateX(${oursteps}px)`;
    //2.style.transform = `translateX(${oursteps}px)`;
    //s3.style.transform = `translateX(${oursteps}px)`;    
    //addafter();
    //addafter();
    //addafter();
    //return ourstep=ourstep-step;
}

function moveright(){    
    oursteps=oursteps-step;
    ourstep=ourstep+step;
    ourstepss=ourstepss-step;
    console.log(ourstep);
    //if(ourstep == 810){ourstep=0}
    //s1.style.transform = `translateX(${oursteps}px)`;
    //s2.style.transform = `translateX(${oursteps}px)`;
    //s3.style.transform = `translateX(${oursteps}px)`; 
    track.style.transform = `translateX(${ourstep}px)`;
    //s1.style.transform = `translateX(-2430px)`;
    //s9.style.transform = `translateX(${ourstepss}px)`;
    //s8.style.transform = `translateX(${ourstepss}px)`;
    //s7.style.transform = `translateX(${ourstepss}px)`; 
    //addbefore();
    //addbefore();
    //addbefore();
    //return ourstep=ourstep+step;
}


function addafter(id){
    let newDiv = document.createElement('div');
    newDiv.className="slider__item";
    let newImg = document.createElement('img');
    newImg.className="photo";
    newImg.id="id";
    newImg.src="http://placehold.it/300x200?text=8"
    newDiv.appendChild(newImg);
    let all=document.getElementsByClassName('slider__item')[8];
    //let alllength=
    var parentDiv = all.parentNode;
    parentDiv.insertBefore(newDiv, all.nextSibling);
    //console.log(all);
}
function addbefore(){
    let newDiv = document.createElement('div');
    newDiv.className="slider__item";
    let all=document.getElementsByClassName('slider__item')[0];
    var parentDiv = all.parentNode;
    parentDiv.insertBefore(newDiv, all);    
    //console.log(all);
}



//s9.after(s1);
//s1.after(s2);
//s2.after(s3);
//s3.after(s4);

//s1.before(s9);
//s9.before(s8);
//s8.before(s7);
//s7.before(s6);
//d=s7.cloneNode(true);
