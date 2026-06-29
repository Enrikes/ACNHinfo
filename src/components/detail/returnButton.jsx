import { useNavigate } from 'react-router';
import styles from './returnButton.module.css';

export default function Return({ basePath }) {
  const navigate = useNavigate();
  function handleReturn() {
    navigate(`/${basePath}`);
  }
  return (
    <div
      className={styles.container}
      onClick={() => {
        handleReturn();
      }}
    >
      <div className={styles.buttonContainer}>
        <div className={styles.returnButton}>Back to Encylopedia</div>
      </div>
    </div>
  );
}
