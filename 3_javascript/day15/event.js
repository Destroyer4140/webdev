// function handleClick() {
//     const element = document.getElementById("first");
//     element.textContent = "Shubham is coming!!";
//     element.style.color = "blue";
// }

// const element = document.getElementById("first");

// This method is also not used, bcs if multiple eventlistner we need 
// to add then all previous one will be overriden.
// element.onclick = () => {
//     element.textContent = "Shubham is coming!!";
//     element.style.color = "green";
// }

// This one we are using mostly
// element.addEventListener('click', () => {
//     element.textContent = "Shubham is coming!!";
//     element.style.color = "red";
// });

// element.addEventListener('click', () => {
//     element.style.backgroundColor = "green";
// });

// const child1 = document.getElementById("child1");
// child1.addEventListener('click', () => {
//     child1.textContent = "I am clicked";
// }); // This way required repetation, if common changes required we can do on parent level selection


// const par = document.getElementById("parent");
// // console.log(par.children);
// for(let child of par.children) {
//     child.addEventListener('click', () => {
//         child.textContent = "I am clicked";
//     });
// }


// Event Bubbling
// Event handling distributed under two phase 
// 1). Capture phase :- when capture phase is true, then event 
// get trigger during html tree traversal top to bottom. 
// 2). Bubbling Phase :- when capture phase is false, then event 
// get trigger while traversing bottom to top.

const grandParent = document.getElementById("grandparent");
grandParent.addEventListener('click', (e) => {
    // grandParent.textContent = "GrandParent is clicked";
    e.stopPropagation();
    console.log("GrandParent is clicked");
}); // capture phase is on.

const parent = document.getElementById("parent");
parent.addEventListener('click', (e) => {
    // parent.textContent = "Parent is clicked";
    console.log("Parent is clicked");
    e.stopPropagation();
}); //by default capture phase is off.

const child = document.getElementById("child");
child.addEventListener('click', (e) => {
    // child.textContent = "child is clicked";
    console.log("Child is clicked"+e);
    e.stopPropagation();
}); // capture phase is off.