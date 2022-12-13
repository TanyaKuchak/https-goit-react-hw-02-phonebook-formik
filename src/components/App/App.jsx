import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';
// import ContactForm from 'components/ContactForm/ContactForm';
class App extends Component {
  state = {
    inputValue: 'qwe',
  };
  handleInputChange = e => {
    console.log(e.currentTarget.value);
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <Container>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </Container>
    );
  }
}
export default App;
