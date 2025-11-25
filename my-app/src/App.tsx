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
      <main id='main' className='flex flex-col-reverse justify-between p-6 md:p-10 border-4 border-black rounded-xl box-border'>
        <div>
          <h6 className='text-red-500'>WELCOME TO</h6>
          <h1 id='title' className='text-4xl md:text-5xl font-bold leading-tight text-center'>
            ALLERCAK
          </h1>
          <div className='flex space-x-4' >
        
            <button id='b1' 
              onClick={() => navigate('/login')}
              className='px-6 py-3 rounded-lg text-base font-semibold border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all'>
              Login
          
            </button>
            <button id='b2'
              onClick={() => navigate('/signup')}
              className='px-6 py-3 rounded-lg text-base font-semibold bg-[#0066FF] text-white hover:bg-[#0052CC] hover:shadow-lg transition-all'>
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