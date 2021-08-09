import content from '../../../../content.json';

export default ({translations}) => {

  const getEducationItemTitle = educationItem => [
    educationItem.title[translations.code],
    educationItem.school[translations.code],
    educationItem.city === null ? null : educationItem.city[translations.code],
    educationItem.country === null ? null : educationItem.country[translations.code],
    educationItem.start + (educationItem.end === null ? '' : '-' + educationItem.end)
  ].filter(
    item => item !== null
  ).join(
    ', '
  );

  return (
    <>
      <h3>{translations.sections.cv.education.title}</h3>
      {
        content.cv.education.filter(
          educationItem => educationItem.title[translations.code] !== null
        ).map(educationItem => (
          <div className="education-item" key={'education-item-' + educationItem.title[translations.code]}>
            <p><strong>{getEducationItemTitle(educationItem)}</strong></p>
            {educationItem.description === null ? null : (<p>{educationItem.description[translations.code]}</p>)}
            {educationItem.thesis === null ? null : (<p>{educationItem.thesis[translations.code]}</p>)}
          </div>
        ))
      }
      <style jsx>
        {`
          .education-item {
            margin: 1rem 0;
          }

          h3, h5, p {
            margin: 0 1rem;
          }
        `}
      </style>
    </>
  );
}
