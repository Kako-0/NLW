const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const spanLat = document.querySelector('span[data-lat]').dataset.lat;
const spanLng = document.querySelector('span[data-lng]').dataset.lng;

const map = L.map('mapid', options).setView([lat,lng], 15);

//Add uma camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({ 
    iconUrl: "/imagens/Local.svg",
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [80, 2]
});

//Add um popup
L.marker([spanLat, spanLng], { icon }).addTo(map)

function selectImage(event){
    //Seleciona o botão clickado por último
    const buttonAtual = event.currentTarget;

    //Seleciona todos os selectors q se chamam ".imagens button"
    // e remove a classe Active de cada um
    const buttons = document.querySelectorAll(".imagens button").forEach(removeActive);

    function removeActive(button){
        button.classList.remove("active");
    }
    
    //A var image possui o filho(a imagem) do botão clickado por último
    const image = buttonAtual.children[0];
    //Seleciona a primeira imagem
    const imgContainer = document.querySelector(".orfanato-detalhes > img");
    //A var imgContainer passa a ter como src a imagem do botão clickado
    imgContainer.src = image.src;
    
    //Adiciona a classe active no botão
    button.classList.add("active");
}