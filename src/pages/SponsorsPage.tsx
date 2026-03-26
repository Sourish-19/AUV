import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import ansysLogo from "../assets/sponsors/ANSYS_logo.png";
import dassaultLogo from "../assets/sponsors/Dassault_systemes_logo.png";
import vicharakLogo from "../assets/sponsors/vicharak_logo.png";
import wisdomLogo from "../assets/sponsors/wisdom_technologies_pvt_ltd_logo.jpg";

const sponsors = [
  { name: "Ansys", logo: ansysLogo, description: "Providing engineering simulation software for optimizing our vehicle designs." },
  { name: "Dassault Systèmes", logo: dassaultLogo, description: "Empowering our team with 3D design and engineering applications." },
  { name: "Vicharak", logo: vicharakLogo, description: "Supporting our technological foundation and electronics." },
  { name: "Wisdom Technologies", logo: wisdomLogo, description: "Guiding our autonomous capabilities and software infrastructure." },
];

export function SponsorsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[calc(100vh-400px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Sponsors</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We are deeply grateful for the generous support of our sponsors. Their contributions empower our team to push the boundaries of marine robotics and autonomous underwater vehicles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/40 rounded-3xl p-8 md:p-12 border border-slate-800/50 hover:bg-slate-900/60 transition-colors group flex flex-col items-center text-center"
            >
              <div className="h-32 md:h-40 w-full flex items-center justify-center mb-8 p-6 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">{sponsor.name}</h3>
              <p className="text-slate-400 leading-relaxed">
                {sponsor.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24 text-center bg-blue-900/20 rounded-3xl p-10 lg:p-16 border border-blue-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Become a Sponsor</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Join us in shaping the future of underwater technology. Partnering with our team provides visibility among top engineering talent and demonstrates your commitment to innovation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700"
          >
            Contact Us for Sponsorship
          </a>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
