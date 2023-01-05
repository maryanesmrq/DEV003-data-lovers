import { filterByGeneration, search, order, filterByType, dpsCalculate, epsCalculate} from './data.js';
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
      <div class="button-container">
      <button name="${eachPokemon.name}" class="button-features">Features</button>
      <button name="${eachPokemon.name}" class="button-attacks">Attacks</button>
      </div>
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
  let buttonFeaturesArray = Array.from(document.getElementsByClassName("button-features"))
  let buttonAttackArray = Array.from(document.getElementsByClassName("button-attacks"))
  buttonFeaturesArray.forEach(function(button){
    button.addEventListener('click',function(event){
      console.log(data)
      let pokemon = data.pokemon.find(function(pokemon){
        return pokemon.name === event.target.name
      })
      let modal = document.getElementById('modal')
      modal.style.display='block'
      modal.innerHTML = `
      <p id="modal_close">x</p>
    <section class="cards">
      <section class="pokemon-name2 green-bg">${pokemon.num} - ${pokemon.name}</section>
      <section class="info-container">
        <div class="sub-container-img">
          <p class="subtitle2">${pokemon['pokemon-rarity']}</p>
          <div class="pokemon-screen green-b">
            <img class="screen-img" src="${pokemon.img}">
          </div>
        </div>
        <div class="sub-container-text">
          <p class="subtitle2">generation</p>
          <p class="p-bottom">N° ${pokemon.generation.num.slice(10).toUpperCase()} - ${pokemon.generation.name}</p>
          <p class="subtitle2">type</p>
          <p class="p-bottom">${pokemon.type.join()}</p>
          <p class="subtitle2">size</p>
          <p >Height: ${pokemon.size.height}</p>
          <p >Weight: ${pokemon.size.weight}</p>
        </div>
      </section>
      <section class="info-container">
        <div class="column">
          <p class="subtitle2 h-stat">Encounter</p>
          <div class="number-data">
            <p>Base flee rate</p>
            <p class="num-cel">${(pokemon.encounter['base-flee-rate'] * 100).toFixed(1)}%</p>
          </div>
          <div class="number-data">
            <p>Base capture rate</p>
            <p class="num-cel">${(pokemon.encounter['base-capture-rate'] * 100).toFixed(1)}%</p>
          </div>
        </div>
        <div class="column">
          <p class="subtitle2 h-stat">Spawn chance</p>
          <p class="num-cel">${(pokemon['spawn-chance'] * 100).toFixed(2)}%</p>
        </div>
      
      `
      document.getElementById('modal_close').addEventListener('click', function(){
        document.getElementById('modal').style.display='none'
      })
    })
  })
  buttonAttackArray.forEach(function(button){
button.addEventListener('click',function(event){
  let pokemon = data.pokemon.find(function(pokemon){
    return pokemon.name === event.target.name
  })
  let modal = document.getElementById('modal')
      modal.style.display='block'
      modal.innerHTML = `
      <p id="modal_close">x</p>
      <section class="cards">
        <section class="pokemon-name2 red-bg">${pokemon.num} - ${pokemon.name}</section>
        <section class="info-container">
          <div class="sub-container-img">
            <div class="pokemon-screen red-b">
              <img class="screen-img" src="${pokemon.img}">
            </div>
          </div>
          <div class="stats-container">
            <p class="borderRows subtitle2">Stats</p>
            <div class= "name-stats">
              <p>Base attack: ${pokemon.stats['base-attack']}</p>
              <p>Base defense: ${pokemon.stats['base-defense']}</p>
              <p>Base stamina: ${pokemon.stats['base-stamina']}</p>
              <p>Max CP: ${pokemon.stats['max-cp']}</p>
              <p>Max HP: ${pokemon.stats['max-hp']}</p>
            </div>
          </div>
        </section>
        <section class="info-container">
          <div class="column2">
            <p class="borderRows subtitle2">Resistant</p>
            <p>${pokemon.resistant.join()}</p>
          </div>
          <div class="column2">
            <p class="borderRows subtitle2">Weakness</p>
            <p>${pokemon.weaknesses.join()}</p>
          </div>
        </section> 
      </section>  
      <table>
      <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>BD</th>
      <th>E</th>
      <th>MD</th>
      <th>DPS</th>
      <th>EPS</th>
    </tr>
  </thead> 
    <tbody>
    ${pokemon['special-attack'].map(function(attack){
      return `
      <tr>
      <td>
      ${attack.name}
      </td>
      <td>
      ${attack.type}
      </td>
      <td>
      ${attack['base-damage']}
      </td>
      <td>
      ${attack.energy}
      </td>
      <td>
      ${attack['move-duration-seg']}
      </td>
      <td>
      ${dpsCalculate(attack, attack.type)}
      </td>
      <td>
      ${epsCalculate(attack)}
      </td>
      </tr>
      `
    })}

    </tbody>
      </table>
      `
      console.log(data)
      document.getElementById('modal_close').addEventListener('click', function(){
        document.getElementById('modal').style.display='none'
      })
})
  })
};

// El evento que llama a la función que inserta todos los pokemones al iniciar la página
window.addEventListener('load', () => {
  const sectionContent = document.querySelector('.content');
  const kantoPokemons = filterByGeneration(data.pokemon, 'kanto')
  updateGenerationList(kantoPokemons, sectionContent);
  // Guardando input para buscar
  const searchInput = document.querySelector('#filter-search');
  setupSearchInputEvent(searchInput,sectionContent,data.pokemon)
  const selectionInput = document.querySelector('#selection');
  setupOrderListEvent(selectionInput,sectionContent,data.pokemon)
  const filter = document.getElementById('filter-by-type')
  console.log(filter)
filter.addEventListener('change', function(event){
  let selectedTypePokemons = data.pokemon.filter(function(pokemon){
return pokemon.type.includes(event.target.value.toLowerCase()) 
  })
  console.log(event.target.value)
  if (event.target.value === 'Default'){
  updateGenerationList(kantoPokemons, sectionContent)
  } else {
    updateGenerationList(selectedTypePokemons, sectionContent)
  }
})
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




