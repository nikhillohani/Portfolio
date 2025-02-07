import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, MousePointer2 } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cursor Effect */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-black pointer-events-none z-50"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">Nikhil Lohani</h1>
          <p className="text-xl text-gray-600">Creative Graphic Designer</p>
        </motion.div>
      </section>

      {/* Profile Picture */}
      <div className="relative -mt-24 mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=800&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6"
            >
              <div className="w-32 text-right font-semibold">2023 - 2025</div>
              <div className="flex-1 border-l-2 border-gray-200 pl-6 pb-8">
                <h3 className="text-xl font-bold">[Role]</h3>
                <p className="text-gray-600 mt-2">Description of your role and achievements</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="w-32 text-right font-semibold">2020 - 2023</div>
              <div className="flex-1 border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-bold">[Role]</h3>
                <p className="text-gray-600 mt-2">Description of your role and achievements</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&h=800&q=80"
                alt="Work 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&h=800&q=80"
                alt="Work 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Video Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Video Placeholder {index}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#more-videos"
              className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              See More Videos
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Let's Connect</h2>
          <div className="flex justify-center gap-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#github"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#linkedin"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#instagram"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Instagram size={32} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:your.email@example.com"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Mail size={32} />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;