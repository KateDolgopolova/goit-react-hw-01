import React from 'react';
import PropTypes from 'prop-types';
import styles from './ParsingItem.module.css';

function getColor(label) {
  let itemColor = '';

  switch (label) {
    case 'Bronze':
      itemColor = '#dd7c4b';
      break;
    case 'Silver':
      itemColor = '#c0c0c0';
      break;
    case 'Gold':
      itemColor = '#dda431';
      break;
    default:
      itemColor = '#31d7dd';
  }
  return itemColor;
}

const PricingItem = ({label, icon, capacity, price, description}) => (
  <li className={styles.item}>
    <div className="pricing-item">
      <i
        className={styles.icon}
        style={{backgroundImage: `url(${icon})`, display: 'inline-block'}}
      />
      <h2 className={styles.label} style={{color: getColor(label)}}>
        {label}
      </h2>
      <p className={styles.capacity}>{capacity}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>$39/MO</p>
      <button
        style={{backgroundColor: getColor(label)}}
        className={styles.button}
        type="button"
      >
        Get Started
      </button>
    </div>
  </li>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
