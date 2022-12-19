// estas funciones son de ejemplo

export const filterByGeneration = (data, generation) => (data.filter((pokemon) => (
  pokemon.generation.name === generation))
);


export const search = (data, inputText) => {
  const result = [];
  // buscador de pokemones
  data.forEach((eachPokemon) => {
    const namePokemon = eachPokemon.name;
    const lengthText = inputText.length;
    if (namePokemon.slice(0, lengthText) === inputText) {
      result.push(eachPokemon);
    }
  });
  return result;
};

export const filterByType = (pokemonType, typeChose) => {
  const typesResult = [];
  for (let i = 0; i < pokemonType.length; i += 1) {
    for (let z = 0; z < pokemonType[i].type.length; z += 1) {
      if (pokemonType[i].type[z] === typeChose) {
        typesResult.push(pokemonType[i]);
      }
    }
  }
  return typesResult;
};

export const order = (data, parameter) => {
  let newArray = [];
  let result = 0;
  // Orden alfabético ascendiente y descendiente
  const sortArray = data.sort((a, b) => {
    if (a.name > b.name) {
      result = 1;
    }
    if (a.name < b.name) {
      result = -1;
    }
    return result;
  });
  if (parameter === 'A-Z') {
    newArray = sortArray;
  } else if (parameter === 'Z-A') {
    newArray = sortArray.reverse();
    // Orden por defecto
  } else {
    newArray = data.sort((a, b) => {
      if (a.num > b.num) {
        result = 1;
      }
      if (a.num < b.num) {
        result = -1;
      }
      return result;
    });
  }
  return newArray;
};

    




export const anotherExample = () => {
  return 'OMG';
};
