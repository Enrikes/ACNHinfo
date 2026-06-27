import Return from '../../components/detail/returnButton';
import styles from './creatureDetail.module.css';

export default function CreatureDetail({}) {
  return (
    <div>
      <Return />
      <div className={styles.profile}></div>
    </div>
  );
}
