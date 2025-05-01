
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type StatProps = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

const StatCounter = ({ value, label, suffix = "", prefix = "", duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const increment = end / 100;
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, duration / 100);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div ref={counterRef} className="text-center">
      <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {prefix}{count}{suffix}
      </p>
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

const Stats = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-r from-fivem-gray-dark to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-fivem-orange opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-fivem-orange-dark opacity-10 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4">
          <StatCounter value={350} label={t('stats.activePlayers')} suffix="+" />
          <StatCounter value={300} label={t('stats.customVehicles')} suffix="+" />
          <StatCounter value={75} label={t('stats.customJobs')} suffix="+" />
          <StatCounter value={99.9} label={t('stats.serverUptime')} suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
