import CardVectorItem from '../CardVectorItem/CardVectorItem';

import styles from './CardVector.module.css';

interface CardVectorProps {
  mockVectors: {
    id: number;
    title: string;
    image: string;
    path: string;
  }[];
}

const CardVector = ({ mockVectors }: CardVectorProps) => {
  return (
    <div className={styles.cardVector}>
        {mockVectors.map(({ id, title, image, path }) => {
            return (
              <CardVectorItem
                id={id}
                title={title}
                image={image}
                path={path}
              />
            )   
        })}
    </div>
  )
}

export default CardVector;
