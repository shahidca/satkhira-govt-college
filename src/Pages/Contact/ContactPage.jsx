import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-20 mt-10 md:mt-6 px-4 relative overflow-hidden">

      {/* Background Particles / Waves */}
      <motion.div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute w-72 h-72 bg-green-300 rounded-full blur-3xl top-10 left-10 animate-[pulse_6s_infinite]" />
        <div className="absolute w-96 h-96 bg-green-300 rounded-full blur-3xl bottom-10 right-10 animate-[ping_4s_infinite]" />

        <svg className="absolute bottom-0 left-0 w-full h-40 opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#e6f4ea" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,160C840,160,960,192,1080,202.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-10"
      >
        Contact Us
      </motion.h1>

      {/* 2 Column Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="backdrop-blur-md bg-white/60 border border-green-200 rounded-2xl p-6 space-y-6 shadow-lg hover:shadow-xl transition-all duration-500">
            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Campus Location</h3>
                <p className="text-gray-600">University Road, Central City, Bangladesh</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+880 1234-567890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@university.edu.bd</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Office Hours</h3>
                <p className="text-gray-600">Sun - Thu: 9AM - 5PM</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-green-200">
              <h4 className="text-sm font-medium text-green-700 mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <a className="text-green-600 hover:underline">Facebook</a>
                <a className="text-green-600 hover:underline">YouTube</a>
                <a className="text-green-600 hover:underline">LinkedIn</a>
                <a className="text-green-600 hover:underline">Twitter</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="backdrop-blur-md bg-white/60 border border-green-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-green-400 focus:ring-2 focus:ring-green-400 outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-green-400 focus:ring-2 focus:ring-green-400 outline-none" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Subject</label>
                  <input type="text" name="subject" placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-green-400 focus:ring-2 focus:ring-green-400 outline-none" />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Department</label>
                  <select name="department" className="w-full px-4 py-3 rounded-xl border border-green-400 focus:ring-2 focus:ring-green-400 outline-none text-black">
                    <option>General</option>
                    <option>Admission</option>
                    <option>Examination</option>
                    <option>Computer Science</option>
                    <option>Financial</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea name="message" placeholder="Write your message" rows={5} className="w-full px-4 py-3 rounded-xl border border-green-400 focus:ring-2 focus:ring-green-400 outline-none" />
              </div>

              <button type="submit" className="w-full py-3 rounded-xl text-lg font-semibold shadow-md bg-green-600 hover:bg-green-700 text-white transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated Icons */}
      <motion.div className="fixed right-6 top-1/3 flex flex-col gap-4 z-20">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <Phone className="w-10 h-10 text-green-600" />
        </motion.div>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
          <Mail className="w-10 h-10 text-green-600" />
        </motion.div>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
          <MapPin className="w-10 h-10 text-green-600" />
        </motion.div>
      </motion.div>

      {/* Emergency Contact */}
      <div className="max-w-6xl mx-auto mt-16 backdrop-blur-md bg-red-50/30 border border-red-300 rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Emergency Contact</h2>
        <p className="text-gray-700 mb-2">Medical Emergency: +880 9876-543210</p>
        <p className="text-gray-700">Security Office: +880 1122-334455</p>
      </div>
    </div>
  );
}