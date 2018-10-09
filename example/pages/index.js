import Switch from "react-switch";
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Switch
        onChange={() => {}}
        checked={true}
      />
    </div>
  );
}
