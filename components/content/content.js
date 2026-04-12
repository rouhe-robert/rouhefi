import Description from './description';
import CV from './cv/cv';

export default ({translations}) => (
  <>
    <div>
      <Description translations={translations} />
      <CV translations={translations} />
    </div>
    <style jsx>
      {`
        div {
          margin: 0.5rem 0;
        }
      `}
    </style>
  </>
);
