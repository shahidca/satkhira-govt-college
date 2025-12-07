import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, University, Quote } from "lucide-react";

export default function Humanities() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* ------------------------------ HERO SECTION ------------------------------ */}
      <section className="relative w-full h-[70vh] overflow-hidden rounded-b-3xl shadow-xl">
        <img
          src="https://images.pexels.com/photos/3186386/pexels-photo-3186386.jpeg"
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-slowZoom"
          alt="Humanities Hero"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl"
          >
            Humanities Department
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl"
          >
            A community of curious minds exploring language, culture, society, and the world.
          </motion.p>
        </div>
      </section>

      {/* ------------------------------ STATS SECTION ------------------------------ */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[{
            icon: Users,
            number: "850+",
            title: "Active Students",
          },{
            icon: University,
            number: "45+",
            title: "Expert Faculty Members",
          },{
            icon: BookOpen,
            number: "12+",
            title: "Humanities Disciplines",
          }].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-green-200 hover:border-green-500 transition-all duration-500"
            >
              <stat.icon className="w-14 h-14 text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-extrabold text-gray-900">{stat.number}</h2>
              <p className="text-gray-600 mt-2 text-lg font-medium">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------ FEATURES SECTION ------------------------------ */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Study <span className="text-green-600">Humanities?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[{
            title: "Critical Thinking & Creativity",
            desc: "Humanities builds analytical skills, creative thinking, and deep understanding of human culture.",
            img: "https://images.pexels.com/photos/3184643/pexels-photo-3184643.jpeg"
          },{
            title: "Cultural & Social Understanding",
            desc: "Explore society, languages, literature, philosophy, and the roots of civilization.",
            img: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
          },{
            title: "Career & Research Opportunities",
            desc: "Prepare for diverse fields like teaching, journalism, administration, research, and public service.",
            img: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
          }].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-green-500"
            >
              <img src={feature.img} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------ TESTIMONIAL SECTION ------------------------------ */}
      <section className="py-20 bg-green-50 border-t border-green-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Students Say
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {[1,2].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-green-200 hover:border-green-500 transition-all duration-500"
            >
              <Quote className="w-10 h-10 text-green-600 mb-4" />
              <p className="text-gray-700 text-lg italic mb-4">
                "Studying Humanities opened my mind and changed the way I understand people and society. Absolutely transformative!"
              </p>
              <h4 className="text-gray-900 font-bold text-xl">Ayesha Rahman</h4>
              <p className="text-gray-600">Student, Humanities</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------ CTA SECTION ------------------------------ */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Ready to Join the Humanities Department?
        </motion.h2>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="px-10 py-4 bg-green-600 text-white rounded-full text-lg font-semibold shadow-xl hover:bg-green-700 hover:shadow-2xl transition-all"
        >
          Apply Now
        </motion.button>
      </section>
    </div>
  );
}
