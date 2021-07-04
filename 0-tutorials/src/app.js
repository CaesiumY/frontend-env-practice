import "./style.css";
import bonobono from "./assets/bonobono.jpg";

console.log("loaded");

document.addEventListener("DOMContentLoaded", () => {
  const img = document.createElement("img");
  img.src = `${bonobono}`;

  document.body.appendChild(img);

  console.log("img", img);
});
