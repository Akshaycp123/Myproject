const left = document.getElementById('slide-left');
const right = document.getElementById('slide-right');

let index = 0;


const toggle = (x)=>{
    // alert()
    const items = document.getElementsByClassName("slider-items");
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    if(-1){
        index--;
    }else{
        index++;
    }
    if(index > items.length){index = 0}
    if(index < 0){
        index = items.length-1;}
    items[index].style.display = "block";
    setTimeout(()=>toggle(1), 2000);
}

toggle(1)

left.addEventListener('click', ()=>{
    toggle(-1)
});
right.addEventListener('click', ()=>{
    toggle(1)
});
