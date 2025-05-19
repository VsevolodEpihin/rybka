import Button from '../Button/Button';

import styles from './VolunteerBox.module.css'

interface VolunteerBoxProps {
    title: string;
    text: string;
}

const VolunteerBox = ({ title, text }: VolunteerBoxProps) => {
  return (
    <div className={styles.container}>
        {title && <h3>{title}</h3>}
        {text && <p>{text}</p>}
        <Button>Подробнее</Button>
    </div>
  )
}

export default VolunteerBox;
