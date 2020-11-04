let formNewsletter = document.getElementById('nl-form');
let agrAllChbx = document.getElementById('agrall');


const validate = (event) => {
    
    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agr1 = document.getElementById('agr1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === ''){
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';
        errors.appendChild(liError); 
    }
   
    if (txtEmail.value.trim() === ''){
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail!';
        errors.appendChild(liError); 
    }

    if (!txtEmail.value.includes('@')){
        let liError = document.createElement('li');
        liError.innerText = 'Adres musi zawierać znak "@"!';
        errors.appendChild(liError); 
    }

    if (!agr1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Musisz zaznaczyć zgodę nr 1!';
        errors.appendChild(liError); 
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }
   
}

const allAgree = (event) => {
    
    let agr1 = document.getElementById('agr1');
    let agr2 = document.getElementById('agr2');

    agr1.checked = event.target.checked;
    agr2.checked = event.target.checked;
    
    agr1.disabled = event.target.checked;
    agr2.disabled = event.target.checked;

console.log(event.target.checked)


}



formNewsletter.addEventListener('submit', validate);
agrAllChbx.addEventListener('change', allAgree);
