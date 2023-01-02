import { filterByGeneration, search, order, filterByType, } from './data.js';
import data from './data/pokemon/pokemon.js';

// Ser más específica con lo que se realiza y cambiar el nombre de la función //pokemonCardsHTML

const pokemonCards = (allPokemons) => {
  let dataPokemon = '';
  allPokemons.forEach((eachPokemon) => {
    const pokemon = `
    <div class="pokemon-card">
      <p class="pokemon-number left">${eachPokemon.num}</p>
      <img class="pokemon-image" src="${eachPokemon.img}">
      <p class="pokemon-name">${eachPokemon.name}</p> 
    </div>`;
    dataPokemon += pokemon;
  });
  return dataPokemon;
};

// Ser más específica con la función GENERATION // updateGenerationList
// Obteniendo todos los pokemones y separando por generación
const updateGenerationList = (pokemonList,sectionContent) => {
  sectionContent.innerHTML = '';
  // Dejar de mostrar el contenedor del filtrado
  //sectionContent.classList.remove('show');
  // Creando secc Kanto
  //sectionContent.appendChild(generation('I', 'Kanto'));
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-distribution';
  // Creando e insertando cards de pokemones
  cardsContainer.innerHTML += pokemonCards(pokemonList);
  sectionContent.appendChild(cardsContainer);
};

// El evento que llama a la función que inserta todos los pokemones al iniciar la página
window.addEventListener('load', () => {
  const sectionContent = document.querySelector('.content');
  const kantoPokemons = filterByGeneration(data.pokemon, 'kanto')
  updateGenerationList(kantoPokemons,sectionContent);
  // Guardando input para buscar
  const searchInput = document.querySelector('#filter-search');
  setupSearchInputEvent(searchInput,sectionContent,data.pokemon)
  const selectionInput = document.querySelector('#selection');
  setupOrderListEvent(selectionInput,sectionContent,data.pokemon)
});

const setupSearchInputEvent = (searchInput,sectionContent,pokemonSearchList) => {
  // Evento del input que ejecuta la funcion search
  searchInput.addEventListener('input', () => {
    const inputText = searchInput.value.toLowerCase();
    if(inputText.length > 0){
      // Buscando pokemones
      const result = search(pokemonSearchList, inputText);
      result.length > 0 ? updateGenerationList(result,sectionContent) : setupNoResultsList(sectionContent)
    } else {
      updateGenerationList(pokemonSearchList,sectionContent);
    }
  });
}

const setupNoResultsList = (sectionContent) => {
  sectionContent.innerHTML = '';
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-distribution';
  cardsContainer.innerHTML += ' Juguito de uwu ';
  sectionContent.appendChild(cardsContainer);  
}

const setupOrderListEvent = (selectionInput,sectionContent,pokemonList) => {
  selectionInput.addEventListener('change', () => {
    const chosenOrder = selectionInput.value;
    const orderedPokemons = order(pokemonList, chosenOrder)
    updateGenerationList(orderedPokemons,sectionContent);
  });
}



