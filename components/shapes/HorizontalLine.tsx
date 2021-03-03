import styled from 'styled-components';

const HorizontalLine = styled.i`
  width: 0;
  height: 100%;
  background-color: transparent;
  position: relative;
  display: block;
  padding: ${p => p.theme.spacingBig} 0 35px 0;

  &::after {
    content: ' ';
    position: absolute;
    width: 80px;
    height: 5px;
    background-color: ${p => p.theme.orange};
    
  }
`;

export default HorizontalLine