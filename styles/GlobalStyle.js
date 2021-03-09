import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    outline: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    font-family: 'Helvetica 65 Medium', serif
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

@font-face {
    font-family: 'Helvetica 55 Roman';
    src: url('fonts/helvetica-neue/HelveticaNeueLTStd-Md.eot');
    src: url('fonts/helvetica-neue/HelveticaNeueLTStd-Md.eot?#iefix') format('embedded-opentype'),
        url('fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff2') format('woff2'),
        url('fonts/helvetica-neue/HelveticaNeueLTStd-Md.woff') format('woff'),
        url('fonts/helvetica-neue/HelveticaNeueLTStd-Md.ttf') format('truetype'),
        url('fonts/helvetica-neue/HelveticaNeueLTStd-Md.svg#HelveticaNeueLTStd-Md') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Helvetica 65 Medium';
    src: url('fonts/helvetica-neue/HelveticaNeueLTStd-Roman.eot');
    src: url('fonts/helvetica-neue/HelveticaNeueLTStd-Roman.eot?#iefix') format('embedded-opentype'),
        url('fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff2') format('woff2'),
        url('fonts/helvetica-neue/HelveticaNeueLTStd-Roman.woff') format('woff'),
        url('fonts/helvetica-neue/HelveticaNeueLTStd-Roman.ttf') format('truetype'),
        url('fonts/helvetica-neue/HelveticaNeueLTStd-Roman.svg#HelveticaNeueLTStd-Roman') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

`;

export default GlobalStyle;
