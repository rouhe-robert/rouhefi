import Skills from './skills/skills';
import WorkExperience from './workExperience/workExperience';
import Education from './education/education';
import theme from '../../../services/theme';

export default ({translations}) => (
  <>
    <h1 id={translations.sections.cv.id}>{translations.sections.cv.title}</h1>
    <WorkExperience translations={translations} />
    <Education translations={translations} />
    <Skills translations={translations} />
    <style jsx>
      {`
        h1 {
          border-bottom: 1px solid ${theme.colors.grey};
          margin: 1.5rem 1rem 1.5rem 1rem;
        }
      `}
    </style>
  </>
);
