document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function (){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function (){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});


const createApp = (a) => {
    
    const appMessage = document.querySelector('.appointment-inf');


    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(a)
    })
    .then(res => res.json())
    .then(resJSON=>{
        console.log(resJSON);
        appMessage.classList.add('send');
        appMessage.innerText = `Thxy, mordeczko ${resJSON.appointment.name}, ogarnięte!`;

    })

}

document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();


    const appMessage = document.querySelector('.appointment-inf');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;
    let appointment = {
        name: document.getElementById('appointment-name').value,
        email: document.getElementById('appointment-email').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('appointment-phone').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        message: document.getElementById('appointment-message').value

    }

    for(i=0; i<formFields.length; i++) {
        if(formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        }
    }

    if(allFields) {
        createApp(appointment);
        appMessage.classList.remove('error');
    } else {
        appMessage.classList.add('error');
        appMessage.innerText = 'Wypełnij wymagane pola!'
    }
})