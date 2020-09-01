
let track=document.getElementById('slider__track');
let step = 810;
let ourstep = 0;
let elem = document.getElementsByClassName('slider__item')[5];
//elem.parentElement.insertBefore(elem, elem.previousSibling);
//console.log(elem);

var parentDiv = elem.parentNode;
parentDiv.insertBefore(elem, elem);


function moveleft(){
    ourstep=ourstep-step;
    console.log(ourstep);
    //if(ourstep == -2430){ourstep=-1620}
    track.style.transform = `translateX(${ourstep}px)`;
    //addafter();
    //addafter();
    //addafter();
    //return ourstep=ourstep-step;
}

function moveright(){    
    ourstep=ourstep+step;
    console.log(ourstep);
    //if(ourstep == 810){ourstep=0}
    track.style.transform = `translateX(${ourstep}px)`;
    //addbefore();
    //addbefore();
    //addbefore();
    //return ourstep=ourstep+step;
}


function addafter(){
    let newDiv = document.createElement('div');
    newDiv.className="slider__item";
    let newImg = document.createElement('img');
    newImg.className="photo";
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

//s2.after(s1);