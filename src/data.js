// Export filter by gender
export const filterGender = (data, gender) => {
  const filtrado = data.filter(item => item.gender === gender);
return filtrado;
};

// Export filter by status
export const filterStatus = (data, status) => {
  const filtrado = data.filter(item => item.status === status);
return filtrado;
};

// Export filter by species 
export const filterSpecies = (data, species) => {
  const filtrado = data.filter(item => item.species === species);
return filtrado;
};

// Export order A-Z ascendent
export const ordenAZ = (dataFilter) => {
 const sortOrdenAZ =  dataFilter.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
//return 0;
})
return sortOrdenAZ;
};

// Export order A-Z descendent
export const ordenZA = (dataFilter) => {
const sortOrdenZA =  dataFilter.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
 //return 0;
 
})
return sortOrdenZA;
};

//Search
export const buscar = (data, condition, value) => {
  return data.filter(item => item[condition].toLowerCase().includes(value.toLowerCase()));
};

// función selección al azar de personaje Quiz
// export function quiz (data){
//   return data [Math.floor(Math.random()*data.length)]
// }
// Exporta función statisticsFrequency que retorna la proporción de la categoría de los personajes respecto del total de la data
// export const statisticsFrequency = (originalDataLength, categoryDataLength) => {
//   let firstData = originalDataLength.length;
//   let secondData = categoryDataLength.length;
//   return Math.round(secondData * 100 / firstData);
// };

