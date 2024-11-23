import styled from '@emotion/styled';
import { List, ListItem } from '@mui/material';

const AlphabeticalStyledComponents = {
  StyledAlphabet: styled(List)({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: '100px',
    maxWidth: '400px'
  }),
  StyledLetter: styled(ListItem)({
    fontSize: '25px',
    width: '50px',
    height: '50px',
    display: 'flex',
    '&:hover': {
      backgroundColor: '#f0f0dc',
      cursor: 'pointer'
    }
  })
};

export default AlphabeticalStyledComponents;
