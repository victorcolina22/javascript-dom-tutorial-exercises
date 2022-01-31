let list = document.getElementById("myList");
let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let element = document.createElement("li");
	element.innerText = 'Forth element';
	list.appendChild(element);
});
