import Footer from './footer';
import GlobalStyle from './globalStyle';
import Head from './head';
import theme from '../../services/theme';
import TopMenu from './topMenu/topMenu';

const Bootstrap = () => (
  <>
    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossOrigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossOrigin="anonymous"
    />
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossOrigin="anonymous"
    />
  </>
);

export default ({children, translations}) => (
  <>
    <Head translations={translations}/>
    <GlobalStyle/>
    <div className="page-container">
      <TopMenu translations={translations}/>
      <div className="content">
        {children}
      </div>
      <Footer translations={translations}/>
    </div>
    <Bootstrap/>
    <style jsx>
      {`
        .content {
          grid-area: top-menu-end / content-start / footer-start / content-end;
          margin: 1.25rem 0 2rem;
          padding: 1.5rem 0;
        }

        .page-container {
          display: grid;
          grid-template-columns: [page-start] 0px [content-start] auto [content-end] 0px [page-end];
          grid-template-rows: [top-menu-start] auto [mobile-menu-start] auto [top-menu-end] 1fr [footer-start] min-content [footer-end];
          min-height: 100vh;
        }

        @media only screen and (min-width: ${theme.mobileBreakPoint}) {
          .page-container {
            grid-template-columns: [page-start] 1fr [content-start] ${theme.content.maxWidth} [content-end] 1fr [page-end];
          }

          .content {
            background: rgba(253, 253, 253, 0.9);
            border: 1px solid ${theme.colors.lightGrey};
            border-radius: 18px;
            box-shadow: 0 14px 30px rgba(77, 83, 89, 0.08);
            padding: 2rem 0.5rem;
          }
        }
      `}
    </style>
  </>
);
