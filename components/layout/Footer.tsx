import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-[#CACACA] text-sm">
      <div className="bg-[#34967C] w-full h-[30px]"></div>
      <div className="flex flex-col md:flex-row justify-between gap-12 p-6 md:p-8">
        <div className="flex flex-col justify-around gap-4 md:w-2/5">
          <a href="/">
            <img
              src="./assets/Vector1.png"
              alt="ALX Logo"
              className="h-8 w-auto"
            />
          </a>
          <p>
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between text-[#CACACA] gap-8 flex-1">
          <div>
            <h2 className="text-lg font-semibold mb-3">Explore</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">Apartment in Dubai</a>
              </li>
              <li>
                <a href="#">Hotels in New York</a>
              </li>
              <li>
                <a href="#">Villa in Spain</a>
              </li>
              <li>
                <a href="#">Mansion in Indonesia</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Brand</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Help</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Cancel booking</a>
              </li>
              <li>
                <a href="#">Refunds Process</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 mx-6 md:mx-8" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 md:p-8 text-center md:text-left">
        <p>
          Some hotels require you to cancel more than 24 hours before check-in.
          Details{" "}
          <a href="#" className="text-[#34967C] underline">
            here
          </a>
        </p>
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Policy service</a>
          </li>
          <li>
            <a href="#">Cookies Policy</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
