import { AddContactForm } from '../components/AddcontactForm/AddContactForm';
import styled from 'styled-components';
const Title = styled.h2`
  display: block;
  text-align: center;
  margin-top: 80px;
  font-weight: 900;
  font-size: 25px;
  color: #282c34;
`;
export const AddContactPage = () => {
  return (
    <>
      <Title>Add Contact Page</Title>
      <AddContactForm />
    </>
  );
};
