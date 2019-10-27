export default function mount(root) {
  const container = document.querySelector('div');

  if (container) {
    container.remove();
  }

  document.querySelector('body').appendChild(root);
}
