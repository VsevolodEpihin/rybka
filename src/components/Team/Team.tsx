import TeamMember from '../TeamMember/TeamMember';

import styles from './Team.module.css';

const Team = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Команда</h2>
      <div className={styles.teamContainer}>
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </div>
  )
}

export default Team
