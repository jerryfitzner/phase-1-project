/* Global */

let scenery = [];
const apiUrl = 'http://localhost:3000';

/* Nodes */
const mainDiv = () => document.getElementById("main");
const homeClick = () => document.getElementById("home-link");
const placesClick = () => document.getElementById('places-link');
const createScene = () => document.getElementById('create-link');
const favScenery = () => document.getElementsByTagName('a');

/* Tamplates */

// const homePage = () => {
//   return `
//   <h2 class="center-align">Welcome to Open Air</h2>
//   <h4 class="center-align">Take a Day and Step Into Open Air</h4>
//   `
// }

// const sceneryCard = (scene) => {
//   return `
//   <div class="row card-panel hoverable" id=${ scene.id }>
//     <div class="col s12">
//       <h4 class="center-align">${ scene.title }</h4>
//       <p class="center-align">${ scene.description }</p>
//       <p class="center-align">${ scene.favorites } Favorites</p>
//       <div class="divider"></div>
//       <h5>Difficulty</h5>
//       <p>${ scene.difficulty }</p>
//       <h5>Location</h5>
//       <p>${ scene.location }</p>
//       <div class="center-align">
//         <a class="waves-effect light-green darken-2 btn"><i class="material-icons right">thumb_up</i>Favorite</a>
//       </div>
//     </div>
//   </div>
//   `
// }

const createHomePage = () => {
  mainDiv().innerHTML = '';
  const hdTwo = document.createElement('h2');
  const hdFour = document.createElement('h4');
  hdTwo.className = "center-align";
  hdFour.className = "center-align";
  hdTwo.textContent = "Welcome to Open Air";
  hdFour.textContent = "Take Today and Step Into Open Air";
  mainDiv().appendChild(hdTwo); 
  mainDiv().appendChild(hdFour); 
}

const createSceneryCard = (scene) => {
  const div = document.createElement('div');
  const divTwo = document.createElement('div');
  const divThree = document.createElement('div'); 
  const divFour = document.createElement('div');
  const paragraph = document.createElement('p'); 
  const paragraphTwo = document.createElement('p');
  const paragraphThree = document.createElement('p');
  const paragraphFour = document.createElement('p');
  const hdFour = document.createElement('h4'); 
  const hdFive = document.createElement('h5'); 
  const hdFiveSix = document.createElement('h5'); 
  const aElement = document.createElement('a'); 
  const iElement = document.createElement('i');
  div.id = `${ scene.id }`;
  div.className = `row card-panel hoverable`;
  divTwo.className = "col s12";
  divFour.className = "center-align";
  hdFour.className = "center-align";
  paragraph.className = "center-align";
  paragraphTwo.className = "center-align";
  divThree.className = "divider";
  aElement.className = "waves-effect light-green darken-2 btn";
  iElement.className = "material-icons right";
  hdFour.innerText = `${ scene.title }`;
  paragraph.innerText = `${ scene.description }`;
  paragraphTwo.innerText = `${ scene.favorites } Favorites`;
  paragraphThree.innerText = `${ scene.difficulty }`;
  paragraphFour.innerText = `${ scene.location }`;
  hdFive.innerText = "Difficulty";
  hdFiveSix.innerText = "Location";
  aElement.innerText = "Favorite";
  iElement.innerText = "thumb_up";
  mainDiv().appendChild(div);
  div.appendChild(divTwo);
  divTwo.appendChild(hdFour);
  divTwo.appendChild(paragraph);
  divTwo.appendChild(paragraphTwo);
  divTwo.appendChild(divThree);
  divTwo.appendChild(hdFive);
  divTwo.appendChild(paragraphThree);
  divTwo.appendChild(hdFiveSix);
  divTwo.appendChild(paragraphFour);
  divTwo.appendChild(divFour);
  divFour.appendChild(aElement);
  aElement.appendChild(iElement);
  aElement.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
  });
}

/* Events */

const homeClickEvent = () => {
  homeClick().addEventListener('click', (e) => {
    e.preventDefault();
    createHomePage();
  })
}

const placesClickEvent = () => {
  placesClick().addEventListener('click', (e) => {
    e.preventDefault();
    mainDiv().innerHTML = '';
    eachScene();
  });
}

const sceneryLoad = () => {
  fetch(apiUrl + '/scenery')
  .then(resp => resp.json())
  .then(data => scenery = data)//Updates scenery array with json data
}

// const favoriteClickEvent = () => {
//   favScenery().addEventListener('click', (e) => {
//     // e.preventDefault();
//     console.log(e);
//   })
// }

/* Render */

// const renderHome = () => {
//   mainDiv().innerHTML = createHomePage();//loads the homepage html to the DOM when the home button is clicked.
// }

// const renderScenery = () => {
//   mainDiv().innerHTML = eachScene();//takes the new array from eachScene() and adds the html from sceneryCard() to the dom. 
// }

const eachScene = () => {
  return scenery.map(scene => createSceneryCard(scene));//runs each json object through
}

/* Code */





/* DOM */

document.addEventListener('DOMContentLoaded', () => {
  createHomePage();//renders home page at start of page loading 
  homeClickEvent();
  placesClickEvent();//activates event listener 
  sceneryLoad();//loads the json scenes already created. 
})