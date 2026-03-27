let gameData = {};

// LOAD JSON
fetch("games/ml.json")
  .then(res => res.json())
  .then(data => {
    gameData = data;
  });

// SHOW LANES
function showLanes() {
    const lanesDiv = document.getElementById("lanes");

    lanesDiv.innerHTML = `
        <button onclick="showHeroes('exp')">EXP Lane</button>
        <button onclick="showHeroes('mid')">Mid Lane</button>
        <button onclick="showHeroes('gold')">Gold Lane</button>
    `;
}

// SHOW HEROES
function showHeroes(lane) {
    const heroesDiv = document.getElementById("heroes");
    const heroes = gameData.heroes[lane];

    heroesDiv.innerHTML = "";

    heroes.forEach(hero => {
        heroesDiv.innerHTML += `
            <button onclick="showHeroInfo('${hero.name}', '${lane}')">
                ${hero.name}
            </button>
        `;
    });
}

// SHOW HERO INFO
function showHeroInfo(name, lane) {
    const heroInfoDiv = document.getElementById("hero-info");
    const hero = gameData.heroes[lane].find(h => h.name === name);

    heroInfoDiv.innerHTML = `
        <h2>${hero.name}</h2>
        <img src="${hero.image}" width="200">
        <p>Role: ${hero.role}</p>
        <p>${hero.desc}</p>
    `;
}
