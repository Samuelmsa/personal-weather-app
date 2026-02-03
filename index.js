const city = document.querySelector("#city")
const form = document.querySelector("#citySelector")
const result = document.querySelector("#result")

function resultMsg(cidade) {
  return `Buscando previsão para ${cidade}`
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedCity = city.value.trim();
  result.textContent = resultMsg(selectedCity);
}
