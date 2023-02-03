import {filterGender, filterStatus, filterSpecies, ordenAZ, ordenZA} from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

// Data Rick and Morty
const data = rickandmorty.results;

// let containerMobile = document.getElementById("container-mobile");
const containerData = document.getElementById("cards");
const sortOption = document.getElementById("sort");
const filterOptionStatus = document.getElementById("filterStatus");
const filterOptionGender = document.getElementById("filterGender");
const filterOptionSpecies = document.getElementById("filterSpecies");
const clearButton = document.getElementById("clear-button");

// Character template cards container and sort by A-Z and Z-A.
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
    if (sortOption.value === "name") {
      containerData.innerHTML = ""
      return templateTarjeta(ordenAZ(dataSort));
    }
    else if (sortOption.value === "nameZ") {
      containerData.innerHTML = ""
      return templateTarjeta(ordenZA(dataSort));
    }
  });
};

// clear button
templateTarjeta(data);
clearButton.addEventListener("click", () => {
  return window.location.reload();
});

//Filter by gender function
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
});
// Search function inside filterByGender
//   searchInput(dataFiltrada);
// });

//Filter by species function
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
});
// Seach function inside filterSpecies
//   searchInput(dataFiltrada);
// });

//Filter by status function
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
});
// Search function inside filterStatus
//   searchInput(dataFiltrada);
// });

