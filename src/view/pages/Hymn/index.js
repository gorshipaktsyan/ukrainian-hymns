import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import { setCurrentNumber } from '../../../redux/slice/currentNumberSlice';
import { hymnsService } from '../../../services';
import { /*useAddToHistory*/ useSwipeNavigation } from '../../../utils/hooks';

import Arrows from './Arrows';
import HymnTitle from './HymnTitle';
//import HymnStyledComponents from './styles';

import './index.scss';

//const { StyledDivider } = HymnStyledComponents;

function Hymn() {
  const { number } = useParams();
  const { isAllowToUseArrows, isMobile, language } = useSelector((state) => state.settings);
  const { currentNumber } = useSelector((state) => state.currentNumber);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //useAddToHistory(currentNumber);

  const { handleLeftSwipe, handleRightSwipe, handlers } = useSwipeNavigation({
    currentNumber,
    navigate
  });

  useEffect(() => {
    number && dispatch(setCurrentNumber(number.split(',').map(Number)));
  }, [number, dispatch]);

  const hymn = hymnsService.findHymn(currentNumber);
  return (
    <>
      <Box
        className="hymns-page-wrapper"
        sx={{
          paddingBottom: '200px'
        }}
        {...handlers}
      >
        <Box>
          {hymn ? (
            <HymnTitle language={language} hymn={hymn} />
          ) : (
            <Box
              sx={{
                position: 'fixed',
                top: '53%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              Гімн не перекладено
            </Box>
          )}
          {hymn && <Box dangerouslySetInnerHTML={{ __html: hymn?.html }} />}
          <Arrows
            isAllowToUseArrows={isAllowToUseArrows}
            isMobile={isMobile}
            handleLeftSwipe={handleLeftSwipe}
            handleRightSwipe={handleRightSwipe}
          />
        </Box>
      </Box>
    </>
  );
}

export default Hymn;
