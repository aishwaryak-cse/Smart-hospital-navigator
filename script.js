// ===============================
// HOSPITAL DATA
// ===============================

const hospitals = {

    hassan: {

        name: "Hassan Government Hospital",

        lat: 13.0068,

        lng: 76.1003,

        address: "Hassan, Karnataka",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Hassan+Government+Hospital"
    },

    mce: {

        name: "Malnad College Hospital",

        lat: 13.0075,

        lng: 76.0950,

        address: "Hassan, Karnataka",

        maps:
            "https://www.google.com/maps/search/?api=1&query=Malnad+College+of+Engineering+Hassan"
    }

};


// ===============================
// DEPARTMENT DATA
// ===============================

const departments = {

    "Cardiology": {

        room: "Room 204",

        floor: "2nd Floor"
    },

    "Neurology": {

        room: "Room 301",

        floor: "3rd Floor"
    },

    "Orthopedics": {

        room: "Room 105",

        floor: "1st Floor"
    },

    "General Medicine": {

        room: "Room 110",

        floor: "1st Floor"
    },

    "Emergency": {

        room: "Emergency Department",

        floor: "Ground Floor"
    }

};


// ===============================
// MAP
// ===============================

let currentHospital = "hassan";

let map;

let marker;


// Create map

function createMap() {

    const hospital = hospitals[currentHospital];

    map = L.map("map").setView(
        [hospital.lat, hospital.lng],
        15
    );


    // OpenStreetMap tiles

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {

            maxZoom: 19,

            attribution:
                '&copy; OpenStreetMap contributors'

        }
    ).addTo(map);


    // Hospital marker

    marker = L.marker([
        hospital.lat,
        hospital.lng
    ]).addTo(map);


    marker.bindPopup(
        "<b>🏥 " +
        hospital.name +
        "</b><br>" +
        hospital.address
    );

}


// ===============================
// CHANGE HOSPITAL
// ===============================

document
    .getElementById("hospital")
    .addEventListener("change", function () {

        currentHospital = this.value;

        updateMap();

        document.getElementById("result").innerHTML = "";

    });


// ===============================
// UPDATE MAP
// ===============================

function updateMap() {

    const hospital = hospitals[currentHospital];


    map.setView(
        [hospital.lat, hospital.lng],
        15
    );


    marker.setLatLng([
        hospital.lat,
        hospital.lng
    ]);


    marker.bindPopup(
        "<b>🏥 " +
        hospital.name +
        "</b><br>" +
        hospital.address
    );

}


// ===============================
// FIND ROOM
// ===============================

function findRoom() {

    const hospital =
        hospitals[currentHospital];

    const department =
        document.getElementById(
            "department"
        ).value;

    const departmentInfo =
        departments[department];


    const result =
        document.getElementById("result");


    result.innerHTML =

        "🏥 <b>" +
        hospital.name +
        "</b><br>" +

        "🏥 Department: <b>" +
        department +
        "</b><br>" +

        "📍 Room: <b>" +
        departmentInfo.room +
        "</b><br>" +

        "🏢 Floor: <b>" +
        departmentInfo.floor +
        "</b>";


    // Move map to hospital

    map.setView(
        [hospital.lat, hospital.lng],
        17
    );


    marker.openPopup();

}


// ===============================
// GOOGLE MAPS
// ===============================

function openGoogleMaps() {

    const hospital =
        hospitals[currentHospital];

    window.open(
        hospital.maps,
        "_blank"
    );

}
