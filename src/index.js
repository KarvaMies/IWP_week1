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
printButton.addEventListener("click", function () {
  console.log("hello world");
  header.innerText = "My notebook";
});
