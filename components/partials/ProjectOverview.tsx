import React from 'react';
import styled from 'styled-components';
import Paragraph from '@/components/text/Paragraph';
import VerticalLine from '@/components/shapes/VerticalLine';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import { H3 } from '@/components/text/Titles';

const StyledProjectOverview = styled.div`

  .desktop {
    width: 100%;
    height: 150px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    .logo {
      height: 100%;
    }
      
    img {
      height: 100%;
      padding: 10px 0;
      max-width: 100%;
    }

    .text-content {
      text-align: left;
    }
  }

  .mobile {
    display: none;
  }

  @media (max-width: 800px) {

    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px 0;


      img {
        height: 100%;
        padding: 10px 0;
      }

      .text-content {
        text-align: center;
      }

    }

 }

`;

interface Props {
  content: any;
}

const ProjectOverview: React.FunctionComponent<Props> = ({ content }) => (

  <StyledProjectOverview>

    <div className="desktop">
      <div className="logo">
        <img src={content.imageLink} alt={content.imageAlt} />
      </div>
      <VerticalLine />
      <div className="text-content">
        <H3>{content.title}</H3>
        <Paragraph>{content.text}</Paragraph>
      </div>
    </div>

    <div className="mobile">
      <div className="logo">
        <img src={content.imageLink} alt={content.imageAlt} />
      </div>
      <HorizontalLine className="active" animated={false} />
      <div className="text-content">
        <H3>{content.title}</H3>
        <Paragraph>{content.text}</Paragraph>
      </div>
    </div>

  </StyledProjectOverview>
);

export default ProjectOverview;
