import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Upload, MessageCircle, Shield } from 'lucide-react'
import PageBanner from '../components/PageBanner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  })
  const [fileName, setFileName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setFileName('')
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <div>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our fire safety experts for a free consultation"
        bgImage="/images/contact-banner.jpg"
        breadcrumb="Contact Us"
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Send Us a Message</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2 mb-2">Get a Free Quote</h2>
              <p className="text-mid-gray mb-8">Fill out the form below and our team will respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="Enter your full name"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-fire-red focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="Enter your email"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-fire-red focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-fire-red focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-fire-red focus:outline-none transition-colors text-dark-gray"
                    >
                      <option value="">Select Subject</option>
                      <option value="Fire Sprinkler System">Fire Sprinkler System</option>
                      <option value="Fire Hydrant System">Fire Hydrant System</option>
                      <option value="Fire Alarm System">Fire Alarm System</option>
                      <option value="Fire Pump System">Fire Pump System</option>
                      <option value="Fire Extinguisher">Fire Extinguisher</option>
                      <option value="Kitchen Suppression">Kitchen Suppression</option>
                      <option value="Gas Suppression">Gas Suppression</option>
                      <option value="AMC Services">AMC Services</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Your Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    placeholder="Describe your fire safety requirements, project details, building type, area, etc."
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-fire-red focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Attach File (BOQ / Drawing / Specification)</label>
                  <label className="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-lg px-4 py-4 cursor-pointer hover:border-fire-red transition-colors">
                    <Upload size={20} className="text-mid-gray" />
                    <span className="text-mid-gray text-sm">
                      {fileName || 'Click to upload PDF, DOC, XLS, DWG (Max 10MB)'}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.jpg,.png"
                      onChange={handleFile}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-fire-red hover:bg-fire-red-dark text-white font-heading font-bold px-10 py-4 rounded-lg transition-all duration-300 uppercase tracking-wide flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-fire-red/30"
                >
                  <Send size={18} /> Submit Enquiry
                </button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="font-heading font-bold text-xl mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-fire-red/20 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-fire-red" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Phone</p>
                      <a href="tel:+919876543210" className="text-mid-gray text-sm hover:text-fire-red transition-colors block">+91 98765 43210</a>
                      <a href="tel:+919123456789" className="text-mid-gray text-sm hover:text-fire-red transition-colors block">+91 91234 56789</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-fire-red/20 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-fire-red" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Email</p>
                      <a href="mailto:info@shivfiresystems.com" className="text-mid-gray text-sm hover:text-fire-red transition-colors block">info@shivfiresystems.com</a>
                      <a href="mailto:sales@shivfiresystems.com" className="text-mid-gray text-sm hover:text-fire-red transition-colors block">sales@shivfiresystems.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-fire-red/20 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-fire-red" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Head Office</p>
                      <p className="text-mid-gray text-sm">Office No. 12, Fire Safety Complex,<br/>Hinjewadi, Pune - 411057,<br/>Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-fire-red/20 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-fire-red" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Working Hours</p>
                      <p className="text-mid-gray text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-fire-red text-sm font-semibold">Emergency: 24×7 Available</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-navy-light">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-bold py-3 rounded-lg transition-colors uppercase tracking-wide text-sm w-full"
                  >
                    <MessageCircle size={18} /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.755752637645!2d73.7378!3d18.5912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzI4LjMiTiA3M8KwNDQnMTYuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shiv Fire Systems Location"
                  className="w-full"
                />
                <div className="p-4">
                  <p className="font-heading font-semibold text-navy text-sm">Shiv Fire Systems Pvt. Ltd.</p>
                  <p className="text-mid-gray text-xs mt-1">Hinjewadi, Pune, Maharashtra</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-fire-red to-fire-red-dark rounded-2xl p-10 md:p-14 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={36} className="text-white" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">
              24×7 Emergency Fire Safety Support
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our emergency response team is available round the clock for all fire safety emergencies. Don't wait — call us immediately for urgent assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919876543210"
                className="bg-white text-fire-red font-heading font-bold px-10 py-4 rounded-md hover:bg-gray-100 transition-colors uppercase tracking-wide flex items-center gap-2 text-lg"
              >
                <Phone size={22} /> +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-heading font-bold px-10 py-4 rounded-md transition-colors uppercase tracking-wide flex items-center gap-2 text-lg"
              >
                <MessageCircle size={22} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}