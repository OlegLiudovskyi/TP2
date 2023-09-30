// API à utiliser pour le travail: https://randomuser.me/api/?results=5
//TP#2

fetch('https://randomuser.me/api/?results=5')
.then (response => response.json())
.then (data => {
    let output = '<h2>List of users</h2>';
    let rootEl = document.querySelector("main");

    let html = "";

    for(let post of data.results) {
        html += `
        <div class="post">
            <div class="mb-10"><img src="${post.picture.large}" alt="picture"></div>
            <div class="mb-10">Nom: ${post.name.first} ${post.name.last}</div>
            <div class="mb-10">E-mail: ${post.email}</div>
        </div>       
        `
    }

    rootEl.innerHTML = html
    console.log(output)
    // document.getElementById('user').innerHTML = output
    console.log(data.results);
});
