import { hymns } from '../storage';

class HymnsService {
  get() {
    return hymns;
  }

  findHymn(currentNumber) {
    return hymns.find((h) => h.number === currentNumber);
  }

  findHymns(currentNumbers) {
    return currentNumbers.map((number) => hymns.find((h) => h.number === number));
  }

  findSearchedHymns(inputtedNumbers, property) {
    const numbers = inputtedNumbers.split(',').map((num) => Number(num.trim()));
    const foundHymns = hymns.filter((h) => numbers.includes(h[property]));
    return foundHymns.map((h) => h.number);
  }

  findIndex(hymnNumber) {
    return hymns.findIndex((el) => el.number === hymnNumber);
  }

  findHymnsWithMatchKey(searchedText, regExp) {
    const lowerCaseText = searchedText.toLowerCase();
    const regExpOnlyLetters = new RegExp(regExp, 'g');
    const textWithoutSpacesAndSymbols = lowerCaseText.replace(regExpOnlyLetters, '');

    if (textWithoutSpacesAndSymbols === '') return [];

    return hymns
      .map((hymn) => ({
        ...hymn,
        matches: hymn.text
          .toLowerCase()
          .replace(regExpOnlyLetters, '')
          .includes(textWithoutSpacesAndSymbols)
      }))
      .filter((h) => h.matches);
  }

  filterHymnsByLetter(letter) {
    return hymns.filter((h) => h.first_letter === letter || h.first_letter_chorus === letter);
  }

  filterHymnsBySubId(subId) {
    return hymns.filter((hymn) => hymn.subtitle === subId);
  }

  sortHymns(hymnsArray, lg) {
    return hymnsArray.sort((a, b) => {
      return a.filteredText.localeCompare(b.filteredText, lg, {
        sensitivity: 'base'
      });
    });
  }
}

const hymnsService = new HymnsService();

export default hymnsService;
