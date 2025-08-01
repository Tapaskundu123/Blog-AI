
import { assets, footer_data } from '../assets/assets.js';
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-gray-200 px-4 py-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-8 px-4 md:px-10">
        {/* Logo & Description */}
        <div className="max-w-sm">
          <img src={assets.logo} alt="logo" className="w-28 mb-4" />
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae
            suscipit maiores deserunt sequi mollitia doloribus, sapiente placeat
            repellat dolore ducimus consequatur aperiam, rem, excepturi quia eaque
            non soluta porro.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full md:w-auto">
          {footer_data.map((item, index) => (
            <div key={index}>
              <h1 className="font-semibold mb-2">{item.title}</h1>
              <ul className="space-y-1">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-sm text-gray-600 hover:text-primary cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t pt-4 text-xs text-gray-600 flex justify-center items-center gap-1 flex-wrap text-center">
        © 2025 <Copyright className="w-3 h-3" /> QuickBlog GreatStack — All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
