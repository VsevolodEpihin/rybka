import CardVector from '../CardVector/CardVector';
import Tittle from '../Tittle/Tittle';

import styles from './Vector.module.css';

interface VectorProps {
  type: string;
  mockVectors: {
    id: number;
    title: string;
    image: string;
    path: string;
  }[];
}

const Vector = ({type, mockVectors}: VectorProps) => {

  const title = type === 'services' ? 'Услуги' : 'Выбери свой вектор!';
  const prevTitle = type === 'services' ? '' : 'Направления добровольчества ИКТИБ ЮФУ';

  return (
   <div className={styles.vectorContainer}>
      <Tittle title={title} prevTitle={prevTitle} />
      <CardVector mockVectors={mockVectors}/>
   </div>
  )
}

export default Vector;
