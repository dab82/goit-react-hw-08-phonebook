import { GlobalStyle } from 'mainstyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, MainTitle, SubTitle } from './AppStyle';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />

      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
