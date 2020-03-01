import Content from '../components/content/content';
import Skeleton from '../components/skeleton/skeleton';
import translations from '../translations/translations';

export default () => (
  <Skeleton translations={translations.fi}>
    <Content translations={translations.fi}/>
  </Skeleton>
);
