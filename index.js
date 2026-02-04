const city = document.querySelector("#city");
const form = document.querySelector("#citySelector");
const weatherIcon = document.querySelector("#weather-icon")
const weatherGeneral = document.querySelector("#weather-general")
const weatherTemp = document.querySelector("#weather-temp")
const weatherText = document.querySelector("#weather-text")
const apiKey = "f5b3a3b62f174142aa012051260302";


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

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const selectedCity = city.value.trim();
  const cityNameCall = selectedCity.split("-")[0];

  // feedback imediato
  weatherGeneral.textContent = resultMsg(cityNameCall);
  weatherTemp.textContent = "";
  weatherText.textContent = "";

  try {
    const data = await buscarPrevisao(cityNameCall);
    const iconUrl = data.current.condition.icon;
    const temp = data.current.temp_c;
    const cond = data.current.condition.text;
    weatherGeneral.textContent = `Agora em ${data.location.name}:`;
    weatherTemp.textContent = `${temp}°C`;
    weatherText.textContent = cond;
    weatherIcon.src = `https:${iconUrl}`;
    
  } catch (error) {
    weatherGeneral.textContent = "Erro ao buscar previsão.";
    weatherTemp.textContent = "";
    weatherText.textContent = "";
  }
});  
