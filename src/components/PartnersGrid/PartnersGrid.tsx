import styles from './PartnersGrid.module.css';

interface PartnersGridProps {
  images: { src: string; alt: string }[];
}

const PartnersGrid = ({ images }: PartnersGridProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Сотрудничаем с лучшими</h2>
        <p className={styles.subtitle}>Вместе с партнерами творим добро!</p>
      </div>
      <div className={styles.grid}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className={styles.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersGrid; 