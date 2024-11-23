import styled from '@emotion/styled';
import { Box, Drawer } from '@mui/material';

const DrawerStyledComponents = {
  StyledDrawer: styled(Drawer)({
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: '240px',
      paddingTop: '64px'
    }
  }),
  StyledBox: styled(Box)({
    textAlign: 'center'
  }),
  StyledVersionText: styled(Box)({
    marginLeft: '10px',
    position: 'absolute',
    bottom: 10,
    fontSize: '13px'
  })
};

export default DrawerStyledComponents;
