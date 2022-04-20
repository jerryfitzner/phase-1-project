

document.addEventListener('DOMContentLoaded', () => {
  createHomePage();//renders home page at start of page loading 
  homeClickEvent();
  placesClickEvent();//activates outdoor places click event listener 
  sceneryLoad();//loads the json scenes already created. 
  createNewScenery();//activates create scene click event listener
})

let scenery = [];
const apiUrl = 'http://localhost:3000';

/* Nodes */
const mainDiv = () => document.getElementById("main");
const homeClick = () => document.getElementById("home-link");
const placesClick = () => document.getElementById('places-link');
const createScene = () => document.getElementById('create-link');
const favScenery = () => document.getElementsByTagName('a');
const activeSubmit = () => document.getElementById('form');

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
  const aElement = document.createElement('button'); 
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
    let favorites = scene.favorites += 1;
    fetch(`http://localhost:3000/scenery/${scene.id}`,{
      method: 'PATCH',
      headers:
      {
        "Accept": "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "favorites": favorites
      })
    })
    .then(resp => resp.json())
    .then(favorites => {
      paragraphTwo.innerText = `${ favorites.favorites } Favorites`;
    })
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
    sceneryLoad();
    mainDiv().innerHTML = '';
    eachScene();
  });
}

const sceneryLoad = () => {
  fetch(apiUrl + '/scenery')
  .then(resp => resp.json())
  .then(data => scenery = data)//Updates scenery array with json data
}

const createNewScenery = () => {
  createScene().addEventListener('click', (e) => {
    e.preventDefault();
    createNewSceneryCard();
  });
}

const eachScene = () => {
  return scenery.map(scene => createSceneryCard(scene));//runs each json object through
}

const createNewSceneryCard = () => {
  const div = document.createElement('div');
  const hFour = document.createElement('h4');
  const form = document.createElement('form');
  const divOne = document.createElement('div');
  const divTwo = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const divThree = document.createElement('div');
  const divFour = document.createElement('div');
  const divFive = document.createElement('div');
  const divSix = document.createElement('div');
  const textAreaOne = document.createElement('textarea');
  const textAreaTwo = document.createElement('textarea');
  const textAreaThree = document.createElement('textarea');
  const labelTwo = document.createElement('label');
  const labelThree = document.createElement('label');
  const labelFour = document.createElement('label');
  const divSeven = document.createElement('div');
  const btnElement = document.createElement('button'); 
  const iElement = document.createElement('i');

  input.id = "sceneryName";
  form.id = "form";
  textAreaOne.id = "briefDescription";
  textAreaTwo.id = "difficulty";
  textAreaThree.id = "location";

  div.className = "row card-panel hoverable";
  hFour.className = "center-align";
  form.className = "col s12";
  divOne.className = "row";
  divTwo.className = "input-field col s6";
  divThree.className = "row";
  divFour.className = "input-field col s12";
  divFive.className = "input-field col s12";
  divSix.className = "input-field col s12";
  textAreaOne.className = "materialize-textarea";
  textAreaTwo.className = "materialize-textarea";
  textAreaThree.className = "materialize-textarea";
  divSeven.className = "center-align";
  btnElement.className = "waves-effect light-green darken-2 btn";
  iElement.className = "material-icons right";

  input.setAttribute("type", "text");
  input.setAttribute("data-length", "10");
  label.setAttribute("for", "sceneryName");
  textAreaOne.setAttribute("data-length", "120");
  textAreaTwo.setAttribute("data-length", "120");
  textAreaThree.setAttribute("data-length", "120");
  labelTwo.setAttribute("for", "briefDescription");
  labelThree.setAttribute("for", "difficulty");
  labelFour.setAttribute("for", "location");
  
  hFour.innerText = "Create a New Scenery";
  label.innerText = "Scenery Name";
  labelTwo.innerText = "Brief Description";
  labelThree.innerText = "Difficulty";
  labelFour.innerText = "Location";
  btnElement.innerText = "Submit";
  iElement.innerText = "directions_walk";
  
  div.appendChild(hFour);
  div.appendChild(form);
  form.appendChild(divOne);
  divOne.appendChild(divTwo);
  divTwo.appendChild(input);
  divTwo.appendChild(label);
  form.appendChild(divThree);
  divThree.appendChild(divFour);
  divThree.appendChild(divFive);
  divThree.appendChild(divSix);
  divFour.appendChild(textAreaOne);
  divFive.appendChild(textAreaTwo);
  divSix.appendChild(textAreaThree);
  divFour.appendChild(labelTwo);
  divFive.appendChild(labelThree);
  divSix.appendChild(labelFour);
  form.appendChild(divSeven);
  divSeven.appendChild(btnElement);
  btnElement.appendChild(iElement);
  
  mainDiv().innerHTML = "";
  mainDiv().appendChild(div);

  activeSubmit().addEventListener('submit', submittedForm);
};

const submittedForm = (e) => {
  e.preventDefault();
  const [name, description, difficulty, location] = e.target;
  fetch(apiUrl + '/scenery', {
    method: "POST",
    headers: {
      "Accept": "application/json", //accepting json format
      "Content-Type": "application/json" //sending json format
    },
    body: JSON.stringify({
      title: name.value,
      description: description.value,
      difficulty: difficulty.value,
      location: location.value,
      favorites: 0,
      comments: "" 
    })
  })
  .then(resp => resp.json())
  .then(data => {
    scenery.push(data);
    mainDiv().innerHTML = '';
    eachScene();
  })
}


