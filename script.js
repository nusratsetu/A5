
let dateEl = document.getElementById('current-date')
let today = new Date();
let formatedDate = today.toLocaleDateString('en-Us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})
dateEl.innerText = formatedDate;

const colors = ['#FADADD', '#A7C7E7', '#C5A3D6', '#B7E4C7', '#F9E79F', '#FFDAB9', '#98FF98', '#E6A8D7', '#FFB6B9', '#A0D6D1'];
const image = document.getElementById('theme-img');
let currentColor = 0;
image.addEventListener('click', function () {
    document.body.style.backgroundColor = colors[currentColor];

    currentColor = (currentColor + 1) % colors.length;
})



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

let button3 = document.querySelectorAll('.complete-btn');
for (let button of buttons) {
    button.addEventListener('click', function () {
        let log = document.getElementById('activity-sec');
        let card = this.closest('.one');
        let title = card.querySelector('h1').innerText;
        let currentTime = new
            Date().toLocaleTimeString();
        let msg = document.createElement('p');
        msg.style.color = '#4a5568';
        msg.style.padding = '8px';
        msg.style.backgroundColor = '#e2e8f0';
        msg.style.borderRadius = '13px';
        msg.innerText = `You have completed the ${title} at ${currentTime}`;
        log.appendChild(msg);

        document.getElementById('history')
            .addEventListener('click', function () {
                msg.style.display = 'none';
            })
    })

}

document.getElementById('discover')
    .addEventListener('click', function () {
        window.location.href = './blog.html'
    })

















