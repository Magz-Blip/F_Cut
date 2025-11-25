import React from 'react';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const navigate = useNavigate();

  return(
    <div className='min-h-screen text-gray-800'>
      {/* Navbar*/}
      <header>
      </header>
      
      {/* HERO PAGE */}
      <main id='main' >
        <div>
          <h1 id='title'>
            ALLERCAK
          </h1>
          <div className='flex space-x-4'>
            <button id='b1' 
              onClick={() => navigate('/login')}
              className='hover:bg-black hover:text-white'>
              Login
          
            </button>
            <button id='b2'
              onClick={() => navigate('/signup')}
              className='hover:bg-[#0052CC] hover:shadow-lg'>
              Sign up 
            </button>
          </div>
        </div>
        
        {/*IMAGE FILE*/}
      </main>
    </div>
  );
};

export default App;