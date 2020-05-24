const url = 'https://incoddebackendd1.herokuapp.com/';

fetch(url)
.then(function(response){
  response.json().then(function(data){
    console.log(data); 
    });
  })
.catch(function(err){ 
  console.error('Failed retrieving information', err);
});