import { useSelector } from 'react-redux';

import { StyledComponents } from '../../styles';

const { InfoBox } = StyledComponents;
function Preface() {
  const { language } = useSelector((state) => state.settings);

  return (
    <InfoBox>
      <p>
        <em>{language.preface.preface}</em>
      </p>

      <p>{language.preface.introduction}</p>

      <ol>
        {language.preface.goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ol>

      <p>{language.preface.churchExistence}</p>

      <p>{language.preface.inclusion}</p>

      <p>{language.preface.hymnSelection}</p>

      <p>{language.preface.lordRestoration}</p>

      <p>{language.preface.forSatisfaction}</p>

      <p>{language.preface.hymnDivisions}</p>

      <p>{language.preface.index}</p>

      <p>{language.preface.melodies}</p>

      <p>{language.preface.attention}</p>

      <p>{language.preface.continuousFlow}</p>

      <p>{language.preface.distractions}</p>

      <p>{language.preface.gratitudeToPublishers}</p>

      <p> {language.preface.permissions}</p>

      <p> {language.preface.gratitudeToBrothersAndSisters}</p>

      <p> {language.preface.usage}</p>

      <p> {language.preface.encouragement}</p>
      <p>
        {language.preface.authors} —<br /> {language.preface.names}
      </p>

      <p>
        {language.preface.location}
        <br />
        {language.preface.date}
      </p>
    </InfoBox>
  );
}

export default Preface;
