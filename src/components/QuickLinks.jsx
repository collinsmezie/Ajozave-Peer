// // src / components / QuickLinks.js

// import React from 'react';

// const QuickLinks = () => {
//   const links = [
//     { name: 'Send Money', icon: 'fas fa-money-bill-alt' },
//     { name: 'Airtime& Data', icon: 'fas fa-mobile-alt' },
//     { name: 'Bill Payment', icon: 'fas fa-file-invoice-dollar' },
//     { name: 'FX Swap', icon: 'fas fa-exchange-alt' }
//   ];

//   return (
//     <div className="mt-4 mx-2">
//       <div className="mb-5">
//         <span className="text-gray-500 mx-4 font-semibold">Quick Actions</span>
//       </div>
//       <div className="bg-white rounded-lg mb-8">
//         <div className="flex justify-between">
//           {links.map((link, index) => (
//             <div key={index} className="flex flex-col items-center space-y-2 w-1/4">

//               <div className="border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
//                 <i className={`${link.icon} ${index === 0 ? 'text-red-400' : index === 1 ? 'text-red-400' : index === 2 ? 'text-red-400' : 'text-red-400'} text-2xl`}></i>
//               </div>
//               <span className="text-gray-600 text-xs text-center font-semibold">
//                 {link.name.split(' ').map((word, idx) => (
//                   <div key={idx}>{word}</div>
//                 ))}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickLinks;











// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const QuickLinks = () => {
//   const links = [
//     { name: 'Send Money', icon: 'fas fa-money-bill-alt' },
//     { name: 'Airtime& Data', icon: 'fas fa-mobile-alt' },
//     { name: 'Bill Payment', icon: 'fas fa-file-invoice-dollar' },
//     { name: 'FX Swap', icon: 'fas fa-exchange-alt' }
//   ];

//   // Slick slider settings
//   const settings = {
//     dots: false, // Hide the dots for a cleaner UI
//     infinite: false,
//     speed: 500,
//     slidesToShow: 2.5, // Slight peek effect for the carousel items
//     slidesToScroll: 1,
//     arrows: false,
//     swipeToSlide: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3.5, // Show more on tablets
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 2.5, // 2.5 slides on smaller screens
//         }
//       }
//     ]
//   };

//   return (
//     <div className="mt-4 mx-2">
//       <div className="mb-3">
//         <span className="text-gray-500 mx-4 font-semibold">Quick Actions</span>
//       </div>
//       <div className="bg-white rounded-lg mb-6 p-4">
//         <Slider {...settings}>
//           {links.map((link, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="border border-gray-300 rounded-full w-14 h-14 flex items-center justify-center mb-3">
//                 <i className={`${link.icon} text-red-400 text-xl`}></i>
//               </div>
//               {link.name.split(' ').map((word, idx) => (
//                 <div className="text-gray-700 text-sm" key={idx}>{word}</div>
//               ))}
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default QuickLinks;



import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CurrencyDollarIcon, DevicePhoneMobileIcon, DocumentTextIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

const QuickLinks = () => {
  const links = [
    { name: 'Send Money', icon: CurrencyDollarIcon },
    { name: 'Airtime& Data', icon: DevicePhoneMobileIcon },
    { name: 'Bill Payment', icon: DocumentTextIcon },
    { name: 'FX Swap', icon: ArrowsRightLeftIcon },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.5,
        }
      }
    ]
  };

  const [clickedIcon, setClickedIcon] = useState(null);

  const handleIconClick = (index) => {
    setClickedIcon(index);
    setTimeout(() => setClickedIcon(null), 300);
  };

  return (
    <div className="mt-4 mx-2">
      <div className="mb-3">
        <span className="text-gray-500 mx-4 font-semibold">Quick Actions</span>
      </div>
      <div className="bg-white rounded-lg mb-6 p-4">
        <Slider {...settings}>
          {links.map((link, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`border border-gray-300 rounded-full w-14 h-14 flex items-center justify-center mb-3 
                transition-transform duration-200 ${
                  clickedIcon === index ? 'transform scale-125 bg-red-100' : ''
                }`}
                onClick={() => handleIconClick(index)}
              >
                <link.icon className="text-red-400 w-6 h-6" />
              </div>
              {link.name.split(' ').map((word, idx) => (
                <div className="text-gray-700 text-sm" key={idx}>{word}</div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default QuickLinks;
