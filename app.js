// navbar section

const navbar=document.querySelectorAll("#navbar a");
const section=document.querySelectorAll('section')

let current="";
function myFunction(){

    section.forEach(sec=>{
        const sectionTop=sec.offsetTop;
        const sectionHeight=sec.clientHeight;

        if(pageYOffset >= (sectionTop-sectionHeight/3)){
            current=sec.getAttribute('id')
        }
})


navbar.forEach(nav=>{
    nav.classList.remove('active')
    if(nav.classList.contains(current)){
        nav.classList.add('active')
    }
})
}




window.addEventListener('scroll',()=>{
    myFunction()
})


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

button.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        checkbtn()
        slidediv(index);
        btn.classList.add("btn-active")
    })
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