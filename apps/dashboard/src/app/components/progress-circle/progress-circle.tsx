import styles from './progress-circle.module.css';

/* eslint-disable-next-line */
export interface ProgressCircleProps {}

export function ProgressCircle(props: ProgressCircleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProgressCircle!</h1>
    </div>
  );
}

export default ProgressCircle;
