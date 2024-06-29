import React from 'react';

const Footer = () => {
  const handleGuidanceClick = () => {
    // Remplacez cette URL par le lien spécifique que vous souhaitez utiliser
    window.location.href = 'https://example.com'; 
  };

  return (
    <footer className="bg-[#67C2EE] text-white py-16 mt-60">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div className="w-2/3">
            <h1 className="text-5xl font-bold text-left">
              Verify the <br /> product passport
            </h1>
            <p className="mt-4 text-blue-900">You can download the product passport</p>
            <p className="mt-4 text-blue-900 mb-8">
              This Passport is following the{' '}
              <span
                className="cursor-pointer underline hover:text-blue-700"
                onClick={handleGuidanceClick}
              >
                Battery Pass Content Guidance
              </span>
            </p>
            <div className="dropdown dropdown-right">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-blue-800 text-white hover:bg-blue-900"
              >
                Verify product batteryPassport
              </div>
              <ul className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <a className="text-blue-900">Download battery passport</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/3 flex justify-end">
            <img src="/images/codeqr.png" className="" alt="QR Code" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
