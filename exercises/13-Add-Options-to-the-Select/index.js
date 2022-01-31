let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
let selectList = document.getElementById("mySelect");

countries.forEach((item) => {
    let element = document.createElement("option");
    element.innerText = item;
    element.value = item;
    selectList.appendChild(element);

});

selectList.addEventListener('change', (e) => {
    alert(selectList.value)
})
