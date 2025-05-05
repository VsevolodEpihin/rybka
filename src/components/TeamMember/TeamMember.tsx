import styles from './TeamMember.module.css';

const TeamMember = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
      <img
        width={300}
        height={300}
        src="/user1.jpg"
        alt="user1"
        className={styles.avatar}
      />
      </div>
      <div className={styles.nameContainer}>
        <h3 className={styles.title}>Имя Фамилия</h3>
        <p>Должность</p>
        <p>+7 (999) 999-99-99</p>
      </div>
    </div>
  )
}

export default TeamMember
