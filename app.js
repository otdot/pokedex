const cards = document.querySelector(".cards");

const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      data.results.map((pokemon, i) => createCard(pokemon.name));
    });
};

const createCard = (data) => {
  const div = document.createElement("div");
  div.className = "card";
  const h1 = document.createElement("h1");
  const content = document.createTextNode(`${data}`);
  h1.appendChild(content);
  div.appendChild(h1);
  cards.appendChild(div);
};

fetchData();

// fetch("https://pokeapi.co/api/v2/pokemon/1/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
