import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectLoading } from 'redux/tasks/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './pages.module.css'


export default function Contacts() {

  const isLoading = useSelector(selectLoading);

  return (
    <>
      <div className={css.contactPage}>
        <Helmet>
        <title>Your Contacts</title>
      </Helmet>
        <ContactForm />
        <div>{isLoading && 'Request in progress...'}</div>
         <div className={css.contact_container}>
         <div className={css.subcontainer}>
      <ContactList />
        </div>
        <div className={css.subcontainer}>
      <Helmet>
        <title>Your Contact's filter</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      </div>

      </div>
</div>



    </>
  );
}
