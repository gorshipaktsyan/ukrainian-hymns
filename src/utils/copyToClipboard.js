async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text successfully copied to clipboard');
  } catch (error) {
    console.error('Unable to copy text to clipboard', error);
  }
}

export default copyToClipboard;
