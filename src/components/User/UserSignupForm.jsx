import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';
import styles from "../../styles/User.module.css";



export default function UserSignupForm({ toggleCurrentFormType, closeForm }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: ''
  })

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).some((val) => val);

    if (!isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg fill="inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="close">
          <path d="M4.375 4.375L15.625 15.625" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M4.375 15.625L15.625 4.375" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>

      <div className={styles.title}> Sign Up </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type='email'
            placeholder='Your email'
            name='email'
            value={values.email}
            autoComplete='off'
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type='name'
            placeholder='Your name'
            name='name'
            value={values.name}
            autoComplete='off'
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type='password'
            placeholder='Your password'
            name='password'
            value={values.password}
            autoComplete='off'
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type='avatar'
            placeholder='Your avatar'
            name='avatar'
            value={values.avatar}
            autoComplete='off'
            onChange={handleChange}
          />
        </div>

        <div className={styles.link} onClick={() => toggleCurrentFormType('login')}>I already have an account</div>

        <button type='submit' className={styles.submit}>Create account</button>
      </form>
    </div>
  )
}
