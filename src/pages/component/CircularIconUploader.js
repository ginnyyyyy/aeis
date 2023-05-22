import React, { useState } from "react";

const CircularIconUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='relative flex flex-col items-center'>
      <div className='relative rounded-full bg-gray-200'>
        <label
          htmlFor='imageInput'
          className='cursor-pointer'
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt='Profile'
              className='w-full h-full object-scale-down rounded-full'
            />
          ) : (
            <img
              src='edit-info.png'
              alt='Upload Icon'
              className='w-11 h-11 object-contain rounded-full'
            />
          )}
        </label>
      </div>
      {!selectedImage && (
        <div className='mt-2 text-gray-600 text-sm font-medium'>
          Upload Your Display Photo
        </div>
      )}
      {selectedImage && (
        <label
          htmlFor='imageInput'
          className='mt-2 text-sm text-gray-600 cursor-pointer hover:underline hover:text-gray block'
        >
          Edit
        </label>
      )}
      <input
        type='file'
        id='imageInput'
        accept='image/*'
        className='sr-only'
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default CircularIconUploader;
