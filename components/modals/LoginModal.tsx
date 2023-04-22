import useLoginModal from '@/hooks/useLoginModal';
import React, { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';

const LoginModal = () => {
  const loginModal = useLoginModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // TODO: ADD LOGIN
      // await loginModal.login(email, password);

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Sign In'
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default LoginModal;
