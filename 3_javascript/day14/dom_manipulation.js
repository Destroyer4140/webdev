console.log("Hello Ji");

const newElement = document.createElement("h2");
// console.log(newElement);
newElement.textContent = "Strike is coming";
newElement.id = "second";

const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

// 2nd element
const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali is coming soon";
newElement2.id = "third";
// newElement2.className = "diwali";
// newElement2.className += " holi";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
newElement2.style.backgroundColor = "blue";
newElement2.style.fontSize = "30px";
console.log(newElement2);

element.after(newElement2);