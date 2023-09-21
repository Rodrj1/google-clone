export default function SearchError() {
  return (
    <div className="flex flex-col gap-5 text-[f4f4f4] pl-[5%] md:pl-[9%]">
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
