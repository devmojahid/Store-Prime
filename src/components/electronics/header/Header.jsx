'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, ShoppingCart, Heart, Menu, X, User,
  LogOut, Settings, ShoppingBag, UserCircle
} from 'lucide-react';
import TopBar from './TopBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="electronics-header">
      <TopBar />
      
      <div className="electronics-header-main">
        <div className="electronics-container">
          <div className="electronics-header-main-wrapper">
            {/* Logo */}
            <Link href="/" className="electronics-header-main-logo">
              <Image 
                src="/assets/images/logo.png" 
                alt="Electronics Store"
                width={150}
                height={40}
                priority
              />
            </Link>

            {/* Search */}
            <div className="electronics-header-main-search">
              <form className="electronics-header-main-search-form">
                <input 
                  type="text" 
                  placeholder="Search products..."
                  className="electronics-header-main-search-input"
                />
                <button type="submit" className="electronics-header-main-search-btn">
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* Actions */}
            <div className="electronics-header-main-actions">
              <Link href="/wishlist" className="electronics-header-main-actions-item">
                <Heart size={24} />
                <span className="electronics-header-main-actions-item-count">0</span>
              </Link>
              
              {/* Cart Dropdown */}
              <div className="electronics-header-main-actions-item">
                <button onClick={() => toggleDropdown('cart')}>
                  <ShoppingCart size={24} />
                  <span className="electronics-header-main-actions-item-count">0</span>
                </button>
                <div className={`electronics-header-main-actions-item-dropdown cart ${activeDropdown === 'cart' ? 'active' : ''}`} ref={dropdownRef}>
                  <div className="cart-header">
                    <h6>Shopping Cart</h6>
                    <span>0 Items</span>
                  </div>
                  <div className="cart-items">
                    {/* Cart items will go here */}
                  </div>
                  <div className="cart-footer">
                    <div className="total">
                      <span>Total:</span>
                      <span>$0.00</span>
                    </div>
                    <div className="buttons">
                      <Link href="/cart" className="view-cart">View Cart</Link>
                      <Link href="/checkout" className="checkout">Checkout</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Dropdown */}
              <div className="electronics-header-main-actions-item">
                <button onClick={() => toggleDropdown('account')}>
                  <User size={24} />
                </button>
                <div className={`electronics-header-main-actions-item-dropdown account ${activeDropdown === 'account' ? 'active' : ''}`} ref={dropdownRef}>
                  <Link href="/account" className="menu-item">
                    <UserCircle size={16} />
                    <span>My Account</span>
                  </Link>
                  <Link href="/orders" className="menu-item">
                    <ShoppingBag size={16} />
                    <span>My Orders</span>
                  </Link>
                  <Link href="/settings" className="menu-item">
                    <Settings size={16} />
                    <span>Settings</span>
                  </Link>
                  <div className="divider" />
                  <button className="menu-item">
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
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
      <nav className={`electronics-header-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="electronics-container">
          <ul className="electronics-header-nav-list">
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