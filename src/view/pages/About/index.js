import React from 'react';
import { useSelector } from 'react-redux';

import { StyledComponents } from '../../styles';

const { InfoBox, StyledLink } = StyledComponents;

function About() {
  const lg = useSelector((state) => state.settings.language);

  return (
    <InfoBox className="infoBox">
      <p>{lg.about.overview}</p>
      <p>{lg.about.asteriskNote}</p>
      <p>{lg.about.crossNote}</p>
      <p>{lg.about.numbering}</p>

      <p>
        {lg.about.contact} <StyledLink href="mailto:hymns@kbk.ru">hymns@kbk.ru</StyledLink>.{' '}
        {lg.about.officialSite + ' ' + lg.about.collectorBook} —{' '}
        <StyledLink href="http://kbk.ru">kbk.ru</StyledLink>.
      </p>
      <p>
        &copy; {lg.about.collectorBook}, 2024. {lg.about.rightsReserved}
      </p>
    </InfoBox>
  );
}

export default About;
