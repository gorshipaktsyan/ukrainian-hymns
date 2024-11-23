import hymnsService from '../services/hymnsService';

import createNavItems from './createNavItems';

function findInStore(value, data) {
  if (data.length && value.length) {
    const hasNumber = data.some((currentDay) =>
      currentDay.number.some((number) => value.includes(number))
    );
    return hasNumber;
  }
  return false;
}

export default function findTitle({ currentNumber, pathname, lg }) {
  let newTitle;

  if (currentNumber.length && pathname === `/hymns/${currentNumber}`) {
    const currentHymn = hymnsService.findHymn(currentNumber);

    if (currentNumber.length > 1) {
      newTitle = `${lg.hymns} ${currentNumber.slice(0, 3).map((number) => ' ' + number)}${
        currentNumber.length > 3 ? ' ...' : ''
      }`;
    } else {
      newTitle = `${lg.hymn} ${currentNumber}<sup>${currentHymn?.sign || ''}</sup>`;
    }

    return newTitle;
  } else {
    const navItems = createNavItems(lg);
    const selectedItem = navItems.find((item) => `/${item.route}` === pathname);
    return selectedItem ? selectedItem.title : null;
  }
}

export { findInStore, findTitle };
