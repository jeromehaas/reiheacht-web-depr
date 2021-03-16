import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledListItem = styled.li`
  color: red;
  position: relative;
  margin: 0 0 10px 15px;
  line-height: 20px;
  font-size: 20px;
  font-family: 'Helvetica Neue 55 Roman', serif;
  

  &::before {
    content: ' ';
    display: inline-block;
    margin-right: 5px;
    position: absolute;
    top: 30%;
    left: -15px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${(p) => p.color};
  }
`;

const ListItem: React.FunctionComponent<Props> = ({ children, color }) => (
  <StyledListItem color={color}>
    {children}
  </StyledListItem>
);

export default ListItem;
