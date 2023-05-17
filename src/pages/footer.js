const Footer = () => {
  return (
    <div className='grid grid-cols-2 gap-8 bg-blue-900 p-8'>
      <div>
        <div className='flex items-center p-2'>
          <div className='ml-2 flex items-center'>
            <div className='ml-2'>
              <img
                src='copyright.png'
                alt='credits'
                className='h-7 w-7'
              />
              <p className='text-cyan-50 mb-1'>
                2023. Pamantasan ng Lungsod ng Valenzuela.
              </p>
              <p className='text-cyan-50 mt-10'>
                Developed by BSIT Students of PLV
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex items-center'>
          <img
            src='google-maps.png'
            alt='loc'
            className='h-7 w-7'
          />
          <div className='ml-2'>
            <h1
              className='font-bold
              text-amber-500 text-lg'
            >
              Address
            </h1>
            <p className='text-cyan-50'>
              Maysan Road Tongco Street Maysan 1440,{" "}
              <span>Valenzuela City</span>
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <img
            src='email.png'
            alt='send'
            className='h-7 w-7'
          />
          <div className='ml-2'>
            <h1
              className='font-bold
              text-amber-500 text-lg'
            >
              Email Address
            </h1>
            <p className='text-cyan-50'>plv.osa.official@gmail.com</p>
          </div>
        </div>
        <div className='flex items-center'>
          <img
            src='8-am.png'
            alt='time'
            className='h-7 w-7'
          />
          <div className='ml-2'>
            <h1
              className='font-bold
              text-amber-500 text-lg'
            >
              Office Hours
            </h1>
            <p className='text-cyan-50'>8:00am - 5:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
