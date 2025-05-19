import { Link } from 'react-router-dom';

import styles from './CardVectorItem.module.css';

interface CardVectorItemProps {
    id: number,
    title: string,
    image: string,
    path: string,
}

const CardVectorItem = ({
    id,
    title,
    image,
    path
    }: CardVectorItemProps) => {
    return (
    <div key={id} className={styles.cardVectorItem}>
        <img src={image} alt={title} />
        <Link to={path}>
            <h4>{title}</h4>
        </Link>
    </div>
  )
}

export default CardVectorItem;
