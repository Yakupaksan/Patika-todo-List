let listDOM = document.querySelector('#list')
let liDOM = document.querySelectorAll('#list li')

for (let i = 0; i < liDOM.length; i++){
    let spanDOM = document.createElement('span');
    let cross = document.createTextNode('\u00D7');
    spanDOM.className = "close";
    spanDOM.appendChild(cross)
    liDOM[i].appendChild(spanDOM)
    spanDOM.onclick = deleteItem;
    liDOM[i].onclick= checked
}

let taskDOM = document.getElementById('task')

function newElement(){
    let newLi = document.createElement('li')
    newLi.innerHTML = taskDOM.value;
    let spanDOM = document.createElement('span');
    let cross = document.createTextNode('\u00D7');
    spanDOM.className = "close";
    spanDOM.appendChild(cross)
    newLi.appendChild(spanDOM)
    if(taskDOM.value.trim('') != ""){
        listDOM.appendChild(newLi), $(".success").toast('show')
    } else{$(".error").toast('show')}
    spanDOM.onclick = deleteItem;
    newLi.onclick = checked
    
}

function deleteItem(){
this.parentElement.remove()
}

function checked(){
    this.classList.toggle("checked"); 
  }