
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
  if(parameter == 'A-Z' || parameter == 'Z-A'){
    const sortedArray = data.slice().sort((a, b) => a.name > b.name ? 1 : -1 );
    return parameter === 'Z-A' ? sortedArray.reverse() : sortedArray
  } else {
    return data
  }
};

    




