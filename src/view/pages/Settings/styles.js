import styled from '@emotion/styled';
import { Box, List, ListItem } from '@mui/material';

const SettingsStyledComponents = {
  StyledSetList: styled(List)({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    paddingBottom: '100px',
    maxWidth: '400px',
    padding: '10px 10px'
  }),
  StyledSetListItem: styled(ListItem)({
    flexDirection: 'column',
    width: '100%'
  }),
  StyledSetTpg: styled(Box)({
    '&:hover': { cursor: 'default' },
    margin: '0px 5px'
  }),
  ArrowSetBox: styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  })
};

export default SettingsStyledComponents;
