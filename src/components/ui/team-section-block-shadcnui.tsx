import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Twitter,
} from "lucide-react";
import * as React from "react";
import { useState } from "react";

const teamCategories = [
  {
    "title": "Founding Team",
    "members": [
      {
        "name": "Animesh Mishra",
        "role": "Team Co-Lead / Software and Automation Subsystem",
        "bio": "Stay hungry. Stay goofy.",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=AnimeshMishra",
        "location": "3rd Year",
        "skills": [
          "Software",
          "Leadership"
        ],
        "gradient": "from-indigo-500/20 via-indigo-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/animesh-mishra-79028a231/",
          "github": "https://github.com/AnimeshM21"
        }
      },
      {
        "name": "Arunava Maiti",
        "role": "Team Co-Lead / Electrical and Mechanical Subsytem Member",
        "bio": "GGs",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=ArunavaMaiti",
        "location": "3rd Year",
        "skills": [
          "Electrical",
          "Mechanical",
          "Leadership"
        ],
        "gradient": "from-indigo-500/20 via-indigo-500/5 to-transparent",
        "social": {
          "linkedin": null,
          "github": null
        }
      },
      {
        "name": "Azad Roy",
        "role": "Teachnical Lead / Electrical and Mechanical Subsystem Member",
        "bio": "For the last time: there's more to controls than PID",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=AzadRoy",
        "location": "3rd Year",
        "skills": [
          "Electrical",
          "Mechanical",
          "Leadership"
        ],
        "gradient": "from-indigo-500/20 via-indigo-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/azad-roy-43329b376",
          "github": null
        }
      }
    ]
  },
  {
    "title": "Senior Team",
    "members": [
      {
        "name": "Chatur Vasireddy",
        "role": "Electrical and Mechanical Subsystem Member",
        "bio": "meow",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=ChaturVasireddy",
        "location": "2nd Year",
        "skills": [
          "Electrical",
          "Mechanical"
        ],
        "gradient": "from-cyan-500/20 via-cyan-500/5 to-transparent",
        "social": {
          "linkedin": null,
          "github": "https://github.com/ChaturVasireddy"
        }
      },
      {
        "name": "Faizal Yusuf Baig",
        "role": "Electrical and Mechanical Subsystem Member",
        "bio": "Time you enjoy wasting is not wasted time.",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=FaizalYusufBaig",
        "location": "2nd Year",
        "skills": [
          "Electrical",
          "Mechanical"
        ],
        "gradient": "from-cyan-500/20 via-cyan-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/faizal-baig-6583b7371?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          "github": null
        }
      },
      {
        "name": "Aditya R Jemshetty",
        "role": "Software and Automation Subsystem Member",
        "bio": "Life is short\u2014 skip DFS, do BFS :)",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=AdityaRJemshetty",
        "location": "2nd Year",
        "skills": [
          "Software"
        ],
        "gradient": "from-cyan-500/20 via-cyan-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/aditya-r-jemshetty-036311331/",
          "github": "https://github.com/Aditya5191"
        }
      },
      {
        "name": "Adwait Bhardwaj",
        "role": "Electrical and Mechanical Subsystem Member",
        "bio": "aquamariner",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=AdwaitBhardwaj",
        "location": "2nd Year",
        "skills": [
          "Electrical",
          "Mechanical"
        ],
        "gradient": "from-cyan-500/20 via-cyan-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/adwaitbhardwaj",
          "github": "https://github.com/vt-abt"
        }
      },
      {
        "name": "Advithiya Duddu",
        "role": "Software and Automation Subsystem Member",
        "bio": "you miss 100% of the shots you don't take",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=AdvithiyaDuddu",
        "location": "2nd Year",
        "skills": [
          "Software"
        ],
        "gradient": "from-cyan-500/20 via-cyan-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/advithiya-duddu",
          "github": null
        }
      },
      {
        "name": "Siddharth P S",
        "role": "Management and Design Subsystem",
        "bio": "i am a fumbler.",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=SiddharthPS",
        "location": "2nd Year",
        "skills": [
          "Management",
          "Design"
        ],
        "gradient": "from-cyan-500/20 via-cyan-500/5 to-transparent",
        "social": {
          "linkedin": null,
          "github": null
        }
      }
    ]
  },
  {
    "title": "Junior Team",
    "members": [
      {
        "name": "Harshika Devarasetty",
        "role": "Electrical Subsystem Trainee",
        "bio": "",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=HarshikaDevarasetty",
        "location": "2nd Year",
        "skills": [
          "Electrical"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/harshika-devarasetty-198b1a389?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
          "github": "https://github.com/Harshika2304"
        }
      },
      {
        "name": "Serah Saju Jacob",
        "role": "Electrical Subsystem Trainee",
        "bio": "",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=SerahSajuJacob",
        "location": "2nd Year",
        "skills": [
          "Electrical"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/serah-jacob-08a4bb33a",
          "github": "https://github.com/serahjacob76"
        }
      },
      {
        "name": "Piyush Sahoo",
        "role": "Software and Automation Subsystem Trainee",
        "bio": "Remember to source install/setup.bash ;)",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=PiyushSahoo",
        "location": "1st Year",
        "skills": [
          "Software"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/piyush-sahoo-230269323/",
          "github": "https://github.com/piyushSahooDB"
        }
      },
      {
        "name": "Aryan Sharma",
        "role": "Electrical Subsystem Trainee",
        "bio": "Plugged in.",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=AryanSharma",
        "location": "1st Year",
        "skills": [
          "Electrical"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/aryan-sharma101106",
          "github": "https://github.com/Aryan-061"
        }
      },
      {
        "name": "Kshithij Jaitly",
        "role": "Mechanical Subsystem Trainee",
        "bio": "Fusion pls dont crash !!!",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=KshithijJaitly",
        "location": "1st Year",
        "skills": [
          "Mechanical"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/kshithij-jaitly-84237b376",
          "github": "https://github.com/kshithij-j"
        }
      },
      {
        "name": "Kanishk Thoguluva Ramesh Babu",
        "role": "Mechanical Subsystem Trainee",
        "bio": "Monkey See Monkey Do",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=KanishkThoguluvaRameshBabu",
        "location": "1st Year",
        "skills": [
          "Mechanical"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": null,
          "github": null
        }
      },
      {
        "name": "Gayatri. B",
        "role": "Electrical Subsystem Trainee",
        "bio": "Yesterday is history, tomorrow is a mystery, but today is a gift.",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=Gayatri.B",
        "location": "1st Year",
        "skills": [
          "Electrical"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": null,
          "github": null
        }
      },
      {
        "name": "Kaushiki Gupta",
        "role": "Management and Design Subsystem Traniee",
        "bio": "",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=KaushikiGupta",
        "location": "1st Year",
        "skills": [
          "Management",
          "Design"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": null,
          "github": null
        }
      },
      {
        "name": "Kopal Agrawal",
        "role": "Electrical Subsystem Trainee",
        "bio": "",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=KopalAgrawal",
        "location": "1st Year",
        "skills": [
          "Electrical"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/kopal-agrawal-912492252/",
          "github": "https://github.com/kopal1237"
        }
      },
      {
        "name": "Shaurya Veer Singh",
        "role": "Mechanical Subsystem Trainee",
        "bio": "Peace",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=ShauryaVeerSingh",
        "location": "1st Year",
        "skills": [
          "Mechanical"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/shaurya-veer-singh-23255b356/",
          "github": "https://github.com/ShauryaVS-bit"
        }
      },
      {
        "name": "Aaishi Gupta",
        "role": "Software and Automation Subsystem Trainee",
        "bio": "",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=AaishiGupta",
        "location": "1st Year",
        "skills": [
          "Software"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": "https://www.linkedin.com/in/aaishi-gupta-1651782a9",
          "github": "https://github.com/aaishii07"
        }
      },
      {
        "name": "Farha P K",
        "role": "Software and Automation Subsystem Trainee",
        "bio": "",
        "image": "https://api.dicebear.com/7.x/identicon/svg?seed=FarhaPK",
        "location": "1st Year",
        "skills": [
          "Software"
        ],
        "gradient": "from-teal-500/20 via-teal-500/5 to-transparent",
        "social": {
          "linkedin": null,
          "github": null
        }
      }
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

function TeamMemberCard({ member }: { member: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left - width / 2) / (width / 2);
    const y = (e.clientY - rect.top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div variants={itemVariants} className="perspective-1000">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full"
      >
        <Card className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a1128]/80 backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
          {/* Animated gradient overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            animate={
              isHovered
                ? { opacity: 1 }
                : { opacity: shouldReduceMotion ? 0.05 : 0 }
            }
          />

          {/* Sparkle effect on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.6 }
            }
            className="absolute right-4 top-4 z-10"
          >
            <Sparkles className="h-5 w-5 text-blue-400" aria-hidden />
          </motion.div>

          <div className="relative z-10 p-6 flex flex-col h-full">
            {/* Avatar Section */}
            <div className="mb-4 flex justify-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, rgba(59,130,246,0.5), rgba(59,130,246,0))`,
                  }}
                  animate={
                    isHovered
                      ? {
                          rotate: shouldReduceMotion ? 0 : 360,
                          scale: shouldReduceMotion ? 1 : [1, 1.08, 1],
                        }
                      : { rotate: 0, scale: 1 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.6 : 3,
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/20 bg-[#0a1128] p-1">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Info Section */}
            <div className="text-center flex-grow flex flex-col">
              <motion.h3
                className="mb-1 text-xl font-semibold tracking-tight text-white"
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {member.name}
              </motion.h3>
              <div className="mb-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-500/10 text-xs uppercase tracking-[0.2em] text-blue-200 border border-blue-500/20 backdrop-blur"
                >
                  {member.role}
                </Badge>
              </div>

              <motion.div
                className="mb-3 flex items-center justify-center gap-1 text-xs text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <MapPin className="h-3 w-3" aria-hidden />
                <span>{member.location}</span>
              </motion.div>

              <p className="mb-4 text-sm text-slate-300 flex-grow">
                {member.bio}
              </p>

              {/* Skills */}
              <motion.div
                className="mb-4 flex flex-wrap justify-center gap-1.5"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                {member.skills.map((skill: string, idx: number) => (
                  <motion.div
                    key={skill}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * idx, type: "spring" }}
                  >
                    <Badge
                      variant="outline"
                      className="border-white/10 bg-white/5 text-xs text-slate-300 transition-colors hover:bg-white/10"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center gap-2 mt-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Github, label: "GitHub" },
                  { icon: Mail, label: "Email" },
                ].map((social, idx) => (
                  <motion.div
                    key={social.label}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isHovered
                        ? { scale: 1, rotate: shouldReduceMotion ? 0 : 0 }
                        : { scale: 0.85, rotate: 0 }
                    }
                    transition={{
                      delay: isHovered ? 0.1 * idx : 0,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:text-white hover:bg-white/10"
                    >
                      <motion.div
                        transition={{
                          duration: shouldReduceMotion ? 0.25 : 0.4,
                        }}
                      >
                        <social.icon className="h-4 w-4" aria-hidden />
                      </motion.div>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function TeamSectionBlock() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="team-section-heading"
      className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1, 1.18, 1],
            rotate: shouldReduceMotion ? 0 : [0, 90, 0],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: shouldReduceMotion ? 0.6 : 18,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear",
          }}
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1.1, 1, 1.1],
            rotate: shouldReduceMotion ? 0 : [0, -90, 0],
            opacity: [0.12, 0.32, 0.12],
          }}
          transition={{
            duration: shouldReduceMotion ? 0.6 : 16,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-600/20 blur-[150px]"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="mb-16 text-center"
        >
          <motion.div className="mb-6 inline-block">
            <Badge
              className="gap-2 bg-blue-500/10 text-blue-300 border border-blue-500/20 backdrop-blur"
              variant="secondary"
            >
              <Sparkles className="h-3 w-3" aria-hidden />
              Our Dream Team
            </Badge>
          </motion.div>

          <motion.h2
            id="team-section-heading"
            className="mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Meet the people behind
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              our success
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A diverse team of talented individuals working together to build
            amazing products and deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Team Categories */}
        <div className="space-y-24">
          {teamCategories.map((category, catIdx) => (
            <div key={category.title}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-10 flex items-center gap-4"
              >
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent" />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {category.members.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
