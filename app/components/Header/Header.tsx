import Link from 'next/link'
import styles from '@components/Header/header.module.scss'

interface IMenuItems {
  item: {
    target: string
    title: string
    url: string
  }
}

interface HeaderProps {
  data: {
    company_name: string
    menu_items: IMenuItems[]
  }
}

const Header = (props: HeaderProps) => {
  const { company_name, menu_items } = props?.data || {}

  return (
    <header role="banner" className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.companyName}>
          <Link href='/'>{company_name}</Link>
        </div>
        <nav className={styles.navMenu}>
          <ul className={styles.menuItems}>
            {menu_items.map(({ item }) => (
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