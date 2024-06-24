export function render(element, container) {
  if (typeof element.type === 'function') {
    const component = element.type;
    const renderedElement = component(element.props);
    render(renderedElement, container);
    return;
  }

  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  const isProperty = key => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach(child =>
    render(child, dom)
  );

  console.log('dom: ', dom);
  container.appendChild(dom);
}
