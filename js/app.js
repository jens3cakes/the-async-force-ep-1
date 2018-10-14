const person4 = new XMLHttpRequest();
function person4Listener (){
  if(this.readyState === 4){
    person4Name.innerHTML = JSON.parse(person4['responseText']).name;
    //console.log('this is this',this)
    //console.log(this.readyState)
    //console.log(this.responseText);
  }
}
person4.addEventListener('load',person4Listener);
person4.open("GET", "https://swapi.co/api/people/4/");  
person4.send();

const homeworld =  new XMLHttpRequest();
function homeworld4Listener (){
  if(this.readyState === 4){
    person4HomeWorld.innerHTML = JSON.parse(homeworld['responseText']).name;
  }
}
homeworld.addEventListener('load',homeworld4Listener);
homeworld.open("GET", "https://swapi.co/api/planets/1/");
homeworld.send();

const person14NameEl = new XMLHttpRequest();
function person14NameElListener (){
  person14Name.innerHTML = JSON.parse(person14NameEl['responseText']).name;
}
person14NameEl.addEventListener('load',person14NameElListener);
person14NameEl.open("GET","https://swapi.co/api/people/14/")
person14NameEl.send();

const person14SpeciesEl = new XMLHttpRequest();
function person14SpeciesElListener(){
  person14Species.innerHTML = JSON.parse(person14SpeciesEl['responseText']).name;
}
person14SpeciesEl.addEventListener('load', person14SpeciesElListener);
person14SpeciesEl.open("GET","https://swapi.co/api/species/1/" )
person14SpeciesEl.send();

let starWars1 = document.createElement('li');
starWars1.id ='A New Hope';
starWars1.innerHTML;
filmList.appendChild(starWars1);

const swMovie1 = new XMLHttpRequest();

function swMovie1Listener(){
  starWars1.innerHTML = JSON.parse(swMovie1.responseText).results[0].title;
}
swMovie1.addEventListener('load',swMovie1Listener);
swMovie1.open("GET","https://swapi.co/api/films/");
swMovie1.send();
