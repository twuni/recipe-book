export default function mount(element, document) {
  const root = document.querySelector('body');

  let container = root.querySelector('div');

  if (container) {
    container.remove();
  }

  container = document.createElement('div');
  container.appendChild(element);

  root.appendChild(container);

  return container;
}
