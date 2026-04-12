import content from '../../../../content.json';

export default ({translations}) => {

  const getExperienceTitle = experience => [
    experience.title === null ? null : experience.title[translations.code],
    experience.employer,
    experience.city === null ? null : experience.city[translations.code],
    experience.country === null ? null : experience.country[translations.code],
    experience.start + '-' + (experience.end === null ? '' : experience.end)
  ].filter(
    item => item !== null
  ).join(
    ', '
  );

  return (
    <>
      <h3>{translations.sections.cv.workExperience.title}</h3>
      {
        content.cv.workExperience.map(experience => (
          <div className="experience" key={'experience-item-' + experience.title['en']}>
            <p><strong>{getExperienceTitle(experience)}</strong></p>
            <p>{experience.description[translations.code]}</p>
          </div>
        ))
      }
      <style jsx>
        {`
          .experience {
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
            margin-top: 0.5rem;
          }
        `}
      </style>
    </>
  );
}
