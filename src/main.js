import { filterGender, filterStatus, filterSpecies, ordenAZ, ordenZA, search } from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';


// Data Rick and Morty
const data = rickandmorty.results;

// let containerMobile = document.getElementById("container-mobile");
const containerData = document.getElementById("cards");
const sortOption = document.getElementById("sort");
const filterOptionStatus = document.getElementById("filterStatus");
const filterOptionGender = document.getElementById("filterGender");
const filterOptionSpecies = document.getElementById("filterSpecies");
const searchCharacters = document.querySelector("#search");
const clearButton = document.getElementById("clear-button");

// Template de cards personajes en container, muestra las cards en la interfaz e incluye método de ordenar AZ-ZA. Depende de la data ingresada.
const templateTarjeta = (x) => {
  x.forEach((results) => {
    const info = `<div class="card"><img src="${results.image}">
        <br><p><strong>Name:</strong> ${results.name}</p>
        <br><p><strong>Status:</strong> ${results.status}</p>
        <br><p><strong>Species:</strong> ${results.species}</p>
        <br><p><strong>Gender:</strong> ${results.gender}</p>
        <br><p><strong>Origin:</strong> ${results["origin"].name}</p></div>`;
    containerData.insertAdjacentHTML("afterbegin", info);
  })
  const dataSort = x;
  sortOption.addEventListener("click", () => {
    if (sortOption.value == "name") {
      containerData.innerHTML = ""
      return templateTarjeta(ordenAZ(dataSort));
    }
    else if (sortOption.value == "nameZ") {
      containerData.innerHTML = ""
      return templateTarjeta(ordenZA(dataSort));
    }

  });
};
// Define función de búsqueda de personajes por nombre. Depende de data ingresada.
const searchInput = (x) => {
  searchCharacters.addEventListener('keyup', () => {
    const dataPersonajes = buscar(x, 'name', searchCharacters.value);
    containerData.innerHTML = "";
    return templateTarjeta(dataPersonajes);
  });
};
// clear button
templateTarjeta(data);
clearButton.addEventListener("click", () => {
  return window.location.reload();
});

//funcion filtrado por Gender
filterOptionGender.addEventListener("click", () => {
  let dataFiltrada;
  switch (filterOptionGender.value) {
  case "Female": containerData.innerHTML = "";
    dataFiltrada = filterGender(data, "Female");
    templateTarjeta(dataFiltrada);
    break;
  case "Male": containerData.innerHTML = "";
    dataFiltrada = filterGender(data, "Male");
    templateTarjeta(dataFiltrada);
    break;
  case "unknown": containerData.innerHTML = "";
    dataFiltrada = filterGender(data, "unknown");
    templateTarjeta(dataFiltrada);
    break;
  case "Genderless": containerData.innerHTML = "";
    dataFiltrada = filterGender(data, "Genderless");
    templateTarjeta(dataFiltrada);
    break;
  case "all": containerData.innerHTML = "";
    dataFiltrada = templateTarjeta(data);
    templateTarjeta(dataFiltrada);
    break;
  }
  // Función buscar en input por dataFiltrada
  searchInput(dataFiltrada);
});

//funcion filtrado por Species
filterOptionSpecies.addEventListener("click", () => {
  let dataFiltrada;
  switch (filterOptionSpecies.value) {
  case "Human": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Human");
    templateTarjeta(dataFiltrada);
    break;
  case "Alien": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Alien");
    templateTarjeta(dataFiltrada);
    break;
  case "Mytholog": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Mytholog");
    templateTarjeta(dataFiltrada);
    break;
  case "unknown": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "unknown");
    templateTarjeta(dataFiltrada);
    break;
  case "Robot": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Robot");
    templateTarjeta(dataFiltrada);
    break;
  case "Poopybutthole": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Poopybutthole");
    templateTarjeta(dataFiltrada);
    break;
  case "Parasite": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Parasite");
    templateTarjeta(dataFiltrada);
    break;
  case "Animal": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Animal");
    templateTarjeta(dataFiltrada);
    break;
  case "Disease": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Disease");
    templateTarjeta(dataFiltrada);
    break;
  case "Humanoid": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Humanoid");
    templateTarjeta(dataFiltrada);
    break;
  case "Cronenberg": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Cronenberg");
    templateTarjeta(dataFiltrada);
    break;
  case "Vampire": containerData.innerHTML = "";
    dataFiltrada = filterSpecies(data, "Vampire");
    templateTarjeta(dataFiltrada);
    break;
  case "all": containerData.innerHTML = "";
    dataFiltrada = templateTarjeta(data);
    templateTarjeta(dataFiltrada);
    break;
  }
  // Función buscar en input por dataFiltrada
  searchInput(dataFiltrada);
});

//funcion filtrado por Status
filterOptionStatus.addEventListener("change", () => {
  let dataFiltrada;
  switch (filterOptionStatus.value) {
  case "Alive": containerData.innerHTML = "";
    dataFiltrada = filterStatus(data, "Alive");
    templateTarjeta(dataFiltrada);
    break;
  case "Dead": containerData.innerHTML = "";
    dataFiltrada = filterStatus(data, "Dead");
    templateTarjeta(dataFiltrada);
    break;
  case "unknown": containerData.innerHTML = "";
    dataFiltrada = filterStatus(data, "unknown");
    templateTarjeta(dataFiltrada);
    break;
  case "all": containerData.innerHTML = "";
    dataFiltrada = templateTarjeta(data);
    templateTarjeta(dataFiltrada);
    break;
  }
  // Función buscar en input por dataFiltrada
  searchInput(dataFiltrada);
});

//Search
searchCharacters.addEventListener('keyup', () => {
  const dataPersonajes = search(data, 'name', searchCharacters.value);
  containerData.innerHTML = "";
  templateTarjeta(dataPersonajes);
});

// Modal inicio
// const modal = document.getElementById("myModal");
// const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// Usuario hace click y modal se abre
// btn.onclick = function () {
//     modal.style.display = "block";

// Usuario hace click en <span> (x), modal se cierra
// span.onclick = function () {
//     modal.style.display = "none";
// };
// Usuario hace click fuera del modal, modal se cierra
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };

