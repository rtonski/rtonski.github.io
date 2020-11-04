const submit = (event) => {
    event.preventDefault();

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    
    console.log(fname.value, lname.value);
}


let form = document.getElementById('form');


form.addEventListener('submit', submit);
