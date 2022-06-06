import { ContactTable } from '../components/ContactTable/ContactTable';
import { getContacts } from '../redux/contacts-selectors';
import { useSelector } from 'react-redux';
import { Message } from 'components/Message/Message';
import styled from 'styled-components';

const Title = styled.h2`
  display: block;
  text-align: center;
  margin-top: 80px;
  font-weight: 900;
  font-size: 25px;
  color: #282c34;
`;

export const HomePage = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  return (
    <>
      <Title>Home Page</Title>
      {contacts.contacts.length > 0 && <ContactTable />}
      {contacts.contacts.length <= 0 && <Message text="There is no contacts" />}
    </>
  );
};
