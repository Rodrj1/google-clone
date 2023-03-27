export default function SearchError() {
  return (
    <div className="flex flex-col gap-5 text-white px-2 md:px-44 pt-5">
      <h1>Your search did not match any documents.</h1>
      <h2>Suggestions:</h2>
      <ul>
        <li>Make sure that all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
        <li>Try fewer keywords.</li>
      </ul>
    </div>
  );
}
