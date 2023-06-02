// navbar section

const navbar=document.querySelectorAll("#navbar a");

navbar[0].addEventListener('click',function(){
    removeClass()
    navbar[0].classList.add("active");
})

navbar[1].addEventListener('click',function(){
    removeClass()
    navbar[1].classList.add("active");
})

navbar[2].addEventListener('click',function(){
    removeClass()
    navbar[2].classList.add("active");
})

navbar[3].addEventListener('click',function(){
    removeClass()
    navbar[3].classList.add("active");
})

navbar[4].addEventListener('click',function(){
    removeClass()
    navbar[4].classList.add("active");
})

navbar[5].addEventListener('click',function(){
    removeClass()
    navbar[5].classList.add("active");
})

navbar[6].addEventListener('click',function(){
    removeClass()
    navbar[6].classList.add("active");
})




const removeClass=()=>{
    navbar.forEach((nav)=>{
        nav.classList.remove("active");
    })
}

// dropdown

const method=document.getElementById('method');
const method2=document.getElementById('method-2');

const dropDown=()=>{
    method.classList.toggle('drop-active')
}
const dropLeft=()=>{
    method2.classList.toggle('drop-left');
}


// scroller section


const scroller=document.querySelectorAll(".scro-img")


scroller.forEach((scroll,index)=>{
    scroll.style.left=`${index* 22}%`
})


// banner-1 section

const slides=document.querySelectorAll(".slides");

slides.forEach((slide,index)=>{
    slide.style.left=`${index * 100}%`
})



const button=document.querySelectorAll("#banner-1 .btn");

button[0].addEventListener('click',function(){
    slidediv(0);
    checkbtn();
    button[0].classList.add("btn-active")
})

button[1].addEventListener('click',function(){
    slidediv(1);
    checkbtn();
    button[1].classList.add("btn-active")
})

button[2].addEventListener('click',function(){
    slidediv(2);
    checkbtn();
    button[2].classList.add("btn-active")
})

button[3].addEventListener('click',function(){
    slidediv(3);
    checkbtn();
    button[3].classList.add("btn-active")
})


button[4].addEventListener('click',function(){
    slidediv(4);
    checkbtn();
    button[4].classList.add("btn-active")
})


const checkbtn=()=>{
    button.forEach((btn)=>{
        btn.classList.remove("btn-active")
    })
}

const slidediv=(value="")=>{
        slides.forEach((slide)=>{
            slide.style.transform=`translateX(-${value*100}%)`
        })
}


// achievement section

const myCount=document.querySelectorAll(".counter-numbers")

myCount.forEach((myValue)=>{
  let  target_count=myValue.dataset.count;
  let init_count=myValue.innerText;
  
let speed=50;

let incrementSpeed=Math.floor(target_count / speed)

const updateNumber=()=>{
    init_count = +init_count+incrementSpeed;
    myValue.innerText=init_count;

    if(init_count < target_count){
        setTimeout(() => {updateNumber()}, 50);
    }
  }
 

  updateNumber();
})




// portfolio Selection

const btns=document.querySelector(".portfolio-btn")
const btn=document.querySelectorAll(".btn");
const box=document.querySelectorAll(".box");
const collect=document.getElementById("collection-box")

btns.addEventListener('click',(e)=>{
const target_btn =e.target;
if(target_btn== btn[0]){

    collect.classList.remove("con-flex")


    box.forEach((box)=>{
        box.classList.remove("unactive-box")
        box.classList.remove("for-width")
    })


    btn.forEach((btn)=>{
        btn.classList.remove('btn-active')
    })

    btn[0].classList.add('btn-active');
}else{

    collect.classList.add("con-flex")

    btn.forEach((btn)=>{
        btn.classList.remove('btn-active')
    })
    
    target_btn.classList.add('btn-active');
    
    const btn_num=target_btn.dataset.btnNum;
    
    
    const activeBox=document.querySelectorAll(`.p-btn--${btn_num}`)
    
    
    box.forEach((box)=>{
       box.classList.add("unactive-box")
       box.classList.add("for-width")
    })
    
    activeBox.forEach((actBox)=>{
        actBox.classList.remove("unactive-box")
        actBox.classList.add("for-width")
    })


    
}


})



// cross bar 


const nav=document.querySelector("#navbar");
const cross=document.querySelector("#cross");
const bar=document.querySelector("#header .bar");

bar.addEventListener('click',function(){
    nav.classList.add("active")
})

cross.addEventListener('click',function(){
    nav.classList.remove("active")
})