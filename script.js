// Cria o mapa e define um centro inicial genérico
const map = L.map('map').setView([-15.78, -47.93], 4);

// Camada do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);


const cities = {
const cities = {
  rio_branco: { name: 'Rio Branco, AC', lat: -9.9754, lng: -67.8249, metar: 'SBRB' },
  maceio: { name: 'Maceió, AL', lat: -9.6498, lng: -35.7089, metar: 'SBMO' },
  macapa: { name: 'Macapá, AP', lat: 0.0349, lng: -51.0694, metar: 'SBMQ' },
  manaus: { name: 'Manaus, AM', lat: -3.1190, lng: -60.0217, metar: 'SBEG' },
  salvador: { name: 'Salvador, BA', lat: -12.9777, lng: -38.5016, metar: 'SBSV' },
  fortaleza: { name: 'Fortaleza, CE', lat: -3.7319, lng: -38.5267, metar: 'SBFZ' },
  brasilia: { name: 'Brasília, DF', lat: -15.7939, lng: -47.8828, metar: 'SBBR' },
  vitoria: { name: 'Vitória, ES', lat: -20.3155, lng: -40.3128, metar: 'SBVT' },
  goiania: { name: 'Goiânia, GO', lat: -16.6869, lng: -49.2648, metar: 'SBGO' },
  sao_luis: { name: 'São Luís, MA', lat: -2.5307, lng: -44.3068, metar: 'SBSL' },
  cuiaba: { name: 'Cuiabá, MT', lat: -15.6014, lng: -56.0979, metar: 'SBCY' },
  campo_grande: { name: 'Campo Grande, MS', lat: -20.4697, lng: -54.6201, metar: 'SBCG' },
  belo_horizonte: { name: 'Belo Horizonte, MG', lat: -19.9167, lng: -43.9345, metar: 'SBCF' },
  belem: { name: 'Belém, PA', lat: -1.4558, lng: -48.4902, metar: 'SBBE' },
  joao_pessoa: { name: 'João Pessoa, PB', lat: -7.1195, lng: -34.8450, metar: 'SBJP' },
  curitiba: { name: 'Curitiba, PR', lat: -25.4284, lng: -49.2733, metar: 'SBCT' },
  recife: { name: 'Recife, PE', lat: -8.0476, lng: -34.8770, metar: 'SBRF' },
  teresina: { name: 'Teresina, PI', lat: -5.0892, lng: -42.8019, metar: 'SBTE' },
  rio_de_janeiro: { name: 'Rio de Janeiro, RJ', lat: -22.9068, lng: -43.1729, metar: 'SBGL' },
  natal: { name: 'Natal, RN', lat: -5.7945, lng: -35.2110, metar: 'SBNT' },
  porto_velho: { name: 'Porto Velho, RO', lat: -8.7608, lng: -63.8999, metar: 'SBPV' },
  boa_vista: { name: 'Boa Vista, RR', lat: 2.8235, lng: -60.6758, metar: 'SBBV' },
  porto_alegre: { name: 'Porto Alegre, RS', lat: -30.0346, lng: -51.2177, metar: 'SBPA' },
  florianopolis: { name: 'Florianópolis, SC', lat: -27.5949, lng: -48.5482, metar: 'SBFL' },
  aracaju: { name: 'Aracaju, SE', lat: -10.9472, lng: -37.0731, metar: 'SBAR' },
  palmas: { name: 'Palmas, TO', lat: -10.1840, lng: -48.3336, metar: 'SBPJ' },
  sao_paulo: { name: 'São Paulo, SP', lat: -23.5505, lng: -46.6333, metar: 'SBSP' }
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



