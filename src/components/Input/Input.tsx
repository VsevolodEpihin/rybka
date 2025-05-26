import { ChangeEvent, useState } from 'react';

import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value?: string;
  error?: string;
  type?: string;
}

const Input = ({ placeholder, onChange, onBlur, value, error, type = 'text' }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPassword = type === 'password';

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        <input
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.passwordToggle}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}

export default Input
