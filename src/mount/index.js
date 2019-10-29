export default function mount(root, document) {
  const container = document.querySelector('div');

  if (container) {
    container.remove();
  }

  document.querySelector('body').appendChild(root);
}
