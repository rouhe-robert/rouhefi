import env from '../../../.env';
import SkillBox from './skillBox';

const getSkillBoxes = translations => env.skills.items.map(item => (
  <SkillBox
    item={item}
    key={'item-box-mobile-' + item.name.en}
    translations={translations}
  />
));

const getSkillBoxesInColumns = translations => [
  (
    <>
      <div className="row">
        <div className="col-md-6">
          {
            env.skills.items.filter(
              item => item.column === 1
            ).map(item => (
              <SkillBox
                item={item}
                key={'item-box-' + item.name.en}
                translations={translations}
              />
            ))
          }
        </div>
        <div className="col-md-6">
          {
            env.skills.items.filter(
              item => item.column === 2
            ).map(item => (
              <SkillBox
                item={item}
                key={'item-box-' + item.name.en}
                translations={translations}
              />
            ))
          }
        </div>
      </div>
      <style jsx>
        {`
          .col-md-6:first-child {
            padding-left: 0;
          }

          .col-md-6:last-child {
            padding-right: 0;
          }
        `}
      </style>
    </>
  )
];

export default ({translations}) => (
  <>
    <h3>{translations.skills.title}</h3>
    <div className="container d-none d-md-block">
      {getSkillBoxesInColumns(translations)}
    </div>
    <div className="d-sm-block d-md-none">
      {getSkillBoxes(translations)}
    </div>
    <style jsx>
    {`
      div, h3 {
        margin: 0 1rem 1rem 1rem;
      }
    `}
    </style>
  </>
);
