import GlobalStyle from './globalStyle';
import Head from './head';

export default ({children}) => (
  <>
    <Head/>
    <div>
      {children}
    </div>
    <GlobalStyle/>
  </>
);
