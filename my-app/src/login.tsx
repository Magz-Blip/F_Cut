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
          
          <div id='inputs-l'>
          <input type="email" placeholder="Email"></input> 
          <br></br>
          <input type="password" placeholder="Password"></input>
          </div>
          
          <div>
            <button id ='b3' className='px-6 py-3 rounded-lg text-base font-semibold border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all'
              onClick={() => navigate('/landing')}>
              Login
            </button>
            <button id='b4' className='px-6 py-3 rounded-lg text-base font-semibold bg-[#0066FF] text-white hover:bg-[#0052CC] hover:shadow-lg transition-all'
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


