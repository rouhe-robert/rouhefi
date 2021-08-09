import content from '../../content.json';

export default ({translations}) => (
  <>
    {
      content.content[translations.code].description.split(
        '\n'
      ).map(
        part => part.trim()
      ).filter(
        part => part !== ''
      ).map(part => (
        <p key={part}>{part}</p>
      ))
    }
    <p>{translations.sections.description['This website\'s source code can be found in']} <a href={content.github}>{translations.sections.description.here}</a>.</p>
    <style jsx>
    {`
      p {
        margin: 0 1rem 1rem 1rem;
      }
    `}
    </style>
  </>
);
