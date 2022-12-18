import css from './Filter.module.css';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label className={css.filter__label}>
        <span className={css.filter__text}>Find contacts by name</span>
        <input
          className={css.filter__input}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Enter the person's name"
          value={value}
          onInput={onChange}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
