import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: center;
  background-color: #7b7b7b;
  border-spacing: 0;
`;
export const TableHeader = styled.thead`
  position: sticky;
  height: 30px;
  top: 0;
  background-color: #262626;
  color: #fff;
`;
export const TableBody = styled.tbody`
  background-color: #fff;
`;
export const TableRow = styled.tr``;
export const TableData = styled.td`
  width: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;

  &.isOnline {
    color: #0094bc;
    font-weight: 700;
  }
`;
