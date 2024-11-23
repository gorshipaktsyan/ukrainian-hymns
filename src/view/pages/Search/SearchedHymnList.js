import React from 'react';

import { setCurrentNumber } from '../../../redux/slice/currentNumberSlice';
import ListItem from '../../components/ListItem';
import { StyledComponents } from '../../styles';

const { StyledList, StyledBox } = StyledComponents;

function SearchedHymnList({ foundHymns, navigate, dispatch }) {
  function handleClick(id) {
    dispatch(setCurrentNumber([id]));
    navigate(`/hymns/${id}`);
  }

  return (
    <StyledBox>
      <StyledList>
        {foundHymns.map((h, index) => (
          <ListItem
            key={h.number}
            title={h?.first_string}
            number={h.number}
            id={h.number}
            list={foundHymns}
            index={index}
            onTitleClick={handleClick}
          />
        ))}
      </StyledList>
    </StyledBox>
  );
}
export default SearchedHymnList;
