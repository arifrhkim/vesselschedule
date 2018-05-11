function startTime() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var today = new Date();

    var dy = today.getDay();
    var d = today.getDate();
    var mo = today.getMonth();
    var y = today.getFullYear();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('date').innerHTML =
    dayNames[dy] + ", " + d + " " + monthNames[mo] + " " + y;
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
