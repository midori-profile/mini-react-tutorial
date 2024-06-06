import createElement from "./createElement";
import render from "./render";

const Didact = {
  createElement,
  render,
};

// /** @jsx Didact.createElement */
// const element = (
//   <div style="background: #ccc; width: 200px; height: 200px;">
//     <h1>Hello World</h1>
//     <h2>Hello World</h2>
//   </div>
// );

const element = createElement(
  "div",
  { style: "background: #ccc; width: 200px; height: 200px;" },
  createElement("h1", null, "Hello World"),
  createElement("h2", null, "Hello World")
);

const container = document.getElementById("root");
Didact.render(element, container);
