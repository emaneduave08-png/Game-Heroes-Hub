function showMLHero() {
  document.getElementById("mlOutput").innerHTML =
    "<h2>Alucard</h2>" +
    "<p>Role: Fighter</p>" +
    "<p>Strategy: Mag-farm muna, then engage kapag may items na para sa lifesteal sustain.</p>";
}
function showHOKHero() {
  document.getElementById("hokOutput").innerHTML =
    "<h2>Lu Bu</h2>" +
    "<p>Role: Fighter</p>" +
    "<p>Strategy: Mag-engage kapag may ult, very strong sa 1v1 at team fights.</p>";
}
function searchML() {
  let input = document.getElementById("searchML").value.toLowerCase();

  if (input === "alucard") {
    showMLHero();
  }
}
function searchHOK() {
  let input = document.getElementById("searchHOK").value.toLowerCase();

  if (input === "lu bu") {
    showHOKHero();
  }
}
const mlHeroes = [
  {
    name: "Alucard",
    role: "Fighter",
    info: "Lifesteal hero, strong in 1v1.",
    id: "alucard"
  },
  {
    name: "Miya",
    role: "Marksman",
    info: "Fast attack speed, strong late game.",
    id: "miya"
  },
  {
    name: "Layla",
    role: "Marksman",
    info: "Long range damage dealer.",
    id: "layla"
  }
];
function searchHero() {
  let input = document.getElementById("search").value.toLowerCase();
  let suggestions = document.getElementById("suggestions");

  suggestions.innerHTML = "";

  mlHeroes.forEach(hero => {
    if (hero.name.toLowerCase().includes(input) && input !== "") {
      suggestions.innerHTML += `
        <p onclick="openHero('${hero.id}')">
          ${hero.name}
        </p>
      `;
    }
  });
}
function showHeroPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const heroId = urlParams.get("hero");

  const hero = mlHeroes.find(h => h.id === heroId);

  if (hero) {
    document.getElementById("heroInfo").innerHTML = `
      <h2>${hero.name}</h2>
      <p><b>Role:</b> ${hero.role}</p>
      <p>${hero.info}</p>
    `;
  }
}
