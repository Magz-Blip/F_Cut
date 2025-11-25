const Landing = () => {
  return (
    <div className='min-h-screen text-gray-800'>
      {/* Navbar*/}
      <header className='flex justify-between items-center p-6 shadow-md bg-yellow-900/25'>
        <div className='flex justify-between items-center p-6 shadow-md'>TEST</div>
        <nav className='space-x-6 text-sm font-medium'>
          <a href="#home" className='hover:text-yellow-600'>Home</a>
          <a href="#product" className='hover:text-yellow-600'>Product</a>
          <a href="#services" className='hover:text-yellow-600'>Services</a>
          <a href="#contact" className='hover:text-yellow-600'>Contact</a>
          <a href="#settings" className='hover:text-yellow-600'>Settings</a>
        </nav>
      </header>
      
      {/* HERO PAGE */}
      <main className='flex flex-col-reverse md:flex-row items-center justify-between p-10 md:p-20 bg-gradient-to-r from-yellow-500 to-white'>
        <div className='md:w-1/2 space-y-6'>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
            Welcome to Landing Page
          </h1>
          <p>This is your landing page content.</p>
        </div>
      </main>
    </div>
  );
};

export default Landing;