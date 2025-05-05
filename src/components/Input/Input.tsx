import { ChangeEvent } from 'react';

import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input = ({ placeholder, onChange, value }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={styles.input}
    />
  )
}

export default Input
