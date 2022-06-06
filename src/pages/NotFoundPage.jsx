import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundText = styled.p`
  display: block;
  text-align: center;
  margin-top: 80px;
  font-weight: 500;
  font-size: 25px;
  color: #282c34;
`;

export const NotFoundPage = () => {
  return (
    <NotFoundText>
      404 Page not found, please go back to the <Link to="/">HOME PAGE</Link>{" "}
    </NotFoundText>
  );
};
