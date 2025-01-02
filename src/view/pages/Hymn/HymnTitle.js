export default function HymnTitle({ language, hymn }) {
  return (
    <div className="hymnTitle">
      {hymn && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${language.hymn} ${hymn.number}<sup>${hymn.sign}</sup>`
          }}
        />
      )}
    </div>
  );
}
