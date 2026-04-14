"use client";

import { StaggeredGrid, BentoItem } from "@/components/ui/staggered-grid";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Github, Instagram, Linkedin, Mail, Youtube, MapPin, Phone, Send } from "lucide-react";
import githubImg from "../assets/github.png";

export function ContactUs() {
  const images = Array.from({ length: 20 }, (_, i) => `https://picsum.photos/seed/contact${i}/400/400`);

  const bentoItems: BentoItem[] = [
    {
      id: 1,
      title: "YouTube",
      href: "https://www.youtube.com/@TeamAUVMIT-B",
      subtitle: "Video Content",
      description: "Watch our latest updates and tutorials.",
      icon: <Youtube className="w-4 h-4" />,
      image: "https://picsum.photos/seed/youtube/600/400"
    },
    {
      id: 2,
      title: "Instagram",
      href: "https://www.instagram.com/auv_mitb?igsh=azA2d2N3eGlqdDlh",
      subtitle: "Visual Updates",
      description: "Follow our journey and behind the scenes.",
      icon: <Instagram className="w-4 h-4" />,
      image: "https://picsum.photos/seed/instagram/600/400"
    },
    {
      id: 3,
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/team-auv-mit-b/",
      subtitle: "Professional Network",
      description: "Connect with our team professionally.",
      icon: <Linkedin className="w-4 h-4" />,
      image: "https://picsum.photos/seed/linkedin/600/400"
    },
    {
      id: 4,
      title: "Gmail",
      href: "mailto:auv.mitb@gmail.com",
      subtitle: "Direct Contact",
      description: "Reach out to us directly via email.",
      icon: <Mail className="w-4 h-4" />,
      image: "https://picsum.photos/seed/gmail/600/400"
    },
    {
      id: 5,
      title: "GitHub",
      href: "https://github.com/MITB-AUVTeam",
      subtitle: "Open Source",
      description: "Check out our open source projects.",
      icon: <Github className="w-4 h-4" />,
      image: githubImg
    },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-transparent pb-0">
        <StaggeredGrid
          images={images}
          bentoItems={bentoItems}
          centerText="CONTACT"
          showFooter={false}
        />

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Get in <span className="text-blue-500">Touch</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We're excited to connect with you! If you're considering supporting our work through sponsorship or would like us to host an outreach session at your school, organization, or any other space, we'd be delighted to collaborate.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Call Us</p>
                    <p className="text-slate-200 text-lg">+91 99999 99999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Email Us</p>
                    <p className="text-slate-200 text-lg">auv.mitb@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Visit Us</p>
                    <p className="text-slate-200 text-lg">Manipal Academy of Higher Education, Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your request..."
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] md:h-[500px] relative border-t border-slate-800/50 mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.586675271813!2d77.61783327576572!3d13.125345711494916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1947265c4855%3A0x6b4a621e25e11360!2sManipal%20Academy%20of%20Higher%20Education%20(MAHE)%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1710350000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%) opacity(80%)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(2,6,23,1)]"></div>
        </div>
      </div>
    </SmoothScroll>
  );
}
