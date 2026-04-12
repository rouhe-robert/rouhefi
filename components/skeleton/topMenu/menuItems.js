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
          <p>{translations.header.toggleToLanguage.code}</p>
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
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin: 0;
          padding: 0.5rem 0.75rem 0.75rem;
        }

        .menu-item :global(a) {
          color: ${theme.colors.primaryText} !important;
          display: block;
        }

        .menu-item :global(a:visited) {
          color: ${theme.colors.primaryText} !important;
        }

        p {
          color: ${theme.colors.primaryText};
          display: block;
          font-size: 0.98rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          margin: 0;
          padding: 0.55rem 0.95rem;
          transition: background-color 150ms ease, transform 150ms ease;
        }

        p:hover {
          background-color: rgba(253, 253, 253, 0.2);
          transform: translateY(-1px);
        }

        @media only screen and (min-width: ${theme.mobileBreakPoint}) {

          .menu-item {
            display: inline-block;
          }

          .menu-items {
            align-items: center;
            flex-direction: row;
            gap: 0.2rem;
            margin: 0 1rem;
            padding: 0;
          }

          p {
            line-height: 4rem;
            margin: 0;
            padding: 0.6rem 0.85rem;
          }

          p:hover {
            background-color: rgba(253, 253, 253, 0.22);
          }
        }
      `}
    </style>
  </>
);
