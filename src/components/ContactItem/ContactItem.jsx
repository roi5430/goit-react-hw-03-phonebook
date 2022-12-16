import css from './ContactItem.module.css';

export const ContactItem = ({ item: { name, number, id }, onDelete }) => {
  return (
    <div className={css.item__content}>
      {name}: {number}
      <button
        className={css.contacts__btn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};
