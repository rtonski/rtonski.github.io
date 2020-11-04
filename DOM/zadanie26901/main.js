

const setBackground = () => {
    
    let p1 = document.getElementById('one');
    let p2 = document.getElementById('two');
    
    p1.classList.toggle('bgred');
    p2.classList.toggle('bgyellow');
}


let btnBackground = document.getElementById('button');

btnBackground.addEventListener('click', setBackground);


