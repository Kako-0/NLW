const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-2.5362386,-44.2849537], 15);

//Add uma camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({ 
    iconUrl: "./public/imagens/Local.svg",
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [80, 2]
});

//Add um popup
L.marker([-2.5362386,-44.2849537], { icon }).addTo(map)

function selectImage(event){
    const button = event.currentTarget;

    const buttons = document.querySelectorAll(".imagens button");
    buttons.forEach(removeActive);

    function removeActive(button){
        button.classList.remove("active");
    }

    const image = button.children[0];
    const imgContainer = document.querySelector(".orfanato-detalhes > img");

    imgContainer.src = image.src;
    
    button.classList.add("active");
}