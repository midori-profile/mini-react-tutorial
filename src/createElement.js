
/**
// defines a React element，this is not js
const element = <h1 title="foo">Hello</h1>

// gets a node from the DOM
const container = document.getElementById("root")

// renders the React element into the container
ReactDOM.render(element, container)
*/

/**
 * JSX is transformed to JS by build tools like Babel. 
 * The transformation procedure:
 * replace the code inside the tags with a call to createElement, create vdom
 * passing the tag name, the props and the children as parameters.
 */

/**
const element = { // think of it as a tree
    type: "h1", //specifies the type of the HTML element we want to create
    props: { // all the keys and values from the JSX
      title: "foo",
      children: "Hello", // special property
    },
}
*/


// render does:

/*
// First create a node* using the element type
const node = document.createElement(element.type);
// assign all the element props to that node
node["title"] = element.props.title;
// create the nodes for the children
const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

​




node.appendChild(text);
container.appendChild(node);
*/
// const element = (
//   <div style="background: #ccc; width: 200px; height: 200px;">
//     <h1>Hello World</h1>
//     <h2>Hello World</h2>
//   </div>
// );

// const element = createElement(
//   "div",
//   { style: "background: #ccc; width: 200px; height: 200px;" },
//   createElement("h1", null, "Hello World"),
//   createElement("h2", null, "Hello World")
// );

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}
export default createElement;



