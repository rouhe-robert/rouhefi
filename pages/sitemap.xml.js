import content from '../content.json';

const websiteBaseUrlWithProtocol = content.website.protocol + '://' + content.website.url;

export default () => (`
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>${websiteBaseUrlWithProtocol}</loc>
    </url>
    <url>
      <loc>${websiteBaseUrlWithProtocol}/fi</loc>
    </url>
  </urlset>
`);
