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