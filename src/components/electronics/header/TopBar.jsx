'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="electronics-topbar">
      <div className="container">
        <div className="electronics-topbar-wrapper">
          <div className="electronics-topbar-left">
            <div className="electronics-topbar-info">
              <span className="electronics-topbar-item">
                <Mail size={14} />
                <a href="mailto:info@electronics.com">info@electronics.com</a>
              </span>
              <span className="electronics-topbar-item">
                <Phone size={14} />
                <a href="tel:+1234567890">+1 234 567 890</a>
              </span>
              <span className="electronics-topbar-item">
                <MapPin size={14} />
                <span>123 Main St, New York, NY 10001</span>
              </span>
            </div>
          </div>
          <div className="electronics-topbar-right">
            <div className="electronics-topbar-links">
              <Link href="/about-us">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/track-order">Track Order</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 