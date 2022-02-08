import styled, { css } from 'styled-components';

const getTitleColor = ({ theme, color }) => {

  switch (color) {
    case 'white':
      return css`
        color: ${theme.white};
      `;
    case 'blue':
      return css`
        color: ${theme.blue};
      `;
    case 'darkGrey':
      return css`
        color: ${theme.darkGrey};
      `;
    case 'orange':
      return css`
        color: ${theme.orange};
      `;
    default:
      return css`
        color: ${theme.white};
      `;
  }

};

const sharedTitleStyle = css`
  ${getTitleColor}
  line-height: 1.25;
`;

const H1 = styled.h1`
  ${sharedTitleStyle};
  font-size: 75px; 
  margin-right: 0px;
  font-family: 'Helvetica Neue 85 Heavy';

 @media (max-width: 900px) {
  ${sharedTitleStyle};
  font-size: 60px;
 }

 @media (max-width: 760px) {
  ${sharedTitleStyle};
  font-size: 50px;
 }

 @media (max-width: 670px) {
  ${sharedTitleStyle};
  font-size: 40px;
 }

 @media (max-width: 560px) {
  ${sharedTitleStyle};
  font-size: 35px;
 }

 @media (max-width: 480px) {
  ${sharedTitleStyle};
  font-size: 30px;
 }

 @media (max-width: 425px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

 @media (max-width: 365px) {
  ${sharedTitleStyle};
  font-size: 22px;
 }
`;

const H15 = styled.h1`
  ${sharedTitleStyle};
  font-size: 50px; 
  max-width: ${(p) => (p.fullWidth ? '100%' : '660px')};
  font-family: 'Helvetica Neue 85 Heavy';

  @media (max-width: 760px) {
  ${sharedTitleStyle};
  font-size: 50px;
 }

 @media (max-width: 670px) {
  ${sharedTitleStyle};
  font-size: 40px;
 }

 @media (max-width: 560px) {
  ${sharedTitleStyle};
  font-size: 30px;
 }

 @media (max-width: 480px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

 @media (max-width: 425px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

 @media (max-width: 365px) {
  ${sharedTitleStyle};
  font-size: 22px;
 }
`;

const H2 = styled.h2`
  ${sharedTitleStyle};
  font-size: 50px; 
  max-width: ${(p) => (p.fullWidth ? '100%' : '660px')};
  font-family: 'Helvetica Neue 85 Heavy';

  @media (max-width: 760px) {
  ${sharedTitleStyle};
  font-size: 50px;
 }

 @media (max-width: 670px) {
  ${sharedTitleStyle};
  font-size: 40px;
 }

 @media (max-width: 560px) {
  ${sharedTitleStyle};
  font-size: 30px;
 }

 @media (max-width: 480px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

 @media (max-width: 425px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

 @media (max-width: 365px) {
  ${sharedTitleStyle};
  font-size: 22px;
 }
`;

const H25 = styled.h2`
  ${sharedTitleStyle};
  font-size: 35px; 
  max-width: ${(p) => (p.fullWidth ? '100%' : '660px')};
  font-family: 'Helvetica Neue 85 Heavy';

  @media (max-width: 760px) {
  ${sharedTitleStyle};
  font-size: 30px;
 }

 @media (max-width: 670px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

 @media (max-width: 560px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

 @media (max-width: 480px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

 @media (max-width: 425px) {
  ${sharedTitleStyle};
  font-size: 25px;
 }

 @media (max-width: 365px) {
  ${sharedTitleStyle};
  font-size: 22px;
 }
`;

const H3 = styled.h3`
  ${sharedTitleStyle};
  font-family: 'Helvetica Neue 65 Medium', serif;
  font-size: 25px;

  @media (max-width: 800px) {
  font-size: 25px;
  }

 @media (max-width: 760px) {
  font-size: 25px;
 }

 @media (max-width: 670px) {
  font-size: 25px;
 }

 @media (max-width: 560px) {
  font-size: 25px;
 }

`;

const H4 = styled.h4`
  ${sharedTitleStyle};
  font-family: 'Helvetica Neue 65 Medium', serif;
  font-size: 20px;   

  @media (max-width: 800px) {
  font-size: 20px;
 }

 @media (max-width: 760px) {
  font-size: 20px;
 }

 @media (max-width: 670px) {
  font-size: 20px;
 }

 @media (max-width: 560px) {
  font-size: 20px;
 }
 `;

const getParagraphColor = ({ theme, color }) => {

  switch (color) {
    case 'white':
      return css`
        color: ${theme.white};
      `;
    case 'blue':
      return css`
        color: ${theme.blue};
      `;
    case 'darkGrey':
      return css`
        color: ${theme.darkGrey};
      `;
    case 'orange':
      return css`
        color: ${theme.orange};
      `;
    default:
      return css`
        color: ${theme.white};
      `;
  }

};

const getParagraphSize = ({ size }) => {

  switch (size) {
    case 'small':
      return css`
      font-size: 16px;
      `;
    case 'normal':
      return css`
      font-size: 20px;
      @media (max-width: 560px) {
        font-size: 16px;
      }
      `;
    case 'large':
      return css`
      font-size: 25px;
      @media (max-width: 560px) {
        font-size: 16px;
      }
      `;
    case 'big':
      return css`
      font-size: 30px;
      @media (max-width: 760px) {
        font-size: 25px;
      }
      @media (max-width: 650px) {
        font-size: 20px;
      }
      @media (max-width: 560px) {
        font-size: 16px;
      }
      `;
    default:
      return css`
       font-size: 25px;
       @media (max-width: 760px) {
        font-size: 20px;
      }
      @media (max-width: 560px) {
        font-size: 16px;
      }
      `;
  }

};

const checkParagraphAnimated = ({ animated, delay }) => {

  if (animated && delay) {

    return css`
      transition: ${(p) => p.theme.standardTransition};
      opacity: 0;
      animation: ${`0.5s ease-in-out ${delay} 1 forwards slideIn}`};
      position: relative;
      left: -30px;
      @keyframes slideIn {
        0% {opacity: 0; left: -30px; }
        100% {opacity: 1; left: 0px; }
    }
   `;

  }

};

const P = styled.p`
  font-size: 30px;
  max-width: ${(p) => (p.fullWidth ? '100%' : '910px')};
  opacity: 1;
  line-height: 1.6;
  color: red;
  font-family: 'Helvetica Neue 55 Roman', serif;
  ${getParagraphColor};
  ${getParagraphSize};
  ${checkParagraphAnimated};
    ${({ bold }) => bold
    && css`
      font-family: 'Helvetica Neue 65 Medium', serif;
    `}
	 ${({ superbold }) => superbold
	 && css`
		 font-family: 'Helvetica Neue 75 Bold', serif !important;
	 `}
	 `;

const ListItem = styled(P)`
  color: ${(p) => p.color} !important;
  position: relative;
  margin: 0 0 10px 15px;
  line-height: 1.2;

  &::before {
    content: ' ';
    display: inline-block;
    margin-right: 5px;
    position: absolute;
    top: 30%;
    left: -15px;
    width: 7px;
    height: 7px;
    line-height: 1.2;
    border-radius: 50%;
    background-color: ${(p) => p.color}
  }

`;

const HL = styled.span`
    display: inline-block;
    ${({ color, theme }) => color === 'blue'
    && css`
      color: ${theme.blue}
    `}
    ${({ color, theme }) => color === 'white'
    && css`
      color: ${theme.white}
    `}
    ${({ bold }) => bold
    && css`
      font-family: 'Helvetica Neue 65 Medium', serif;
    `}
`;

export {
  H1,
  H15,
  H2,
  H25,
  H3,
  H4,
  P,
  ListItem,
  HL,
};
