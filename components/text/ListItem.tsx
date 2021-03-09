import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledListItem = styled.li`
  color: ${(p) => p.theme.white};
  position: relative;
  margin: 0 0 10px 15px;
  
  &::before {
    content: ' ';
    display: inline-block;
    margin-right: 5px;
    position: absolute;
    top: 5px;
    left: -15px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.white}
  }
`;

const ListItem: React.FunctionComponent<Props> = ({ children }) => (
  <StyledListItem>
    {children}
  </StyledListItem>
);

export default ListItem;
