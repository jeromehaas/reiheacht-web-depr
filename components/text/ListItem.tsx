import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledListItem = styled.li`
  
`;
const ListItem: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <StyledListItem>
      {children}
    </StyledListItem>
  );

}

export default ListItem;