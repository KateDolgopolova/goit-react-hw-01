import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

function bgColor(id) {
  let color = '';

  switch (id) {
    case 'id-1':
      color = '#4fc4f6';
      break;
    case 'id-2':
      color = '#a33cf2';
      break;
    case 'id-3':
      color = '#e64c65';
      break;
    case 'id-4':
      color = '#21b8c6';
      break;
    default:
      color = '#bbc621';
  }

  return color;
}

const Stats = ({title, stats}) => (
  <Fragment className={styles.wrapper}>
    <div className={styles.stats}>
      {!!title && <h2 className={styles.title}>{title}</h2>}
    </div>
    <ul className={styles.list}>
      {stats.map((item) => (
        <li
          className={styles.item}
          key={item.id}
          style={{backgroundColor: bgColor(item.id)}}
        >
          <span className={styles.label}> {item.label} </span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </Fragment>
);

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.objectOf(
      PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
  ).isRequired,
};

export default Stats;
