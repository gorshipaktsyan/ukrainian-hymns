import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, List, ListItem, ListItemButton } from '@mui/material';

import { setLetter } from '../../../redux/slice/alphabeticalSlice';
import { setAppBarTitle } from '../../../redux/slice/appBarSlice';
import { resetContentValues } from '../../../redux/slice/contentSlice';
import { setIsDrawerOpen } from '../../../redux/slice/drawerSlice';
import { createNavItems } from '../../../utils';

import DrawerStyledComponents from './styles';

const { StyledDrawer, StyledBox, StyledVersionText } = DrawerStyledComponents;

function DrawerComponent({ fontSize, dispatch, lg }) {
  const { isDrawerOpen } = useSelector((state) => state.drawer);
  const navigate = useNavigate();

  function handleNavigate(item) {
    navigate(`/${item.route}`);
    dispatch(setAppBarTitle(item.title));
    dispatch(setIsDrawerOpen(false));
    dispatch(resetContentValues());
    dispatch(setLetter(''));
  }

  const navItems = createNavItems(lg);
  return (
    <StyledDrawer
      variant="temporary"
      open={isDrawerOpen}
      onClose={() => dispatch(setIsDrawerOpen(false))}
      ModalProps={{
        keepMounted: true
      }}>
      <StyledBox>
        <List>
          {navItems.slice(1).map((item) => (
            <ListItem key={item.title} disablePadding onClick={() => handleNavigate(item)}>
              <ListItemButton>
                <Box sx={{ fontSize: `${fontSize}em` }}>{item.title}</Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledBox>
      <StyledVersionText>
        <p>{lg.version}: 1.4.3</p>
      </StyledVersionText>
    </StyledDrawer>
  );
}

export default DrawerComponent;
