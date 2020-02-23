import env from '../../.env';
import theme from '../../services/theme';

export default () => (
  <>
    <div className="footer">
      <p>{env.website.urlCapital}</p>
    </div>
    <style jsx>
      {`
        p {
          color: ${theme.colors.grey};
        }

        .footer {
          grid-area: footer-start / page-start / footer-end / page-end;
          background-color: ${theme.colors.darkGrey};
        }
      `}
    </style>
  </>
);