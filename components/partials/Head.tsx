import React from 'react';
import NextHead from 'next/head';

const Head = ({ title = 'Motion Design & Werbefilm Agentur aus Luzern', description = 'Wir sind reiheacht. Wir erwecken deine Botschaft mit kreativen Motion Design- und Filmlösungen zum Leben.' }) => (
  <NextHead>
    <title>{ title } </title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2775b7" />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <script src="https://cdn.vhx.tv/assets/player.js" />
  </NextHead>
);

export default Head;
