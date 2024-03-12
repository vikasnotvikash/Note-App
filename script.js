const notesContainer = document.querySelector('.notes-container');
const btn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function storage()
{
    localStorage.setItem('data',notesContainer.innerHTML);
}

function showdata()
{
    notesContainer.innerHTML = localStorage.getItem('data');
}

showdata();

btn.addEventListener('click',function(){
    let inputbox = document.createElement('p');
    let img = document.createElement('img');
    inputbox.className = 'input-box';
    inputbox.setAttribute('contenteditable','true');
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'IMG')
    {
        e.target.parentElement.remove();
        storage()
    }
    else if(e.target.tagName === 'P')
    {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(function(e){
            e.onkeyup = function()
            {
                storage();
            }
        })
    }
})

document.addEventListener('keydown',function(event){
    if(event.key === 'Enter')
    {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})



