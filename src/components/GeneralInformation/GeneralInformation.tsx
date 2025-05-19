import styles from './GeneralInformation.module.css';

interface GeneralInformationProps {
  title: string;
  prevTitle?: string;
  text: string;
  pathImg: string;
  altText: string
}

const GeneralInformation = ({
  title,
  text,
  prevTitle,
  pathImg,
  altText,
  }: GeneralInformationProps) => {
  return (
    <div className={styles.infoContainer}>
      <div>
        <h2>{title}</h2>
        {prevTitle && <span>{prevTitle}</span>}
        <p>{text}</p>
      </div>
      <div>
        <img src={pathImg} alt={altText} />
      </div>
    </div>
  )
}

export default GeneralInformation;
