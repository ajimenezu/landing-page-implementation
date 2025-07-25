import styles from '@/app/page.module.scss'
import { getLandingPageData } from "@/utils/gets"
import { isMobile } from '@/utils/breakpoints'
import { headers } from "next/headers"
import Hero from '@components/Hero/Hero'
import Section from '@components/Section/Section'
import { notFound } from 'next/navigation'

// Title for hero section - needs implementation on CMS
const HERO_TITLE = 'Optimize Company Spending'

export default async function Home() {
  let isMobileBreakpoint = false
  const data = await getLandingPageData()

  if (!data) {
    notFound()
  }

  // Prevent the page from breaking in case headers function fails
  try {
    const headersList = await headers()
    const userAgent = headersList.get('user-agent')
    isMobileBreakpoint = isMobile(userAgent)
  } catch (error) {
    console.error('Error getting User-Agent on the server:', error)
    isMobileBreakpoint = false
  }

  const { hero_image, row_1, row_2 } = data.body 

  return (
    <div className={styles.container}>
      <Hero heroTitle={HERO_TITLE} heroImage={hero_image} isMobile={isMobileBreakpoint}/>
      <Section title={row_1.title} imageTile={row_1.image_tile} />
      <Section title={row_2.title} imageTile={row_2.image_tile} />
    </div>
  );
}
