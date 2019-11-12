import React from 'react';
import T from 'prop-types';
import style from '../styles/style.module.css';

const Controls = ({ prevArticle, prevDisabled, nextArticle, nextDisabled }) => {
  return (
    <div className={style.controls}>
      <button
        type="button"
        className={style.button}
        onClick={prevArticle}
        disabled={prevDisabled}
      >
        Назад
      </button>
      <button
        type="button"
        className={style.button}
        onClick={nextArticle}
        disabled={nextDisabled}
      >
        Вперед
      </button>
    </div>
  );
};

Controls.propTypes = {
  prevArticle: T.func.isRequired,
  prevDisabled: T.bool.isRequired,
  nextArticle: T.func.isRequired,
  nextDisabled: T.bool.isRequired,
};

export default Controls;
