import { AboutUs } from '../';
import Team from '../../components/Team/Team';

import styles from './AboutUsPage.module.css';

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <AboutUs />
      <Team />
    </div>
  )
}

export default AboutUsPage;
