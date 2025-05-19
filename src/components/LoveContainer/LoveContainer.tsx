import { ReactNode } from 'react'

import styles from './LoveContainer.module.css';
import { NavLink } from 'react-router-dom';

interface LoveContainerProps {
    title?: string;
    prevTitle?: string;
    backgroundColor: string;
    leftContent: ReactNode;
    rightContent: ReactNode;
    footer?: boolean
}

const LoveContainer = ({
    title,
    prevTitle,
    backgroundColor,
    leftContent,
    rightContent,
    footer
    }: LoveContainerProps) => {
    return (
        <div className={styles.container}>
          <div className={`${styles.containerBox} ${backgroundColor === 'green' ? styles.green : styles.blue}`}>
            {title && <h4 className={styles.containerBoxTitle}>{title}</h4>}
            {prevTitle && <p className={styles.containerBoxPrevTitle}>{prevTitle}</p>}
            <div className={styles.containerBoxContent}>
              {leftContent}
              <img src="/love.png" alt="love" width={100} />
              {rightContent}
            </div>
            <div>
              <a className={styles.containerBoxLink} href="https://dobro-iktib.rf.gd/">ДОБРО-ИКТИБ.РФ</a>
            </div>
            { footer &&
            <div className={styles.footerContainer}>
              <p>Мы в социальных сетях</p>
              <div>
                <NavLink to="/">
                  <img
                    width={30}
                    src="/tg.png"
                    alt="telegram"
                  />
                </NavLink>
                <NavLink to="/">
                  <img
                    width={30}
                    src="/vk.png"
                    alt="vk"
                  />
                </NavLink>
              </div>
            </div>
            }
          </div>
        </div>
  )
}


export default LoveContainer;
