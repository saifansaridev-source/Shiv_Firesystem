import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Droplets, Flame, Bell, Gauge, FireExtinguisher, ChefHat, Wind, Wrench,
  CheckCircle, Phone, MessageCircle, Upload, Shield, Users, Award,
  Clock, MapPin, Star, ArrowRight, Building2, Factory, Hotel,
  GraduationCap, Hospital, ShoppingBag, Warehouse, Landmark
} from 'lucide-react'

const services = [
  { icon: Droplets, title: 'Fire Sprinkler Systems', desc: 'Automatic wet & dry sprinkler systems for commercial, residential & industrial buildings.' },
  { icon: Flame, title: 'Fire Hydrant Systems', desc: 'Internal & external hydrant systems with hose reels, landing valves & yard hydrants.' },
  { icon: Bell, title: 'Fire Alarm Systems', desc: 'Conventional & addressable fire detection and alarm systems with smoke & heat detectors.' },
  { icon: Gauge, title: 'Fire Pump Systems', desc: 'Electric, diesel & jockey pump sets with controllers for reliable water supply.' },
  { icon: FireExtinguisher, title: 'Fire Extinguishers', desc: 'ABC, CO2, foam & clean agent portable and trolley-mounted fire extinguishers.' },
  { icon: ChefHat, title: 'Kitchen Suppression', desc: 'Automatic kitchen hood fire suppression systems for commercial & industrial kitchens.' },
  { icon: Wind, title: 'Gas Suppression', desc: 'FM200, Novec 1230 & CO2 gas-based suppression for server rooms & data centers.' },
  { icon: Wrench, title: 'AMC Services', desc: 'Annual maintenance contracts for all fire safety systems with 24/7 support.' },
]

const stats = [
  { value: '500+', label: 'Projects Completed', icon: Building2 },
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '35+', label: 'Expert Engineers', icon: Award },
  { value: '24/7', label: 'Support Available', icon: Clock },
  { value: 'Pan India', label: 'Service Coverage', icon: MapPin },
  { value: 'ISO', label: 'Certified Company', icon: Shield },
]

const whyChoose = [
  'ISO 9001:2015 Certified Company',
  '15+ Years of Industry Experience',
  'NFPA & NBC Compliant Designs',
  'Pan India Service Network',
  'Turnkey Project Execution',
  'Competitive Pricing & Transparent Quotations',
  'Dedicated Project Managers',
  '24/7 Emergency Support & AMC Services',
  'In-house Design & Engineering Team',
  'Government & Private Sector Projects',
]

const clients = [
  'Tata Group', 'L&T', 'Mahindra', 'Reliance', 'Bajaj', 'Kirloskar',
  'Godrej', 'Wipro', 'Infosys', 'Tech Mahindra'
]

const certifications = [
  'ISO 9001:2015', 'MSME Registered', 'NFPA Member', 'NBC Compliant',
  'BIS Certified', 'TAC Approved'
]

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img src="/images/hero-bg.jpg" alt="Fire Protection" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-fire-red/20 border border-fire-red/30 rounded-full px-5 py-2 mb-6"
            >
              <Shield size={16} className="text-fire-red" />
              <span className="text-white text-sm font-semibold">ISO 9001:2015 Certified | NFPA Compliant</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-5xl md:text-7xl text-white leading-tight mb-4"
            >
              COMPLETE FIRE
              <br />
              <span className="text-fire-red">PROTECTION</span>
              <br />
              SOLUTIONS
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {['Design', 'Supply', 'Installation', 'Testing', 'Commissioning', 'AMC'].map((item, i) => (
                <span key={item} className="text-white/80 font-heading font-medium text-lg">
                  {item}{i < 5 && <span className="text-fire-red ml-3">|</span>}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-mid-gray text-lg mb-10 max-w-xl leading-relaxed"
            >
              India's trusted fire safety engineering company delivering end-to-end fire protection solutions for commercial, industrial & residential projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="bg-fire-red hover:bg-fire-red-dark text-white font-heading font-bold px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-fire-red/30 uppercase tracking-wide flex items-center gap-2"
              >
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <label className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-heading font-bold px-8 py-4 rounded-md transition-all duration-300 uppercase tracking-wide flex items-center gap-2 cursor-pointer">
                <Upload size={18} /> Upload BOQ
                <input type="file" className="hidden" accept=".pdf,.xlsx,.xls,.doc,.docx" />
              </label>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-heading font-bold px-8 py-4 rounded-md transition-all duration-300 uppercase tracking-wide flex items-center gap-2"
              >
                <MessageCircle size={18} /> WhatsApp Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-navy-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="stat-item text-center py-8 px-4"
              >
                <stat.icon size={28} className="text-fire-red mx-auto mb-2" />
                <p className="font-heading font-bold text-2xl md:text-3xl text-white">{stat.value}</p>
                <p className="text-mid-gray text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services + Quote Form */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">What We Offer</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2">Our Fire Safety Services</h2>
            <div className="w-16 h-1 bg-fire-red mx-auto mt-4" />
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Service Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="service-card bg-white rounded-xl p-6 border border-gray-100 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-navy/5 group-hover:bg-fire-red rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                    <service.icon size={26} className="text-navy group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">{service.title}</h3>
                  <p className="text-mid-gray text-sm leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-fire-red font-semibold text-sm mt-3 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-xl p-8 text-white self-start sticky top-32"
            >
              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-2xl">Get Free Quote</h3>
                <p className="text-mid-gray text-sm mt-1">Fill the form & we'll respond within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="w-full bg-navy-light border border-navy-mid rounded-lg px-4 py-3 text-sm text-white placeholder:text-mid-gray focus:border-fire-red focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  className="w-full bg-navy-light border border-navy-mid rounded-lg px-4 py-3 text-sm text-white placeholder:text-mid-gray focus:border-fire-red focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                  className="w-full bg-navy-light border border-navy-mid rounded-lg px-4 py-3 text-sm text-white placeholder:text-mid-gray focus:border-fire-red focus:outline-none transition-colors"
                />
                <select
                  value={formData.service}
                  onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                  className="w-full bg-navy-light border border-navy-mid rounded-lg px-4 py-3 text-sm text-mid-gray focus:border-fire-red focus:outline-none transition-colors"
                >
                  <option value="">Select Service</option>
                  {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="w-full bg-navy-light border border-navy-mid rounded-lg px-4 py-3 text-sm text-white placeholder:text-mid-gray focus:border-fire-red focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-fire-red hover:bg-fire-red-dark text-white font-heading font-bold py-3.5 rounded-lg transition-all duration-300 uppercase tracking-wide hover:shadow-lg hover:shadow-fire-red/30"
                >
                  Submit Enquiry
                </button>
              </form>
              <p className="text-mid-gray text-xs text-center mt-4">
                Or call us at <a href="tel:+919876543210" className="text-fire-red font-semibold">+91 98765 43210</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Trusted By</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2">Our Valued Clients</h2>
            <div className="w-16 h-1 bg-fire-red mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-light-gray rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
              >
                <span className="font-heading font-bold text-navy/40 text-lg">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-2 text-white"
              >
                <Award size={20} className="text-fire-red" />
                <span className="font-heading font-semibold text-sm uppercase tracking-wider">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2 mb-6">India's Trusted Fire Safety Partner</h2>
              <p className="text-mid-gray leading-relaxed mb-8">
                Shiv Fire Systems Pvt. Ltd. is a leading fire protection engineering company with a proven track record of delivering world-class fire safety solutions. Our team of certified engineers ensures every project meets the highest safety standards.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {whyChoose.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle size={18} className="text-fire-red mt-0.5 shrink-0" />
                    <span className="text-dark-gray text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-navy rounded-2xl p-10 text-white">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <p className="font-heading font-bold text-5xl text-fire-red">15+</p>
                    <p className="text-mid-gray text-sm mt-1">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-5xl text-fire-red">500+</p>
                    <p className="text-mid-gray text-sm mt-1">Projects Done</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-5xl text-fire-red">8+</p>
                    <p className="text-mid-gray text-sm mt-1">Branch Offices</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-bold text-5xl text-fire-red">100%</p>
                    <p className="text-mid-gray text-sm mt-1">Client Satisfaction</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-navy-light text-center">
                  <p className="text-mid-gray text-sm mb-4">Ready to secure your property?</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-fire-red hover:bg-fire-red-dark text-white font-heading font-bold px-8 py-3 rounded-md transition-all duration-300 uppercase tracking-wide"
                  >
                    Contact Us Today <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Industries We Serve</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2">Protecting Every Sector</h2>
            <div className="w-16 h-1 bg-fire-red mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { icon: Building2, label: 'Commercial' },
              { icon: Factory, label: 'Industrial' },
              { icon: Hotel, label: 'Hospitality' },
              { icon: GraduationCap, label: 'Education' },
              { icon: Hospital, label: 'Healthcare' },
              { icon: ShoppingBag, label: 'Retail' },
              { icon: Warehouse, label: 'Warehouses' },
              { icon: Landmark, label: 'Government' },
            ].map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="w-12 h-12 bg-navy/5 group-hover:bg-fire-red rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                  <ind.icon size={22} className="text-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-heading font-semibold text-sm text-navy">{ind.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}