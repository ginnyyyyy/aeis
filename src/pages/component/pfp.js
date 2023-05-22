import React, { useState, useRef } from "react";

const ProfilePicture = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className='w-16 h-16 rounded-full overflow-hidden cursor-pointer'>
      <input
        type='file'
        id='imageInput'
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileSelected}
      />

      {selectedImage ? (
        <img
          src={selectedImage}
          alt='Profile'
          className='w-15 h-15 object-cover border border-gray-200 rounded-full'
        />
      ) : (
        <svg
          fill='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          className='h-12 w-12 text-gray-500'
          onClick={handleImageUpload}
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
          />
        </svg>
      )}
    </div>
  );
};

export default ProfilePicture;
