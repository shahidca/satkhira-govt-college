import { useEffect, useState } from "react";
import { FaUniversity, FaUsers, FaUserGraduate, FaBook, FaTrophy } from "react-icons/fa";

const QuickInfo = () => {
  const infoItems = [
    { icon: <FaUniversity className="text-4xl text-green-600" />, title: "Departments", value: 32 },
    { icon: <FaUsers className="text-4xl text-green-600" />, title: "Faculty Members", value: 120 },
    { icon: <FaUserGraduate className="text-4xl text-green-600" />, title: "Current Students", value: 8500 },
    { icon: <FaBook className="text-4xl text-green-600" />, title: "Library Books", value: 50000 },
    { icon: <FaTrophy className="text-4xl text-green-600" />, title: "National Awards", value: 18 },
  ];

  const useCounter = (end) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 3000; 
      const stepTime = 20; 
      const totalSteps = duration / stepTime;
      const increment = end / totalSteps;

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, stepTime);

      return () => clearInterval(counter);
    }, [end]);

    return count;
  };

  return (
    <section className="w-full bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">University At a Glance</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {infoItems.map((item, index) => {
            const animatedValue = useCounter(item.value);
            return (
              <div
                key={index}
                className="
                  bg-white 
                  shadow-lg 
                  rounded-2xl 
                  p-6 
                  text-center 
                  flex flex-col items-center gap-3 
                  transition-all duration-300 
                  hover:shadow-xl 
                  hover:-translate-y-1 
                  cursor-pointer
                "
              >
                <div>{item.icon}</div>
                <h3 className="text-2xl font-semibold text-black">
                  {animatedValue.toLocaleString()}+
                </h3>
                <p className="text-gray-600">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
