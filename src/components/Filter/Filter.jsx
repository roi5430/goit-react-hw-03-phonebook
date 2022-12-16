import css from './Filter.module.css';

export const Filter = ({ onChange, value }) => {
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
};
