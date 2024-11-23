import styled from '@emotion/styled';
import { Alert, Box, Fab, List, Typography } from '@mui/material';

const StyledComponents = {
  StyledBox: styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }),
  InfoBox: styled(Box)({
    margin: 'auto',
    maxWidth: '650px',
    padding: '0px 20px 20px 20px',
    textAlign: 'justify'
  }),
  StyledLink: styled('a')({
    color: 'black',
    ':hover': {
      color: 'grey'
    }
  }),
  StyledList: styled(List)({
    display: 'grid',
    width: '100%',
    paddingBottom: '100px',
    maxWidth: '650px'
  }),
  StyledFab: styled(Fab)({
    zIndex: 1000,
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: 'black',
    '&:hover': { backgroundColor: 'black' }
  }),
  StyledAlert: styled(Alert)({
    width: '100%',
    marginTop: '50px'
  }),
  StyledTypography: styled(Typography)({
    marginTop: '100px'
  })
};

export default StyledComponents;
