import Skills from './skills/skills';
import WorkExperience from './workExperience/workExperience';

export default ({translations}) => (
  <>
    <WorkExperience translations={translations} />
    <Skills translations={translations} />
  </>
);
