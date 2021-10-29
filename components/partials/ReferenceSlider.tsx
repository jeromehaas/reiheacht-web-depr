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
		padding-bottom: 0;
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
			background-image: url('/icon/reference-slider/quote-start.svg'); 
		}	
		
		&:after { 
			right: -80px;
			bottom: -20px;
			background-image: url('/icon/reference-slider/quote-end.svg'); 
		}	

	}
	
	.references-carousel__author {
			margin-top: 30px;
			display: grid !important;
			grid-template-areas: 
				"name logo"
				"role logo";
			grid-template-rows: 40px auto;
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
	
	.slick-prev { left: -60px; }
	.slick-next { right: -60px; }

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

	.slick-prev:before { background-image: url('/icon/reference-slider/arrow-left.svg'); }	
	.slick-next:before { background-image: url('/icon/reference-slider/arrow-right.svg'); }	

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
    dots: false,
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
      quote: 'reiheacht hat es geschafft meine Ideen 1:1 umzusetzen. Ich bin sehr glücklich über das Resultat! Unser Maskottchen «Sporty» gibt es nun als Icon und als sportliche Illustrationen. Tolle Arbeit – vielen Dank!',
      name: 'Michèle Bucher',
      role: 'Leiterin Werbung',
      image: '/logos/testimonials/sportcard.svg',
    },
    {
      quote: 'Lesen ist out. Wer sich informieren will, schaut heute ein Video. Das Angebot von reiheacht eignet sich perfekt, um Informationen zielgruppengerecht zu visualisieren.',
      name: 'Sandra Helfenstein',
      role: 'Co-Leiterin Kommunikation',
      image: '/logos/testimonials/sbv.svg',
    },
    {
      quote: 'Dank der persönlichen Beratung haben wir für unser Crowdfunding Projekt schnell die passende Lösung gefunden. Emotionale Bilder die bewegen haben zum Erfolg für die Realisierung beigetragen. Herzlichen Dank.',
      name: 'Lukas Bregenzer',
      role: 'Inhaber',
      image: '/logos/testimonials/swiss-local-travel.svg',
    },
    {
      quote: 'reiheacht hat uns vom Storyboard über das Drehen bis hin zur fertigen Produktion sehr kompetent unterstützt. Dank seiner freundlichen, humorvollen und professionellen Art und Weise war die Zusammenarbeit mit Marc je derzeit sehr angenehm.',
      name: 'Natasa Kovacevic',
      role: 'Leiterin Marketing',
      image: '/logos/testimonials/it-point.svg',
    },
    {
      quote: 'Herzlichen Dank an das reiheacht Team, welches uns von A - Z professionell unterstützt und beraten hat. Wir freuen uns auf eine weitere Zusammenarbeit.',
      name: 'Thomas Rüttimann',
      role: 'Materialchef',
      image: '/logos/testimonials/gcz.svg',
    },
    {
      quote: 'Unkomplizierte und sehr speditive Zusammenarbeit. Kann ich nur weiterempfehlen. Falls ich wieder ein Video brauche, komme ich definitiv wieder auf euch zu.',
      name: 'Jessica Glaus',
      role: 'Inhaberin',
      image: '/logos/testimonials/hairbreak.svg',
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

      </Slider>
    </StyledReferenceSlider>
  );
};

export default ReferenceSlider;
