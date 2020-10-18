//Criando um mapa
const map = L.map('mapid').setView([-2.5362386,-44.2849537], 15);

//Add uma camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({ 
    iconUrl: "./public/imagens/Local.svg",
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [80, 2]
});

const popup = L.popup({
    closebutton: false,
    classname: "map-popup",
    minwidth: 240,
    minheigth: 240
}).setContent('Teste <a href="pageOrfanato.html?id=1" class="escolha-orfanato"> <img src="./public/imagens/Arrow-white.svg"> </a>');

//Add um popup
L.marker([-2.5362386,-44.2849537], { icon }).addTo(map).bindPopup(popup);