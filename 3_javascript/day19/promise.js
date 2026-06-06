console.log("Hello World start.");


// code
// const gitUserData = fetch("https://api.github.com/users");
// console.log(gitUserData);
// setTimeout(() => {
//     console.log(gitUserData);
// }, 6000);

// const data = gitUserData.then((data) => {
//     return data.json();
// });

// data.then((response) => {
//     console.log(response);
// });

//promise chaining
fetch("https://api.github.com/users").then((response) => response.json()).
then((data) => {
    const parent = document.getElementById("first");
    const child = document.createElement('img');
    child.src = data[0].avatar_url;
    parent.append(child);
});

console.log("Hello World end.");