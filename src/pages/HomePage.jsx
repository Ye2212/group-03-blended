import { ContactTable } from "../components/ContactTable/ContactTable";
// import { getContacts } from "../redux/contacts-selectors";
// import { useSelector } from "react-redux";
export const HomePage = () => {
  // const contacts = useSelector(getContacts());
  // console.log(contacts);

  return (
    <>
      <h1>Home Page</h1>
      <ContactTable />
    </>
  );
};
