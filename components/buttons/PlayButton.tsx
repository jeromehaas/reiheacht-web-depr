import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { toggleShowreel } from '@/redux/actions/index';
import Linker from '@/components/buttons/Link';

const StyledPlayButton = styled.button`
      transition: ${(p) => p.theme.standardTransition};
      opacity: 1;
      background-color: ${(p) => p.theme.blue};
      position: relative;
      width: auto;
      min-width: 200px;
      padding: 0;
      border-radius: 5px;
      border: none;
      outline: none;
      margin: 0 30px 30px 0;
      float: left;
      cursor: pointer;

      a {
        width: 100%;
        height: 100%;
        display: inline-block;
        padding: 10px 15px;
      }

}


@media (max-width: 750px) {
   a { font-size: 15px !important }
   min-width: 150px !important;
   margin: 0 15px 15px 0;
  }

  @media (max-width: 555px) {
   a { font-size: 12px !important }
   min-width: 120px !important;
   margin: 0 15px 15px 0;
  }
 
  @media (max-width: 465px) {
    margin: 0 0 10px 0;
    display: block;
    width: 100%;
  }

`;

interface Props { }

const PlayButton: React.FunctionComponent<Props> = () => {

  const dispatch = useDispatch();

  return (

    <StyledPlayButton>
      <Linker type="anchor" target="" onClickFunction={() => dispatch(toggleShowreel())}>
        Showreel
      </Linker>

    </StyledPlayButton>
  );
};

export default PlayButton;
