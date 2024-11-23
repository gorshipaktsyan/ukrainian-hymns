export default function setFontSize(fontSize) {
  const boxElement = document.querySelector('.container');
  if (boxElement) {
    boxElement.style.fontSize = `${fontSize.toFixed(1)}em`;
  }
  return () => {
    if (boxElement) {
      boxElement.style.fontSize = '';
    }
  };
}
