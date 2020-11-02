//Criando um mapa
const map = L.map('mapid').setView([-2.5362386,-44.2849537], 15);

//Add uma camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({ 
    iconUrl: "/imagens/Local.svg",
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [80, 2]
});

function addMarker({id, name, lat, lng}) {
    const popup = L.popup({
        closebutton: false,
        classname: "map-popup",
        minwidth: 240,
        minheigth: 240
    }).setContent(`${name} <a href="/pagOrfanato?${id}" class="escolha-orfanato"> <img src="/imagens/Arrow-white.svg"> </a>`);

    //Add um popup
    L.marker([lat,lng], { icon }).addTo(map).bindPopup(popup);
}

//Pega todos os spans
const spanOrfanatos = document.querySelectorAll('.orfanatos span');
//Adiciona os dados de cada span
spanOrfanatos.forEach(span =>{
    const orfanato = {
        id: span.dataset.id, 
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
//Adiciona o popup no mapa
    addMarker(orfanato)
})