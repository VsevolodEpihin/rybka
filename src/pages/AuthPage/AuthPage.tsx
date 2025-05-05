import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthModal from '../../components/AuthModal/AuthModal';
import RegModal from '../../components/RegModal/RegModal';
import useAuthStore from '../../store/authStore';

import styles from './AuthPage.module.css';

const AuthPage = () => {
  const {
    modal,
    isOpen,
    closeModal,
    openModal,
    prevPath,
    setPrevPath
  } = useAuthStore();
  
  const navigate = useNavigate();

  useEffect(() => {
    openModal();
  }, [openModal]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
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
    <div className={styles.formContainer} onClick={handleOverlayClick}>
      {modal === 'auth' ? <AuthModal /> : <RegModal />}
    </div>
  )
}

export default AuthPage
