export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} title="Words" />
      <Stat number={stats.numberOfCharacters} title="Characters" />
      <Stat number={stats.instagramCharacterLeft} title="Instagram" />
      <Stat number={stats.facebookCharacterLeft} title="Facebook" />
    </section>
  );
}

function Stat({ number, title }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}>{number}</span>
      <h2 className="second-heading">{title}</h2>
    </section>
  );
}
