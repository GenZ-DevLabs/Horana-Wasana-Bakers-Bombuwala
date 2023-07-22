import React from 'react';
import ContactUsForm from '../components/ContactUsForm';
import backgroundImageUrl from '../assets/contact_us_background.jpg';

const ContactUsPage = () => {
  
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set the desired background color with opacity
        }}
      >
        <div className="bg-w border-2 border-gray-300 p-5 rounded-2xl shadow-2xl max-w-xl w-full " style={{ marginLeft: '30.5%' }}>
          <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
          <ContactUsForm />
        </div>
      </div>
    );
  };
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <div className="bg-gray-200 p-6 rounded shadow-xl max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//         <ContactUsForm />
//       </div>
//     </div>
//   );
// };

export default ContactUsPage;
