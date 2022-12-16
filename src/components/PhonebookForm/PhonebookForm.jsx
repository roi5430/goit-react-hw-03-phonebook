// import { NameContactsList } from 'components/NameContactsList/NameContactsList';
import css from './PhonebookForm.module.css';

export const PhonebookForm = ({ onSubmit }) => {
  const handelSubmit = evt => {
    evt.preventDefault();
    // console.log(
    //   evt.target.elements.name.value,
    //   evt.target.elements.number.value
    // );
    const { name, number } = evt.target.elements;

    onSubmit(name.value, number.value);
    name.value = '';
    number.value = '';
  };
  return (
    <div className={css.phonebook}>
      <form className={css.phonebook__form} onSubmit={handelSubmit}>
        <label className={css.phonebook__label}>
          Name
          <input
            className={css.phonebook__input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.phonebook__label}>
          Numder
          <input
            className={css.phonebook__input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.phonebook__btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
