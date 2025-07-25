import { SectionProps } from "@/app/types/section";
import Card from "@components/Card/Card";
import styles from '@components/Section/section.module.scss'

const Section = (props: SectionProps) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.title}>{props.title}</h2>
      </div>
      <div className={styles.sectionCards}>
        {props.imageTile.map((tile, index) => (
          <Card
            key={`${tile.title}-${index}`}
            {...tile}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
