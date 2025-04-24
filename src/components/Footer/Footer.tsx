import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Мы в социальных сетях</p>
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaContainer}>
          <img width={60} src="/tg.png" alt="telegram" />
          <img width={60} src="/vk.png" alt="vk" />
        </div>
        <p className={styles.footerText}>#вСамоеСердце</p>
      </div>
    </footer>
  )
}

export default Footer
