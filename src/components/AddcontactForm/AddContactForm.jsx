import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getRandomStatus } from '../../services/utils';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts-slice';
import { FaUserTie } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { MdPersonAddAlt } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import { Form, Label, Input, Button } from './AddContactForm.styled';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    const status = await getRandomStatus();
    const newContact = {
      id: nanoid(3),
      avatar: name,
      name,
      age,
      status,
    };
    console.log('newContact: ', newContact);
    if (newContact.name === '' || newContact.age === '') {
      return toast.error('Please, fill the form fields');
    }

    dispatch(addContact(newContact));
    toast.success(`Contact ${name} added`);
    setName('');
    setAge('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      default:
        return;
    }
  };

  return (
    <Form>
      <Label>
        <FaUserTie size="20px" color=" #282c34" />
        Name
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
      <Label>
        <AiFillMessage size="20px" color=" #282c34" />
        Age
        <Input type="text" name="age" value={age} onChange={handleChange} />
      </Label>
      <Button type="submit" onClick={handleSubmit}>
        <MdPersonAddAlt size="25px" color=" #282c34" />
      </Button>
    </Form>
  );
};
