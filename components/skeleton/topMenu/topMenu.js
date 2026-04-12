import Link from 'next/link';

import content from '../../../content.json';
import MenuItems from './menuItems';
import theme from '../../../services/theme';

export default ({translations}) => (
  <>
    <div className="header">
    </div>
    <div className="header-content">
      <Link href="#" className="website-title-link">
        <h3 className="website-title">
          {content.owner.name}
        </h3>
      </Link>
      <div className="desktop-menu-items">
        <MenuItems translations={translations}/>
      </div>
    </div>
    <div className="mobile-menu">
      <MenuItems translations={translations}/>
    </div>
    <style jsx>
      {`
        h3 {
          color: ${theme.colors.primaryText};
          letter-spacing: 0.03em;
          line-height: 4rem;
          margin: 0;
        }

        .header {
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(225, 225, 225, 0.35);
          box-shadow: 0 8px 18px rgba(77, 83, 89, 0.15);
          grid-area: top-menu-start / page-start / mobile-menu-start / page-end;
          background: linear-gradient(100deg, ${theme.colors.primaryHover}, ${theme.colors.primary});
        }

        .header-content {
          align-items: center;
          display: flex;
          grid-area: top-menu-start / content-start / mobile-menu-start / content-end;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .desktop-menu-items {
          display: none;
        }

        .mobile-menu {
          border-top: 1px solid rgba(225, 225, 225, 0.25);
          grid-area: mobile-menu-start / page-start / top-menu-end / page-end;
          background-color: ${theme.colors.primaryHover};
        }

        .website-title {
          padding: 0 1rem;
        }

        .website-title-link {
          color: ${theme.colors.primaryText} !important;
          display: inline-block;
        }

        .website-title-link:visited {
          color: ${theme.colors.primaryText} !important;
        }

        @media only screen and (min-width: ${theme.mobileBreakPoint}) {

          .desktop-menu-items {
            display: block;
          }

          h3:hover {
            opacity: 0.92;
          }

          .mobile-menu {
            display: none;
          }
        }
      `}
    </style>
  </>
);