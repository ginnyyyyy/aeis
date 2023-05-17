import { useState } from "react";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

const LogIn = () => {
  return (
    <div>
      <div className='text-red-500 bg-blue-900 p-2'>
        <div className='flex justify-between'>
          <Logo />
        </div>
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
};

// const Register = () => {
//   return (
//     <div>
//       <h1 className='text-center p-10 font-bold text-2xl'>
//         Alumni Registration Form
//       </h1>

//     </div>
//   );
// };

const Options = ({ showOptions }) => {
  if (!showOptions) return null;

  return (
    <div className='absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded shadow'>
      <ul className='py-2'>
        <li className='px-4 py-2 hover:bg-gray-100'>Female</li>
        <li className='px-4 py-2 hover:bg-gray-100'>Male</li>
      </ul>
    </div>
  );
};

const Register = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  // const handleExtensionNameChange = (e) => {
  //   setExtensionName(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Perform validation and submit logic here
  //   if (extensionName !== "") {
  //     // Extension Name is provided, proceed with submission
  //     // Perform the necessary actions
  //   } else {
  //     // Extension Name is optional and left blank
  //     // Handle the case where the field is not provided
  //   }
  // };

  return (
    <div className='drop-shadow-xl'>
      <h1 className='p-10 font-bold text-2xl text-center'>
        Alumni Registration Form
      </h1>
      <div className='box-content border-4 p-4 max-w-screen-lg wd-full mx-auto custom-box rounded-lg border-gray-600'>
        <h2 className='text-lg font-bold mb-4 text-center'>
          Personal Information
        </h2>
        <div className='text-gray-900 grid grid-cols-2 gap-4'>
          <div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='firstName'
              >
                First Name:
              </label>
              <input
                type='text'
                id='firstName'
                placeholder='Enter your First Name'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='midName'
              >
                Middle Name:
              </label>
              <input
                type='text'
                id='midName'
                placeholder='Enter your Middle Name'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='lastName'
              >
                Last Name:
              </label>
              <input
                type='text'
                id='lastName'
                placeholder='Enter your Last Name'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='eName'
              >
                Extension Name:
              </label>
              <input
                type='text'
                id='eName'
                placeholder='Enter your Extension Name'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                // value={extentionName}
                // onChange={handleExtensionNameChange}
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='birthday'
              >
                Birthdate:
              </label>
              <input
                type='date'
                id='birthday'
                name='birthday'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
          </div>

          <div>
            <div className='mb-4 relative'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='sex'
              >
                Sex:
              </label>
              <div className='relative'>
                <div className='flex items-center'>
                  <select
                    id='sex'
                    className='border border-gray-300 px-2 py-1 pr-8 rounded shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer'
                    defaultValue=''
                    onClick={toggleOptions}
                  >
                    <option
                      value=''
                      disabled
                    >
                      Select
                    </option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                  </select>
                  <span
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                    onClick={toggleOptions}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </div>
                {showOptions && <Options />}
              </div>
            </div>

            <div className='mb-4 relative'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='sex'
              >
                Civil Status:
              </label>
              <div className='relative'>
                <select
                  id='sex'
                  className='border border-gray-300 px-2 py-1 rounded shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  defaultValue=''
                >
                  <option
                    value=''
                    disabled
                    className='pointer-events-none'
                  >
                    Civil Status
                  </option>
                  <option value='Single'>Single</option>
                  <option value='Married'>Married</option>
                  <option value='Divorced'>Divorced</option>
                  <option value='Widowed'>Widowed</option>
                  <option value='Complicated'>Complicated</option>
                </select>
                <span className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='rel'
              >
                Religion:
              </label>
              <input
                type='text'
                id='rel'
                placeholder='Enter your Religion'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='file'
              >
                Upload your display photo:
              </label>
              <input
                type='file'
                name='file'
                id='file'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                accept='.jpg, .jpeg, .png'
              />
            </div>
          </div>
        </div>

        <h2 className='text-lg font-bold mb-4 text-center'>
          Contact Information
        </h2>
        <div className='text-gray-900 grid grid-cols-2 gap-4'>
          <div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='firstName'
              >
                Address:
              </label>
              <input
                type='text'
                id='address'
                placeholder='Enter your Address'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='midName'
              >
                Barangay:
              </label>
              <input
                type='text'
                id='Barangay'
                placeholder='Enter your Barangay'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='city'
              >
                City:
              </label>
              <input
                type='text'
                id='city'
                placeholder='Enter your City'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='eName'
              >
                Postal Code
              </label>
              <input
                type='text'
                id='number'
                placeholder='Enter your Postal Code'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                // value={extentionName}
                // onChange={handleExtensionNameChange}
              />
            </div>
          </div>
          <div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='province'
              >
                Province
              </label>
              <input
                type='text'
                id='province'
                placeholder="Enter your Province's Name"
                className='border border-gray-300 px-2 py-1 rounded
                shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='contact'
              >
                Contact Number:
              </label>
              <input
                type='number'
                id='contact'
                placeholder='Enter your Religion'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                block
                text-gray-700
                text-sm
                font-bold
                mb-2
                htmlFor='email'
              >
                Email Address:
              </label>
              <input
                type='email'
                id='email'
                placeholder='Enter your Email Address'
                className='border border-gray-300 px-2 py-1 rounded
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
          </div>

          {/* ANOTHER GRID */}
        </div>
      </div>
    </div>
  );
};

{
  /* <div className='mb-4'>
                 <label
                   htmlFor='email'
                   className='text-gray-700'
                 >
                   Email:
                 </label>
                 <input
                    type='email'
                   id='email'
                   placeholder='Enter your email'
                   className='border border-gray-300 px-2 py-1 rounded'
                 />
                </div>

          <div className='mb-4'>
            <label
              htmlFor='phone'
              className='text-gray-700'
            >
              Phone:
            </label>
            <input
              type='tel'
              id='phone'
              placeholder='Enter your phone number'
              className='border border-gray-300 px-2 py-1 rounded'
            />
          </div> */
}

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
