import { AboutUs } from '../';
import LoveContainer from '../../components/LoveContainer/LoveContainer';
import PartnersGrid from '../../components/PartnersGrid/PartnersGrid';
import Team from '../../components/Team/Team';

import styles from './AboutUsPage.module.css';

const partners = [
  { src: '/youngdon.png', alt: 'youngdon' },
  { src: '/army.png', alt: 'army' },
  { src: '/volunteer.png', alt: 'volunteer' },
  { src: '/do-it.png', alt: 'do-it' },
  { src: '/city.png', alt: 'city' },
  { src: '/tag-vol.png', alt: 'tag-vol' },
  { src: '/hospital.png', alt: 'hospital' },
  { src: '/assk.png', alt: 'assk' },
  { src: '/topika.png', alt: 'Topika' },
  { src: '/stars.png', alt: 'stars' },
  { src: '/auto.png', alt: 'auto' },
  { src: '/brain.png', alt: 'brain' },
];

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <AboutUs />
      <Team />
      <PartnersGrid images={partners} />
      <LoveContainer
        title='Документы организации'
        backgroundColor='blue'
        leftContent={<a>Презентация.pdf</a>}
        rightContent={<a>Устав.pdf</a>}
      />
    </div>
  )
}

export default AboutUsPage;
