import React, { Fragment } from 'react';
import H2 from '../text/H2'
import Highlight from '../text/Highlight'
import HorizontalLine from '../shapes/HorizontalLine';
import Paragraph from '../text/Paragraph'

interface Props {
  content: any;
}

const TextBlock: React.FunctionComponent<Props> = ({ content }) => {


  return (
    <Fragment>
      {content.title}
      <HorizontalLine />
      {content.paragraph}
    </Fragment>
  );

}

export default TextBlock;