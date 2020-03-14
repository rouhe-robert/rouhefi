import Description from './description';
import Skills from './skills/skills';

export default ({translations}) => (
  <>
    <div>
      <Description translations={translations} />
      <Skills translations={translations} />
    </div>
    <style jsx>
      {`
        div {
          margin: 1.5rem 0;
        }
      `}
    </style>
  </>
);
