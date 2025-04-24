import Button from '../Button/Button';
import styles from './InfoBox.module.css';

interface InfoBoxProps {
  title: string;
  text: string;
  textButton?: string;
  pathImg: string;
  altText: string;
}

const InfoBox = ({
  title,
  textButton,
  text,
  pathImg,
  altText,
}: InfoBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>
          {text}
        </p>
        {textButton && <Button>{textButton}</Button>}
      </div>
      <div className={styles.imgContainer}>
        <img src={pathImg} alt={altText} />
      </div>
    </div>
  )
}

export default InfoBox
