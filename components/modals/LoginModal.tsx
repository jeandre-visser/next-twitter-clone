import useLoginModal from '@/hooks/useLoginModal';
import React, { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await signIn('credentials', {
        email,
        password,
      });

      toast.success('Logged in successfully!');

      loginModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, [loginModal, email, password]);

  const onToggle = useCallback(() => {
    if (isLoading) return;

    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal, isLoading]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <Input
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
      <p>
        Don&apos;t have an account?{' '}
        <span
          className='hover:underline text-white cursor-pointer'
          onClick={onToggle}
        >
          Create an account
        </span>
      </p>
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
      footer={footerContent}
    />
  );
};

export default LoginModal;
