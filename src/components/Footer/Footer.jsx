import React from "react";
import logo from "../../assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-20 border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-orange-100 rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Get Fresh Meals Delivered</h3>
            <p className="text-gray-700">Join thousands getting quality meals at their doorstep</p>
          </div>
          <div className="w-full sm:w-auto flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="mealHub logo" className="w-10 h-10 rounded-full" />
              <span className="font-bold text-lg">mealHub</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Fresh, chef-prepared meals delivered daily. Skip the cooking stress and enjoy quality dining.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="hover:text-orange-500 transition-colors duration-150">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {[
            { title: "Product", links: ["Menu", "Plans", "Pricing", "Mobile App"] },
            { title: "Company", links: ["About Us", "Blog", "Careers", "Press"] },
            { title: "Support", links: ["Contact Us", "FAQ", "Delivery Info", "Order Status"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Refund Policy"] }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-orange-500 transition-colors duration-150">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-gray-200">
          {[
            { icon: Phone, title: "Call Us", content: "+1 (555) 123-4567" },
            { icon: Mail, title: "Email", content: "support@mealhub.com" },
            { icon: MapPin, title: "Address", content: "123 Delivery St, Food City, FC 12345" }
          ].map((contact) => (
            <div key={contact.title} className="flex gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                <contact.icon className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="font-semibold">{contact.title}</p>
                <p className="text-sm text-gray-600">{contact.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} mealHub. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500">Sitemap</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;