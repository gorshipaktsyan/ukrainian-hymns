import doubleTapConfig from '../config/doubleTapConfig';

let lastClickTime = 0;

export default function doubleTap(e, fontSize) {
  e.preventDefault();
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - lastClickTime;

  if (timeDifference <= doubleTapConfig.doubleTapDelay) {
    lastClickTime = 0;
    return e.clientX < doubleTapConfig.clickedPlace
      ? Math.max(fontSize - 0.1, doubleTapConfig.minFontSize)
      : Math.min(fontSize + 0.1, doubleTapConfig.maxFontSize);
  } else {
    lastClickTime = currentTime;
    return fontSize;
  }
}
