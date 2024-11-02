export default function createElement(props) {
  const element = document.createElement(props.tag);
  props.className.forEach((style) => element.classList.add(style));

  if (props.value) {
    element.value = props.value;
  }
  if (props.text) {
    element.textContent = props.text;
  }
  if (props.children && Array.isArray(props.children)) {
    props.children.forEach((child) => element.appendChild(child));
  }

  return element;
}
