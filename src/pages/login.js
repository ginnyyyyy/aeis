import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Box = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleIdNumberChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.replace(/[^\d-]/g, ""); // Remove non-digit and non-dash characters
    setIdNumber(formattedValue);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div
        className='p-0 rounded-3xl mt-4 box-content max-w-md relative'
        style={{
          boxShadow: "8px 6px 5px rgba(0, 0, 0, 0.6)",
          backgroundColor: "#1e3a8a",
          padding: "15px",
        }}
      >
        <div
          className='border-4 border-blue-300 rounded-3xl relative'
          style={{
            backgroundColor: "#1e3a8a",
          }}
        >
          <div className='p-6'>
            <div className='flex justify-center items-center'>
              <div className='absolute -top-12 left-1/2 transform -translate-x-1/2'>
                <img
                  src='try.png'
                  alt='Logo'
                  className='h-20 w-20'
                />
              </div>
            </div>
            <h2 className='text-3xl font-bold text-sky-200 mt-6 text-center text-3xl'>
              PLV AEIS
            </h2>
            <hr
              className='my-4 border-sky-200 w-full'
              style={{
                height: "1px",
              }}
            />
            <p className='text-sky-200 text-center text-lg'>Welcome!</p>
            <p className='text-sky-200 text-center text-md mb-8'>
              Sign in to stay connected.
            </p>
            <div className='flex justify-center ml-3'>
              <div className='grid grid-cols-1 gap-y-4'>
                <div className='mt-4'>
                  <label className='text-sky-200'>ID Number:</label>
                  <input
                    placeholder='Enter your ID number'
                    type='text'
                    value={idNumber}
                    onChange={handleIdNumberChange}
                    className='w-full py-2 px-4 mt-2 bg-gray-100 rounded'
                    style={{ width: "370px" }}
                  />
                </div>
                <div className='mt-1 relative'>
                  <label
                    className='absolute top-0 left-0 z-30 text-sky-200 mt-5'
                    style={{ transform: "translateY(-50%)" }}
                  >
                    Password:
                  </label>
                  <div className='relative'>
                    <input
                      placeholder='Enter your Password'
                      type={showPassword ? "text" : "password"}
                      className='w-full py-2 px-4 mt-10 bg-gray-100 rounded'
                      value={password}
                      onChange={handlePasswordChange}
                      style={{ width: "370px" }}
                    />
                    {password && (
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        className='text-gray-500 absolute bottom-3 right-5 cursor-pointer'
                        onClick={togglePasswordVisibility}
                      />
                    )}
                  </div>
                </div>

                <style jsx>{`
                  input[type="text"]::placeholder,
                  input[type="password"]::placeholder {
                    font-style: italic;
                  }
                `}</style>

                <div className='flex justify-center mt-2'>
                  <button className='w-40 h-50  px-4 py-2 bg-sky-400 text-gray rounded font-medium'>
                    Log In
                  </button>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <p className='text-justify mt-12 text-sky-200 text-base'>
                Don't have an account yet?
              </p>
              <p className='text-justify text-sky-200 text-base'>
                <span
                  className='italic font-bold text-sky-200 text-lg'
                  href=''
                >
                  Sign Up
                </span>{" "}
                now for your Alumni Account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogIn = () => {
  return (
    <div
      className='bg-image'
      style={{
        backgroundImage: "url('bg.jpeg' )",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className='text-red-500 bg-blue-900 p-2'>
          <div className='flex justify-between'>
            <Logo />
            <div className='flex items-center'></div>
          </div>
        </div>
        <Box />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className='flex items-center'>
      <div className='flex items-center mr-2 p-2'>
        <img
          src='plv-logo.png'
          alt='Logo'
          width={32}
          height={32}
          className='h-10 w-10 mr-2'
        />
        <img
          src='aa-logo.png'
          alt='AA'
          width={32}
          height={32}
          className='h-11 w-8 mr-2'
        />
      </div>
      <div className='flex flex-col'>
        <span className='text-xl font-bold text-sky-100'>
          PAMANTASAN NG LUNGSOD NG VALENZUELA
        </span>
        <span className='text-xl font-bold text-teal-300'>
          ALUMNI ASSOCIATION
        </span>
      </div>
    </div>
  );
};

const logIn = () => {
  return <LogIn />;
};

export default logIn;
