import css from './NameContactsList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const NameContactsList = ({ items, onDelete }) => {
  return (
    <div className={css.contacts}>
      <ul className={css.contacts__list}>
        {items.map(item => {
          const { id } = item;
          return (
            <li key={id} id={id}>
              <ContactItem onDelete={onDelete} item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
