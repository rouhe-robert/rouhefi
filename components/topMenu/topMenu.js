import Link from 'next/link';

import env from '../../.env';
import MenuItems from './menuItems';
import theme from '../../services/theme';

export default () => (
  <>
    <div className="header">
      <Link href="#">
        <a>
          <h3 className="website-title">
            {env.owner.name}
          </h3>
        </a>
      </Link>
      <div className="desktop-menu-items">
        <MenuItems/>
      </div>
    </div>
    <div className="mobile-menu">
      <MenuItems/>
    </div>
    <style jsx>
      {`
        h3 {
          color: ${theme.colors.primaryText};
          line-height: 4rem;
          margin: 0;
        }

        .header {
          grid-area: top-menu-start / page-start / mobile-menu-start / page-end;
          background-color: ${theme.colors.primary};
        }

        .desktop-menu-items {
          display: none;
        }

        .mobile-menu {
          grid-area: mobile-menu-start / page-start / top-menu-end / page-end;
          background-color: ${theme.colors.primaryHover};
        }

        .website-title {
          float: left;
          padding: 0 1rem;
        }

        @media only screen and (min-width: ${theme.mobileBreakPoint}) {

          .desktop-menu-items {
            display: block;
            float: right;
          }

          h3:hover {
            background-color: ${theme.colors.primaryHover};
          }

          .mobile-menu {
            display: none;
          }
        }
      `}
    </style>
  </>
);