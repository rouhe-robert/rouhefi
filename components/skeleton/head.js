import Head from 'next/head';
import env from '../../.env';

export default () => (
  <Head>
    <title>{env.website.name}</title>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"></link>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossOrigin="anonymous"
    ></link>
    <link rel="stylesheet" href="third-party/fontawesome/css/all.min.css"></link>
    <script src="third-party/fontawesome/js/all.min.js"></script>
  </Head>
);
