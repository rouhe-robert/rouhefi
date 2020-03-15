import Skills from './skills/skills';
import WorkExperience from './workExperience/workExperience';
import Education from './education/education';
import theme from '../../../services/theme';

export default ({translations}) => (
  <>
    <h1 id={translations.sections.cv.id}>{translations.sections.cv.title}</h1>
    <div className="cv-section">
      <WorkExperience translations={translations} />
    </div>
    <div className="cv-section">
      <Education translations={translations} />
    </div>
    <div className="cv-section">
      <Skills translations={translations} />
    </div>
    <style jsx>
      {`
        .cv-section {
          margin-top: 2.5rem;
        }

        h1 {
          border-bottom: 2px solid ${theme.colors.lightGrey};
          margin: 1.5rem 1rem 1.5rem 1rem;
        }
      `}
    </style>
  </>
);
