const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat label="Words" number={stats.numberWords} />
      <Stat label="Characters" number={stats.numberCharacters} />
      <Stat label="Instagram" number={stats.numberInstagram} />
      <Stat label="Facebook" number={stats.numberFacebook} />
    </section>
  )
}

const Stat = ({ label, number }) => {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  )
}

export default Stats;