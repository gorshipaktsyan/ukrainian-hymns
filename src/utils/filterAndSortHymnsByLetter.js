import hymnsService from '../services/hymnsService';

export default function filterAndSortHymnsByLetter({ letter, language }) {
  const filteredHymns = hymnsService.filterHymnsByLetter(letter);
  const mappedHymns = mapHymns({ filteredHymns, letter, language });

  const sortedHymns = hymnsService.sortHymns(mappedHymns, language.language);
  return sortedHymns;
}

function mapHymns({ filteredHymns, letter, language }) {
  return filteredHymns.map((hymn) => {
    const isFirstLetterMatch = hymn.first_letter === letter;
    const filteredText = removeSymbols(
      isFirstLetterMatch ? hymn.first_string : hymn.chorus_first_string,
      language
    );

    return {
      ...hymn,
      filteredByFirstLetter: isFirstLetterMatch,
      filteredText
    };
  });
}

function removeSymbols(text, language) {
  return text.replace(language.regExp.onlyLetters, '');
}
