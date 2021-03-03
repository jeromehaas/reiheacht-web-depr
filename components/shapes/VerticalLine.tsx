import styled from 'styled-components';

const VerticalLine = styled.i`
  width: 0;
  height: 0;
  background-color: transparent;
  position: relative;
  display: block;

  &::after {
    content: 'hello';
    position: absolut;
    width: 3px;
    height: 40px;
    background-color: ${p => p.theme.orange};
  }
`;

export default VerticalLine