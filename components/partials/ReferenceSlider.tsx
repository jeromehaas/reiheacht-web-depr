import React from 'react';
import styled from 'styled-components';
import { H3, P } from '@/components/text/Text';
import Slider from 'react-slick';

const StyledReferenceSlider = styled.div`

	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
	padding: 0 120px;

  .references-carousel__item {
		padding: 120px;
		cursor: pointer;
	}
	
	.slick-slider {
		/* max-width: calc(1440px - ( 2 * 120px )); */
	}
	
	.references-carousel__quote {
		position: relative;
		
		&:before, 
		&:after {
			position: absolute;
			content: "";
			color: #0374B6;
			width: 60px;
			height: 60px;
			display: flex;
			background-size: contain;
			background-repeat: no-repeat;
			background-size: contain;
		}
		
		&:before { 
			left: -80px;
			top: -20px;
			background-image: url('/icons/reference-slider/quote-start.svg'); 
		}	
		
		&:after { 
			right: -80px;
			bottom: -20px;
			background-image: url('/icons/reference-slider/quote-end.svg'); 
		}	

	}
	
	.references-carousel__author {
			margin-top: 30px;
			display: grid !important;
			grid-template-areas: 
				"name logo"
				"role logo";
			grid-template-rows: auto auto;
			grid-template-columns: auto 1fr;
		}
	
		.references-carousel__name {
			grid-area: name;
		}
	
		.references-carousel__role {
			grid-area: role;
		}
	
		.references-carousel__logo {
			grid-area: logo;
			height: 100%;
			border-left: 1px solid white;
			padding-left: 60px;
			margin-left: 60px;
			max-height: 80px;
		}

	.slick-next,
	.slick-prev {
		top: 50%;
		width: 40px;
		height: 40px;
		-webkit-transform: translate(0, -50%);
		-ms-transform: translate(0, -50%);
		transform: translate(0, -50%);
		cursor: pointer;
	}
	
	.slick-prev { left: -40px; }
	.slick-next { right: -40px; }

	.slick-prev:before,
	.slick-next:before {
		content: ' ';
    width: 40px;
    height: 40px;
    display: inline-block;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		opacity: 1;
	}

	.slick-prev:before { background-image: url('/icons/reference-slider/arrow-left.svg'); }	
	.slick-next:before { background-image: url('/icons/reference-slider/arrow-right.svg'); }	

	@media (max-width: 1100px) {

		padding: 0 0;

		.slick-prev { display: none; visibility: hidden; height: 0; width: 0px; }
		.slick-next { display: none; visibility: hidden; height: 0; width: 0px; }


		}

		@media (max-width: 850px) {
		.references-carousel__author {
			grid-template-areas: 
				"logo"
				"name"
				"role";
				grid-template-columns: auto;
		}

		.references-carousel__logo {
			grid-area: logo;
			height: 100%;
			border-left: unset;
			padding-left: 0;
			margin-left: 0;
			padding-bottom: 15px;

			&:after {
				content: "xxx";
				width: 30px;
				height: 30px;
				display: block;

			}
		}


	}

	@media (max-width: 450px) {
		.references-carousel__quote {
		
		&:before, 
		&:after {
			width: 30px;
			height: 30px;
		}
		
		&:before { 
			left: -40px;
			top: -20px;
		}	
		
		&:after { 
			right: -40px;
			bottom: -20px;
		}	

	}	

	.references-carousel__item {
		padding: 80px;
		cursor: pointer;
	}
	}

`;

const ReferenceSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  const data = [
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Sandra Helfenstein',
      role: 'Stv. Leiterin Kommunikation',
      image: '/icons/reference-slider/personas/sbv/logo-sbv.svg',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Heinz Markus',
      role: 'CTO',
      image: '/icons/reference-slider/personas/sbv/logo-sbv.svg',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Franziska Wetterstein',
      role: 'Buchaltung & Administration',
      image: '/icons/reference-slider/personas/sbv/logo-sbv.svg',
    },
  ];

  return (
    <StyledReferenceSlider>
      <Slider {...settings}>

        { data.map((item) => (
          <div className="references-carousel__item" key={item.name}>
            <P className="references-carousel__quote" fontWeight="light" size="big">{ item.quote }</P>
            <div className="references-carousel__author">
              <P className="references-carousel__name" size="large">{ item.name }</P>
              <P className="references-carousel__role" size="small">{ item.role }</P>
              <img className="references-carousel__logo" src={item.image} alt="Logo" />
            </div>
          </div>
        ))}
        {/* <div className="references-carousel__item">
          <P className="references-carousel__quote" fontWeight="light" size="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </P>
          <div className="references-carousel__author">
            <P className="references-carousel__name" size="large">Sandra Helfenstein</P>
            <P className="references-carousel__role" size="small">Stv. Leiterin Kommunikation</P>
            <img className="references-carousel__logo" src="/icons/reference-slider/personas/sbv/logo-sbv.svg" />
          </div>
        </div> */}

      </Slider>
    </StyledReferenceSlider>
  );
};

export default ReferenceSlider;
