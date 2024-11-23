function setDataForHistory(value) {
  const hymnIds = Array.isArray(value) ? value : [value];
  const currentDate = new Date().toISOString();
  const hymnObject = { date: currentDate, number: hymnIds };
  return hymnObject;
}
function setDataForBookmarks(value) {
  const currentDate = new Date().toISOString();
  const hymnObject = { date: currentDate, number: value };
  return hymnObject;
}

export { setDataForBookmarks, setDataForHistory };
