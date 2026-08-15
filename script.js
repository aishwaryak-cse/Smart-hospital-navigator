// =====================================
// HASSAN GOVERNMENT HOSPITAL
// =====================================

const hospital = {

    name:
        "Hassan Institution of Medical Sciences and Hospital",

    address:
        "Sri Chamarajendra Hospital Campus, Hassan - 573201, Karnataka",

    phone:
        "08172-231699",

    maps:
        "https://www.google.com/maps/search/?api=1&query=Hassan+Institution+of+Medical+Sciences+and+Hospital"
};


// =====================================
// DEPARTMENT INFORMATION
// =====================================

// IMPORTANT:
// Room numbers are NOT included because
// we have not verified an official room list.

const departments = {

    Emergency: {
        en:
            "Emergency services are available at the hospital. For the exact location inside the campus, please ask the hospital help desk.",
        kn:
            "ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ತುರ್ತು ಸೇವೆಗಳು ಲಭ್ಯವಿವೆ. ಆಸ್ಪತ್ರೆಯ ಒಳಗಿನ ನಿಖರ ಸ್ಥಳಕ್ಕಾಗಿ ಸಹಾಯ ಕೇಂದ್ರವನ್ನು ಸಂಪರ್ಕಿಸಿ."
    },

    OPD: {
        en:
            "Outpatient Department (OPD) is available. Please confirm the exact counter or room at the hospital help desk.",
        kn:
            "ಹೊರರೋಗಿಗಳ ವಿಭಾಗ (OPD) ಲಭ್ಯವಿದೆ. ನಿಖರ ಕೌಂಟರ್ ಅಥವಾ ಕೊಠಡಿಗಾಗಿ ಆಸ್ಪತ್ರೆಯ ಸಹಾಯ ಕೇಂದ್ರವನ್ನು ಸಂಪರ್ಕಿಸಿ."
    },

    Radiology: {
        en:
            "Radiology services are available. Please confirm the exact location inside the hospital before proceeding.",
        kn:
            "ರೇಡಿಯಾಲಜಿ ಸೇವೆಗಳು ಲಭ್ಯವಿವೆ. ಹೋಗುವ ಮೊದಲು ಆಸ್ಪತ್ರೆಯ ಒಳಗಿನ ನಿಖರ ಸ್ಥಳವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."
    },

    Pharmacy: {
        en:
            "Pharmacy services are available. Please ask the hospital help desk for the exact location.",
        kn:
            "ಔಷಧಾಲಯ ಸೇವೆಗಳು ಲಭ್ಯವಿವೆ. ನಿಖರ ಸ್ಥಳಕ್ಕಾಗಿ ಆಸ್ಪತ್ರೆಯ ಸಹಾಯ ಕೇಂದ್ರವನ್ನು ಸಂಪರ್ಕಿಸಿ."
    },

    Other: {
        en:
            "Please contact the hospital help desk for assistance in finding your required department.",
        kn:
            "ನಿಮಗೆ ಬೇಕಾದ ವಿಭಾಗವನ್ನು ಹುಡುಕಲು ಆಸ್ಪತ್ರೆಯ ಸಹಾಯ ಕೇಂದ್ರವನ್ನು ಸಂಪರ್ಕಿಸಿ."
    }
};


// =====================================
// CURRENT LANGUAGE
// =====================================

let currentLanguage = "en";


// =====================================
// FIND DEPARTMENT
// =====================================

function findDepartment() {

    const selected =
        document.getElementById("department").value;

    const result =
        document.getElementById("result");


    if (selected === "") {

        result.style.display = "block";

        result.innerHTML =
            currentLanguage === "en"
                ? "⚠️ Please select a department first."
                : "⚠️ ದಯವಿಟ್ಟು ಮೊದಲು ವಿಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ.";

        return;
    }


    const information =
        departments[selected];


    result.style.display = "block";


    result.innerHTML =

        "🏥 <strong>" +
        hospital.name +
        "</strong><br><br>" +

        "🔎 <strong>" +
        selected +
        "</strong><br>" +

        information[currentLanguage] +

        "<br><br>" +

        "📞 Hospital: " +
        hospital.phone;

}


// =====================================
// LANGUAGE
// =====================================

function setLanguage(language) {

    currentLanguage = language;


    const title =
        document.getElementById("title");

    const subtitle =
        document.getElementById("subtitle");

    const departmentTitle =
        document.getElementById("departmentTitle");

    const findButton =
        document.getElementById("findButton");


    if (language === "kn") {

        title.innerText =
            "ಹಾಸನ ಆಸ್ಪತ್ರೆ ನ್ಯಾವಿಗೇಟರ್";

        subtitle.innerText =
            "ಹಾಸನ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ನಿಮ್ಮ ಮಾರ್ಗವನ್ನು ಹುಡುಕಿ";

        departmentTitle.innerText =
            "🔎 ವಿಭಾಗವನ್ನು ಹುಡುಕಿ";

        findButton.innerText =
            "ವಿಭಾಗವನ್ನು ಹುಡುಕಿ";

    } else {

        title.innerText =
            "Hassan Hospital Navigator";

        subtitle.innerText =
            "Find your way around Hassan Government Hospital";

        departmentTitle.innerText =
            "🔎 Find a Department";

        findButton.innerText =
            "Find Department";
    }

}


// =====================================
// MAP
// =====================================

// We use a Google Maps search link rather
// than inventing coordinates.

const map = L.map("map").setView(
    [13.0068, 76.1003],
    14
);


L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,

        attribution:
            "&copy; OpenStreetMap contributors"
    }
).addTo(map);


const marker =
    L.marker([13.0068, 76.1003])
        .addTo(map);


marker.bindPopup(
    "<strong>🏥 Hassan Institution of Medical Sciences and Hospital</strong><br>" +
    "Sri Chamarajendra Hospital Campus<br>" +
    "Hassan - 573201"
);


// =====================================
// GOOGLE MAPS
// =====================================

function openGoogleMaps() {

    window.open(
        hospital.maps,
        "_blank"
    );

    }
