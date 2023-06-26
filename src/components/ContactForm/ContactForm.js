import { useDispatch, useSelector } from 'react-redux';
import { createContacts } from 'redux/contacts/api';
import { getContacts } from 'redux/contacts/selectors';
import css from './ContactForm.module.css'

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
     dispatch(createContacts({ name, number }));
    e.currentTarget.reset();
  }
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor='name' className='form_label'>
          Name
        </label>
        <input
          type="text"
            name="name"
            id = 'name'
            className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor='number' className='form_label'>
          Number
        </label>
        <input
          type="tel"
            name="number"
            id='number'
            className={css.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
      <input type="submit" className={css.button} value='Add contact'/>
      </form>
    )
  }
