import styles from './Tittle.module.css';

interface TittleProps {
    title: string;
    prevTitle?: string;
}

const Tittle = ({title, prevTitle}: TittleProps) => {
  return (
    <div className={styles.tittleContainer}>
        <h2>
            {title}
        </h2>
        {prevTitle && <h3>{prevTitle}</h3>}
    </div>
  )
}

export default Tittle;
