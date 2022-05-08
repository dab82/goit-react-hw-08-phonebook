import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperation';
import { Formik } from 'formik';
import { Wrapper, Titel, SignInForm, Input, LabelForm } from '../PagesStyle';
import { Button } from 'components/Buttons/Button';

const initialValues = {
  name: '',
  number: '',
  filter: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Titel>Страница регистрации</Titel>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SignInForm autoComplete="off">
          <LabelForm>Имя </LabelForm>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />

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

          <Button type="submit" text=" Зарегистрироваться" />
        </SignInForm>
      </Formik>
    </Wrapper>
  );
};

export default Register;
