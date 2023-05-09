import Image from "next/image";
import { Inter } from "next/font/google";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({ subsets: ["latin"] });

const onChange = (selectedIndex) => {
  console.log("Selected index:", selectedIndex);
};

const onClickItem = (index) => {
  console.log(`Clicked item at index ${index}`);
};

const onClickThumb = (index) => {
  console.log(`Clicked thumb at index ${index}`);
};

const Header = () => {
  return (
    <div className='text-red-500 bg-blue-900 p-2'>
      <div className='flex justify-between'>
        <Logo />
        <div className='flex items-center'>
          <button className='px-4 py-2 bg-orange-400 text-white rounded'>
            Register
          </button>
          <button className='px-4 py-2 bg-blue-500 text-white rounded ml-2'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const CarouselComponent = () => {
  const slides = [
    {
      image: "PLV.jpg",
      caption: "WELCOME HOME, ALUMNI!",
      text: "ALUMNI!",
      description: "Your Alumni Community Awaits You",
    },
    {
      image: "carousel-img.jpg",
      caption: "Slide 2",
      buttonText: "Register",
      buttonLink: "https://example.com/register",
    },
    {
      image: "PLV.jpg",
      caption: "Slide 3",
      buttonText: "Register",
      buttonLink: "https://example.com/register",
    },
  ];

  return (
    <div className='carousel-container'>
      <Carousel
        showArrows={true}
        showThumbs={false}
        onChange={onChange}
        onClickItem={onClickItem}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className='carousel-slide'
          >
            <div className='slide-image'>
              <img
                src={slide.image}
                alt={slide.caption}
              />
            </div>

            <div className='slide-content'>
              <h3>{slide.caption}</h3>
              <p className='description'>{slide.description}</p>
              <button onClick={() => window.open(slide.buttonLink, "_blank")}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
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
        <span className='text-xl font-bold text-red-400'>
          ALUMNI ASSOCIATION
        </span>
      </div>
    </div>
  );
};

const AlumniServices = () => {
  return (
    <div className='text-center bg-blue-900 font-black text-blue-100 text-xl '>
      <h1>ALUMNI SERVICES</h1>
    </div>
  );
};

const Logos = () => {
  const logos = [
    { image: "job-search.png", label: "Job Opportunities" },
    { image: "intermitent.png", label: "Events & Announcements" },
    { image: "script.png", label: "Stories" },
    { image: "comments.png", label: "Forums" },
    { image: "inquiry.png", label: "Surveys" },
    { image: "faq.png", label: "FAQ" },
  ];

  return (
    <div className='flex justify-center mt-4'>
      {logos.map((logo, index) => (
        <div
          key={index}
          className='flex flex-col items-center mx-4'
          style={{ width: "120px" }}
        >
          <img
            src={logo.image}
            alt={`Logo ${index + 1}`}
            className='h-30 w-30'
          />
          <p className='text-center text-sm mt-1'>{logo.label}</p>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <h1 className='text-center text-xl text-blue-900 font-black'>ABOUT</h1>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <div className='bg-blue-900 p-8'>
        <AlumniServices />
        <Logos />
      </div>
      <About />
    </div>
  );
}
// export default function Home() {
//   return (
//     <div className='text-red-500 bg-blue-900 p-2'>
//       <div className='flex justify-between'>
//         <Logo />
//         <div className='flex items-center'>
//           <button className='px-4 py-2 bg-orange-400 text-white rounded'>
//             Register
//           </button>
//           <button className='px-4 py-2 bg-blue-500 text-white rounded ml-2'>
//             Login
//           </button>
//         </div>
//       </div>

//       <div className='carousel-container bg-cyan-200'>
//         <Carousel
//           showArrows={true}
//           onChange={onChange}
//           onClickItem={onClickItem}
//           onClickThumb={onClickThumb}
//         >
//           <div>
//             <img src='header.jpg' />
//           </div>
//           <div>
//             <img src='carousel-img.jpg' />
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// }
