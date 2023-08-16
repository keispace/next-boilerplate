import Link from 'next/link';
import styles from './Header.module.scss';
import { Icon_My, Icon_Search } from '../Icons';
import { usePathname } from 'next/navigation';


const HeaderMenu = () => {
  const pathname = usePathname();
  return <div className={styles.container}>
    <div className={styles.wrap}>
      <div className={styles.logo}>Blockchain Multi-Cloud</div>
      <div className={styles.menus}>
        <Link href="/">
          <div className={`${styles.menu} ${pathname === '/' ? styles.active : ''}`}>Home</div>
        </Link>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}><Icon_Search /></div>
        <div className={styles.icon}><Icon_My /></div>

      </div>

    </div>
  </div>

}
export default HeaderMenu