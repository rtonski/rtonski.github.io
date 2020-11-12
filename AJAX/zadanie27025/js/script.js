
let btnGData = document.getElementById('g-data');

const gData = () => {
   
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(r => r.json())
    .then(data => {
        
        // console.log(data);

        let pUserId = document.createElement('p');
        let pId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');

       

        pUserId.innerText = `User ID: ${data.userId}`;
        pId.innerText = `ID: ${data.id}`;
        pTitle.innerText = `Title: ${data.title}`;
        pBody.innerText = `Body: ${data.body}`;

        document.body.appendChild(pUserId);
        document.body.appendChild(pId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);
    })
    .catch(e => {
        console.error(e);
    });
};




btnGData.addEventListener('click', gData );
// setInterval(gData, 2000)
