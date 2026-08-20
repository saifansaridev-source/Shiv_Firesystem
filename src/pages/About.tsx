import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Shield, CheckCircle, Briefcase, TrendingUp } from 'lucide-react'
import PageBanner from '../components/PageBanner'

const milestones = [
  { year: '2008', title: 'Company Founded', desc: 'Shiv Fire Systems established in Pune with a vision to provide world-class fire safety solutions.' },
  { year: '2011', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 certification, reinforcing our commitment to quality management.' },
  { year: '2014', title: '100th Project', desc: 'Completed 100th successful fire protection project across Maharashtra.' },
  { year: '2016', title: 'Mumbai Expansion', desc: 'Opened Mumbai branch office to serve the growing demand in the metropolitan region.' },
  { year: '2018', title: 'Pan India Presence', desc: 'Expanded operations to 5+ cities including Bangalore, Nagpur, and Nashik.' },
  { year: '2020', title: '300+ Projects', desc: 'Crossed 300 successful project completions with zero safety incidents.' },
  { year: '2022', title: 'NFPA Membership', desc: 'Became an official member of the National Fire Protection Association (NFPA).' },
  { year: '2024', title: '500+ Projects', desc: 'Achieved the milestone of 500+ completed projects with 100+ satisfied clients.' },
]

const team = [
  { name: 'Rajesh Shinde', role: 'Managing Director', desc: '20+ years in fire safety engineering with expertise in large-scale industrial projects.' },
  { name: 'Priya Kulkarni', role: 'Technical Director', desc: 'NFPA certified engineer specializing in fire sprinkler and suppression system design.' },
  { name: 'Amit Patil', role: 'Operations Head', desc: 'Expert in project management and on-site execution with 15+ years of experience.' },
  { name: 'Sneha Deshmukh', role: 'Business Development', desc: 'Leading client relationships and strategic partnerships across India.' },
]

const certifications = [
  'ISO 9001:2015 Quality Management',
  'NFPA Member Organization',
  'MSME Registered Enterprise',
  'NBC India Compliant',
  'BIS Certified Products',
  'TAC Approved Contractor',
]

export default function About() {
  return (
    <div>
      <PageBanner
        title="About Us"
        subtitle="Discover our journey, mission, and commitment to fire safety excellence"
        bgImage="/images/about-banner.jpg"
        breadcrumb="About Us"
      />

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Who We Are</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2 mb-6">India's Leading Fire Protection Engineering Company</h2>
              <p className="text-mid-gray leading-relaxed mb-4">
                Shiv Fire Systems Pvt. Ltd. is a premier fire protection engineering company headquartered in Pune, Maharashtra. Established in 2008, we have grown to become one of India's most trusted names in fire safety solutions, serving clients across commercial, industrial, and residential sectors.
              </p>
              <p className="text-mid-gray leading-relaxed mb-4">
                With a team of 35+ certified engineers and technicians, we provide end-to-end fire protection services including design, supply, installation, testing, commissioning, and annual maintenance of all types of fire safety systems.
              </p>
              <p className="text-mid-gray leading-relaxed mb-6">
                Our commitment to quality, safety, and client satisfaction has earned us the trust of 100+ clients and the successful completion of 500+ projects across India.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: '15+', label: 'Years' },
                  { value: '500+', label: 'Projects' },
                  { value: '35+', label: 'Engineers' },
                  { value: '8+', label: 'Branches' },
                ].map(stat => (
                  <div key={stat.label} className="text-center bg-light-gray rounded-xl p-4">
                    <p className="font-heading font-bold text-2xl text-fire-red">{stat.value}</p>
                    <p className="text-mid-gray text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src="/images/service-amc.jpg" alt="Our Team" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-fire-red text-white rounded-xl p-6 shadow-xl">
                <p className="font-heading font-bold text-3xl">Since</p>
                <p className="font-heading font-bold text-4xl">2008</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-10 border-l-4 border-fire-red"
            >
              <div className="w-16 h-16 bg-fire-red/10 rounded-xl flex items-center justify-center mb-6">
                <Target size={32} className="text-fire-red" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">Our Mission</h3>
              <p className="text-mid-gray leading-relaxed">
                To provide comprehensive, reliable, and cost-effective fire protection solutions that safeguard lives, property, and businesses. We are committed to delivering engineering excellence through innovation, quality workmanship, and unwavering dedication to safety standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl p-10 border-l-4 border-navy"
            >
              <div className="w-16 h-16 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-navy" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">Our Vision</h3>
              <p className="text-mid-gray leading-relaxed">
                To be India's most trusted and innovative fire safety engineering company, setting new benchmarks in fire protection technology and service delivery. We aspire to create a safer India by making world-class fire safety accessible to every building and industry.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Safety First', desc: 'Uncompromising commitment to the highest safety standards in every project.' },
              { icon: Award, title: 'Quality Excellence', desc: 'ISO certified processes ensuring consistent quality in design and execution.' },
              { icon: Users, title: 'Client Focus', desc: 'Building lasting relationships through transparency, trust, and timely delivery.' },
              { icon: TrendingUp, title: 'Innovation', desc: 'Embracing latest technologies and best practices in fire protection engineering.' },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={26} className="text-fire-red" />
                </div>
                <h4 className="font-heading font-bold text-lg text-navy mb-2">{value.title}</h4>
                <p className="text-mid-gray text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2">Key Milestones</h2>
            <div className="w-16 h-1 bg-fire-red mx-auto mt-4" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`md:flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-light-gray rounded-xl p-6 inline-block">
                      <span className="font-heading font-bold text-fire-red text-2xl">{m.year}</span>
                      <h4 className="font-heading font-bold text-navy text-lg mt-1">{m.title}</h4>
                      <p className="text-mid-gray text-sm mt-2 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-16 justify-center">
                    <div className="w-4 h-4 bg-fire-red rounded-full border-4 border-white shadow-md" />
                  </div>
                  <div className="md:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Our Team</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2">Leadership & Management</h2>
            <div className="w-16 h-1 bg-fire-red mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="h-52 bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                    <Briefcase size={36} className="text-white/60" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-heading font-bold text-lg text-navy">{member.name}</h4>
                  <p className="text-fire-red font-heading font-semibold text-sm mt-1">{member.role}</p>
                  <p className="text-mid-gray text-sm mt-3 leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-white">Certifications & Accreditations</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-navy-light rounded-xl p-5 text-center hover:bg-navy-mid transition-colors"
              >
                <Award size={28} className="text-fire-red mx-auto mb-3" />
                <p className="text-white font-heading font-semibold text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}