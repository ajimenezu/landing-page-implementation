import Link from 'next/link'
import styles from '@components/Header/header.module.scss'
import { HeaderProps } from '@/app/types/header'

const Header = (props: HeaderProps) => {
  const { companyName, menuItems } = props || {}

  return (
    <header role="banner" className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.companyName}>
          <Link href='/'>{companyName}</Link>
        </div>
        <nav className={styles.navMenu}>
          <ul className={styles.menuItems}>
            {menuItems.map(({ item }) => (
              <li key={item.url} className={styles.menuItem}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header