// API à utiliser pour le travail: https://randomuser.me/api/?results=5
//TP#2

//fetch('https://randomuser.me/api/?results=5')
//.then (response => response.json())
//.then (data => console.log(data))
//.catch(error => console.log(error));



fetch('https://randomuser.me/api/?results=5')
.then (response => response.json())
.then (data => {
    let output = '<h2>List of users</h2>';
    data.forEach(function(element) {
        output+=element.gender + ' - ' 
        output+=element.name + ' - '
        output+=element.location + ' - '
        output+=element.email + ' - '
        output+=element.picture + '<br/>'  
    });
    console.log(output)
    document.getElementById('user').innerHTML = output
    console.log(data);
});
