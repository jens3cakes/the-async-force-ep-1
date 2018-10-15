const person4 = new XMLHttpRequest();
function person4Listener() {
  if (this.readyState === 4) {
    person4Name.innerHTML = JSON.parse(person4['responseText']).name;
    //console.log('this is this',this)
    //console.log(this.readyState)
    //console.log(this.responseText);
  }
}
person4.addEventListener('load', person4Listener);
person4.open("GET", "https://swapi.co/api/people/4/");
person4.send();

const homeworld = new XMLHttpRequest();
function homeworld4Listener() {
  if (this.readyState === 4) {
    person4HomeWorld.innerHTML = JSON.parse(homeworld['responseText']).name;
  }
}
homeworld.addEventListener('load', homeworld4Listener);
homeworld.open("GET", "https://swapi.co/api/planets/1/");
homeworld.send();

const person14NameEl = new XMLHttpRequest();
function person14NameElListener() {
  person14Name.innerHTML = JSON.parse(person14NameEl['responseText']).name;
}
person14NameEl.addEventListener('load', person14NameElListener);
person14NameEl.open("GET", "https://swapi.co/api/people/14/")
person14NameEl.send();

const person14SpeciesEl = new XMLHttpRequest();
function person14SpeciesElListener() {
  person14Species.innerHTML = JSON.parse(person14SpeciesEl['responseText']).name;
}
person14SpeciesEl.addEventListener('load', person14SpeciesElListener);
person14SpeciesEl.open("GET", "https://swapi.co/api/species/1/")
person14SpeciesEl.send();

let makeClass = document.createElement('li');
makeClass.className = ('film')
filmList.appendChild(makeClass);

let makeTitleClass = document.createElement('h2'); makeTitleClass.className = 'filmTitle'
makeTitleClass.innerHTML;
makeClass.appendChild(makeTitleClass);

const swMovie1 = new XMLHttpRequest();
function swMovie1Listener() {
  makeTitleClass.innerHTML = JSON.parse(swMovie1.responseText).results[0].title;
}
swMovie1.addEventListener('load', swMovie1Listener);
swMovie1.open("GET", "https://swapi.co/api/films/");
swMovie1.send();

let planetsInMov1 = document.createElement('h3')
planetsInMov1.innerHTML = "Planets";
makeTitleClass.appendChild(planetsInMov1);

let planetsInMov1List = document.createElement('ul');
planetsInMov1List.className = 'filmPlanets';
planetsInMov1.appendChild(planetsInMov1List);

let starWarsPlanet1 = document.createElement('li');
starWarsPlanet1.id = 'Alderaan'
//starWarsPlanet1.innerHTML;
planetsInMov1List.appendChild(starWarsPlanet1)

const swMovie1Planet = new XMLHttpRequest();
function swMovie1PlanetListener() {
  starWarsPlanet1.innerHTML = JSON.parse(swMovie1Planet.responseText).name
}
swMovie1Planet.addEventListener('load', swMovie1PlanetListener);
swMovie1Planet.open("GET", "https://swapi.co/api/planets/2/")
swMovie1Planet.send();






// }


// let starWars2 = document.createElement('li');
// starWars2.id = 'Attack Of The Clones';
// starWars2.innerHTML;
// filmList.appendChild(starWars2);

// const swMovie2 = new XMLHttpRequest();
// function swMovie2Listener(){
//   starWars2.innerHTML = JSON.parse(swMovie2.responseText).results[1].title;
// }
// swMovie2.addEventListener('load',swMovie2Listener);
// swMovie2.open("GET", "https://swapi.co/api/films/");
// swMovie2.send();