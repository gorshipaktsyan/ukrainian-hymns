import { Box } from '@mui/material';

import { setLetter } from '../../../redux/slice/alphabeticalSlice';

import AlphabeticalStyledComponents from './styles';

const { StyledAlphabet, StyledLetter } = AlphabeticalStyledComponents;

function Alphabet({ dispatch, language }) {
  function handleClick(letter) {
    dispatch(setLetter(letter));
  }

  return (
    <Box sx={{ maxWidth: '250px' }}>
      <StyledAlphabet>
        {language.alphabeticalIndex.alphabet.map((letter, index) => (
          <StyledLetter key={index} onClick={() => handleClick(letter)}>
            {letter}
          </StyledLetter>
        ))}
      </StyledAlphabet>
    </Box>
  );
}

export default Alphabet;
