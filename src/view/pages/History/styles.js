import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledHistoryComponents = {
  StyledDeleteHistoryText: styled(Box)({
    justifySelf: 'center',
    '&:hover': { color: 'grey', cursor: 'pointer' },
    marginBottom: '10px'
  })
};

export default StyledHistoryComponents;
