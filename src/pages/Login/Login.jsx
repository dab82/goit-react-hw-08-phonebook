import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Formik } from 'formik';
import { Wrapper, Titel, SignInForm, Input, LabelForm } from '../PagesStyle';
import { Button } from 'components/Buttons/Button';

const initialValues = {
  name: '',
  number: '',
  filter: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = () => {
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Titel>Страница логина</Titel>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SignInForm autoComplete="off">
          <LabelForm>Почта </LabelForm>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />

          <LabelForm>Пароль</LabelForm>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />

          <Button type="submit" children="Войти" />
        </SignInForm>
      </Formik>
    </Wrapper>
  );
};

export default Login;
