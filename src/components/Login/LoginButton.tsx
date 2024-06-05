'use client';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';
import { Button } from '@/components/ui/button';

const LoginButton = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <Button variant={'default'} onClick={signIn}>
      login
    </Button>
  );
};

export default LoginButton;
