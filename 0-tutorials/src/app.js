import "./style.css";
import bonobono from "./assets/bonobono.jpg";

document.addEventListener("DOMContentLoaded", () => {
  const img = document.createElement("img");
  img.src = `${bonobono}`;

  document.body.appendChild(img);

  console.log(process.env.NODE_ENV); // "development"
});
