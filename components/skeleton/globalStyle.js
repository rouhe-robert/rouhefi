export default () => (
  <style jsx global>
  {`
    :root {
      color-scheme: light;
    }

    * {
      box-sizing: border-box;
    }

    a:hover {
      text-decoration: none;
    }

    body {
      background:
        radial-gradient(circle at 10% 0%, rgba(87, 154, 191, 0.12), transparent 35%),
        linear-gradient(180deg, #f8fafb 0%, #f2f5f7 100%);
      color: #4D5359;
      font-family: 'Nunito', sans-serif;
      line-height: 1.6;
      margin: 0;
    }

    button, input, select, textarea, p, a, li, span, h1, h2, h3, h4, h5 {
      font-family: 'Nunito', sans-serif;
    }

    h1 {
      font-size: 2rem;
      letter-spacing: 0.02em;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h1, h2, h3, h4, h5 {
      font-weight: 700;
    }

    p {
      font-size: 1.03rem;
    }

    a {
      color: #317499;
      transition: color 150ms ease;
    }

    a:hover {
      color: #579ABF;
    }

    .row {
      margin-left: 0;
      margin-right: 0;
    }
  `}
  </style>
);
