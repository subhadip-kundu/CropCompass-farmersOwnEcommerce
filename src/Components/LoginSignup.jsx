import React, { useState } from 'react';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('signup');

  const handleTabChange = (tab) => {

    setActiveTab(tab);
  };

  return (
    <div className='flex justify-center mt-32 w-full h-[93vh] font-Rubik'>
      <div className="bg-white  min-w-[500px] ">
        <div className="form bg-cyan-50 rounded-lg overflow-hidden shadow-md max-w-lg p-2">
          <ul className="tab-group flex w-full items-center justify-around text-purple-950 mb-3 ">
            <li className={activeTab === 'signup' ? 'tab active' : 'tab'}>
              <button onClick={() => handleTabChange('signup')} className={activeTab === 'signup' ? 'block py-4 px-6 text-lg  font-medium' : 'block py-4 px-6'}>Sign Up</button>
            </li>
            <li className={activeTab === 'login' ? 'tab active' : 'tab'}>
              <button onClick={() => handleTabChange('login')} className={activeTab === 'login' ? 'block py-4 px-6 text-lg  font-medium' : 'block py-4 px-6'}>Log In</button>
            </li>
          </ul>

          <div className="tab-content px-6 mb-2">
            <div id="signup" className='mx-auto w-11/12 ' style={{ display: activeTab === 'signup' ? 'block' : 'none' }}>
              <form action="/" method="post" className='flex flex-col justify-center items-center gap-3'>
                <div className="flex items-center justify-center gap-3">
                  <div className=" w-full">
                    <label htmlFor="firstName" className="block text-purple-700 mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="input w-full rounded-[5px] p-0.5 px-3 outline-none border-2 border-cyan-200 capitalize" required />
                  </div>
                  <div className=" w-full">
                    <label htmlFor="lastName" className="block text-purple-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="input w-full rounded-[5px] p-0.5 px-3 outline-none border-2 border-cyan-200 capitalize" required />
                  </div>
                </div>
                <div className=" w-full">
                  <label htmlFor="email" className="block text-purple-700 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="input w-full rounded-[5px] p-0.5 px-3 outline-none border-2 border-cyan-200 " required />
                </div>
                <div className=" w-full">
                  <label htmlFor="password" className="block text-purple-700 mb-2">Password</label>
                  <input type="password" id="password" name="password" className="input w-full rounded-[5px] p-0.5 px-3 outline-none border-2 border-cyan-200 " required />
                </div>
                <button type="submit" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-8 py-2 text-center m-3">Get Started</button>
              </form> 
            </div>

            <div id="login" style={{ display: activeTab === 'login' ? 'block' : 'none' }}>
              <div className="flex items-center justify-center">
                <form action="/" method="post" className='flex flex-col justify-center items-center gap-3 w-full px-4'>
                  <div className="w-full ">
                    <label htmlFor="loginEmail" className="block text-purple-700 mb-2">Email Address</label>
                    <input type="email" id="loginEmail" name="loginEmail" className="input w-full rounded-[5px] p-0.5 px-3 outline-none border-2 border-cyan-200 capitalize" required />
                  </div>
                  <div className="w-full">
                    <label htmlFor="loginPassword" className="block text-purple-700 mb-2">Password</label>
                    <input type="password" id="loginPassword" name="loginPassword" className="input w-full rounded-[5px] p-0.5 px-3 outline-none border-2 border-cyan-200 capitalize" required />
                  </div>
                  <button type="submit" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-8 py-2 text-center m-3 mt-4 flex self-center ">Log In</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
