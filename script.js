let step = 810;
let ourstep = 0;


function moveleft(){

    ourstep=ourstep-step;
    move();

}
function moveright(){    

    ourstep=ourstep+step;
    move();

}

function dott1(){slider__track.style.transform = `translateX(0px)`;}
function dott2(){slider__track.style.transform = `translateX(-810px)`;}
function dott3(){slider__track.style.transform = `translateX(-1620px)`;}

function move(){

    if (ourstep <= -2430)ourstep=0;
    if (ourstep > 0)ourstep=-1620;
    console.log(ourstep);
    slider__track.style.transform = `translateX(${ourstep}px)`;

}


