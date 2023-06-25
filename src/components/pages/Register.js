import { Helmet } from 'react-helmet';
import { RegisterForm } from '../RegisterForm /RegisterForm '

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
