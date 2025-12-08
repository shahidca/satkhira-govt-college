import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaUsers,
  FaUserGraduate,
  FaBook,
  FaTrophy,
} from "react-icons/fa";

const QuickInfo = () => {
  const infoItems = [
    { icon: <FaUniversity />, title: "Departments", value: 32 },
    { icon: <FaUsers />, title: "Faculty Members", value: 120 },
    { icon: <FaUserGraduate />, title: "Current Students", value: 8500 },
    { icon: <FaBook />, title: "Library Books", value: 50000 },
    { icon: <FaTrophy />, title: "National Awards", value: 18 },
  ];

  const originalValues = infoItems.map((i) => i.value);
  const [displayValues, setDisplayValues] = useState(originalValues);

  const [isHovering, setIsHovering] = useState(false);

  // Smooth counter load when component loads
  useEffect(() => {
    const duration = 2000;
    const step = 20;

    let progress = 0;
    const timer = setInterval(() => {
      progress += step;

      setDisplayValues(
        originalValues.map((val) =>
          Math.floor((val * progress) / duration)
        )
      );

      if (progress >= duration) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, []);

  // RANDOM animation when hover
  useEffect(() => {
    let interval;
    if (isHovering) {
      interval = setInterval(() => {
        setDisplayValues(
          originalValues.map((val) => {
            const randomBoost = Math.floor(Math.random() * (val * 0.2)); // 20% random
            return val + randomBoost;
          })
        );
      }, 120);
    } else {
      // Reset smoothly
      interval = setInterval(() => {
        setDisplayValues((prev) =>
          prev.map((num, index) => {
            if (num <= originalValues[index]) return originalValues[index];
            return Math.floor(num - (num - originalValues[index]) * 0.2);
          })
        );
      }, 80);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-20 select-none">
      <div className="max-w-7xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14 text-black"
        >
          University At a Glance
        </motion.h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 perspective-1000"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                rotateX: 10,
                rotateY: -10,
                scale: 1.05,
                boxShadow:
                  "0px 20px 40px rgba(0, 150, 0, 0.25), 0px 0px 30px rgba(0,255,100,0.2)",
              }}
              className="
                bg-white/70 
                backdrop-blur-xl 
                shadow-xl 
                border border-white/40 
                rounded-3xl 
                p-8 
                text-center 
                flex flex-col items-center gap-4 
                transition-all 
                duration-300 
                cursor-pointer 
                transform-gpu
              "
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-5xl text-green-600 drop-shadow-[0_0_10px_rgba(0,255,100,0.5)]"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-3xl font-semibold text-black drop-shadow-sm">
                {displayValues[index].toLocaleString()}+
              </h3>

              <p className="text-gray-700 font-medium tracking-wide text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
