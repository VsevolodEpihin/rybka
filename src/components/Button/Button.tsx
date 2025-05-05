import { ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({  type, children, onClick, disabled }: ButtonProps) => {

  return (
    <button type={type} onClick={onClick} className={styles.btn} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;
