"use client";
import Juhi from "@/components/Juhi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [IsDate, setIsDate] = useState("30/03/2026");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 10,
        yOffset: Math.random() * -200 - 100,
        xOffset: Math.random() * 100 - 50,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  useEffect(() => {
    // Parse the date components from "DD/MM/YYYY" format
    const [day, month, year] = IsDate.split("/");
    const targetDate = new Date(`${year}-${month}-${day}T00:00:00`).getTime();
    let interval;

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        if (interval) clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
      setIsLoaded(true);
    };

    updateTimer();
    interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [IsDate]);

  if (!isLoaded) {
    return <div className="min-h-screen bg-purple-50"></div>;
  }

  return (
    <div className="">
      {(timeLeft.days > 0 ||
        timeLeft.hours > 0 ||
        timeLeft.minutes > 0 ||
        timeLeft.seconds > 0) && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-purple-50 text-gray-800 font-sans relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute bg-purple-300 rounded-full opacity-0"
                style={{
                  left: p.left,
                  top: p.top,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                animate={{
                  y: [0, p.yOffset],
                  x: [0, p.xOffset],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: p.delay,
                }}
              />
            ))}
          </div>
          
          <div className="z-10 flex flex-col items-center justify-center w-full">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold mb-10 text-blue-600 drop-shadow-sm tracking-tight"
          >
            Kissi Ka Birthay Anne Wala hai ?
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4 sm:gap-6 text-center"
          >
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-lg min-w-[100px] sm:min-w-[120px] transition-all hover:scale-105 hover:shadow-xl">
              <span className="text-5xl sm:text-6xl font-black text-purple-600 tracking-tighter drop-shadow-sm">
                {timeLeft.days}
              </span>
              <span className="text-purple-400 uppercase text-xs sm:text-sm font-bold tracking-widest mt-2 sm:mt-3">
                Days
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-lg min-w-[100px] sm:min-w-[120px] transition-all hover:scale-105 hover:shadow-xl">
              <span className="text-5xl sm:text-6xl font-black text-purple-600 tracking-tighter drop-shadow-sm">
                {timeLeft.hours}
              </span>
              <span className="text-purple-400 uppercase text-xs sm:text-sm font-bold tracking-widest mt-2 sm:mt-3">
                Hours
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-lg min-w-[100px] sm:min-w-[120px] transition-all hover:scale-105 hover:shadow-xl">
              <span className="text-5xl sm:text-6xl font-black text-purple-600 tracking-tighter drop-shadow-sm">
                {timeLeft.minutes}
              </span>
              <span className="text-purple-400 uppercase text-xs sm:text-sm font-bold tracking-widest mt-2 sm:mt-3">
                Minutes
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-lg min-w-[100px] sm:min-w-[120px] transition-all hover:scale-105 hover:shadow-xl">
              <span className="text-5xl sm:text-6xl font-black text-purple-600 tracking-tighter drop-shadow-sm">
                {timeLeft.seconds}
              </span>
              <span className="text-purple-400 uppercase text-xs sm:text-sm font-bold tracking-widest mt-2 sm:mt-3">
                Seconds
              </span>
            </div>
          </motion.div>
          </div>
        </div>
      )}
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && (
          <Juhi/>
        )}
    </div>
  );
}
