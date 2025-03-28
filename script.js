let buttons = document.getElementsByClassName('complete-btn');
for(let button of buttons){
   button.addEventListener('click', function(){
        alert('Board updated sucessfully!');
    });


    const taaskm = document.getElementById('task').innerText;
    const convertTask = parseInt(taaskm)
    const difference = convertTask - taaskm;
    const taask = document.getElementById('task').innerText = difference

    button.addEventListener('click', function(){

    })
    
}
