import Image from "next/image"
import { CardProps } from "@/app/types/card"
import styles from "@components/Card/card.module.scss"

const Card = (props: CardProps) => {
  const { image, title, description } = props;

  return (
    <div className={styles.card}>
      <div>
        <Image
          src={image.url}
          alt={String(image.alt)}
          width={image.width}
          height={image.height}
        />
      </div>
      <div className={description ? '' : styles.textWithoutDescription}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && <p className={styles.cardDescription}>{description}</p>}
      </div>
    </div>
  );
};

export default Card
