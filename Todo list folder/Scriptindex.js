

var form = document.getElementById('todolist');
var icon = document.getElementById('trashing');

form.addEventListener("submit",smith);
function smith(e){
	e.preventDefault();
	let list = document.getElementById('names').value;
	let todo = document.createElement("li");
	todo.className = "list-items";
	todo.appendChild(document.createTextNode(list));
	form.appendChild(todo);
	document.getElementById("names").value = "";

	let trash = document.createElement("i");
	trash.className = "fa-solid fa-trash";
	trash.style.color = "red";
	form.appendChild(trash);

	
}