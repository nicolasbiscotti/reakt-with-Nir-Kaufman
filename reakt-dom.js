function renderElement(element) {
  const { type, props, children } = element;

  if (typeof type === 'function') {
    return renderElement(type(props, children));
  }

  if (typeof type === 'string') {
    const element = document.createElement(type);

    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(renderElement(child));
      }
    });

    return element;
  }
}

export default {
  render: function (element, container) {
    container.appendChild(renderElement(element));
  },
};
