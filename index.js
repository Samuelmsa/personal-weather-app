const city = document.querySelector("#city")
const form = document.querySelector("#citySelector")
const button = document.querySelector("#sndButton")
const result = document.querySelector("#result")
const apikey === "f5b3a3b62f174142aa012051260302"
cityNameCall = city.split("-")[0];

function resultMsg(cidade) {
  if (cidade === "") {
    return "Escolha uma capital."
  }
  
  return `Buscando previsão para ${cidade}`
}

async function buscarPrevisao(cidade) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("Erro ao buscar previsão")
  }
  
  const data = await response.json();
  return data;
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const selectedCity = city.value.trim()
  resultMsg(selectedCity)
  }
)         
