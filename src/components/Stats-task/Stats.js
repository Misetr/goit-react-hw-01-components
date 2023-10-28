import css from './Stats.module.css'


const Stats = ({ title, stats }) => {

  return (
    <section className={ css.statistics }>
      {title && <h2 className={ css.title }>{title}</h2>}
      <ul className={ css.statlist }>
        {stats.map(({ id, label, percentage }) => (
          <li className={ css.item } key={id}>
            <span className={ css.label }>{label}</span>
            <span className={ css.percentage }>{percentage}</span>
          </li>
        )
        )}
      </ul>
    </section>
  )
};
export default Stats;

