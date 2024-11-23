import { useDispatch, useSelector } from 'react-redux';

import { Divider, Slider, Switch } from '@mui/material';

import {
  changeFontSize,
  setIsAllowToUseArrows,
  setIsEngSearchVisible
} from '../../../redux/slice/settingsSlice';
import { StyledComponents } from '../../styles';

import SettingsStyledComponents from './styles';

const { StyledBox } = StyledComponents;
const { StyledSetList, StyledSetListItem, StyledSetTpg, ArrowSetBox } = SettingsStyledComponents;

function Settings() {
  const { fontSize, isAllowToUseArrows, isEngSearchVisible, isMobile, language } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

  function handleChangeFtSz(e) {
    const newValue = parseFloat(e.target.value);
    dispatch(changeFontSize(newValue));
  }

  function handleChangeArrows(e) {
    dispatch(setIsAllowToUseArrows(e.target.checked));
  }

  function handleChangeEngSearch(e) {
    dispatch(setIsEngSearchVisible(e.target.checked));
  }

  return (
    <StyledBox onTouchStart={(e) => e.stopPropagation()}>
      <StyledSetList>
        <StyledSetListItem>
          <StyledSetTpg>{language.settings.fontSize}</StyledSetTpg>
          <Slider
            aria-label="Font size"
            value={fontSize && fontSize}
            onChange={handleChangeFtSz}
            step={0.1}
            marks
            min={1}
            max={1.8}
          />
        </StyledSetListItem>
        {isMobile && (
          <>
            <Divider sx={{ width: '350px', marginTop: '15px' }} />
            <StyledSetListItem>
              <StyledSetTpg>{language.settings.arrows}</StyledSetTpg>
              <ArrowSetBox>
                <StyledSetTpg>{language.settings.off}</StyledSetTpg>
                <Switch checked={isAllowToUseArrows} onChange={handleChangeArrows}></Switch>
                <StyledSetTpg>{language.settings.on}</StyledSetTpg>
              </ArrowSetBox>
            </StyledSetListItem>
          </>
        )}
        <Divider sx={{ width: '350px', marginTop: '15px' }} />
        <StyledSetListItem>
          <StyledSetTpg>{language.settings.searchByEnglishNumber}</StyledSetTpg>
          <ArrowSetBox>
            <StyledSetTpg>{language.settings.off}</StyledSetTpg>
            <Switch checked={isEngSearchVisible} onChange={handleChangeEngSearch}></Switch>
            <StyledSetTpg>{language.settings.on}</StyledSetTpg>
          </ArrowSetBox>
        </StyledSetListItem>
      </StyledSetList>
    </StyledBox>
  );
}

export default Settings;
