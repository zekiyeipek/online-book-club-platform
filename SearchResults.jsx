import React from 'react';
import styles from './SearchResults.css';

const SearchResults = () => {
  	return (
    		<div className={styles.searchResults}>
      			<img className={styles.tdesignnotificationFilledIcon1} alt="" src="tdesign:notification-filled.png" />
      			<img className={styles.iconoirprofileCircle1} alt="" src="iconoir:profile-circle.png" />
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.sortBy}>Sort by</div>
        				<img className={styles.riarrowDropDownLineIcon1} alt="" src="ri:arrow-drop-down-line.png" />
      			</div>
      			<div className={styles.rectangleGroup}>
        				<div className={styles.groupItem} />
        				<div className={styles.bookRatingParent}>
          					<div className={styles.bookRating}>Book rating</div>
          					<div className={styles.ggcheckRParent}>
            						<img className={styles.ggcheckRIcon8} alt="" src="gg:check-r.png" />
            						<div className={styles.any}>Any</div>
          					</div>
          					<div className={styles.ggcheckRGroup}>
            						<img className={styles.ggcheckRIcon8} alt="" src="gg:check-r.png" />
            						<div className={styles.any}>Excellent</div>
          					</div>
          					<div className={styles.ggcheckRContainer}>
            						<img className={styles.ggcheckRIcon8} alt="" src="gg:check-r.png" />
            						<div className={styles.any}>Fiction</div>
          					</div>
          					<div className={styles.groupDiv}>
            						<img className={styles.ggcheckRIcon8} alt="" src="gg:check-r.png" />
            						<div className={styles.veryGood}>Very good</div>
          					</div>
        				</div>
        				<div className={styles.welcome}>
          					<img className={styles.welcomeChild} alt="" src="Rectangle 10.png" />
        				</div>
        				<div className={styles.rectangleContainer}>
          					<div className={styles.groupInner} />
          					<div className={styles.searchBooks}>Search Books</div>
        				</div>
        				<div className={styles.pricePerBookParent}>
          					<div className={styles.bookRating}>Price per Book</div>
          					<div className={styles.ggcheckRParent1}>
            						<img className={styles.ggcheckRIcon8} alt="" src="gg:check-r.png" />
            						<div className={styles.lessThan101}>Less than $10</div>
          					</div>
          					<div className={styles.ggcheckRParent2}>
            						<img className={styles.ggcheckRIcon8} alt="" src="gg:check-r.png" />
            						<div className={styles.any}>$10 to $20</div>
          					</div>
          					<div className={styles.ggcheckRParent3}>
            						<img className={styles.ggcheckRIcon8} alt="" src="gg:check-r.png" />
            						<div className={styles.veryGood}>$30 and more</div>
          					</div>
          					<div className={styles.ggcheckRParent4}>
            						<img className={styles.ggcheckRIcon8} alt="" src="gg:check-r.png" />
            						<div className={styles.any}>$20 to $30</div>
          					</div>
        				</div>
        				<div className={styles.bookGenreParent}>
          					<div className={styles.bookGenre}>Book genre</div>
          					<div className={styles.rectangleParent1}>
            						<div className={styles.rectangleDiv} />
            						<div className={styles.romance}>Romance</div>
          					</div>
          					<div className={styles.rectangleParent2}>
            						<div className={styles.rectangleDiv} />
            						<div className={styles.mystery}>Mystery</div>
          					</div>
          					<div className={styles.rectangleParent3}>
            						<div className={styles.rectangleDiv} />
            						<div className={styles.mystery}>Fantasy</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.vectorParent}>
        				<img className={styles.vectorIcon3} alt="" src="Vector.png" />
        				<div className={styles.searchResults1}>Search Results</div>
        				<div className={styles.vectorGroup}>
          					<img className={styles.rectangleIcon} alt="" src="Rectangle 9.png" />
          					<div className={styles.searchForBooks1}>Search for books, authors, or genres</div>
          					<img className={styles.vectorIcon4} alt="" src="Vector.png" />
          					<div className={styles.books}>Books</div>
        				</div>
        				<div className={styles.vectorContainer}>
          					<img className={styles.groupChild3} alt="" src="Rectangle 9.png" />
          					<div className={styles.selectADate1}>Select a date</div>
          					<div className={styles.books}>Check-in date</div>
          					<img className={styles.vectorIcon5} alt="" src="Vector.png" />
        				</div>
        				<div className={styles.vectorParent1}>
          					<img className={styles.groupChild4} alt="" src="Rectangle 9.png" />
          					<div className={styles.reader1Book1}>1 reader, 1 book</div>
          					<div className={styles.books}>Readers</div>
          					<img className={styles.fagroupIcon} alt="" src="fa:group.png" />
        				</div>
      			</div>
      			<div className={styles.booksInBookish1}>Books in Bookish, Dec 9 - 12, 1 reader, 1 book</div>
      			<div className={styles.showing140Results1}>Showing 140 results for</div>
      			<div className={styles.rectangleParent4}>
        				<div className={styles.groupChild5} />
        				<div className={styles.rectangleParent5}>
          					<div className={styles.groupChild6} />
          					<div className={styles.moreOptions}>More Options</div>
        				</div>
        				<img className={styles.heroiconsphoto1} alt="" src="heroicons:photo.png" />
        				<div className={styles.theMysteriousBookshop1}>The Mysterious Bookshop</div>
        				<div className={styles.kmFromCity1}>0.4 km from city centre</div>
        				<div className={styles.freePreviewAvailable1}>Free Preview Available</div>
        				<div className={styles.thrillerNovel}>Thriller Novel</div>
        				<div className={styles.xPaperback1xContainer}>
          					<p className={styles.xPaperback}>{`1x Paperback `}</p>
          					<p className={styles.xPaperback}>1x eBook</p>
        				</div>
        				<div className={styles.paperbackEdition}>Paperback Edition</div>
        				<div className={styles.rectangleParent6}>
          					<div className={styles.groupChild7} />
          					<div className={styles.popular}>#Popular</div>
          					<div className={styles.highlyRecommended}>Highly Recommended</div>
          					<div className={styles.ratings}>1,920 ratings</div>
        				</div>
        				<div className={styles.rectangleParent7}>
          					<div className={styles.groupChild8} />
          					<div className={styles.div}>9.6</div>
        				</div>
      			</div>
      			<div className={styles.rectangleParent8}>
        				<div className={styles.groupChild9} />
        				<div className={styles.bestDeal}>#Best Deal</div>
      			</div>
      			<div className={styles.div1}>$15.99</div>
      			<div className={styles.days1Reader1}>3 days, 1 reader</div>
      			<img className={styles.searchResultsChild} alt="" src="Line 3.png" />
      			<div className={styles.ellipseParent}>
        				<div className={styles.ellipseDiv} />
        				<div className={styles.div2}>1</div>
        				<div className={styles.div3}>2</div>
        				<div className={styles.div4}>3</div>
        				<div className={styles.div5}>4</div>
        				<div className={styles.div6}>20</div>
        				<div className={styles.div7}>...</div>
      			</div>
    		</div>);
};

export default SearchResults;
