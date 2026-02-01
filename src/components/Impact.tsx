import { useEffect, useState, useRef } from 'react';
import { Leaf, Users, Utensils, Building } from 'lucide-react';

const stats = [
  { icon: Utensils, value: 50000, label: 'Meals Rescued', suffix: '+' },
  { icon: Users, value: 10000, label: 'Active Heroes', suffix: '+' },
  { icon: Building, value: 500, label: 'Partner Businesses', suffix: '+' },
  { icon: Leaf, value: 25000, label: 'kg CO₂ Saved', suffix: '' },
];

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className="relative group p-8 rounded-3xl bg-card border border-border shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <stat.icon className="w-8 h-8 text-primary-foreground" />
        </div>

        {/* Value */}
        <div className="text-4xl sm:text-5xl font-extrabold mb-2 gradient-text">
          {count.toLocaleString()}{stat.suffix}
        </div>

        {/* Label */}
        <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
      </div>
    </div>
  );
};

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      {/* Floating Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-2xl animate-float stagger-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Together, We're Making a <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every meal saved is a step towards a sustainable future. See the collective impact of our community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Additional Message */}
        <div className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/20 to-secondary/10 border border-border">
          <p className="text-xl sm:text-2xl font-semibold mb-2">
            🌍 Every plate matters. Every action counts.
          </p>
          <p className="text-muted-foreground">
            Join thousands of food heroes and be part of the solution to food waste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
