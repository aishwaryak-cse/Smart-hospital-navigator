function findRoom() {
    const department = document.getElementById("department").value;
    const result = document.getElementById("result");

    const rooms = {
        "Cardiology": "Room 204",
        "Neurology": "Room 301",
        "Orthopedics": "Room 105",
        "General Medicine": "Room 110",
        "Emergency": "Ground Floor"
    };

    result.innerText = "📍 " + rooms[department];
}
