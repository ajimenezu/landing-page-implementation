import styles from '@components/Footer/footer.module.scss'
import { FooterProps } from '@/app/types/footer'
import Link from 'next/link'

const Footer = (props: FooterProps) => {
  const { footerTitle, contactLinks } = props

  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.titleSection}>
          <h2>{footerTitle}</h2>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.contactsSection}>
            {contactLinks.map(({ item }) => (
              <Link key={item.title} href={item.url}>{item.title}</Link>
            ))}
          </div>
          <div className={styles.termsAndConditionSection}>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer