import React from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaMicroscope,
  FaAtom,
  FaUserGraduate,
  FaProjectDiagram,
  FaLightbulb,
  FaCalculator,
} from "react-icons/fa";

export default function ScienceAndMath() {
  const departments = [
    {
      name: "Physics",
      icon: <FaAtom className="text-green-600 w-12 h-12" />,
      students: 120,
      description: "Explore the universe with theoretical & experimental physics.",
    },
    {
      name: "Chemistry",
      icon: <FaFlask className="text-green-600 w-12 h-12" />,
      students: 100,
      description: "Learn the properties and reactions of matter in modern labs.",
    },
    {
      name: "Biology",
      icon: <FaMicroscope className="text-green-600 w-12 h-12" />,
      students: 90,
      description: "Study living organisms and life sciences with cutting-edge tech.",
    },
    {
      name: "Mathematics",
      icon: <FaCalculator className="text-green-600 w-12 h-12" />,
      students: 110,
      description: "Develop analytical & problem-solving skills in pure & applied math.",
    },
  ];

  const features = [
    {
      title: "Modern Labs",
      icon: <FaLightbulb className="text-green-600 w-10 h-10" />,
      description: "State-of-the-art labs for hands-on experiments and research projects.",
    },
    {
      title: "Expert Faculty",
      icon: <FaUserGraduate className="text-green-600 w-10 h-10" />,
      description: "Learn from experienced faculty with years of research and teaching expertise.",
    },
    {
      title: "Group Research",
      icon: <FaProjectDiagram className="text-green-600 w-10 h-10" />,
      description: "Collaborate with peers on innovative projects and scientific publications.",
    },
  ];

  const stats = [
    { title: "Total Students", value: departments.reduce((acc, d) => acc + d.students, 0) },
    { title: "Departments", value: departments.length },
    { title: "Faculty Members", value: 25 },
    { title: "Research Projects", value: 18 },
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      feedback: "The Science department provided hands-on experience and guidance for my research.",
    },
    {
      name: "Michael Lee",
      feedback: "Faculty are highly supportive and the labs are world-class.",
    },
    {
      name: "Sara Khan",
      feedback: "Collaborative projects helped me develop critical thinking skills.",
    },
  ];

  return (
    <section className="w-full bg-gray-50">
      {/* Hero Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091870629-2efcc96205b6?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-black text-center px-4"
        >
          Science Departments
        </motion.h1>
      </div>

      {/* Stats Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-16 px-6"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl py-6 hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-green-600">{stat.value}</h3>
            <p className="text-gray-700 font-medium">{stat.title}</p>
          </div>
        ))}
      </motion.div>

      {/* Department Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {departments.map((dept, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-200/30 backdrop-blur-md text-center"
          >
            <div className="mb-4 mx-auto">{dept.icon}</div>
            <h4 className="text-2xl font-semibold mb-2 text-gray-900">{dept.name}</h4>
            <p className="text-gray-600 mb-2">{dept.description}</p>
            <span className="text-gray-500 text-sm">{dept.students} Students</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Section */}
      <motion.div className="px-6 md:px-20 py-16">
        <h3 className="text-4xl font-bold text-gray-900 text-center mb-10">Department Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-200/30 backdrop-blur-md text-center"
            >
              <div className="mb-4 mx-auto">{feature.icon}</div>
              <h4 className="text-2xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div className="px-6 md:px-20 py-16 bg-gray-100">
        <h3 className="text-4xl font-bold text-gray-900 text-center mb-10">Student Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-200/30 backdrop-blur-md"
            >
              <p className="text-gray-700 italic mb-4">"{test.feedback}"</p>
              <h4 className="text-gray-900 font-bold">{test.name}</h4>
              {/* chart */}
              
            </motion.div>
          ))}
        </div>
        
      </motion.div>

      {/* CTA Section */}
      <motion.div className="mt-20 text-center px-6 md:px-20 py-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Join Our Programs</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Apply now and be part of our innovative Science & Math departments with expert faculty, modern labs, and collaborative projects.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          Apply Now
        </motion.button>
      </motion.div>
    </section>
  );
}
