import { motion } from 'framer-motion'

interface PageBannerProps {
  title: string
  subtitle: string
  bgImage: string
  breadcrumb: string
}

export default function PageBanner({ title, subtitle, bgImage, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden">
      <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 banner-overlay" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-4xl md:text-5xl text-white mb-3"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-mid-gray text-base md:text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-sm text-mid-gray"
        >
          <span className="text-white">Home</span>
          <span className="mx-2">/</span>
          <span className="text-fire-red">{breadcrumb}</span>
        </motion.div>
      </div>
    </section>
  )
}