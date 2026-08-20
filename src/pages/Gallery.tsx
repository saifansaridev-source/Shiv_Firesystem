import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import PageBanner from '../components/PageBanner'

type Category = 'All' | 'Sprinkler Systems' | 'Fire Alarms' | 'Extinguishers' | 'Site Work'

interface GalleryItem {
  id: number
  src: string
  title: string
  category: Category
  description: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/images/gallery-1.jpg', title: 'Industrial Sprinkler Installation', category: 'Sprinkler Systems', description: 'Complete wet pipe sprinkler system installed at a 50,000 sq ft manufacturing facility in Pune.' },
  { id: 2, src: '/images/gallery-2.jpg', title: 'Addressable Fire Alarm Panel', category: 'Fire Alarms', description: 'State-of-the-art addressable fire alarm system with 200+ detection points at a commercial complex.' },
  { id: 3, src: '/images/gallery-3.jpg', title: 'Fire Extinguisher Installation', category: 'Extinguishers', description: 'Strategic placement of ABC dry powder and CO2 extinguishers across a corporate office building.' },
  { id: 4, src: '/images/gallery-4.jpg', title: 'Piping Network Installation', category: 'Site Work', description: 'Underground and above-ground fire protection piping network at a large residential township.' },
  { id: 5, src: '/images/gallery-5.jpg', title: 'Sprinkler Head Testing', category: 'Sprinkler Systems', description: 'Hydraulic testing and commissioning of sprinkler heads at a warehouse facility in Mumbai.' },
  { id: 6, src: '/images/gallery-6.jpg', title: 'Manual Call Point Installation', category: 'Fire Alarms', description: 'Fire alarm manual call points installed at emergency exits throughout a hospital building.' },
  { id: 7, src: '/images/gallery-7.jpg', title: 'Construction Site Fire Safety', category: 'Site Work', description: 'Temporary fire protection arrangements during construction phase of a high-rise building.' },
  { id: 8, src: '/images/gallery-8.jpg', title: 'Fire Pump Control Panel', category: 'Site Work', description: 'Automatic fire pump controller installation with diesel and electric pump sets.' },
  { id: 9, src: '/images/service-sprinkler.jpg', title: 'Ceiling Sprinkler Grid', category: 'Sprinkler Systems', description: 'Concealed ceiling sprinkler installation in a luxury hotel lobby area.' },
  { id: 10, src: '/images/service-alarm.jpg', title: 'Smoke Detection System', category: 'Fire Alarms', description: 'Optical smoke detectors installed in a data center for early fire detection.' },
  { id: 11, src: '/images/service-extinguisher.jpg', title: 'Wall-Mounted Extinguishers', category: 'Extinguishers', description: 'Fire extinguisher cabinets installed along corridors of a shopping mall.' },
  { id: 12, src: '/images/service-pump.jpg', title: 'Pump Room Setup', category: 'Site Work', description: 'Complete fire pump room with electric, diesel, and jockey pumps for a commercial tower.' },
]

const categories: Category[] = ['All', 'Sprinkler Systems', 'Fire Alarms', 'Extinguishers', 'Site Work']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
    }
  }

  return (
    <div>
      <PageBanner
        title="Project Gallery"
        subtitle="Showcasing our completed fire protection installations and project sites"
        bgImage="/images/gallery-banner.jpg"
        breadcrumb="Gallery"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-fire-red font-heading font-semibold uppercase tracking-wider text-sm">Our Work</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-2">Completed Projects & Installations</h2>
            <div className="w-16 h-1 bg-fire-red mx-auto mt-4" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-heading font-semibold px-6 py-2.5 rounded-lg text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-fire-red text-white shadow-lg shadow-fire-red/30'
                    : 'bg-light-gray text-navy hover:bg-navy hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer bg-navy"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-fire-red rounded-full flex items-center justify-center mb-3">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                    <p className="text-white font-heading font-bold text-center px-4">{item.title}</p>
                    <span className="text-fire-red text-xs font-semibold uppercase tracking-wider mt-1">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4 lightbox-overlay"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-fire-red rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-fire-red rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-fire-red rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <motion.img
                key={filtered[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />
              <div className="text-center mt-6">
                <h3 className="text-white font-heading font-bold text-xl">{filtered[lightboxIndex].title}</h3>
                <p className="text-mid-gray text-sm mt-2 max-w-xl mx-auto">{filtered[lightboxIndex].description}</p>
                <span className="inline-block bg-fire-red text-white text-xs font-heading font-bold px-4 py-1.5 rounded-full mt-3 uppercase tracking-wider">
                  {filtered[lightboxIndex].category}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}