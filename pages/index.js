import Content from '../components/content/content';
import Skeleton from '../components/skeleton/skeleton';
import translations from '../translations/translations';

export default () => (
  <Skeleton translations={translations.en}>
    <Content translations={translations.en}/>
  </Skeleton>
);
