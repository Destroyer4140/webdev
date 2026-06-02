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


const list = document.createElement("li");
list.textContent = "Milk";
const list1 = document.createElement("li");
list1.textContent = "Cake";

const list2 = document.createElement("li");
list2.textContent = "Halwa";

const list3 = document.createElement("li");
list3.textContent = "Paneer";


const unorderElement = document.getElementById("listing");
// unorderElement.append(list);
// unorderElement.append(list1);
// // at the start
// unorderElement.prepend(list2);
// // after milk
// unorderElement.children[1].after(list3);


const arr = ["Milk", "Paneer", "Halwa", "Salad", "Tofu"];

const fragment = document.createDocumentFragment("li");
for(let food of arr) {
    const li = document.createElement("li");
    li.textContent = food;
    fragment.append(li);
    // unorderElement.append(li);
}
unorderElement.append(fragment);


const h1 = document.getElementById("first");
h1.remove();

