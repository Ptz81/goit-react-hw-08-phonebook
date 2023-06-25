// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
import { selectLoading } from 'redux/tasks/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

export default function Contacts() {

  const isLoading = useSelector(selectLoading);

  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
