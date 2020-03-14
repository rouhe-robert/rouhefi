import env from '../../.env';

export default ({translations}) => (
  <>
    {
      env.content[translations.code].description.split(
        '\n'
      ).map(
        part => part.trim()
      ).filter(
        part => part !== ''
      ).map(part => (
        <p key={part}>{part}</p>
      ))
    }
    <style jsx>
    {`
      p {
        margin: 0 1rem 1rem 1rem;
      }
    `}
    </style>
  </>
);
