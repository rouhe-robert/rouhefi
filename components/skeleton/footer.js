import content from '../../content.json';
import theme from '../../services/theme';

export default ({translations}) => (
  <>
    <div id={translations.sections.contact.id} className="footer">
      <div className="content">
        <div className="row">
          <div className="col-md-4 footer-column">
            <p>
              <strong>{translations.contact['Company name']}: {content.contact.companyName}</strong><br />
              {translations.contact['Business ID']}: {content.contact.businessId}
            </p>
          </div>
          <div className="col-md-4 footer-column">
            <p>
              <strong>{translations.contact.Contact}</strong><br />
              {content.contact.email}<br />
              {content.contact.phone}
            </p>
          </div>
          <div className="col-md-4 footer-column">
            <p>
              <strong>{translations.contact.Address}</strong><br />
              {content.contact.address.address}<br />
              {content.contact.address.postalCode}<br />
              {content.contact.address.city}<br />
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
          background: linear-gradient(180deg, ${theme.colors.darkGrey}, #3f4449);
          border-top: 1px solid rgba(225, 225, 225, 0.2);
          grid-area: footer-start / page-start / footer-end / page-end;
          padding: 2rem 1rem;
        }

        .footer-column {
          border-top: 1px solid rgba(225, 225, 225, 0.15);
          padding-bottom: 1rem;
          padding-top: 1rem;
        }

        p {
          color: ${theme.colors.grey};
          font-size: 0.98rem;
          line-height: 1.7;
          margin: 0;
        }

        @media only screen and (min-width: ${theme.mobileBreakPoint}) {
          .footer-column {
            border-top: none;
            padding-bottom: 3rem;
            padding-top: 3rem;
          }
        }
      `}
    </style>
  </>
);
