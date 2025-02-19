'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Heart, Menu, X, User } from 'lucide-react';
import TopBar from './TopBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="electronics-header">
      <TopBar />
      
      <div className="electronics-header-main">
        <div className="container">
          <div className="electronics-header-wrapper">
            {/* Logo */}
            <Link href="/" className="electronics-header-logo">
              <Image 
                src="/assets/images/logo.png" 
                alt="Electronics Store"
                width={150}
                height={40}
                priority
              />
            </Link>

            {/* Search */}
            <div className="electronics-header-search">
              <form className="electronics-search-form">
                <input 
                  type="text" 
                  placeholder="Search products..."
                  className="electronics-search-input"
                />
                <button type="submit" className="electronics-search-btn">
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* Actions */}
            <div className="electronics-header-actions">
              <Link href="/wishlist" className="electronics-header-action-item">
                <Heart size={24} />
                <span className="electronics-header-action-count">0</span>
              </Link>
              <Link href="/cart" className="electronics-header-action-item">
                <ShoppingCart size={24} />
                <span className="electronics-header-action-count">0</span>
              </Link>
              <Link href="/account" className="electronics-header-action-item">
                <User size={24} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="electronics-mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`electronics-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <ul className="electronics-nav-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/brands">Brands</Link></li>
            <li><Link href="/deals">Deals</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 