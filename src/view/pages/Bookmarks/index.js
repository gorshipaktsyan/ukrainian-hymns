import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Collapse, Divider } from '@mui/material';

import { removeHymn } from '../../../redux/slice/bookmarksSlice';
import { formatDataForBookmarks } from '../../../utils';
import ListItem from '../../components/ListItem';
import { StyledComponents } from '../../styles';

const { StyledBox, StyledList, StyledTypography } = StyledComponents;

function Bookmarks() {
  const { savedHymns } = useSelector((state) => state.bookmarks);
  const { language } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/hymns/${id}`);
  }

  function handleDelete(id) {
    dispatch(removeHymn(id));
  }

  const formattedData = formatDataForBookmarks({ savedHymns, language });
  return (
    <StyledBox>
      {formattedData.length > 0 ? (
        <StyledList>
          <TransitionGroup>
            {formattedData.map(({ date, hymns }) => (
              <Collapse key={date}>
                <Box sx={{ paddingBottom: '20px' }}>
                  <Divider>{date}</Divider>
                  {hymns.map((h, index) => (
                    <ListItem
                      key={h._id}
                      title={h?.first_string}
                      number={h?.number}
                      id={h._id}
                      list={hymns}
                      index={index}
                      Icon={DeleteIcon}
                      onTitleClick={handleClick}
                      onIconClick={handleDelete}
                    />
                  ))}
                </Box>
              </Collapse>
            ))}
          </TransitionGroup>
        </StyledList>
      ) : (
        <StyledTypography>{language.noData}</StyledTypography>
      )}
    </StyledBox>
  );
}

export default Bookmarks;
