import { useSelector } from 'react-redux';

import { StyledComponents } from '../../styles';

const { InfoBox } = StyledComponents;

function Reference() {
  const { language } = useSelector((state) => state.settings);

  return (
    <InfoBox>
      <h3>{language.reference.search.heading}</h3>
      <p>{language.reference.search.mobileLocation}</p>
      <p>{language.reference.search.searchFields}</p>

      <h3>{language.reference.navigation.heading}</h3>
      <p>{language.reference.navigation.hymnNavigation}</p>

      <h3>{language.reference.mainMenu.heading}</h3>
      <p>{language.reference.mainMenu.openMenu}</p>

      <h3>{language.reference.alphabeticalIndex.heading}</h3>
      <p>{language.reference.alphabeticalIndex.indexDescription}</p>

      <h3>{language.reference.content.heading}</h3>
      <p>{language.reference.content.description}</p>

      <h3>{language.reference.history.heading}</h3>
      <p>{language.reference.history.description}</p>

      <h3>{language.reference.bookmarks.heading}</h3>
      <p>{language.reference.bookmarks.description}</p>

      <h3>{language.reference.settings.heading}</h3>
      <p>{language.reference.settings.description}</p>

      <h3>{language.reference.appUpdate.heading}</h3>
      <p>{language.reference.appUpdate.description}</p>

      <h3>{language.reference.melodyPlayback.heading}</h3>
      <p>{language.reference.melodyPlayback.description}</p>
    </InfoBox>
  );
}

export default Reference;
