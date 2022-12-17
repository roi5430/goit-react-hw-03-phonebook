import css from './Filter.module.css';
// import { PropTypes } from 'react';
import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <label className={css.filter__label}>
        <span className={css.filter__text}>Find contacts by name</span>
        <input
          className={css.filter__input}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Enter the person's name"
          value={this.value}
          onInput={this.onChange}
        />
      </label>
    );
  }
}

// Filter.propTypes = {
//   onChange: PropTypes.func,
//   value: PropTypes.string,
// };
