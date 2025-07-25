
import { IImage } from "./image"

export interface HeroProps {
  isMobile: boolean
  heroTitle: string
  heroImage: {
    desktop_image: IImage
    mobile_image: IImage
  }
}