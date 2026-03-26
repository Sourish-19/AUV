import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imgBg from "../assets/hero_parallax/979650ce95a6c67ea15bbbf0ad0681f152bbf7b3.png";
import imgScreenshot20251022182250Photoroom1 from "../assets/hero_parallax/b0b02181d3064ccfa838a5b7d18e44696ad67457.png";
import imgChatGptImageOct252025114243PmPhotoroom1 from "../assets/hero_parallax/ffd48cdd2aea9c7f098608b847a7c0c99b5f4eb8.png";
import imgGeminiGeneratedImageSucjggsucjggsucjPhotoroom13 from "../assets/hero_parallax/724bc4d4bdcd3aa5ae40dbbe2940545d28abfe9c.png";
import imgGeminiGeneratedImage41Nzht41Nzht41NzPhotoroom1 from "../assets/hero_parallax/152fd27cdd307ca2d7657a11e9e58325de922f88.png";
import imgGeminiGeneratedImageK988Jxk988Jxk988Photoroom1 from "../assets/hero_parallax/1c12efb875dc486a28207d77f13caa9aaac52df6.png";
import logoAnsys from "../assets/Backgroud - less sponsors logos/Ansys.png";
import logoDassault from "../assets/Backgroud - less sponsors logos/Dassault Systemes.png";
import logoMIT from "../assets/Backgroud - less sponsors logos/MIT.png";
import logoVicharak from "../assets/Backgroud - less sponsors logos/Vicharak.png";
import logoWisdom from "../assets/Backgroud - less sponsors logos/Wisdom Technologies.png";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { LogoSlider } from "@/components/ui/logo-slider";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { Feature108 } from "@/components/ui/feature108";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  FileTextIcon,
  InputIcon,
  GlobeIcon,
  CalendarIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import { ArrowRight, Cpu, Zap, Code, LayoutDashboard, Shield, Pointer, Navigation } from "lucide-react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { PhotoGallery } from "@/components/ui/gallery";

const features = [
  {
    Icon: Cpu,
    name: "Mechanical",
    description: "Structural integrity and fluid dynamics.",
    href: "/team",
    cta: "View Team",
    background: <img src="https://picsum.photos/seed/mech/400/400" className="absolute -right-20 -top-20 opacity-20 grayscale" alt="Mechanical" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Zap,
    name: "Electrical",
    description: "Power systems and embedded electronics.",
    href: "/team",
    cta: "View Team",
    background: <img src="https://picsum.photos/seed/elec/400/400" className="absolute -right-20 -top-20 opacity-20 grayscale" alt="Electrical" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: LayoutDashboard,
    name: "Design",
    description: "Aerodynamic and ergonomic vehicle design.",
    href: "/team",
    cta: "View Team",
    background: <img src="https://picsum.photos/seed/design/400/400" className="absolute -right-20 -top-20 opacity-20 grayscale" alt="Design" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Management",
    description: "Project timelines and resource allocation.",
    href: "/team",
    cta: "View Team",
    background: <img src="https://picsum.photos/seed/mgmt/400/400" className="absolute -right-20 -top-20 opacity-20 grayscale" alt="Management" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Code,
    name: "Software",
    description: "Autonomous navigation and computer vision.",
    href: "/team",
    cta: "View Team",
    background: <img src="https://picsum.photos/seed/soft/400/400" className="absolute -right-20 -top-20 opacity-20 grayscale" alt="Software" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const baseLogos = [
  <img key="1" src={logoAnsys} alt="Ansys" className="brightness-0 invert" />,
  <img key="2" src={logoDassault} alt="Dassault Systemes" />,
  <img key="3" src={logoMIT} alt="MIT" />,
  <img key="4" src={logoVicharak} alt="Vicharak" />,
  <img key="5" src={logoWisdom} alt="Wisdom Technologies" />,
];

const logos = [
  ...baseLogos,
  ...baseLogos.map((logo) => <img key={`5-${logo.key}`} src={logo.props.src} alt={logo.props.alt} />),
  ...baseLogos.map((logo) => <img key={`9-${logo.key}`} src={logo.props.src} alt={logo.props.alt} />),
  ...baseLogos.map((logo) => <img key={`13-${logo.key}`} src={logo.props.src} alt={logo.props.alt} />),
];

const technicalDetailsTabs = [
  {
    value: "hull",
    icon: <Shield className="h-auto w-4 shrink-0" />,
    label: "Hydrodynamic Hull",
    content: {
      badge: "Structural Integrity",
      title: "Minimized drag, maximized stability.",
      description:
        "Our custom-designed hull minimizes drag and maximizes stability. Constructed from lightweight, high-strength composites, it protects internal components from extreme pressure while maintaining a sleek profile for efficient navigation.",
      buttonText: "Learn More",
      imageSrc: "https://picsum.photos/seed/hull/600/400",
      imageAlt: "Hull Design",
    },
  },
  {
    value: "propulsion",
    icon: <Zap className="h-auto w-4 shrink-0" />,
    label: "Advanced Propulsion",
    content: {
      badge: "Maneuverability",
      title: "Unparalleled control in turbulent currents.",
      description:
        "Equipped with a highly responsive vectored thruster configuration, our vehicle achieves unparalleled maneuverability. The propulsion system is optimized for both high-speed transit and precise station-keeping in turbulent currents.",
      buttonText: "Learn More",
      imageSrc: "https://picsum.photos/seed/propulsion/600/400",
      imageAlt: "Propulsion System",
    },
  },
  {
    value: "sensors",
    icon: <Navigation className="h-auto w-4 shrink-0" />,
    label: "Sensor Suite",
    content: {
      badge: "Autonomy",
      title: "Real-time environmental awareness.",
      description:
        "A comprehensive array of sensors, including high-resolution sonar, DVL, and stereo cameras, provides real-time environmental awareness. Our sensor fusion algorithms ensure accurate mapping and obstacle avoidance in zero-visibility conditions.",
      buttonText: "Learn More",
      imageSrc: "https://picsum.photos/seed/sensors/600/400",
      imageAlt: "Sensor Suite",
    },
  },
];

export function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden">
      
      <section className="relative h-[100vh] w-full overflow-hidden bg-[#000910]">
        
        <div 
          className="absolute inset-0 w-full h-[120vh]"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: 'transform'
          }}
        >
          <img 
            alt="Deep Ocean Background" 
            className="w-full h-full object-cover opacity-60" 
            src={imgBg} 
          />
        </div>

        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            willChange: 'transform'
          }}
        >
          
          <div className="absolute w-[140vw] left-[-55vw] bottom-[-55vw] md:w-[100vw] md:left-[-35vw] md:bottom-[-35vw]">
            <img 
              alt="Left Rocks" 
              className="w-full h-auto object-contain opacity-90" 
              src={imgGeminiGeneratedImage41Nzht41Nzht41NzPhotoroom1} 
            />
          </div>

          <div className="absolute w-[180vw] left-[45vw] bottom-[-55vw] md:w-[120vw] md:left-[35vw] md:bottom-[-35vw]">
            <img 
              alt="Right Rocks" 
              className="w-full h-auto object-contain opacity-90" 
              src={imgGeminiGeneratedImageK988Jxk988Jxk988Photoroom1} 
            />
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            transform: `translateY(${scrollY * 0.6}px)`,
            willChange: 'transform'
          }}
        >
          
          <div className="absolute w-[120vw] left-[-20vw] bottom-[-50vw] md:w-[80vw] md:left-[-10vw] md:bottom-[-30vw]">
            <img 
              alt="Foreground Rocks" 
              className="w-full h-auto object-contain" 
              src={imgGeminiGeneratedImageSucjggsucjggsucjPhotoroom13} 
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10 pt-16">
          <div className="relative flex flex-col items-center gap-[20px] scale-75 md:scale-100">
            
            <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
              <div className="absolute inset-0 border border-[rgba(0,240,255,0.15)] rounded-full">
                
                <div className="absolute w-[8px] h-[8px] bg-[#00f0ff] rounded-full left-1/2 -translate-x-1/2 top-0 shadow-[0_0_20px_#00f0ff]" />
                
                <div className="absolute w-[8px] h-[8px] bg-[#00f0ff] rounded-full left-1/2 -translate-x-1/2 bottom-0 shadow-[0_0_20px_#00f0ff]" />
              </div>

              <div className="absolute inset-[80px] md:inset-[100px] border border-[rgba(0,240,255,0.25)] border-dashed rounded-full" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-[11px] opacity-100">
                <div className="w-[300px] h-[150px] md:w-[400px] md:h-[200px] relative">
                  <img 
                    alt="AUV Logo Main" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                    src={imgScreenshot20251022182250Photoroom1} 
                  />
                </div>
                <div className="font-medium text-3xl md:text-[40px] text-white text-center tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  MIT BENGALURU
                </div>
              </div>

              <div 
                className="absolute w-[300px] h-[250px] md:w-[400px] md:h-[350px] right-[-60px] top-[40px] md:right-[-80px] md:top-[50px] opacity-90"
                style={{
                  transform: `translate(${scrollY * -0.1}px, ${scrollY * -0.15}px)`,
                  willChange: 'transform'
                }}
              >
                <img 
                  alt="School of Fish" 
                  className="w-full h-full object-contain" 
                  src={imgChatGptImageOct252025114243PmPhotoroom1} 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-30" />
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 relative w-full flex justify-center lg:justify-start mt-12 lg:mt-0">
            
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-blue-500/30 rounded-tl-xl hidden md:block"></div>
            <div className="absolute -bottom-16 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)] blur-xl"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl w-[85%] md:w-4/5">
              <img 
                src="https://picsum.photos/seed/auvmain/600/600" 
                alt="AUV Main" 
                className="w-full h-[350px] md:h-[450px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none"></div>
            </div>

            <div className="absolute z-20 -bottom-12 -right-2 md:-right-4 w-[60%] md:w-3/5 rounded-2xl overflow-hidden border-4 border-[#020617] shadow-2xl group">
              <img 
                src="https://picsum.photos/seed/auvtech/400/300" 
                alt="AUV Tech" 
                className="w-full h-[180px] md:h-[250px] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center lg:pl-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-blue-500"></div>
              <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase">About Us</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Pushing the boundaries of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">marine robotics.</span>
            </h3>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              We are a team of passionate engineers and researchers dedicated to developing state-of-the-art autonomous underwater vehicles. Our mission is to create robust, intelligent systems capable of performing complex tasks in the harsh underwater environment, from environmental monitoring to underwater inspection.
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-6 mb-10">
              <div className="flex flex-col border-l-2 border-slate-800 pl-4">
                <span className="text-3xl font-bold text-slate-200 mb-1">5+</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Vehicles Built</span>
              </div>
              <div className="flex flex-col border-l-2 border-slate-800 pl-4">
                <span className="text-3xl font-bold text-slate-200 mb-1">40+</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Team Members</span>
              </div>
              <div className="flex flex-col border-l-2 border-slate-800 pl-4">
                <span className="text-3xl font-bold text-slate-200 mb-1">10+</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Awards Won</span>
              </div>
              <div className="flex flex-col border-l-2 border-slate-800 pl-4">
                <span className="text-3xl font-bold text-slate-200 mb-1">2018</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Established</span>
              </div>
            </div>

            <Button className="w-fit rounded-full px-8 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20" asChild>
              <Link to="/team">Read our full story <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
          
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Sub-systems</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">The core of our vehicle</h3>
        </div>
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>

      <Feature108 
        badge="Technical Details"
        heading="Engineered for performance"
        description="Discover the cutting-edge technology that powers our autonomous underwater vehicle."
        tabs={technicalDetailsTabs}
      />

      <section className="py-24 overflow-hidden border-t border-slate-800/50">
        <div className="flex flex-col items-center justify-center text-center mb-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Our Team</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Meet the minds behind the machine</h3>
        </div>
        <div className="flex w-full justify-center items-center">
          <StaggerTestimonials />
        </div>
      </section>

      <section className="py-24 border-t border-slate-800/50">
        <PhotoGallery />
      </section>

      <section className="py-24 border-t border-slate-800/50 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Trusted By</h2>
          <h3 className="text-2xl font-semibold text-slate-300">Our Proud Sponsors</h3>
        </div>
        <LogoSlider logos={logos} speed={40} direction="left" />
      </section>

      <Footer />
    </div>
  );
}
