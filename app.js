const cards = document.querySelector(".cards");

const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0/")
    .then((response) => response.json())
    .then((data) => {
      const fetchAll = data.results.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );
      Promise.all(fetchAll).then((data) =>
        data.forEach((item) => {
          createCard(
            item.name,
            item.sprites.other.dream_world.front_default,
            item.types[0].type.name
          );
        })
      );
    });
};

// item.sprites.other.dream_world.front_default, item.name item.types[0].type
const createCard = (data, img, p) => {
  const div = document.createElement("div");
  div.className = "card";
  const paragraph = document.createElement("p");
  const h1 = document.createElement("h1");
  const image = document.createElement("img");
  image.src = img;
  const h1content = document.createTextNode(`${data}`);
  const pcontent = document.createTextNode(`${p}`);
  h1.appendChild(h1content);
  paragraph.appendChild(pcontent);
  div.appendChild(image);
  div.appendChild(h1);
  div.appendChild(paragraph);

  cards.appendChild(div);
};
fetchData();

const searchPokemons = () => {
  const input = document.querySelector("#search").value;
  document.querySelector(".cards").innerHTML = "";
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0/")
    .then((response) => response.json())
    .then((data) => {
      const fetchAll = data.results.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );
      Promise.all(fetchAll).then((data) => {
        data.forEach((item) => {
          if (item.name.includes(input))
            createCard(
              item.name,
              item.sprites.other.dream_world.front_default,
              item.types[0].type.name
            );
        });
      });
    });
};
document.querySelector("#button").addEventListener("click", searchPokemons);
