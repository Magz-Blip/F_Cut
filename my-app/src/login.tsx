import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <main id='main-login' className='flex flex-col-reverse justify-between p-10 md:p-20'>
        <div>
          <h1 id='login'>
            LOGIN
          </h1>
          <div>
            <button id='L1' 
              onClick={() => navigate('/landing')}>
              Login
            </button>
            <button id='L2'
              onClick={() => navigate('/')}>
              Return
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
