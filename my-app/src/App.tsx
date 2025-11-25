import React from 'react';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const navigate = useNavigate();

  return(
    <div>
      {/* Navbar*/}
      <header>
      </header>
      
      {/* HERO PAGE */}
      <main id='main' >
        <div>
          <h1 id='title'>
            ALLERCAK
          </h1>
          <div>
            <button id='b1' 
              onClick={() => navigate('/login')}
              >
              Login
          
            </button>
            <button id='b2'
              onClick={() => navigate('/signup')}
              >
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