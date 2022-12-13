import PropTypes from 'prop-types';

import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, Name, Number } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <Name>
        {name}:<Number>{number}</Number>
      </Name>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
