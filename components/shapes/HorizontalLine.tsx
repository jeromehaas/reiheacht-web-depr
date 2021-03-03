import styled from 'styled-components';

const HorizontalLine = styled.i`
  width: 0;
  height: auto;
  background-color: transparent;
  position: relative;
  display: block;
  padding: 20px 0;

  &::after {
    content: ' ';
    position: absolute;
    width: 80px;
    height: 5px;
    background-color: ${p => p.theme.orange};
    
  }
`;

export default HorizontalLine