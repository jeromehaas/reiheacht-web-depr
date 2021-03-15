import React from 'react';
import styled from 'styled-components';
import { P } from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Linker from '@/components/buttons/Link';

const StyledProjectSwitcher = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .next, .previous {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    align-items: center;
    width: 250px;
  }

  img {
    max-width: 60px;
    padding: 15px;
  }

  @media (max-width: 500px) {
    ${P} { font-size: 12px; }
    img { max-width: 50px !important; }
  }

`;

interface Props {
  previousProject: string;
  nextProject: string;
}

const ProjectSwitcher: React.FunctionComponent<Props> = ({ previousProject, nextProject }) => (
  <StyledProjectSwitcher>
    <div className="previous">
      <Linker type="link" target={previousProject}>
        <Image src="/icons/arrows/arrow-left.svg" alt="left" />
      </Linker>
      <P size="small">Vorheriges Projekt</P>
    </div>
    <div className="next">
      <Linker type="link" target={nextProject}>
        <Image src="/icons/arrows/arrow-right.svg" alt="right" />
      </Linker>
      <P size="small">Nächstes Projekt</P>
    </div>
  </StyledProjectSwitcher>
);

export default ProjectSwitcher;
