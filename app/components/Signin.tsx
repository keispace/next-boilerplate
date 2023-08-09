'use client'
import React, { useState } from 'react';
import styles from './Signin.module.scss';
import { Button, Input } from 'antd';
import { useRouter } from 'next/navigation'

const Signin = () => {
  const router = useRouter()
  const [userId, setUserId] = useState<string>(`admin@bc-labs.net`);
  const [password, setPassword] = useState<string>(`bclabs1234`);

  const inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // id: admin@bc-labs.net
  // password: bclabs1234
  const signIn = () => {
    if (userId === `admin@bc-labs.net` && password === `bclabs1234`) { router.push('/dashboard') }
  };

  return <div className={styles.container} >
    <div className={styles.signin}>
      <div className={styles.title}>
        Blockchain Multi-Cloud
      </div>
      <div className={styles['input-wrap']}>
        <div className={styles.text}>
          E-mail
        </div>
        <Input
          placeholder="E-mail"
          value={userId}
          onChange={inputEmail} />
      </div>

      <div className={styles['input-wrap']}>
        <div className={styles.text}>
          Password
        </div>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={inputPassword}
          onKeyDown={e => {
            if (e.key === `Enter`) { signIn(); }
          }}
        />
      </div>
      <div className={styles.forgot}>Forgot your password?</div>

      <Button disabled={userId === `` || password.length < 8}
        onClick={signIn}
        type="primary">Log In</Button>

    </div>
    <video autoPlay muted loop >
      <source src="/assemble.mp4" type="video/mp4" />
    </video>




  </div >
};


export default Signin