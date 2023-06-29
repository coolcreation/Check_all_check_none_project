

"use strict"

let itemsContainer = document.querySelector('.items-container');
let changeText = document.querySelector('.items-checked-text');
let checkBoxes = document.querySelectorAll('.checkbox');
let checkAllBtn = document.querySelector('.check-all-button');
let uncheckAllBtn = document.querySelector('.uncheck-all-button');
let removeBtn = document.querySelector('.remove-checked-button');
let temp = 0;


addEventListener('DOMContentLoaded', () => {
  
checkBoxes.forEach(box => { box.checked = false });

checkBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
     let target = e.target, parent = e.target.parentElement.nextSibling.parentElement;
     if (target.checked === false) {
       parent.classList.remove('active')
       temp--
     } else {
      parent.classList.add('active')
      temp++
     }
    getItemtemp(temp)
    });
});

checkAllBtn.addEventListener('click', () => {
    temp = 0;
    checkBoxes.forEach(box => {
      if (box.offsetParent !== null) {
      if(temp < 4){
        temp++
      }
      let bg = box.parentElement.nextSibling.parentElement
      bg.classList.add('active')
      box.checked = true
      } 
    });
    getItemtemp(temp)
});

uncheckAllBtn.addEventListener('click', () => {
    temp = 0;
    checkBoxes.forEach(box => {
      let bg = box.parentElement.nextSibling.parentElement
      bg.classList.remove('active')
      box.checked = false
    });
    getItemtemp(temp)
}); 

removeBtn.addEventListener('click', () => {
  checkBoxes.forEach(box => {
    let bg = box.parentElement.nextSibling.parentElement
    if (box.checked == true) {
      bg.remove()
      getDeletedItemtemp()
      temp = 0
    }
   });
}); 



function getItemtemp(passed){
  let items = itemsContainer.firstElementChild.firstElementChild.children;
  let temp = items.length - 1;

  changeText.innerHTML = `${passed} of ${temp} items checked`
}


function getDeletedItemtemp(){
    let items = itemsContainer.firstElementChild.firstElementChild.children;
    let temp = items.length - 1;
    changeText.innerHTML = `0 of ${temp} items checked`
}


});  //  end DOMContentLoaded

