export default function showBookmark({ formattedData, currentHymnNumber }) {
  if (currentHymnNumber && formattedData.length) {
    const isSaved = formattedData.some((day) =>
      day.hymns.some((h) => h.number === currentHymnNumber)
    );
    return isSaved;
  }
}
