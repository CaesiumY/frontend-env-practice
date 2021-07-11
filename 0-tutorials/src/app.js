import "./style.css";
import bonobono from "./assets/bonobono.jpg";
import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
  const users = await axios.get("/api/users");
  console.log("users", users);

  const img = document.createElement("img");
  img.src = `${bonobono}`;

  document.body.appendChild(img);

  console.log(process.env.NODE_ENV); // "development"
});
