import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';

import App from '../App';
import { setAppBarTitle } from '../redux/slice/appBarSlice';
import { findTitle, setFontSize } from '../utils';
import { useDoubleTap } from '../utils/hooks';
import { AppBar, Drawer } from '../view/components';

function Layout() {
  const settings = useSelector((state) => state.settings);
  const currentNumber = useSelector((state) => state.currentNumber.currentNumber);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useDoubleTap({ pathname, dispatch, fontSize: settings.fontSize });

  useEffect(() => {
    setFontSize(settings.fontSize);
  }, [settings.fontSize]);

  useEffect(() => {
    const title = findTitle({
      currentNumber,
      pathname,
      lg: settings.language
    });
    dispatch(setAppBarTitle(title));
  }, [currentNumber, pathname, dispatch, settings.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, currentNumber]);

  return (
    <Box sx={{ height: '100%' }}>
      <AppBar lg={settings.language} />
      <Drawer lg={settings.language} dispatch={dispatch} fontSize={settings.fontSize} />
      <Box className="container">
        <App />
      </Box>
    </Box>
  );
}
export default Layout;
