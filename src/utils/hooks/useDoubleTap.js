import { useEffect } from 'react';

import { changeFontSize } from '../../redux/slice/settingsSlice';
import { doubleTap } from '../';

export default function useDoubleTap({ pathname, dispatch, fontSize }) {
  useEffect(() => {
    if (!dispatch) {
      return;
    }

    function handleClick(e) {
      if (pathname !== '/settings') {
        const newFontSize = doubleTap(e, fontSize);

        if (newFontSize !== fontSize) {
          dispatch(changeFontSize(newFontSize));
        }
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [dispatch, fontSize, pathname]);
}
