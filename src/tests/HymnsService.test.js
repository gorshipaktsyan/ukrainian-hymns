import russian from '../config/constants/russian';
import hymnsService from '../services/hymnsService';
import { hymns } from '../storage';

describe('HymnsService', () => {
  it('should return all hymns', () => {
    const result = hymnsService.get();
    expect(result).toEqual(hymns);
  });

  it('should find a hymn by number', () => {
    const result = hymnsService.findHymn(1);
    expect(result).toEqual(hymns[0]);
  });

  it('should find multiple hymns by numbers', () => {
    const result = hymnsService.findHymns([1, 3]);
    expect(result).toEqual([hymns[0], hymns[2]]);
  });

  it('should find searched hymns by property', () => {
    const result = hymnsService.findSearchedHymns('1, 3', 'number');
    expect(result).toEqual([1, 3]);
  });

  it('should find searched hymns by property', () => {
    const result = hymnsService.findSearchedHymns('5, 6', 'number_eng');
    expect(result).toEqual([2, 3]);
  });

  it('should find index of a hymn by number', () => {
    const result = hymnsService.findIndex(2);
    expect(result).toBe(1);
  });

  it('should return an array of matching hymns by searched text', () => {
    const result = hymnsService.findHymnsWithMatchKey(
      russian.test.text,
      russian.regExp.onlyLetters
    );
    const expected = hymns
      .map((h) => ({
        ...h,
        matches: h.text.toLowerCase().includes(russian.test.text.toLowerCase())
      }))
      .filter((h) => h.matches);

    expect(result).toEqual(expected);
  });

  it('should filter hymns by letter', () => {
    const result = hymnsService.filterHymnsByLetter(russian.test.letterForFiltering);
    expect(result).toEqual([hymns[330]]);
  });

  it('should filter hymns by subtitle', () => {
    const result = hymnsService.filterHymnsBySubId(1);
    expect(result).toEqual([hymns[0]]);
  });

  it('should sort hymns by filteredText', () => {
    const expectedSortedHymnsArray = [
      russian.test.arrayForSorting[3], // "Благая весть"
      russian.test.arrayForSorting[2], // "Благодарение"
      russian.test.arrayForSorting[0], // "Благословение"
      russian.test.arrayForSorting[1] // "Божественная"
    ];
    const sortedHymns = hymnsService.sortHymns(russian.test.arrayForSorting, russian.language);
    expect(sortedHymns).toEqual(expectedSortedHymnsArray);
  });

  it('should return undefined for a non-existent hymn', () => {
    const result = hymnsService.findHymn(hymns.length + 2);
    expect(result).toBeUndefined();
  });
});
