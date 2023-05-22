import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Button, Space } from "antd";
import CircularIconUploader from "@/pages/component/CircularIconUploader";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const LogIn = () => {
  return (
    <div>
      <div className='text-red-500 bg-blue-900 p-2'>
        <Logo />
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

  const [contactNumber, setContactNumber] = useState("");

  const formatContactNumber = (value) => {
    // Remove any non-digit characters from the input value
    const numericValue = value.replace(/\D/g, "");

    // Format the contact number
    let formattedNumber = "";
    if (numericValue.length >= 1) {
      formattedNumber += `0${numericValue.substring(0, 2)}`;
    }
    if (numericValue.length >= 3) {
      formattedNumber += ` ${numericValue.substring(2, 5)}`;
    }
    if (numericValue.length >= 6) {
      formattedNumber += `-${numericValue.substring(5, 11)}`;
    }

    return formattedNumber;
  };

  const handleContactNumberChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatContactNumber(inputValue);

    // Limit the input to exactly 11 digits
    const numericValue = inputValue.replace(/\D/g, "");
    const limitedValue = numericValue.substring(0, 11);

    if (numericValue.length === 11) {
      setContactNumber(formattedValue);
    } else {
      setContactNumber(limitedValue);
    }
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

  // const [employmentStatus, setEmploymentStatus] = useState("unemployed");

  // const handleEmploymentStatusChange = (e) => {
  //   setEmploymentStatus(e.target.value);
  // };

  const [employmentStatus, setEmploymentStatus] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [yearsOfEmployment, setYearsOfEmployment] = useState("");

  const handleEmploymentStatusChange = (event) => {
    setEmploymentStatus(event.target.value);
  };

  const handleJobPositionChange = (event) => {
    setJobPosition(event.target.value);
  };

  const handleYearsOfEmploymentChange = (event) => {
    setYearsOfEmployment(event.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [idNumber, setIdNumber] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, confirmPassword]);

  const handleIdNumberChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.replace(/[^\d-]/g, ""); // Remove non-digit and non-dash characters
    setIdNumber(formattedValue);
  };

  return (
    <div className='drop-shadow-xl'>
      <h1 className='p-10 font-bold text-2xl text-center'>
        Alumni Registration Form
      </h1>
      <div className='box-content border-4 p-4 max-w-screen-lg wd-full mx-auto custom-box rounded-lg border-none'>
        <h2 className='text-lg font-bold mb-4 text-center'>
          Personal Information
        </h2>

        <div className='flex justify-center mb-4'>
          <CircularIconUploader />
        </div>

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
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer'
            />
          </div>
        </div>

        {/* ANOTHER GRID */}
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
                  className='absolute right-2 top-1/2 transform -translate-y-1/2'
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
                className='border border-gray-300 px-2 py-1 rounded shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer'
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
              <span className='absolute right-2 top-1/2 transform -translate-y-1/2'>
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
              className='border border-gray-300 px-2 py-1 rounded mb-10
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
        </div>

        <h2 className='text-lg font-bold mb-4 text-center'>
          Contact Information
        </h2>

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
            placeholder='Enter your Contact Number'
            className='border border-gray-300 px-2 py-1 rounded mb-8
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={contactNumber}
            onChange={handleContactNumberChange}
          />
        </div>

        <h2 className='text-lg font-bold mb-4 text-center'>Job Information</h2>

        <div className=' p-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            block
            text-gray-700
            text-sm
            font-bold
            mb-2
            htmlFor='jobStatus'
          >
            Job Status:
          </label>
          <div className='flex items-center mb-2'>
            <input
              className='mr-2 rounded-full border border-neutral-300 checked:bg-primary checked:border-primary h-4 w-4'
              type='radio'
              name='employmentStatus'
              value='unemployed'
              checked={employmentStatus === "unemployed"}
              onChange={handleEmploymentStatusChange}
              id='unemployed'
              // disabled={!employmentStatus}
            />
            <label htmlFor='unemployed'>Unemployed</label>
          </div>

          <div className='flex items-center'>
            <input
              className='mr-2 rounded-full border border-neutral-300 checked:bg-primary checked:border-primary h-4 w-4'
              type='radio'
              name='employmentStatus'
              value='employed'
              checked={employmentStatus === "employed"}
              onChange={handleEmploymentStatusChange}
              id='employed'
              // disabled={!employmentStatus}
            />
            <label htmlFor='employed'>Employed</label>
          </div>
        </div>

        <div className='mb-4 relative'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='course'
          >
            Course:
          </label>
          <div className='relative'>
            <select
              id='course'
              className='border border-gray-300 px-2 py-1 rounded shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer'
              defaultValue=''
            >
              <option
                value=''
                disabled
                className='pointer-events-none'
              >
                Course Graduated
              </option>
              <option value='1'>
                Bachelor of Science in Electrical Engineering
              </option>
              <option value='2'>
                Bachelor of Science in Civil Engineering
              </option>
              <option value='3'>
                Bachelor of Science in Information Technology
              </option>
              <option value='4'>
                Bachelor of Science in Business Administration Major in
                Financial Management
              </option>
              <option value='5'>
                Bachelor of Science in Business Administration Major in
                Marketing Management
              </option>
              <option value='6'>
                Bachelor of Science in Business Administration Major in Human
                Resource Development Management
              </option>
              <option value='7'>
                Bachelor of Science in Public Administration
              </option>
              <option value='8'>
                Bachelor of Science in Elementary Education Major in Pre-School
                Education
              </option>
              <option value='9'>
                Bachelor of Science in Secondary Education Major in Filipino
              </option>
              <option value='10'>
                Bachelor of Science in Secondary Education Major in Mathematics
              </option>
              <option value='11'>
                Bachelor of Science in Secondary Education Major in Biological
                Science
              </option>
              <option value='12'>
                Bachelor of Science in Secondary Education Major in Physical
                Science
              </option>

              <option value='13'>Bachelor of Science in Accountancy</option>
              <option value='14'>
                Bachelor of Science in Accounting Technology
              </option>
              <option value='15'>
                Bachelor of Science in Secondary Education Major in English
              </option>

              <option value='16'>Bachelor of Science in Psychology</option>
              <option value='17'>Bachelor of Science in Social Work</option>
            </select>
            <span className='absolute right-2 top-1/2 transform -translate-y-1/2'>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </div>
        </div>

        <div className='mb-4 relative'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='year'
          >
            Batch Year
          </label>
          <div className='relative'>
            <div className='flex items-center'>
              <select
                id='year'
                className='border border-gray-300 px-2 py-1 pr-8 rounded shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer'
                defaultValue=''
                onClick={toggleOptions}
              >
                <option
                  value=''
                  disabled
                >
                  Year
                </option>
                <option value='a'>2002</option>
                <option value='b'>2003</option>
                <option value='c'>2004</option>
                <option value='d'>2005</option>
                <option value='e'>2006</option>
                <option value='f'>2007</option>
                <option value='g'>2008</option>
                <option value='h'>2009</option>
                <option value='i'>2010</option>
                <option value='j'>2011</option>
                <option value='k'>2012</option>
                <option value='l'>2033</option>
                <option value='m'>2014</option>
                <option value='n'>2015</option>
                <option value='o'>2016</option>
                <option value='p'>2017</option>
                <option value='q'>2018</option>
                <option value='r'>2019</option>
                <option value='s'>2020</option>
                <option value='t'>2021</option>
                <option value='u'>2022</option>
                <option value='v'>2023</option>
              </select>
              <span
                className='absolute right-2 top-1/2 transform -translate-y-1/2'
                onClick={toggleOptions}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
            {showOptions && <Options />}
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
            htmlFor='jobPosition'
          >
            Job Position
          </label>
          <input
            type='text'
            id='jobPosition'
            value={jobPosition}
            onChange={handleJobPositionChange}
            disabled={employmentStatus === "unemployed"}
            placeholder='Enter your Job Position'
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
            htmlFor='yearsOfEmployment'
          >
            Years of Employment
          </label>
          <input
            type='text'
            id='yearsOfEmployment'
            value={yearsOfEmployment}
            onChange={handleYearsOfEmploymentChange}
            disabled={employmentStatus === "unemployed"}
            placeholder='Enter Year(s)'
            className='border border-gray-300 px-2 py-1 rounded mb-8
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <h2 className='text-lg font-bold mb-4 text-center'>
          Account Information
        </h2>

        <div className='mb-4 relative'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='course'
          >
            ID Type:
          </label>
          <div className='relative'>
            <select
              id='course'
              className='border border-gray-300 px-2 py-1 rounded shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer'
              defaultValue=''
            >
              <option
                value=''
                disabled
                className='pointer-events-none'
              >
                Select
              </option>
              <option value='stud'>Student</option>
              <option value='alum'>Alumni</option>
            </select>
            <span className='absolute right-2 top-1/2 transform -translate-y-1/2 '>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </div>
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='idNumber'
          >
            ID Number
          </label>
          <input
            type='text'
            id='id'
            placeholder='Enter your ID Number'
            value={idNumber}
            onChange={handleIdNumberChange}
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
            Email Address
          </label>
          <input
            type='text'
            id='emailAdd'
            placeholder='Enter your Email Address'
            className='border border-gray-300 px-2 py-1 rounded
      shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <div className='relative'>
            <input
              placeholder='Enter your Password'
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              className={`border border-gray-300 px-2 py-1 rounded ${
                passwordMatch
                  ? "border-green-500"
                  : passwordError
                  ? "border-red-500"
                  : ""
              } shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
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

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='confirmPassword'
          >
            Confirm Password
          </label>
          <div className='relative'>
            <input
              placeholder='Confirm your Password'
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={`border border-gray-300 px-2 py-1 rounded ${
                passwordMatch
                  ? "border-green-500"
                  : passwordError
                  ? "border-red-500"
                  : ""
              } shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />

            {confirmPassword && (
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className='text-gray-500 absolute bottom-3 right-5 cursor-pointer'
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          {passwordMatch && <p className='text-green-500'>Passwords match</p>}
          {!passwordMatch && confirmPassword && (
            <p className='text-red-500'>Passwords do not match</p>
          )}
        </div>

        <Space
          wrap
          className='flex justify-end'
        >
          <Link href='/'>
            <Button
              type='primary'
              className='w-full bg-[#004BA8]'
            >
              Submit
            </Button>
          </Link>
        </Space>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className='flex items-center'>
      <div className='flex items-center mr-2 p-2'>
        <Link href='/'>
          <img
            src='plv-logo.png'
            alt='Logo'
            width={32}
            height={32}
            className='h-10 w-10 mr-2'
          />
        </Link>
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
