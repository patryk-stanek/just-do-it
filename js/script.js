function closeModal() {
    document.getElementById('overlayOne').classList.remove('modal--show');
    document.getElementById('overlayTwo').classList.remove('modal--show');
    document.getElementById('overlayThree').classList.remove('modal--show');
}

//1st overlay close background

document.querySelector('#overlayOne').addEventListener('click', function(e) {
    if(e.target === this) {
        closeModal();
    }
})

//2nd overlay close background

document.querySelector('#overlayTwo').addEventListener('click', function(e) {
    if(e.target === this) {
        closeModal();
    }
})

//3rd overlay close background

document.querySelector('#overlayThree').addEventListener('click', function(e) {
    if(e.target === this) {
        closeModal();
    }
})

//all overlays close

document.querySelectorAll('.js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        closeModal();
    })
})

document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
        closeModal();
    }
})

function openModal(modal) {
    document.querySelectorAll('.modal > *').forEach(function(modal) {
        modal.classList.remove('show');
    })
    document.querySelector(modal).classList.add('modal--show');
}

document.querySelectorAll('.js--open-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault()

        var modal = btn.getAttribute('data-modal');

        openModal('#' + modal);
    })
})

// console.log(openModal('#overlayOne'));
// console.log(openModal('#overlayTwo'));
// console.log(openModal('#overlayThree'));

var ctx = document.getElementById('myChart').getContext('2d');
var signups = document.getElementById('signups');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});