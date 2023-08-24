import React from 'react'

import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className='footer'>
    <div className='footer__links-container'>
      <div className='footer__rights'>
        <Image src='/newlogo.png' alt='logo' width={118} height={18} className='object-contain' />
        <p className='text-base text-white'>
          Carhub 2023 <br/>
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="footer__item">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-white">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-white">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
