"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Target Date: 01 de Setembro de 2026 at 00:00:00
    const targetDate = new Date("2026-09-01T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-2 sm:gap-4 justify-center mt-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-foreground text-amarelo w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center text-2xl sm:text-3xl md:text-5xl font-heading shadow-lg">
              00
            </div>
            <span className="text-foreground text-xs sm:text-sm mt-2 font-medium uppercase tracking-widest">
              ---
            </span>
          </div>
        ))}
      </div>
    );
  }

  const items = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-6 justify-center mt-8">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-foreground text-amarelo w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-heading shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-neutral-800">
            {item.value.toString().padStart(2, "0")}
          </div>
          <span className="text-foreground text-[10px] sm:text-xs mt-3 font-semibold uppercase tracking-[0.2em] opacity-80">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
