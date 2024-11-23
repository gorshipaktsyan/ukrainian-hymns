import styled from '@emotion/styled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Divider } from '@mui/material';

const HymnStyledComponents = {
  StyledDivider: styled(Divider)({
    width: '400px',
    margin: 'auto'
  }),
  ArrowRightWrapper: styled(Box)({
    position: 'fixed',
    top: '50%',
    right: '20px',
    width: '80px',
    height: '80px',
    cursor: 'pointer',
    color: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      color: 'black'
    }
  }),
  ArrowLeftWrapper: styled(Box)({
    position: 'fixed',
    top: '50%',
    left: '20px',
    width: '80px',
    height: '80px',
    cursor: 'pointer',
    color: 'grey',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    ':hover': {
      color: 'black'
    },
    ':focus-visible': {
      outline: 'none'
    }
  }),
  ArrowRightIcon: styled(ArrowForwardIosIcon)({
    width: '50px',
    height: '50px',
    ':focus': {
      outline: 'none'
    }
  }),
  ArrowLeftIcon: styled(ArrowBackIosIcon)({
    width: '50px',
    height: '50px',
    ':focus': {
      outline: 'none'
    }
  }),
  MobArrowRightIcon: styled(ArrowForwardIosIcon)({
    position: 'fixed',
    top: '50%',
    right: '20px',
    width: '50px',
    height: '50px',
    color: 'grey',
    opacity: '0.2'
  }),
  MobArrowLeftIcon: styled(ArrowBackIosIcon)({
    position: 'fixed',
    top: '50%',
    left: '20px',
    width: '50px',
    height: '50px',
    color: 'grey',
    opacity: '0.2'
  })
};

export default HymnStyledComponents;
