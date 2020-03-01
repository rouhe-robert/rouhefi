import env from '../../.env';
import theme from '../../services/theme';

export default ({translations}) => (
  <>
    <div id={translations.sections.contact.id} className="footer">
      <div className="content">
        <div className="row">
          <div className="col-md-4 footer-column">
            <p>
              <strong>{translations.contact['Company name']}: {env.contact.companyName}</strong><br />
              {translations.contact['Business ID']}: {env.contact.businessId}
            </p>
          </div>
          <div className="col-md-4 footer-column">
            <p>
              <strong>{translations.contact.Contact}</strong><br />
              {env.contact.email}<br />
              {env.contact.phone}
            </p>
          </div>
          <div className="col-md-4 footer-column">
            <p>
              <strong>{translations.contact.Address}</strong><br />
              {env.contact.address.address}<br />
              {env.contact.address.postalCode}<br />
              {env.contact.address.city}<br />
            </p>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .content {
          margin: 0 auto;
          max-width: ${theme.content.maxWidth};
        }

        .footer {
          background-color: ${theme.colors.darkGrey};
          grid-area: footer-start / page-start / footer-end / page-end;
          padding: 2rem 1rem;
        }

        .footer-column {
          padding-bottom: 1rem;
          padding-top: 1rem;
        }

        p {
          color: ${theme.colors.grey};
          margin: 0;
        }

        @media only screen and (min-width: ${theme.mobileBreakPoint}) {
          .footer-column {
            padding-bottom: 3rem;
            padding-top: 3rem;
          }
        }
      `}
    </style>
  </>
);
