import Description from './description';

export default ({translations}) => (
  <>
    <div>
      <Description translations={translations}/>
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
