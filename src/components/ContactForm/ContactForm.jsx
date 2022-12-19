import PropTypes from 'prop-types';
import { Formik } from 'formik';
// import { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = ({ contacts, onFormSubmit }) => {
  const initialValues = {
    name: '',
    namber: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    onFormSubmit(values);
  };

  // class ContactForm extends Component {
  //   static propTypes = {
  //     onSubmit: PropTypes.func.isRequired,
  //   };
  //   state = {
  //     name: '',
  //     number: '',
  //   };

  //   handleChange = e => {
  //     const { name, value } = e.currentTarget;

  //     this.setState({
  //       [name]: value,
  //     });
  //   };

  //   // handleSubmit = e => {
  //   //   e.preventDefault();

  //   //   const { name, number } = this.state;

  //   //   if (this.props.onSubmit(name, number)) {
  //   //     this.setState({ name: '', number: '' });
  //   //   }
  //   // };

  //   render() {
  //     const { name, number } = this.state;

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="of">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            placeholder="Franko Ivan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            placeholder="111-11-111"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
