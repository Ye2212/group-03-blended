import { getContacts } from "../../redux/contacts-selectors";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteContact, updateStatus } from "../../redux/contacts-slice";
import Avatar from "react-avatar";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
} from "./ContactsTable.styled";

export const ContactTable = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const tableHeaders = ["№", "avatar", "name", "age", "status", "options"];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((el, idx) => (
            <TableData key={idx}>{el}</TableData>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.contacts.map(({ id, avatar, name, age, status }, idx) => {
          return (
            <TableRow key={id}>
              <TableData>№{idx + 1}</TableData>
              <TableData>
                {<Avatar size={40} round={true} name={avatar} />}
              </TableData>
              <TableData>{name}</TableData>
              <TableData>{age}</TableData>
              <TableData
                style={{ cursor: "pointer" }}
                className={status === "yes" && "isOnline"}
                onClick={() => {
                  dispatch(updateStatus(id));
                }}
              >
                {status === "yes" ? "online" : "offline"}
              </TableData>
              <TableData
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                <MdDelete
                  size="20px"
                  color=" #282c34"
                  style={{ cursor: "pointer" }}
                />
              </TableData>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
