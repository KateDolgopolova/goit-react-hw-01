import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import styles from './ParsingItem.module.css';

const PricisingPlan = ({pricingList}) => (
  <ul className={styles.plan}>
    {pricingList.map((item) => (
      <PricingItem
        key={item.label}
        icon={item.icon}
        label={item.label}
        capacity={item.capacity}
        description={item.description}
        price={item.price}
      />
    ))}
  </ul>
);

PricisingPlan.propTypes = {
  pricingList: PropTypes.objectOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }),
  ).isRequired,
};

export default PricisingPlan;
