import React from 'react';
import T from 'prop-types';
import style from '../styles/style.module.css';

const Publication = ({ article }) => {
  return (
    <div className={style.publication}>
      <h2>{article.title}</h2>
      <p>{article.text}</p>
    </div>
  );
};

Publication.propTypes = {
  article: T.shape({
    title: T.string.isRequired,
    text: T.string.isRequired,
  }).isRequired,
};

export default Publication;
