import { useParams } from 'react-router';
import Return from '../../components/detail/returnButton';
import styles from './creatureDetail.module.css';

export default function CreatureDetail({}) {
  const { catergory, slug } = useParams();
  return (
    <div>
      <Return basePath={catergory} />
      <div className={styles.profile}></div>
    </div>
  );
}
