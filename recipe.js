
const recipes = document.querySelector('.container');
let searchButton =  document.querySelector('#search');
let queryInput = document.querySelector('#query');
let originalUrl = 'https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=';
let finalUrl = 'https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=';



searchButton.addEventListener('click', function() {
let val = queryInput.value;
console.log("query input:", queryInput.value); //this works
originalUrl = "";
originalUrl += finalUrl + queryInput.value;
console.log("this is the search url:", originalUrl);

fetch(originalUrl)
  .then(function(thing){
    console.log(thing); //this works - returns a bunch of stuff.
    return thing.json();
  })
  .then(function(anotherThing){
    let text = '';
    console.log(anotherThing); // this works - returns an array w/ 9 things.
    for (let i = 0; i < anotherThing.results.length; i++) {
      text += ` <div>
      <h3>${anotherThing.results[i].title}</h3>
      <h4>${anotherThing.results[i].href}</h4>
      <img src="${anotherThing.results[i].thumbnail}">
      </div>`
    }
    recipes.innerHTML = text;
  });
});
