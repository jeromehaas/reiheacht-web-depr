import React from 'react';
import styled from 'styled-components';
import Paragraph from '@/components/text/Paragraph';
import VerticalLine from '@/components/shapes/VerticalLine';
import { H3 } from '@/components/text/Titles';

const StyledProjectOverview = styled.div`
  width: 100%;
  height: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  .logo {
    height: 100%;
    
    img {
      height: 100%;
     padding: 10px 0;
    }
  }

  .text-content {
    height: 100%;
  }

`;


interface Props {
  content: any;
}


const ProjectOverview: React.FunctionComponent<Props> = ({ content }) => {


  return (
    <StyledProjectOverview>
      <div className="logo">
        <img src={content.imageLink} alt={content.imageAlt} />
      </div>
      <VerticalLine />
      <div className="text-content">
        <H3>{content.title}</H3>
        <Paragraph>{content.text}</Paragraph>
      </div>

    </StyledProjectOverview>
  );

}

export default ProjectOverview;