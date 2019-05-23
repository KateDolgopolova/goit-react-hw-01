import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({avatar, name, tag, location, stats}) => (
  <Fragment className={styles.wrapper}>
    <div className={styles.container}>
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}> {name}</p>
      <p className={styles.text}> {tag} </p>
      <p className={styles.text}> {location} </p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.text}> Followers </span>
        <span className={styles.name}> {stats.followers} </span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}> Views </span>
        <span className={styles.name}> {stats.views} </span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}> Likes </span>
        <span className={styles.name}> {stats.likes} </span>
      </li>
    </ul>
  </Fragment>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
      PropTypes.shape({
        followers: PropTypes.object.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
  ).isRequired,
};

export default Profile;
