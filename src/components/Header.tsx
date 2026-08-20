import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, Shield, Clock, MessageCircle } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-navy text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href="mailto:info@shivfiresystems.com" className="flex items-center gap-1 hover:text-fire-red transition-colors">
              <span>✉</span> info@shivfiresystems.com
            </a>
            <span className="flex items-center gap-1">
              <Clock size={14} /> Mon - Sat: 9:00 AM - 7:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-fire-red/20 px-3 py-0.5 rounded-full pulse-badge">
              <Shield size={14} className="text-fire-red" />
              <span className="text-fire-red font-semibold">24×7 Emergency Support</span>
            </div>
            <a href="tel:+919876543210" className="flex items-center gap-1 font-semibold hover:text-fire-red transition-colors">
              <Phone size={14} /> +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white shadow-lg border-b-2 border-fire-red">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-8 h-8">
                <path d="M32 8c0 0-14 12-14 28 0 8 6 16 14 16s14-8 14-16c0-16-14-28-14-28z" fill="#dc2626"/>
                <path d="M32 20c0 0-7 7-7 16 0 4 3 9 7 9s7-5 7-9c0-9-7-16-7-16z" fill="#f97316"/>
                <path d="M32 32c0 0-3 4-3 8 0 2 1.5 4 3 4s3-2 3-4c0-4-3-8-3-8z" fill="#fbbf24"/>
              </svg>
            </div>
            <div className="leading-tight">
              <span className="text-navy font-heading font-bold text-xl block">SHIV FIRE SYSTEMS</span>
              <span className="text-mid-gray text-xs tracking-wider">PVT. LTD.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-heading font-semibold text-base tracking-wide uppercase transition-colors ${
                  location.pathname === link.path
                    ? 'text-fire-red active'
                    : 'text-navy hover:text-fire-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-navy font-semibold">
              <div className="w-9 h-9 bg-navy/10 rounded-full flex items-center justify-center">
                <Phone size={16} className="text-navy" />
              </div>
              <div className="leading-tight">
                <span className="text-xs text-mid-gray block">Call Us</span>
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </a>
            <Link
              to="/contact"
              className="bg-fire-red hover:bg-fire-red-dark text-white font-heading font-bold px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-fire-red/30 uppercase text-sm tracking-wide"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-navy"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-heading font-semibold text-base uppercase tracking-wide ${
                    location.pathname === link.path
                      ? 'bg-fire-red/10 text-fire-red'
                      : 'text-navy hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <a href="tel:+919876543210" className="flex items-center gap-2 px-4 py-2 text-navy font-semibold">
                  <Phone size={16} /> +91 98765 43210
                </a>
                <div className="flex items-center gap-2 px-4 py-2">
                  <Shield size={16} className="text-fire-red" />
                  <span className="text-fire-red font-semibold text-sm">24×7 Emergency Support</span>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-fire-red text-white font-heading font-bold px-6 py-3 rounded-md uppercase text-sm tracking-wide"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}