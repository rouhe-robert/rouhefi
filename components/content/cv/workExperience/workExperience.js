import env from '../../../../.env';

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
        env.cv.workExperience.map(experience => (
          <div className="experience" key={'experience-item-' + experience.title['en']}>
            <p><strong>{getExperienceTitle(experience)}</strong></p>
            <p>{experience.description[translations.code]}</p>
          </div>
        ))
      }
      <style jsx>
        {`
          .experience {
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
