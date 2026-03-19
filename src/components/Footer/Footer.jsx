import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white -10">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 rounded-full" />
            <h1 className="text-2xl font-bold">mealHub</h1>
          </div>
          <p className="text-sm">
            Delicious meals delivered to your doorstep. Explore, order, and enjoy your favorite foods anytime!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/orders" className="hover:underline">Orders</a></li>
            <li><a href="/plans" className="hover:underline">Plans</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>Email: support@mealhub.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-orange-600 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} mealHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;