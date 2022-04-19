 var dodajNulu = (val) => {
 return val < 10 ? "0" + val : val;
 }

var today = new Date();
var date = 'Date & Time: ' + dodajNulu(today.getDate()) + '-' + (dodajNulu(today.getMonth() + 1)) + '-' + today.getFullYear();
var time = dodajNulu(today.getHours()) + ":" + dodajNulu(today.getMinutes());
var dateTime = date + ' ' + time;
document.getElementById("datum").innerHTML = dateTime;




let data = ["Sonic", "Captain Comando", "Cadilacs and Dinosaurs", "Marvel vs Capcom", "Pang"];
let list = document.getElementById("ListaMameIgara");
data.sort((a, b) => a - b);

data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});






function dropdownFunkcija() {
    document.getElementById("dropdownLista").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}




var listaPs2Igara = ["Max Payne", "GTA Vice City", "Need for Speed Most Wanted"];
listaPs2Igara.forEach(function (entry) {
    console.log(entry);
});



if (!data.length && !listaPs2Igara.lenght) {
    alert("There are no games at this time");
} else {
    alert("We have many games available");
}