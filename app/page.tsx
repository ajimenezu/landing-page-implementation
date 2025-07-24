import styles from '@/app/page.module.scss'
import { getLandingPageData } from "@/utils/gets"
import { isMobile } from '@/utils/breakpoints'
import { headers } from "next/headers"
import Hero from '@components/Hero/Hero'
import Section from '@components/Section/Section'

export default async function Home() {
  const data = await getLandingPageData()
  const { hero_image, row_1, row_2 } = data.body 
  const headersList = await headers()
  const userAgent = headersList.get('user-agent')
  const isMobileBreakpoint = isMobile(userAgent)

  return (
    <div className={styles.container}>
      <Hero heroImage={hero_image} isMobile={isMobileBreakpoint}/>
      <Section title={row_1.title} imageTile={row_1.image_tile} />
      <Section title={row_2.title} imageTile={row_2.image_tile} />
    </div>
  );
}
