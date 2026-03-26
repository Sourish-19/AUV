import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import VerticalTabs from "@/components/ui/vertical-tabs";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 pb-24 font-sans">
      
      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-none">
            About Us
          </h1>
          <p className="text-slate-300 max-w-md md:text-right text-sm md:text-base leading-relaxed">
            Exploring the depths of innovation. Learn about our commitment to engineering excellence and the curiosity that drives our underwater explorations.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Team working on engineering project" 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-[#3b82f6] hover:bg-[#2563eb] rounded-full flex items-center justify-center transition-colors shadow-lg"
          >
            <ArrowDown className="text-white w-6 h-6" strokeWidth={2.5} />
          </button>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Group photo" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-700 group-hover:bg-black/10">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-widest text-white text-center leading-[1.1] drop-shadow-xl">
                Group<br/>Photo
              </h2>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0f172a] rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">Who We Are</h2>
            <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                We believe in the power of interdisciplinary collaboration. By merging mechanical robustness with intelligent software, we gain a deep understanding of the unique challenges of the marine environment.
              </p>
              <p>
                Our holistic approach integrates acoustic systems, computer vision, and hydrodynamics to create seamless autonomous behaviors. By staying ahead of the curve and embracing the latest sensors and processors, we ensure our AUVs are cutting-edge solutions capable of complex tasks like object manipulation and path following.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24 md:mt-32">
        <VerticalTabs />
      </section>
    </div>
  );
}
