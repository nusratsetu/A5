let buttons = document.getElementsByClassName('complete-btn');
for (let button of buttons) {
    button.addEventListener('click', function () {
        alert('Board updated sucessfully!');
    });
}

let button2 = document.getElementsByClassName('complete-btn');
let taskNum = 6;
for (let button of buttons) {
    button.addEventListener('click', function () {
        if (taskNum > 0) {
            taskNum--;
            document.getElementById('task').innerText = taskNum;
        }
    })

    let navNum = 23;
    for (let button of buttons) {
        button.addEventListener('click', function () {
            navNum++;
            document.getElementById('navNumber').innerText = navNum;
            this.disabled = true;
            this.style.backgroundColor = '#CED6FF';
        })
    }
}







