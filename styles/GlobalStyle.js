import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    outline: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    .noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    }

}

img {
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

*::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
}

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

*::selection {
    background-color: rgba(3, 116, 182, 0.99);
    color: #ffffff;
    opacity: 0.99;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* @font-face {
    font-family: 'Helvetica 55 Roman';
    src: local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Md.eot?#iefix') format('embedded-opentype'),
        local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff2') format('woff2'),
        local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff') format('woff'),
        local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Md.ttf') format('truetype'),
        local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Md.svg#HelveticaNeueLTStd-Md') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica 65 Medium';
    src: local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Roman.eot?#iefix') format('embedded-opentype'),
        local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff2') format('woff2'),
        local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff') format('woff'),
        local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Roman.ttf') format('truetype'),
        local('fonts/helvetica-neue'), url('../fonts/helvetica-neue/HelveticaNeueLTStd-Roman.svg#HelveticaNeueLTStd-Roman') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
} */

   
    @font-face{
        font-family:"Helvetica Neue 55 Roman";
        src:
          local('fonts/5664093'), url("/fonts/5664093/08b57253-2e0d-4c12-9c57-107f6c67bc49.woff2") format("woff2"),
          local('fonts/5664093'), url("/fonts/5664093/08edde9d-c27b-4731-a27f-d6cd9b01cd06.woff") format("woff"),
          local('fonts/5664093'), url("/fonts/5664093/08edde9d-c27b-4731-a27f-d6cd9b01cd06.ttf") format("ttf");
          font-display: block;
    }
    @font-face{
        font-family:"Helvetica Neue 65 Medium";
        src:
          local('fonts/5664103'), url("/fonts/5664103/240c57a0-fdce-440d-9ce3-85e0cb56f470.woff2") format("woff2"),
          local('fonts/5664103'), url("/fonts/5664103/7802e576-2ffa-4f22-a409-534355fbea79.woff") format("woff"),
          local('fonts/5664103'), url("/fonts/5664103/7802e576-2ffa-4f22-a409-534355fbea79.ttf") format("ttf");
          font-display: block;
    }
    @font-face{
        font-family:"Helvetica Neue 75 Bold";
        src:
          local('fonts/5664150'), url("/fonts/5664150/800da3b0-675f-465f-892d-d76cecbdd5b1.woff2") format("woff2"),
          local('fonts/5664150'), url("/fonts/5664150/7b415a05-784a-4a4c-8c94-67e9288312f5.woff") format("woff"),
          local('fonts/5664150'), url("/fonts/5664150/7b415a05-784a-4a4c-8c94-67e9288312f5.ttf") format("ttf");
          font-display: block;
    }
    @font-face{
        font-family:"Helvetica Neue 76 Bold Italic";
        src:
          local('fonts/5664111'), url("/fonts/5664111/13ab58b4-b5ba-4c95-afde-ab2608fbbbd9.woff2") format("woff2"),
          local('fonts/5664111'), url("/fonts/5664111/5018b5b5-c821-4653-bc74-d0b11d735f1a.woff") format("woff"),
          local('fonts/5664111'), url("/fonts/5664111/5018b5b5-c821-4653-bc74-d0b11d735f1a.ttf") format("ttf");
          font-display: block;
    }
    @font-face{
        font-family:"Helvetica Neue 85 Heavy";
        src:
          local('fonts/5664115'), url("/fonts/5664115/7e42a406-9133-48c0-a705-4264ac520b43.woff2") format("woff2"),
          local('fonts/5664115'), url("/fonts/5664115/837750e9-3227-455d-a04e-dc76764aefcf.woff") format("woff"),
          local('fonts/5664115'), url("/fonts/5664115/837750e9-3227-455d-a04e-dc76764aefcf.ttf") format("ttf");
          font-display: block;
    }
    @font-face{
        font-family:"Helvetica Neue 95 Black";
        src:
          local('fonts/5664121'), url("/fonts/5664121/fc4fb6ca-f981-4115-b882-c78e9f08be52.woff2") format("woff2"),
          local('fonts/5664121'), url("/fonts/5664121/6ed03453-f512-45ba-84bf-fe4ea45d5e6a.woff") format("woff"),
          local('fonts/5664121'), url("/fonts/5664121/6ed03453-f512-45ba-84bf-fe4ea45d5e6a.ttf") format("ttf");
          font-display: block;
    }

.service-link {
	color: #0374B6 !important;
	text-decoration: none;
}

.service-email-link {
	color: #C23E27 !important;
	text-decoration: none;
}


`;

export default GlobalStyle;
