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
            background: #ffffff;
            border: 1px solid #E1E1E1;
            border-radius: 14px;
            box-shadow: 0 8px 18px rgba(77, 83, 89, 0.06);
            margin: 1rem 1rem;
            padding: 0.9rem 0;
          }

          h3, h5, p {
            margin: 0 1rem;
          }

          h3 {
            color: #4D5359;
            margin-bottom: 0.8rem;
          }

          p + p {
            margin-top: 0.4rem;
          }
        `}
      </style>
    </>
  );
}
