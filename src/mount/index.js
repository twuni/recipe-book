/**
 * Mounts a node to the document body, within a container <div>.
 *
 * @param {Node} node - The DOM node to be mounted.
 * @param {Document} document - The document to which the given node should be mounted.
 *
 * @returns {Element} - Returns the injected container element for the injected node.
 */
const mount = (node, document) => {
  const root = document.querySelector('body');

  let container = root.querySelector('div');

  if (container) {
    container.remove();
  }

  container = document.createElement('div');
  container.appendChild(node);

  root.appendChild(container);

  return container;
};

export default mount;
