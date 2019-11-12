import React, { Component } from 'react';
import T from 'prop-types';
import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';

import style from '../styles/style.module.css';

class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        text: T.string.isRequired,
        title: T.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    currentArticle: 0,
  };

  nextArticle = () => {
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle + 1,
    }));
  };

  prevArticle = () => {
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle - 1,
    }));
  };

  render() {
    const { currentArticle } = this.state;
    const { items } = this.props;

    return (
      <div className={style.reader}>
        <Controls
          nextArticle={this.nextArticle}
          prevArticle={this.prevArticle}
          nextDisabled={currentArticle >= items.length - 1}
          prevDisabled={currentArticle <= 0}
        />
        <Counter
          currentArticle={currentArticle + 1}
          allArticles={items.length}
        />
        <Publication article={items[currentArticle]} />
      </div>
    );
  }
}

export default Reader;
