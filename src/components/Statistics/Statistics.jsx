import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {

  return (
    <section className={css.statistics}>
      {title && <h2 className="title">Upload stats</h2>}

      <ul className={css.statList}>
        {stats.map(({id, label, percentage}) => (
          <li key={id} className={css.item}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
