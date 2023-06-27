import React, { useEffect } from "react";
import css from './ContactList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, fetchContacts } from "redux/contacts/api";
import Loader from "components/Loader/Loader";
import { filteredContacts, getError, getIsLoading } from "redux/contacts/selectors";


const ContactList = () => {
  const contactItems = useSelector(filteredContacts);
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  if(contactItems && contactItems.length === 0) return null;
  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <Loader/>}
       {contactItems && <ul className={css.list}>
        {contactItems.map((contact) => {
          return (
            <li key={contact.id}>
              <p className={css.contact}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={css.button}
                onClick={() => dispatch(deleteContacts(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>}
      </>

    )
}
export default ContactList;
