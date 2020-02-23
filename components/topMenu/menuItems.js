import Link from 'next/link';

import theme from '../../services/theme';

export default () => (
  <>
    <div className="menu-items">
      <div className="menu-item">
        <Link href="#services">
          <a>
            <p>Services</p>
          </a>
        </Link>
      </div>
      <div className="menu-item">
        <Link href="#cv">
          <a>
            <p>CV</p>
          </a>
        </Link>
      </div>
      <div className="menu-item">
        <Link href="#contact">
          <a>
            <p>Contact</p>
          </a>
        </Link>
      </div>
    </div>
    <style jsx>
      {`
        a {
          text-decoration: none;
        }

        .menu-item {

        }

        .menu-items {
          margin: 0.5rem 0;
        }

        p {
          color: ${theme.colors.primaryText};
          margin: 0;
          padding: 0.5rem 1rem;
        }

        p:hover {
          background-color: ${theme.colors.primary};
        }

        @media only screen and (min-width: ${theme.mobileBreakPoint}) {

          .menu-item {
            float: left;
          }

          .menu-items {
            margin: 0 1rem;
          }

          p {
            line-height: 4rem;
            margin: 0;
            padding: 0 0.75rem;
          }

          p:hover {
            background-color: ${theme.colors.primaryHover};
          }
        }
      `}
    </style>
  </>
);