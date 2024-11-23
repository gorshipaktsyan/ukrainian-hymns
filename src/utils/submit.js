// import {
//   searchRussianNumber,
//   searchEnglishNumber,
//   searchHymnsByText,
// } from "./search";

// export default function submit({
//   rusNumber,
//   engNumber,
//   searchedText,
//   setRusNumber,
//   setEngNumber,
//   setSearchedText,
//   setErrorAlert,
//   lg,
//   navigate,
//   hymns,
// }) {
//   let number = [];
//   if (rusNumber) {
//     number = searchRussianNumber(rusNumber, hymns);
//   } else if (engNumber) {
//     number = searchEnglishNumber(engNumber, hymns);
//   } else if (searchedText) {
//     const foundHymns = searchHymnsByText(searchedText, lg, hymns);
//     if (foundHymns.length) {
//       return;
//     }
//   } else {
//     number = [Math.floor(Math.random() * 800)];
//   }
//   if (number.length) {
//     navigate(`/hymns/${number}`);
//   } else {
//     setErrorAlert(true);
//   }
//   setRusNumber("");
//   setEngNumber("");
//   setSearchedText("");
// }
