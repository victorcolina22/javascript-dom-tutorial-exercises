let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let element = document.createElement("div");
	element.style.backgroundColor = 'yellow';
	element.innerHTML = 'Hello World';
	document.body.appendChild(element);
});