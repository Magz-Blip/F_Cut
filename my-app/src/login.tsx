import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <main id="main-login" className="flex items-center justify-center min-h-screen bg-slate-100 p-10 md:p-20">
      <div className="w-full max-w-4xl">
        {/* Modal (demo) */}
        <div className="mx-auto max-w-lg rounded-lg overflow-hidden shadow-sm bg-white">
          <div className="p-6">
            <div className="flex items-center justify-center text-white h-24 rounded-md bg-slate-800 mb-4">
              <h3 className="text-2xl">Sign In</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-slate-600">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-slate-600">Password</label>
                <input
                  type="password"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm"
                  placeholder="Your Password"
                />
              </div>

              <div className="flex items-center">
                <input id="check-2" type="checkbox" className="mr-2 h-5 w-5 rounded border border-slate-300" />
                <label htmlFor="check-2" className="text-sm text-slate-600">Remember Me</label>
              </div>

              <div>
                <button
                  type="button"
                  className="w-full rounded-md bg-slate-800 py-2 px-4 text-white shadow-md hover:shadow-lg"
                >
                  Sign In
                </button>
              </div>

              <p className="text-center text-sm text-slate-600 mt-2">
                Don&apos;t have an account?
                <a href="#signup" className="ml-1 text-sm font-semibold text-slate-700 underline">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
