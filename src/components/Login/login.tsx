import { CiLogin } from 'react-icons/ci';
import LoginButton from '@/src/components/Login/LoginButton';

const Login = () => {
  return (
    <div className={'h-screen flex flex-col justify-center items-center gap-3'}>
      <CiLogin size={150} />
      <LoginButton />
    </div>
  );
};

export default Login;
