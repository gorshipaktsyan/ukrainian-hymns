export default function HymnTitle({ foundHymns, language, hymn }) {
  return (
    <div className="hymnTitle">
      {foundHymns.length > 1 && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${language.hymn} ${hymn.number}<sup>${hymn.sign}</sup>`
          }}
        />
      )}
    </div>
  );
}
