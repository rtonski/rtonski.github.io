// console.log('nanana')

const showPreloader = () => {
    
    let preloader = document.getElementById('preloader-gif');
    preloader.style.display = 'block';
};

const hidePreloader = () => {
    
    let preloader = document.getElementById('preloader-gif');
    preloader.style.display = 'none';
};

const gData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(r => r.json())
        .then(data => {
            console.log('dziala');

            for(let dt of data) {
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pWeb = document.createElement('p');

                pId.innerText =`ID: ${dt.id}`;
                pName.innerText = `Name: ${dt.name}`;
                pWeb.innerHTML =`Webside: ${dt.website} <br>--------`;

                document.body.appendChild(pId);
                document.body.appendChild(pName);
                document.body.appendChild(pWeb);

            }
            
            hidePreloader();
        })

};

const scrollToEndOfPage = () => {
    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;
    
    let sumScroll = Math.ceil(scrollTop + clientHeight)
  
    if(sumScroll >= scrollHeight ) {
        showPreloader();
        gData();
    };

};

window.addEventListener('scroll', scrollToEndOfPage);