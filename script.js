const btn = document.getElementById("btn");
const locDiv = document.getElementById("location");


btn.addEventListener('click', showLocation);

function showLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getlocation);
    }
    else{
        alert("your browser does support geo location");
    }
}

function getlocation(position){
    const lang = position.coords.longitude;
    const lat = position.coords.latitude

    displayMap(lat,lang);
}

function  displayMap(lat,long){
    const mapURL = `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;
    locDiv.innerHTML = `<iframe src="${mapURL}" width="100%" height="500" allowfullscreen ></iframe>`;
}
