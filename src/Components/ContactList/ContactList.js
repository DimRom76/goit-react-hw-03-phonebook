import PropTypes from 'prop-types';
import ContactElement from './ContactElement/ContactElement';

export default function ContactList({
  contacts,
  filter = '',
  onDeleteContact,
}) {
  return (
    <ul>
      {contacts
        .filter(el => {
          const foundPos = el.name.toLowerCase().indexOf(filter.toLowerCase());
          return foundPos === -1 ? false : true;
        })
        .map(el => {
          return (
            <ContactElement
              key={el.id}
              id={el.id}
              name={el.name}
              number={el.number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
