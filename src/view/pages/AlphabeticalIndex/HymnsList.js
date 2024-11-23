import SearchIcon from '@mui/icons-material/Search';

import { filterAndSortHymnsByLetter } from '../../../utils';
import ListItem from '../../components/ListItem';
import { StyledComponents } from '../../styles';

const { StyledBox, StyledList, StyledFab } = StyledComponents;

function HymnsList({ handleTitleClick, letter, handleBackClick, isMobile, language }) {
  const filteredHymnsByLetter = filterAndSortHymnsByLetter({ letter, language });

  return (
    <StyledBox>
      <StyledList>
        {filteredHymnsByLetter.map((h, index) => (
          <ListItem
            key={h._id}
            title={h.filteredByFirstLetter ? h.first_string : h.chorus_first_string}
            number={h.number}
            id={h._id}
            list={filteredHymnsByLetter}
            index={index}
            onTitleClick={handleTitleClick}
          />
        ))}
      </StyledList>
      {isMobile && (
        <StyledFab color="primary" aria-label="add" onClick={handleBackClick}>
          <SearchIcon />
        </StyledFab>
      )}
    </StyledBox>
  );
}

export default HymnsList;
