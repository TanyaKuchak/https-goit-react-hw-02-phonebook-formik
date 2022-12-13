import React from 'react';

import { Component } from 'react';
import { Container, PageTitle, PageContact } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';

// import ContactForm from 'components/ContactForm/ContactForm';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = e => {
    console.log(e.currentTarget.value);
    this.setState({});
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <Container>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm onSubmit={this.addNewContact} />
        <PageContact>Contacts</PageContact>
      </Container>
    );
  }
}
export default App;
