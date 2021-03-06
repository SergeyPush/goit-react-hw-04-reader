import React, { Component } from 'react';
import T from 'prop-types';
import queryString from 'query-string';
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
    location: T.object.isRequired,
    history: T.object.isRequired,
  };

  state = {
    currentArticle: 1,
  };

  componentDidMount() {
    const { currentArticle } = this.state;
    const { location, history } = this.props;
    const {
      location: { search },
    } = this.props;

    if (!search) {
      history.push({
        ...location,
        search: `item=${currentArticle}`,
      });
      return;
    }
    const { item } = queryString.parse(search);
    this.setState({
      currentArticle: Number(item),
    });
    this.updateAddress();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      location: { search },
    } = this.props;
    const { item: prevArticle } = queryString.parse(prevProps.location.search);
    const { item: nextArticle } = queryString.parse(search);
    if (prevArticle === nextArticle) {
      return;
    }
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      currentArticle: Number(nextArticle),
    });
  }

  updateAddress = (step = 0) => {
    const { item } = queryString.parse(this.props.location.search);
    this.props.history.push({
      ...this.props.location,
      search: `item=${Number(item) + step}`,
    });
  };

  nextArticle = () => {
    this.updateAddress(1);
  };

  prevArticle = () => {
    this.updateAddress(-1);
  };

  render() {
    const { currentArticle } = this.state;
    const { items } = this.props;

    return (
      <div className={style.reader}>
        <Controls
          nextArticle={this.nextArticle}
          prevArticle={this.prevArticle}
          nextDisabled={currentArticle >= items.length}
          prevDisabled={currentArticle <= 1}
        />
        <Counter currentArticle={currentArticle} allArticles={items.length} />
        <Publication article={items[currentArticle - 1]} />
      </div>
    );
  }
}

export default Reader;
