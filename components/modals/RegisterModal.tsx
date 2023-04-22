import useRegisterModal from '@/hooks/useRegisterModal';
import React, { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import useLoginModal from '@/hooks/useLoginModal';

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // TODO: ADD REGISTER AND LOGIN
      // await registerModal.register(email, password);

      registerModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);

  const onToggle = useCallback(() => {
    if (isLoading) return;

    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal, isLoading]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
      />
    </div>
  );

  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
      <p>
        Already have an account?{' '}
        <span
          className='hover:underline text-white cursor-pointer'
          onClick={onToggle}
        >
          Sign In
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Sign Up'
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
