"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The mechanical team is the backbone of our vehicle, ensuring structural integrity.",
    by: "Mechanical Subsystem",
    imgSrc: "https://picsum.photos/seed/mech/150/150"
  },
  {
    tempId: 1,
    testimonial: "Powering the future. Our electrical systems are designed for maximum efficiency.",
    by: "Electrical Subsystem",
    imgSrc: "https://picsum.photos/seed/elec/150/150"
  },
  {
    tempId: 2,
    testimonial: "Intelligent control and autonomous capabilities driven by cutting-edge software.",
    by: "Software Subsystem",
    imgSrc: "https://picsum.photos/seed/soft/150/150"
  },
  {
    tempId: 3,
    testimonial: "Managing resources, timelines, and ensuring the team operates smoothly.",
    by: "Management Subsystem",
    imgSrc: "https://picsum.photos/seed/mgmt/150/150"
  },
  {
    tempId: 4,
    testimonial: "Designing the sleekest, most aerodynamic body for our vehicle.",
    by: "Design Subsystem",
    imgSrc: "https://picsum.photos/seed/design/150/150"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        if (isCenter) {
          navigate('/team');
        } else {
          handleMove(position);
        }
      }}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-blue-600 text-white border-blue-500" 
          : "z-0 bg-slate-900 text-slate-300 border-slate-800 hover:border-blue-500/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(59, 130, 246, 0.5)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-slate-800"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-slate-800 object-cover object-top mx-auto"
        style={{
          boxShadow: "3px 3px 0px #020617"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium text-center",
        isCenter ? "text-white" : "text-slate-200"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic text-center",
        isCenter ? "text-blue-100" : "text-slate-500"
      )}>
        - {testimonial.by}
      </p>
      {isCenter && (
        <p className="absolute bottom-3 right-8 left-8 text-center text-xs font-bold text-blue-200 uppercase tracking-widest">
          Click to view team &rarr;
        </p>
      )}
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = index - Math.floor(testimonialsList.length / 2);
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-slate-900 border-2 border-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-slate-900 border-2 border-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
