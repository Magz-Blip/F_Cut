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
					<div>
						<button id='S1' 
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
