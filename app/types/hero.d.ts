
import { IImage } from "./image"

export interface HeroProps {
  isMobile: boolean
  heroImage: {
    desktop_image: IImage
    mobile_image: IImage
  }
}