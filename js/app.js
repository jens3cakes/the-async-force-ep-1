const person4 = new XMLHttpRequest();
function person4Listener() {
  if (this.readyState === 4) {
    person4Name.innerHTML = JSON.parse(person4['responseText']).name;
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

const filmListElm = document.getElementById('filmList');

function getMovieList(url, callback) {
  const getTitleList = new XMLHttpRequest();
  getTitleList.addEventListener('load', callback);
  getTitleList.open("GET", url);
  getTitleList.send();
}

function processMoviesRequest() {
  const movies = JSON.parse(this.responseText)
  if (movies) {
    movies.results.forEach((movie) => {
      const createLiElem = document.createElement('li');
      createLiElem.className = 'film';

      const createH2Elem = document.createElement('h2');
      createH2Elem.className = 'filmTitle';
      createH2Elem.innerText = movie.title;

      const createH3Elem = document.createElement('h3'); createH3Elem.innerText = 'Planets';
      createH2Elem.appendChild(createH3Elem)
      createLiElem.appendChild(createH2Elem);
      filmListElm.appendChild(createLiElem);

      movie.planets.forEach(planetUrl => {
        const planetReq = new XMLHttpRequest()
        planetReq.addEventListener("load", function () {
          const planet = JSON.parse(this.responseText)

          const createUlElem = document.createElement('ul');
          createUlElem.className = 'filmPlanets';
          createH3Elem.appendChild(createUlElem);

          const createPlanetLiElem = document.createElement('li')
          createUlElem.appendChild(createPlanetLiElem)

          const createH4Elem = document.createElement('h4');
          createH4Elem.innerText = planet.name;
          createH4Elem.className = 'planetName'
          createPlanetLiElem.appendChild(createH4Elem);
        })
        planetReq.open("GET", planetUrl)
        planetReq.send();
      })
    })
  }
}
getMovieList("https://swapi.co/api/films/", processMoviesRequest)
