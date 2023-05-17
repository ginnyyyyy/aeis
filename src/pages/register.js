import Link from "next/link";
import { useEffect, useState } from "react";

const Box = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleNextClick = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert("Please check the checkbox before proceeding.");
      return;
    } else {
      window.location.href = "/register-form";
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsChecked(false);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div
        className='p-0 rounded-3xl mt-4 box-content max-w-md relative border-blue'
        style={{
          boxShadow: "8px 6px 5px rgba(0, 0, 0, 0.6)",
          backgroundColor: "#1e3a8a",
          padding: "15px", // Add padding for inner border
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
            <h2 className='text-2xl font-bold text-sky-200 mt-6 text-center'>
              Alumni Registration Form
            </h2>
            <hr
              className='my-2 border-sky-200 w-full'
              style={{ height: "15px" }}
            />
            <p className='text-sky-200 text-left mb-3'>Hello Fellow Alumni,</p>

            <div className='text-justify text-sky-200 text-sm leading-4.5'>
              <span style={{ display: "inline-block", marginLeft: "20px" }}>
                Welcome to PLV-AEIS! We are excited to have you as a
              </span>
              member of our alumni community. Before you start using our
              website, please take a moment to answer a few questions. Your
              response matters most in our alumni tracking program and services.
              <div>
                <span style={{ display: "inline-block", marginLeft: "20px" }}>
                  Please be assured that our Alma Mater is compliant with
                </span>
                Republic Act 10173 or the Data Privacy Act 2012 and has infact
                designated a Data Privacy Officer in the person of Sir Michville
                A. Rivera, who ensures that our personal data will not be used
                unlawfully.
              </div>
              <div>
                <span style={{ display: "inline-block", marginLeft: "20px" }}>
                  As we are creating an PLV-AEIS, we are particularly
                </span>
                interested in knowing your current position and company. The
                data will help us significantly in creating an effective
                placement program. Also, we hope to coordinate with you for our
                regular curriculum development program. We will not share these
                information to third parties without your permission.
              </div>
              <div className='mb-5'>
                <span style={{ display: "inline-block", marginLeft: "20px" }}>
                  We are looking forward to getting to know you better and
                </span>
                to get better at keeping in touch with our alumni and helping
                our alumni stay in touch with each other. So come and join us
                and lets build a legacy and strong relationship.
              </div>
              <label
                htmlFor='privacyCheckbox'
                className='text-sky-200 text-sm mt-5'
              >
                <input
                  type='checkbox'
                  id='privacyCheckbox'
                  className='form-checkbox h-3 w-3 mt-5 text-sky-200 transition duration-150 ease-in-out checked:border-transparent focus:outline-none focus:shadow-outline cursor-pointer checkbox-blue'
                  required
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <span className='checkbox-icon'></span>
                <span
                  style={{ marginLeft: "10px", marginTop: "40px" }}
                  className=' text-sm text-cyan-100'
                >
                  By checking the box, I hereby acknowledge that I have read and
                  understood the terms and conditions of PLV-AEIS.
                </span>
              </label>
            </div>
            <div className='flex justify-end mt-5'>
              <Link href='register-form'>
                <button
                  className='rounded px-2 py-1.5 bg-gray-300 text-slate-800 text-sm'
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </Link>
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
