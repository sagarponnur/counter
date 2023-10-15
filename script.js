const descreseBtn = document.getElementById('btn-decrease');
const increaseBtn = document.getElementById('btn-increase');
const resetBtn = document.getElementById('btn-reset');
const counter = document.getElementById('counter');

descreseBtn.addEventListener('click', () => {

     --counter.textContent;   
     const color = changeColor(counter.textContent);
     counter.style.color = color;    
});

increaseBtn.addEventListener('click', () => {

     ++counter.textContent;   
     const color =  changeColor(counter.textContent);   
     counter.style.color = color;     
    
});

resetBtn.addEventListener('click', () => {

    counter.textContent = 0;
    counter.style.color = 'black'; 

});

function changeColor(counter) {
    if(counter == 0) {
         return 'black';
    }
    else {
         return  counter >= 1 ? 'green' : 'red';
    }
    
    
}
  



    

