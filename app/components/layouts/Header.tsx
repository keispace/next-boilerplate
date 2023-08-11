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
        <Link href="/dashboard">
          <div className={`${styles.menu} ${pathname === '/dashboard' ? styles.active : ''}`}>Dashboard</div>
        </Link>
        <Link href="/storage">
          <div className={`${styles.menu} ${pathname === '/storage' ? styles.active : ''}`}>Storage</div>
        </Link>
        <div className={`${styles.menu} ${pathname === '/billing' ? styles.active : ''}`}>Billing</div>
        <div className={`${styles.menu} ${pathname === '/settings' ? styles.active : ''}`}>Settings</div>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}><Icon_Search /></div>
        <div className={styles.icon}><Icon_My /></div>

      </div>

    </div>
  </div>

}
export default HeaderMenu