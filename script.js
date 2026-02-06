// Cria o mapa e define um centro inicial genérico
const map = L.map('map').setView([-15.78, -47.93], 4);

// Camada do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);


const cities = {
  rio_branco: { name: 'Rio Branco', lat: -9.9754, lng: -67.8249 },
  maceio: { name: 'Maceió', lat: -9.6498, lng: -35.7089 },
  macapa: { name: 'Macapá', lat: 0.0349, lng: -51.0694 },
  manaus: { name: 'Manaus', lat: -3.1190, lng: -60.0217 },
  salvador: { name: 'Salvador', lat: -12.9777, lng: -38.5016 },
  fortaleza: { name: 'Fortaleza', lat: -3.7319, lng: -38.5267 },
  brasilia: { name: 'Brasília', lat: -15.7939, lng: -47.8828 },
  vitoria: { name: 'Vitória', lat: -20.3155, lng: -40.3128 },
  goiania: { name: 'Goiânia', lat: -16.6869, lng: -49.2648 },
  sao_luis: { name: 'São Luís', lat: -2.5307, lng: -44.3068 },
  cuiaba: { name: 'Cuiabá', lat: -15.6014, lng: -56.0979 },
  campo_grande: { name: 'Campo Grande', lat: -20.4697, lng: -54.6201 },
  belo_horizonte: { name: 'Belo Horizonte', lat: -19.9167, lng: -43.9345 },
  belem: { name: 'Belém', lat: -1.4558, lng: -48.4902 },
  joao_pessoa: { name: 'João Pessoa', lat: -7.1195, lng: -34.8450 },
  curitiba: { name: 'Curitiba', lat: -25.4284, lng: -49.2733 },
  recife: { name: 'Recife', lat: -8.0476, lng: -34.8770 },
  teresina: { name: 'Teresina', lat: -5.0892, lng: -42.8019 },
  rio_de_janeiro: { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
  natal: { name: 'Natal', lat: -5.7945, lng: -35.2110 },
  porto_velho: { name: 'Porto Velho', lat: -8.7608, lng: -63.8999 },
  boa_vista: { name: 'Boa Vista', lat: 2.8235, lng: -60.6758 },
  porto_alegre: { name: 'Porto Alegre', lat: -30.0346, lng: -51.2177 },
  florianopolis: { name: 'Florianópolis', lat: -27.5949, lng: -48.5482 },
  sao_paulo: { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
  aracaju: { name: 'Aracaju', lat: -10.9472, lng: -37.0731 },
  palmas: { name: 'Palmas', lat: -10.1840, lng: -48.3336 }
};

const select = document.getElementById('citySelect');
let marker;

select.addEventListener('change', () => {
  const cityKey = select.value;
  if (!cityKey) return;

  const city = cities[cityKey];

  // Centraliza o mapa
  map.setView([city.lat, city.lng], 12);

  // Remove marcador anterior
  if (marker) {
    map.removeLayer(marker);
  }

  // Adiciona marcador novo
  marker = L.marker([city.lat, city.lng])
    .addTo(map)
    .bindPopup(city.name)
    .openPopup();
});



