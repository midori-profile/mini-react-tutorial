/**
 * render is where React changes the DOM
 */

// adding stuff
// updating

// deleting
// we won’t stop until we have rendered the complete element tree. 
// If the element tree is big, it may block the main thread for too long.
// So we are going to break the work into small units
function render(element, container) {
  // if the element type is TEXT_ELEMENT we create a text node
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);
  
  //  assign the element props to the node.
  const isProperty = key => key !== "children"
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
  })

  // We recursively do the same for each child.
  const children = element.props.children || [];
  children.forEach(child => {
    render(child, dom)
  })
  container.appendChild(dom)
}

export default render;