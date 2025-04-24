import { ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({  children }: ButtonProps) => {

  return (
    <button className={styles.btn}>
      {children}
    </button>
  )
}

export default Button;
