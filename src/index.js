import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const printButton = document.getElementById("my-button");
const header = document.getElementById("header");
const addDataButton = document.getElementById("add-data");

printButton.addEventListener("click", function () {
  console.log("hello world");
  header.innerText = "My notebook";
});

addDataButton.addEventListener("click", function () {
  const list = document.getElementById("data-list");
  let newListItem = document.createElement("li");
  newListItem.innerText = "This is Data";
  list.appendChild(newListItem);
});
