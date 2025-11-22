import { motion } from "framer-motion";
import { FaUniversity, FaChalkboardTeacher, FaHistory, FaAward, FaGlobeAsia } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
          alt="Campus Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Satkhira Govt College
          </h1>
        </div>
      </section>


      {/* ===================== INTRO SECTION ===================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-green-600">Welcome to Our Institution</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our University is committed to excellence in education, innovation,
            and research. For decades, we have been shaping the future of
            generations with quality academic programs, experienced faculties,
            and a learner-friendly environment.
          </p>
        </motion.div>
      </section>


      {/* ===================== MISSION & VISION ===================== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-50 border border-green-200 rounded-xl p-8 shadow"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide high-quality education, foster innovation, and create
              opportunities for students to excel academically, professionally,
              and ethically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-50 border border-green-200 rounded-xl p-8 shadow"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a globally recognized institution known for academic
              excellence, advanced research, and producing skilled graduates who
              contribute positively to society.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ===================== HISTORY ===================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-green-600">Our History</h2>
        </motion.div>

        <p className="text-gray-700 leading-relaxed text-lg">
          Established in 19XX, our university has grown from a small educational
          institute to a full-fledged academic center offering diverse programs
          and research opportunities. Over the years, our commitment to
          excellence has earned us a distinguished reputation locally and
          globally.
        </p>
      </section>


      {/* ===================== PRINCIPAL MESSAGE ===================== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Principal"
            className="rounded-xl shadow-lg w-full h-[350px] object-cover"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-green-600 mb-4">
              Message from the Principal
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              “Education is not only about academic growth; it's about
              character-building, leadership, and preparing students to face
              real-life challenges. Our mission is to inspire students with
              values, knowledge, and vision.”
            </p>
          </motion.div>

        </div>
      </section>


      {/* ===================== FACTS & FIGURES ===================== */}
      <section className="bg-green-600 py-14 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {[
            { number: "18,000+", label: "Students" },
            { number: "350+", label: "Teachers" },
            { number: "25+", label: "Departments" },
            { number: "32+", label: "Research Labs" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold">{item.number}</h2>
              <p className="text-lg font-medium">{item.label}</p>
            </motion.div>
          ))}

        </div>
      </section>


      {/* ===================== LEADERSHIP ===================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-10">University Leadership</h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          {[
            { name: "Dr. John Doe", role: "Vice-Chancellor" },
            { name: "Prof. Sarah Lee", role: "Pro Vice-Chancellor" },
            { name: "Dr. Robert Smith", role: "Registrar" },
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow rounded-xl p-6"
            >
              <FaChalkboardTeacher className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="text-gray-600">{leader.role}</p>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}
