import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
    setPrevPath,
    token
  } = useAuthStore();
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      const from = location.state?.from?.pathname || prevPath || '/';
      navigate(from);
      setPrevPath('/');
    } else {
      openModal();
    }
  }, [token, location, navigate, prevPath, setPrevPath, openModal]);

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
