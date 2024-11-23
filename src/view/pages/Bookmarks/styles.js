import styled from '@emotion/styled';
import { Button } from '@mui/material';

const BookmarksStyledComponents = {
  StyledOpenButton: styled(Button)({
    border: '1px solid',
    width: '150px',
    color: 'black',
    '&:hover': {
      backgroundColor: '#f0f0dc'
    }
  })
};

export default BookmarksStyledComponents;
