import { useEffect } from 'react';

function useKeyboardNavigation(handleLeftSwipe, handleRightSwipe) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handleRightSwipe(e);
      } else if (e.key === 'ArrowRight') {
        handleLeftSwipe(e);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleRightSwipe, handleLeftSwipe]);
}

function useEnterKeySubmit(handleSubmit) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSubmit(e);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSubmit]);
}

export { useEnterKeySubmit, useKeyboardNavigation };
