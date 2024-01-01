import React from 'react';
import styles from './Search.css';

const Search = () => {
  	return (
    		<div className={styles.search}>
      			<img className={styles.tdesignnotificationFilledIcon1} alt="" src="tdesign:notification-filled.png" />
      			<img className={styles.iconoirprofileCircle1} alt="" src="iconoir:profile-circle.png" />
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<img className={styles.gravityUimagnifierIcon1} alt="" src="gravity-ui:magnifier.png" />
        				<div className={styles.searchBooksAuthors1}>Search books, authors, and genres</div>
      			</div>
      			<img className={styles.searchChild} alt="" src="Group 14.png" />
      			<div className={styles.groupParent}>
        				<div className={styles.ellipseParent}>
          					<div className={styles.groupItem} />
          					<img className={styles.claritypictureLineIcon} alt="" src="clarity:picture-line.png" />
          					<div className={styles.johnDoe}>John Doe</div>
        				</div>
        				<div className={styles.bookLovers}>Book Lovers</div>
        				<div className={styles.ellipseGroup}>
          					<div className={styles.groupItem} />
          					<img className={styles.claritypictureLineIcon} alt="" src="clarity:picture-line.png" />
          					<div className={styles.johnDoe}>John Doe</div>
        				</div>
      			</div>
      			<div className={styles.readingGroupsParent}>
        				<div className={styles.readingGroups}>Reading Groups</div>
        				<div className={styles.rectangleDiv} />
        				<div className={styles.connect}>Connect</div>
      			</div>
      			<div className={styles.rectangleGroup}>
        				<div className={styles.groupChild1} />
        				<div className={styles.sanFranciscoUsa}>San Francisco, USA</div>
        				<div className={styles.location}>Location</div>
      			</div>
      			<img className={styles.searchItem} alt="" src="Line 1.png" />
      			<img className={styles.searchInner} alt="" src="Line 2.png" />
      			<div className={styles.am}>10:00 AM</div>
    		</div>);
};

export default Search;
