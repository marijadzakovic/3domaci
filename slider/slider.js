const slider=document.querySelector(".image-slider");
const arrLeft=document.querySelector(".arrow-left");
const arrRight=document.querySelector(".arrow-right");
const xButton=document.querySelector("#close");

const images=["img1.jpg", "img2.jpg", "img3.jpg"];

//slider id
let id=0;

function slide(id) {
    //set the background image
    slider.style.backgroundImage=`url(images/${images[id]})`;

}

arrLeft.addEventListener('click', () => {
    id--;
    if(id<0){
        id=images.length-1
    }

    slide(id);
})

arrRight.addEventListener('click', () => {
    id++;
    if(id>images.length-1){
        id=0;
    }
    slide(id);
})
/*
slider.addEventListener('onmouseover', (e) => {
    if(e.key=="ArrowLeft"){
        id--;
        if(id<0){
            id=images.length-1
        }
    
        slide(id); 
   } else if(e.key=="ArrowRight"){
        id++;
        if(id>images.length-1){
            id=0;
        }
        slide(id);
   }

})
*/
document.onkeydown = function (e) {
   if(e.key=="ArrowLeft"){
        id--;
        if(id<0){
            id=images.length-1
        }
    
        slide(id); 
   } else if(e.key=="ArrowRight"){
        id++;
        if(id>images.length-1){
            id=0;
        }
        slide(id);
   }

  };

function widen() {
    slider.style.width="90%";
    slider.style.height="90%";
    xButton.style.visibility="visible";
}  
slider.addEventListener('click', widen);  

xButton.addEventListener('click', () => {
    slider.style.width="70%";
    slider.style.height="80%";
    xButton.style.visibility="hidden";
    
});
/*
function decrease() {
    slider.style.width="70%";
    slider.style.height="80%";
    xButton.style.visibility="hidden";
}*/