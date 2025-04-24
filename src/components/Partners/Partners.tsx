import styles from './Partners.module.css';

const partners = [
  { id: 1, logo: '/volunteer.png', alt: 'Volunteer organization' },
  { id: 2, logo: '/youngdon.png', alt: 'Youngdon company' },
  { id: 3, logo: '/brain.png', alt: 'Brain foundation' },
  { id: 4, logo: '/topika.png', alt: 'Topika brand' },
  { id: 5, logo: '/stars.png', alt: 'Stars charity' },
  { id: 6, logo: '/assk.png', alt: 'ASSK association' },
];

const Partners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.partnersText}>
        <h2 className={styles.title}>Сотрудничаем с лучшими</h2>
        <p className={styles.text}>Вместе с партнерами творим добро!</p>
      </div>
      <div className={styles.partners}>
        {partners.map(({id, logo, alt}) => (
          <img
            key={id}
            width={140}
            src={logo}
            alt={alt}
          />
        ))}
      </div>
    </div>
  )
}

export default Partners
