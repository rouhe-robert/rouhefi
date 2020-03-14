import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';

import theme from '../../../services/theme';

export default ({translations}) => (
  <>
    <div className="menu-items">
      <div className="menu-item">
        <AnchorLink href={translations.sections.cv.url}>
          <p>{translations.sections.cv.name}</p>
        </AnchorLink>
      </div>
      <div className="menu-item">
        <AnchorLink href={translations.sections.contact.url}>
          <p>{translations.sections.contact.name}</p>
        </AnchorLink>
      </div>
      <div className="menu-item">
        <Link href={translations.header.toggleToLanguage.url}>
          <a>
            <p>{translations.header.toggleToLanguage.code}</p>
          </a>
        </Link>
      </div>
    </div>
    <style jsx>
      {`
        a:hover {
          text-decoration: none;
        }

        .anchor-link:hover {
          text-decoration: none !important;
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
