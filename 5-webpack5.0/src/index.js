import _ from "lodash";
import "./style.css";
import siro from "./siro.png";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // 이 라인이 동작하려면 현재 스크립트를 통해 포함된 Lodash가 필요합니다.
  element.innerHTML = _.join(["Hello", "webpack", "!"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = siro;

  btn.onclick = printMe;

  element.appendChild(myIcon);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
