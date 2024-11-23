import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

const SearchBarStyledComponents = {
  StyledSearchIcon: styled(SearchIcon)({
    fontSize: '30px',
    marginRight: '10px',
    '&:hover': { cursor: 'pointer' }
  }),
  SearchedBox: styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  })
};

export default SearchBarStyledComponents;
