import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import { setCurrentNumber } from '../../../redux/slice/currentNumberSlice';
import { hymnsService } from '../../../services';
import { useAddToHistory, useSwipeNavigation } from '../../../utils/hooks';

import Arrows from './Arrows';
import HymnTitle from './HymnTitle';
import HymnStyledComponents from './styles';

import './index.scss';

const { StyledDivider } = HymnStyledComponents;

function Hymn() {
  const { number } = useParams();
  const { isAllowToUseArrows, isMobile, language } = useSelector((state) => state.settings);
  const { currentNumber } = useSelector((state) => state.currentNumber);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useAddToHistory(currentNumber);

  const { handleLeftSwipe, handleRightSwipe, handlers } = useSwipeNavigation({
    currentNumber,
    navigate
  });

  useEffect(() => {
    number && dispatch(setCurrentNumber(number.split(',').map(Number)));
  }, [number, dispatch]);

  const foundHymns = hymnsService.findHymns(currentNumber);
  return (
    <>
      <Box
        className="hymns-page-wrapper"
        sx={{
          paddingBottom: '200px'
        }}
        {...handlers}>
        {foundHymns?.map((hymn, index) => {
          return (
            <Box key={index}>
              <HymnTitle foundHymns={foundHymns} language={language} hymn={hymn} />
              <Box dangerouslySetInnerHTML={{ __html: hymn?.html }} />
              <Arrows
                isAllowToUseArrows={isAllowToUseArrows}
                isMobile={isMobile}
                handleLeftSwipe={handleLeftSwipe}
                handleRightSwipe={handleRightSwipe}
              />
              {index !== foundHymns.length - 1 && <StyledDivider />}
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Hymn;
