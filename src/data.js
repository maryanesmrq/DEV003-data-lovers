
export const filterByGeneration = (data, generation) => (data.filter((pokemon) => (
  pokemon.generation.name === generation))
); 

export const search = (data, inputText) => {
  const lengthText = inputText.length;
  return data.filter(
    (pokemon) => pokemon.name.slice(0, lengthText) === inputText
  )
};

export const filterByType = (data, typeChose) => {
  return data.filter(
    (pokemon) => pokemon.type.includes(typeChose)
  )
}



export const order = (data, parameter) => {
  let newArray = [];
  // Orden alfabético ascendiente y descendiente
  const sortArray = data.sort((a, b) => {
    return a.name > b.name ? 1 : -1
  });
  if (parameter === 'A-Z') {
    newArray = sortArray;
  } else if (parameter === 'Z-A') {
    newArray = sortArray.reverse();
    // Orden por defecto
  } else {
    newArray = data.sort((a, b) => {
      return a.name > b.name ? 1 : -1
    });
  }
  return newArray;
};

    




