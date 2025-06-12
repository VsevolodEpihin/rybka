import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input/Input';
import Button from '../Button/Button';
import ButtonClose from '../ButtonClose/ButtonClose';
import useRegStore from '../../store/regStore';
import type { AuthRegister } from '../../store/regStore';
import useAuthStore from '../../store/authStore';

import styles from './RegModal.module.css';

const RegModal = () => {
  const { 
    form, 
    setField, 
    register, 
    validationErrors,
    validateField,
    user,
    isLoading
  } = useRegStore();
  const { setModal, closeModal, prevPath, setPrevPath } = useAuthStore();
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  console.log(user)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await register();
    } catch(err) {
      console.error(err);
    }
  }

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

  const handleChange = (field: keyof AuthRegister) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (field === 'priorityAreas') {
      const value = e.target.value.split(',').map(item => item.trim()).filter(Boolean);
      setField(field, value);
    } else {
      setField(field, e.target.value);
    }
  }

  const handleBlur = (field: keyof AuthRegister) => () => {
    validateField(field);
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <form className={styles.regContainer} ref={formRef} onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>Регистрация</h3>
          <span onClick={handleClose}><ButtonClose /></span>
        </div>
        <div className={styles.fieldsGrid}>
          <Input 
            placeholder="Фамилия" 
            onChange={handleChange('name')} 
            onBlur={handleBlur('name')}
            value={form.name}
            error={validationErrors.name}
          />
          <Input
            placeholder="Имя"
            onChange={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={form.firstName}
            error={validationErrors.firstName}
          />
          <Input
            placeholder="Отчество" 
            onChange={handleChange('middleName')} 
            onBlur={handleBlur('middleName')}
            value={form.middleName}
            error={validationErrors.middleName}
          />
          <div className={styles.row}>
            <Input
              placeholder="Дата рождения"
              onChange={handleChange('dateBirthday')}
              onBlur={handleBlur('dateBirthday')}
              value={form.dateBirthday}
              error={validationErrors.dateBirthday}
            />
            <Input
              placeholder="Город"
              onChange={handleChange('city')}
              value={form.city}
              error={validationErrors.city}
              onBlur={handleBlur('dateBirthday')}
            />
          </div>
          <div className={styles.genderRow}>
            <span>Пол:</span>
            <label>
              <input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange('gender')} /> Женский
            </label>
            <label>
              <input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={handleChange('gender')} /> Мужской
            </label>
          </div>
          <div className={styles.photoCircle}>Фото</div>
          <Input
            placeholder="Мобильный телефон"
            onChange={handleChange('tel')}
            value={form.tel}
            error={validationErrors.tel}
            onBlur={handleBlur('tel')}
          />
          <Input 
            placeholder="E-mail" 
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            value={form.email}
            error={validationErrors.email}
          />
          <Input
            placeholder="Пароль"
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            value={form.password}
            type="password"
            error={validationErrors.password}
          />
          <Input
            placeholder="Подтвердите пароль"
            onChange={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={form.confirmPassword}
            type="password"
            error={validationErrors.confirmPassword}
          />
          <Input placeholder="Род деятельности" onChange={handleChange('hobby')} value={form.hobby} />
          <div className={styles.row}>
            <Input placeholder="Образовательная организация" onChange={handleChange('university')} value={form.university} />
            <Input placeholder="Год выпуска" onChange={handleChange('yearForRelease')} value={form.yearForRelease} />
          </div>
          <Input placeholder="Опыт общественной деятельности" onChange={handleChange('experience')} value={form.experience} />
          <Input placeholder="Уровень английского языка" onChange={handleChange('levelEng')} value={form.levelEng} />
          <Input placeholder="Приоритетные направления" onChange={handleChange('priorityAreas')} value={form.priorityAreas.join(',')} />
        </div>
        <Button type="submit" disabled={isLoading}>
          Зарегистрироваться
        </Button>
        <div className={styles.secondaryBtn}>
          <Button type="button" onClick={() => setModal('auth')}>Уже есть аккаунт</Button>
        </div>
      </form>
    </div>
  );
};

export default RegModal;
