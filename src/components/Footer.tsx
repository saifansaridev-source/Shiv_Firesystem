import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUp, Shield } from 'lucide-react'

const branches = [
  { city: 'Pune (Head Office)', address: 'Office No. 12, Fire Safety Complex, Hinjewadi, Pune - 411057' },
  { city: 'Mumbai', address: 'Unit 305, Industrial Estate, Andheri East, Mumbai - 400069' },
  { city: 'Satara', address: 'Shop No. 8, Rajwada Chowk, Satara - 415001' },
  { city: 'Kolhapur', address: 'Plot No. 45, MIDC Shiroli, Kolhapur - 416122' },
  { city: 'Nashik', address: 'Office 201, Ambad MIDC, Nashik - 422010' },
  { city: 'Nagpur', address: 'Shop 15, Hingna MIDC, Nagpur - 440016' },
  { city: 'Bangalore', address: 'Unit 8, Electronic City Phase 2, Bangalore - 560100' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-navy text-white">
      {/* Emergency Banner */}
      <div className="bg-fire-red">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Phone size={20} className="text-white" />
            </div>
            <div>
              <p className="font-heading font-bold text-lg">24×7 Emergency Fire Safety Support</p>
              <p className="text-white/80 text-sm">Immediate response for all fire emergencies across India</p>
            </div>
          </div>
          <a href="tel:+919876543210" className="bg-white text-fire-red font-heading font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors uppercase tracking-wide">
            Call Now: +91 98765 43210
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-fire-red rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-7 h-7">
                  <path d="M32 8c0 0-14 12-14 28 0 8 6 16 14 16s14-8 14-16c0-16-14-28-14-28z" fill="#fff"/>
                  <path d="M32 20c0 0-7 7-7 16 0 4 3 9 7 9s7-5 7-9c0-9-7-16-7-16z" fill="#fbbf24"/>
                </svg>
              </div>
              <div>
                <span className="font-heading font-bold text-lg block">SHIV FIRE SYSTEMS</span>
                <span className="text-mid-gray text-xs tracking-wider">PVT. LTD.</span>
              </div>
            </div>
            <p className="text-mid-gray text-sm leading-relaxed mb-5">
              Leading fire protection engineering company providing comprehensive fire safety solutions across India. ISO 9001:2015 certified with 15+ years of experience.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center text-mid-gray hover:bg-fire-red hover:text-white transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-fire-red">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/gallery', label: 'Project Gallery' },
                { to: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-mid-gray hover:text-fire-red transition-colors text-sm flex items-center gap-2">
                    <span className="text-fire-red">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-heading font-bold text-lg mt-8 mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-fire-red">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-mid-gray">
                <Phone size={14} className="text-fire-red mt-1 shrink-0" />
                <span>+91 98765 43210<br/>+91 91234 56789</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-mid-gray">
                <Mail size={14} className="text-fire-red mt-1 shrink-0" />
                <span>info@shivfiresystems.com<br/>sales@shivfiresystems.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-mid-gray">
                <Clock size={14} className="text-fire-red mt-1 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM<br/>Emergency: 24×7</span>
              </li>
            </ul>
          </div>

          {/* Branch Offices */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-lg mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-fire-red">
              Our Branch Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branches.map(branch => (
                <div key={branch.city} className="bg-navy-light rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-fire-red mt-1 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-sm text-white">{branch.city}</p>
                      <p className="text-mid-gray text-xs mt-0.5 leading-relaxed">{branch.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-mid-gray text-sm text-center">
            © {new Date().getFullYear()} Shiv Fire Systems Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-mid-gray">
            <span className="flex items-center gap-1">
              <Shield size={14} className="text-fire-red" /> ISO 9001:2015 Certified
            </span>
            <span>|</span>
            <span>MSME Registered</span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-fire-red rounded-lg flex items-center justify-center hover:bg-fire-red-dark transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}