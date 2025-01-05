import React from 'react';
import styles from './style.module.css';
import GlobalSearchBox from '@/ui/globalSearchBox';
import SearchItems from '@/app/search/ui/searchItems';

export default function Search() {
  return (
    <>
      <div className={styles.search}>
        <GlobalSearchBox />
      </div>
      <div className={styles['main-container']}>
        <div className={styles['filter-items']}>
          <SearchItems />

          <div>2</div>
          <div>3</div>
        </div>
        <div className={styles.results}>results</div>
      </div>
    </>
  );
}
