import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div>
			<main id='main-signup' className='flex flex-col-reverse justify-between p-10 md:p-20'>
				<div>
					<h1 id='signup'>
						SIGN UP
					</h1>
					
					<div id='inputs-s'>
          			<input type="name" placeholder="User Name"></input> 
          			<br></br>
          			<input type="email" placeholder="Email"></input>
					<br></br>
          			<input type="password" placeholder="Password"></input>
					<br></br>
          			<input type="password" placeholder="Comfirm Password"></input>
          			</div>
					
					<div>
						<button id='S1' className="w-56 p-3 rounded-lg border border-white/50 text-black bg-transparent outline-none focus:border-blue-500 focus:shadow-[inset_10px_0_0_0_white,0_0_8px_rgba(74,144,226,0.5)]"
							onClick={() => navigate('/landing')}>
							Sign up
						</button>
						<button id='S2'
							onClick={() => navigate('/')}>
							Return
						</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Signup;
