"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HeroProps } from "@/app/types/hero";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import styles from "@components/Hero/hero.module.scss";

const Hero = (props: HeroProps) => {
  const { mobile_image, desktop_image } = props.heroImage;

  const [currentImage, setCurrentImage] = useState(
    props.isMobile ? mobile_image : desktop_image
  );

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    // Change the current image to use according with the breakpoint to handle mobile and desktop images
    setCurrentImage(isDesktop ? desktop_image : mobile_image);
  }, [isDesktop]);

  return (
    <div className={styles.heroContainer}>
      <Image
        src={currentImage.url}
        alt={currentImage.title}
        width={currentImage.width}
        height={currentImage.height}
        priority
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Hero;
