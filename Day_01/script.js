

let scorllContainer = document.querySelector('.item')
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');


scorllContainer.addEventListener("wheel",(evt)=>{
  evt.preventDefault();
  scorllContainer.scrollLeft += evt.deltaY
//   console.log('ok')
});


nextBtn.addEventListener('click',()=>{
   
  scorllContainer.style.scrollBehavior ="smooth";
  scorllContainer.scrollLeft += 900;
  
});

backBtn.addEventListener('click',()=>{
  scorllContainer.style.scrollBehavior ="smooth";
  scorllContainer.scrollLeft -= 900;
});

