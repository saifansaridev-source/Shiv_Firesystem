import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Droplets, Flame, Bell, Gauge, FireExtinguisher, ChefHat, Wind, Wrench,
  ArrowRight, Building2, Factory, Hotel, GraduationCap, Hospital,
  ShoppingBag, Warehouse, Landmark, CheckCircle
} from 'lucide-react'
import PageBanner from '../components/PageBanner'

const services = [
  {
    icon: Droplets,
    title: 'Fire Sprinkler Systems',
    image: '/images/service-sprinkler.jpg',
    desc: 'Comprehensive automatic fire sprinkler system design, supply, installation, and maintenance for all building types.',
    specs: ['Wet & Dry Pipe Systems', 'Pre-action & Deluge Systems', 'NFPA 13 Compliant Design', 'Hydraulic Calculations', 'FM Approved Components', 'Annual Testing & Maintenance'],
  },
  {
    icon: Flame,
    title: 'Fire Hydrant Systems',
    image: '/images/service-hydrant.jpg',
    desc: 'Internal and external fire hydrant systems with complete piping network, valves, and accessories for effective firefighting.',
    specs: ['Internal & External Hydrants', 'Hose Reel Systems', 'Landing Valves', 'Yard Hydrants', 'Underground Piping Network', 'IS 3844 Compliant'],
  },
  {
    icon: Bell,
    title: 'Fire Alarm Systems',
    image: '/images/service-alarm.jpg',
    desc: 'Advanced fire detection and alarm systems including conventional, addressable, and intelligent systems for early warning.',
    specs: ['Conventional Systems', 'Addressable Systems', 'Smoke & Heat Detectors', 'Manual Call Points', 'Public Address Systems', 'BMS Integration'],
  },
  {
    icon: Gauge,
    title: 'Fire Pump Systems',
    image: '/images/service-pump.jpg',
    desc: 'Reliable fire pump sets including electric, diesel, and jockey pumps with automatic controllers for consistent water supply.',
    specs: ['Electric Fire Pumps', 'Diesel Engine Pumps', 'Jockey Pump Sets', 'Automatic Controllers', 'UL/FM Listed Pumps', 'Performance Testing'],
  },
  {
    icon: FireExtinguisher,
    title: 'Fire Extinguishers',
    image: '/images/service-extinguisher.jpg',
    desc: 'Complete range of portable and trolley-mounted fire extinguishers for all fire classes with refilling and maintenance services.',
    specs: ['ABC Dry Powder', 'CO2 Extinguishers', 'Foam Type', 'Clean Agent', 'Trolley Mounted', 'Annual Refilling & Testing'],
  },
  {
    icon: ChefHat,
    title: 'Kitchen Suppression',
    image: '/images/service-kitchen.jpg',
    desc: 'Automatic kitchen hood fire suppression systems designed specifically for commercial and industrial kitchen environments.',
    specs: ['Wet Chemical Systems', 'Automatic Detection', 'Hood & Duct Protection', 'Gas Shut-off Integration', 'UL 300 Listed', 'Restaurant & Hotel Kitchens'],
  },
  {
    icon: Wind,
    title: 'Gas Suppression Systems',
    image: '/images/service-gas.jpg',
    desc: 'Clean agent gas-based fire suppression systems for protecting sensitive equipment and critical infrastructure.',
    specs: ['FM200 (HFC-227ea)', 'Novec 1230', 'CO2 Systems', 'Inert Gas Systems', 'Server Room Protection', 'Data Center Solutions'],
  },
  {
    icon: Wrench,
    title: 'AMC Services',
    image: '/images/service-amc.jpg',
    desc: 'Comprehensive annual maintenance contracts ensuring all fire safety systems remain operational and compliant at all times.',
    specs: ['Quarterly Inspections', 'Preventive Maintenance', 'Emergency Repairs', '24/7 Support', 'Compliance Documentation', 'Spare Parts Management'],
  },
]

const industries = [
  { icon: Building2, label: 'Commercial Buildings' },
  { icon: Factory, label: 'Manufacturing Plants' },
  { icon: Hotel, label: 'Hotels & Resorts' },
  { icon: GraduationCap, label: 'Educational Institutions' },
  { icon: Hospital, label: 'Hospitals & Clinics' },
  { icon: ShoppingBag, label: 'Shopping Malls' },
  { icon: Warehouse, label: 'Warehouses & Logistics' },
  { icon: Landmark, label: 'Government Buildings' },
]

export default function Services() {
  return (
    <div>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive fire protection solutions from design to maintenance"
        bgImage="/images/services-banner.jpg"
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Our Expertise</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2">Complete Fire Safety Solutions</h2>
            <div className="w-16 h-1 bg-fire-red mx-auto mt-4" />
            <p className="text-mid-gray mt-4 max-w-2xl mx-auto">
              From design and engineering to installation, testing, and maintenance — we provide turnkey fire protection solutions tailored to your specific requirements.
            </p>
          </div>

          <div className="space-y-10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow ${
                  i % 2 !== 0 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={`relative h-72 lg:h-full min-h-[300px] ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-fire-red text-white px-4 py-2 rounded-lg">
                    <service.icon size={20} className="inline mr-2" />
                    <span className="font-heading font-bold text-sm">Service #{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className={`p-8 lg:p-10 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-3">{service.title}</h3>
                  <p className="text-mid-gray leading-relaxed mb-6">{service.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {service.specs.map(spec => (
                      <div key={spec} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-fire-red shrink-0" />
                        <span className="text-dark-gray text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-fire-red hover:bg-fire-red-dark text-white font-heading font-bold px-6 py-3 rounded-md transition-all duration-300 uppercase tracking-wide text-sm hover:shadow-lg hover:shadow-fire-red/30"
                  >
                    Get Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Industries</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-2">Industries We Serve</h2>
            <div className="w-16 h-1 bg-fire-red mx-auto mt-4" />
            <p className="text-mid-gray mt-4 max-w-2xl mx-auto">
              Our fire protection solutions are designed and customized for diverse industry verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-navy-light rounded-xl p-8 text-center hover:bg-navy-mid transition-colors group cursor-pointer"
              >
                <div className="w-16 h-16 bg-fire-red/10 group-hover:bg-fire-red rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <ind.icon size={28} className="text-fire-red group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-heading font-semibold text-white">{ind.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-fire-red">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Need a Custom Fire Safety Solution?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Our engineering team will design a tailored fire protection system for your specific requirements. Get a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-fire-red font-heading font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors uppercase tracking-wide"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="bg-fire-red-dark hover:bg-navy text-white font-heading font-bold px-8 py-4 rounded-md transition-colors uppercase tracking-wide border-2 border-white/30"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}