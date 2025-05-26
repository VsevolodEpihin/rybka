import Input from '../Input/Input';
import Button from '../Button/Button';
import ButtonClose from '../ButtonClose/ButtonClose';
import styles from './AuthModal.module.css';
import useAuthStore from '../../store/authStore';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthModal = () => {
  const { 
    form, 
    setField, 
    login, 
    isLoading, 
    setModal, 
    closeModal, 
    prevPath, 
    setPrevPath,
    validationErrors,
    validateField
  } = useAuthStore();
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleChange = (field: 'login' | 'password') => (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(field, e.target.value);
  };

  const handleBlur = (field: 'login' | 'password') => () => {
    validateField(field);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
      if (prevPath && prevPath !== '/auth') {
        navigate(prevPath);
        setPrevPath('/');
      } else {
        navigate('/');
        setPrevPath('/');
      }
    }
  };

  const handleClose = () => {
    closeModal();
    if (prevPath && prevPath !== '/auth') {
      navigate(prevPath);
      setPrevPath('/');
    } else {
      navigate('/');
      setPrevPath('/');
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <form className={styles.authContainer} ref={formRef} onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>Авторизация</h3>
          <span onClick={handleClose}><ButtonClose /></span>
        </div>
        <div className={styles.fieldContainer}>
          <Input 
            placeholder="Номер телефона / Email" 
            onChange={handleChange('login')} 
            onBlur={handleBlur('login')}
            value={form.login}
            error={validationErrors.login}
          />
          <Input 
            placeholder="Пароль" 
            onChange={handleChange('password')} 
            onBlur={handleBlur('password')}
            value={form.password}
            type="password"
            error={validationErrors.password}
          />
        </div>
        <Button type="submit" disabled={isLoading}>Войти</Button>
        <Button type="button" onClick={() => setModal('reg')}>Регистрация</Button>
        <p className={styles.forgot}>Забыли пароль?</p>
      </form>
    </div>
  );
};

export default AuthModal;
