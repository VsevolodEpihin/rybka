import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input/Input';
import Button from '../Button/Button';
import ButtonClose from '../ButtonClose/ButtonClose';
import styles from './RegModal.module.css';
import useRegStore, { RegForm } from '../../store/regStore';
import useAuthStore from '../../store/authStore';

const RegModal = () => {
  const { form, setField, register } = useRegStore();
  const { setModal, closeModal, prevPath, setPrevPath } = useAuthStore();
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleChange = (field: keyof RegForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string | boolean = field === 'agree' ? e.target.checked : e.target.value;
    setField(field, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register();
    // Можно добавить сброс формы или уведомление об успехе
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
      <form className={styles.regContainer} ref={formRef} onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>Регистрация</h3>
          <span onClick={handleClose}><ButtonClose /></span>
        </div>
        <div className={styles.fieldsGrid}>
          <Input placeholder="Фамилия" onChange={handleChange('lastName')} value={form.lastName} />
          <Input placeholder="Имя" onChange={handleChange('firstName')} value={form.firstName} />
          <Input placeholder="Отчество" onChange={handleChange('middleName')} value={form.middleName} />
          <div className={styles.row}>
            <Input placeholder="Дата рождения" onChange={handleChange('birthDate')} value={form.birthDate} />
            <Input placeholder="Город" onChange={handleChange('city')} value={form.city} />
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
          <Input placeholder="Мобильный телефон" onChange={handleChange('phone')} value={form.phone} />
          <Input placeholder="E-mail" onChange={handleChange('email')} value={form.email} />
          <Input placeholder="Пароль" onChange={handleChange('password')} value={form.password} />
          <Input placeholder="Подтверждение пароля" onChange={handleChange('confirmPassword')} value={form.confirmPassword} />
          <Input placeholder="Род деятельности" onChange={handleChange('occupation')} value={form.occupation} />
          <div className={styles.row}>
            <Input placeholder="Образовательная организация" onChange={handleChange('education')} value={form.education} />
            <Input placeholder="Год выпуска" onChange={handleChange('gradYear')} value={form.gradYear} />
          </div>
          <Input placeholder="Опыт общественной деятельности" onChange={handleChange('experience')} value={form.experience} />
          <Input placeholder="Уровень английского языка" onChange={handleChange('english')} value={form.english} />
          <Input placeholder="Приоритетные направления" onChange={handleChange('priority')} value={form.priority} />
        </div>
        <div className={styles.agreeRow}>
          <input type="checkbox" id="agree" checked={form.agree} onChange={handleChange('agree')} />
          <label htmlFor="agree">Даю согласие на обработку персональных данных</label>
        </div>
        <Button type="submit">
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
