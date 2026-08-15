// =====================================
// HASSAN HOSPITAL NAVIGATOR
// =====================================

const hospital = {

    name:
        "Hassan Institution of Medical Sciences and Hospital",

    phone:
        "08172-231699"

};


// =====================================
// DEPARTMENT DATA
// =====================================

const departments = {

    Emergency: {

        room: "Emergency",

        en:
            "Follow the highlighted route from the main entrance to the Emergency area.",

        kn:
            "ಮುಖ್ಯ ಪ್ರವೇಶದ್ವಾರದಿಂದ ತುರ್ತು ಚಿಕಿತ್ಸಾ ವಿಭಾಗಕ್ಕೆ ಹೈಲೈಟ್ ಮಾಡಿರುವ ಮಾರ್ಗವನ್ನು ಅನುಸರಿಸಿ."

    },


    OPD: {

        room: "OPD",

        en:
            "Follow the highlighted route from the main entrance to the OPD.",

        kn:
            "ಮುಖ್ಯ ಪ್ರವೇಶದ್ವಾರದಿಂದ OPD ಗೆ ಹೈಲೈಟ್ ಮಾಡಿರುವ ಮಾರ್ಗವನ್ನು ಅನುಸರಿಸಿ."

    },


    Radiology: {

        room: "Radiology",

        en:
            "Follow the highlighted route from the main entrance to Radiology.",

        kn:
            "ಮುಖ್ಯ ಪ್ರವೇಶದ್ವಾರದಿಂದ ರೇಡಿಯಾಲಜಿ ವಿಭಾಗಕ್ಕೆ ಹೈಲೈಟ್ ಮಾಡಿರುವ ಮಾರ್ಗವನ್ನು ಅನುಸರಿಸಿ."

    },


    Pharmacy: {

        room: "Pharmacy",

        en:
            "Follow the highlighted route from the main entrance to the Pharmacy.",

        kn:
            "ಮುಖ್ಯ ಪ್ರವೇಶದ್ವಾರದಿಂದ ಔಷಧಾಲಯಕ್ಕೆ ಹೈಲೈಟ್ ಮಾಡಿರುವ ಮಾರ್ಗವನ್ನು ಅನುಸರಿಸಿ."

    },


    Other: {

        room: "Help Desk",

        en:
            "Go to the Help Desk for assistance in locating another department.",

        kn:
            "ಇತರ ವಿಭಾಗವನ್ನು ಹುಡುಕಲು ಸಹಾಯ ಕೇಂದ್ರಕ್ಕೆ ಹೋಗಿ."

    }

};


// =====================================
// LANGUAGE
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


    selectMapDepartment(selected);

}


// =====================================
// SELECT MAP DEPARTMENT
// =====================================

function selectMapDepartment(departmentName) {

    const result =
        document.getElementById("result");


    const directions =
        document.getElementById("directionsText");


    const information =
        departments[departmentName];


    if (!information) {
        return;
    }


    // Update dropdown

    document.getElementById("department").value =
        departmentName;


    // Remove previous selection

    document
        .querySelectorAll(".department-room")
        .forEach(room => {

            room.classList.remove("selected");

        });


    // Select destination

    const destination =
        document.querySelector(
            `[data-department="${departmentName}"]`
        );


    if (destination) {

        destination.classList.add("selected");

    }


    // Show result

    result.style.display = "block";

    result.innerHTML =

        "📍 <strong>" +
        information.room +
        "</strong><br><br>" +

        information[currentLanguage] +

        "<br><br>" +

        "📞 " +
        hospital.phone;


    // Update directions

    directions.innerText =
        information[currentLanguage];


    // Draw route

    drawRoute(destination);

}


// =====================================
// DRAW ROUTE
// =====================================

function drawRoute(destination) {

    const route =
        document.getElementById("routeLine");


    const entrance =
        document.getElementById("entrance");


    if (!destination) {

        route.style.display = "none";

        return;

    }


    const map =
        document.querySelector(".indoor-map");


    const mapRect =
        map.getBoundingClientRect();


    const entranceRect =
        entrance.getBoundingClientRect();


    const destinationRect =
        destination.getBoundingClientRect();


    const startX =
        entranceRect.left -
        mapRect.left +
        entranceRect.width / 2;


    const startY =
        entranceRect.top -
        mapRect.top +
        entranceRect.height / 2;


    const endX =
        destinationRect.left -
        mapRect.left +
        destinationRect.width / 2;


    const endY =
        destinationRect.top -
        mapRect.top +
        destinationRect.height / 2;


    const dx =
        endX - startX;


    const dy =
        endY - startY;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    const angle =
        Math.atan2(dy, dx) *
        180 /
        Math.PI;


    route.style.display = "block";


    route.style.left =
        startX + "px";


    route.style.top =
        startY + "px";


    route.style.width =
        distance + "px";


    route.style.transform =
        `rotate(${angle}deg)`;

}


// =====================================
// LANGUAGE SWITCH
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

    const selectLabel =
        document.getElementById("selectLabel");

    const mapTitle =
        document.getElementById("mapTitle");

    const mapSubtitle =
        document.getElementById("mapSubtitle");

    const mapNote =
        document.getElementById("mapNote");

    const directionsTitle =
        document.getElementById("directionsTitle");


    if (language === "kn") {

        title.innerText =
            "ಹಾಸನ ಆಸ್ಪತ್ರೆ ನ್ಯಾವಿಗೇಟರ್";

        subtitle.innerText =
            "ಆಸ್ಪತ್ರೆಯ ಒಳಗೆ ನಿಮ್ಮ ವಿಭಾಗವನ್ನು ಹುಡುಕಿ";

        departmentTitle.innerText =
            "🔎 ವಿಭಾಗವನ್ನು ಹುಡುಕಿ";

        selectLabel.innerText =
            "ನಿಮ್ಮ ಗಮ್ಯಸ್ಥಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ";

        findButton.innerText =
            "ಸ್ಥಳವನ್ನು ತೋರಿಸಿ";

        mapTitle.innerText =
            "🗺️ ಆಸ್ಪತ್ರೆಯ ಒಳಾಂಗಣ ನಕ್ಷೆ";

        mapSubtitle.innerText =
            "ವಿಭಾಗವನ್ನು ಆಯ್ಕೆ ಮಾಡಿದಾಗ ಅದರ ಸ್ಥಳವನ್ನು ತೋರಿಸಲಾಗುತ್ತದೆ.";

        mapNote.innerText =
            "⚠️ ಇದು ಪ್ರಸ್ತುತ ಮಾದರಿ ಒಳಾಂಗಣ ನಕ್ಷೆಯಾಗಿದೆ. ನೈಜ ಬಳಕೆಗೆ ಮೊದಲು ಆಸ್ಪತ್ರೆಯ ಅಧಿಕೃತ ಫ್ಲೋರ್ ಪ್ಲಾನ್‌ನೊಂದಿಗೆ ನಿಖರ ಸ್ಥಳಗಳನ್ನು ಪರಿಶೀಲಿಸಬೇಕು.";

        directionsTitle.innerText =
            "🧭 ಮಾರ್ಗದರ್ಶನ";

    } else {

        title.innerText =
            "Hassan Hospital Navigator";

        subtitle.innerText =
            "Find your way to a department inside the hospital";

        departmentTitle.innerText =
            "🔎 Find a Department";

        selectLabel.innerText =
            "Select your destination";

        findButton.innerText =
            "Show Location";

        mapTitle.innerText =
            "🗺️ Indoor Hospital Map";

        mapSubtitle.innerText =
            "Select a department to see its location.";

        mapNote.innerText =
            "⚠️ Prototype indoor layout. Exact department positions should be verified against the hospital's official floor plan before real-world use.";

        directionsTitle.innerText =
            "🧭 Directions";

    }


    // Update current result if one is already selected

    const selected =
        document.getElementById("department").value;


    if (selected !== "") {

        selectMapDepartment(selected);

    }

}


// =====================================
// INITIAL STATE
// =====================================

window.addEventListener(
    "load",
    function () {

        const route =
            document.getElementById("routeLine");

        route.style.display = "none";

    }
);
