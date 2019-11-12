import React from 'react';
import T from 'prop-types';

import style from '../styles/style.module.css';

const Counter = ({ currentArticle, allArticles }) => {
  return (
    <div className={style.counter}>
      {currentArticle}/{allArticles}
    </div>
  );
};

Counter.propTypes = {
  currentArticle: T.number.isRequired,
  allArticles: T.number.isRequired,
};

export default Counter;
