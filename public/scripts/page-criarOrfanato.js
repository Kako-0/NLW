//Criando um mapa
const map = L.map('mapid').setView([-2.5362386,-44.2849537], 15);

//Add uma camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({ 
    iconUrl: "./public/imagens/Local.svg",
    iconSize: [38, 48],
    iconAnchor: [20, 50],
});

let marker;

map.on('click', (event) => {
    //pegando a latidude e longidude de acordo com o clique  do user no mapa
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name = lat]').value = lat;
    document.querySelector('[name = lng]').value = lng;
    
    //removendo o popup anterior
    marker && map.removeLayer(marker);
    //adicionando um novo popup
    marker = L.marker([lat, lng], {icon}).addTo(map); 
});
//add fotos
function addFoto(){
    const container = document.querySelector('#imagens');

    const fieldsContainer = document.querySelectorAll('.novo-upload');

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    if (newFieldContainer.children[0].value == "") {
        return;
    }
    newFieldContainer.children[0].value = ""

    container.appendChild(newFieldContainer);
}
//remover fotos
function removeFoto(event){
    const del = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.novo-upload');
     
    if (fieldsContainer.length < 2) {
        del.parentNode.children[0].value = "";
        return;
    }

    del.parentNode.remove();    
}
//selecionar sim ou nao
function toggleSelect(event) {
    document.querySelectorAll('.opcoes button').forEach(button => button.classList.remove('active'));

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name = "atende"]');

    input.value = button.dataset.value;
}