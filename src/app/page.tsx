import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <Link href="/pages/sql" className={styles.link}>跳转到Sql</Link>
    </div>
  );
}
