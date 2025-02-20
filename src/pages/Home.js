import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Sun, Moon, Smile, Coffee, MessageCircle, Stars, Clock, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { counselors } from '../data/mockData';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Begin Your Journey to Inner Peace";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(intervalId);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Warm & Welcoming */}
      <section className="relative min-h-screen bg-gradient-to-b from-rose-50 via-purple-50 to-blue-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, Math.random() * 20 - 10],
                y: [0, Math.random() * 20 - 10],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-transparent bg-clip-text">
              {text}
              <span className="inline-block animate-bounce ml-2">✨</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Your safe space for growth, healing, and transformation. 
              Let's create your path to wellness together.
            </p>

            {/* Welcoming Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl border border-purple-100"
              >
                <div className="mb-4">
                  <Heart className="w-10 h-10 text-rose-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  With Love & Care
                </h3>
                <p className="text-gray-600">
                  Every session is filled with empathy, understanding, and genuine care
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl border border-purple-100"
              >
                <div className="mb-4">
                  <Stars className="w-10 h-10 text-purple-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Your Safe Space
                </h3>
                <p className="text-gray-600">
                  A judgment-free zone where you can be truly yourself
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl border border-purple-100"
              >
                <div className="mb-4">
                  <Smile className="w-10 h-10 text-yellow-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Growth Together
                </h3>
                <p className="text-gray-600">
                  Supporting your journey with expert guidance and compassion
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signup"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Journey
                  <span className="ml-2">✨</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Engaging Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience a new way of healing that puts you first
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Always here when you need us most"
              },
              {
                icon: <Coffee className="w-8 h-8" />,
                title: "Comfortable Sessions",
                description: "Like talking to a caring friend"
              },
              {
                icon: <Stars className="w-8 h-8" />,
                title: "Expert Guidance",
                description: "Professional care with a personal touch"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative p-8 bg-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(item.icon, { className: "text-purple-600" })}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps - Interactive Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Your Wellness Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to start your transformation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Connect",
                description: "Sign up and share your story with us"
              },
              {
                step: 2,
                title: "Match",
                description: "Get paired with your perfect therapist"
              },
              {
                step: 3,
                title: "Begin",
                description: "Start your personalized therapy sessions"
              },
              {
                step: 4,
                title: "Thrive",
                description: "Experience positive transformation"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center mb-12"
              >
                <div className="w-full flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center z-10 border-4 border-purple-200"
                  >
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                      {item.step}
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 ml-8 p-6 bg-white rounded-xl shadow-lg"
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section with Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "10,000+", label: "Happy Clients", icon: <Smile className="w-8 h-8" /> },
              { number: "95%", label: "Satisfaction Rate", icon: <Heart className="w-8 h-8" /> },
              { number: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8" /> },
              { number: "50+", label: "Expert Counselors", icon: <Users className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-purple-50 rounded-2xl"
              >
                <div className="flex justify-center mb-4 text-purple-600">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mental Health Importance Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Why Mental Health Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your mental well-being is the foundation of a fulfilling life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Better Relationships",
                description: "Improve your connections with family, friends, and colleagues through better emotional understanding.",
                icon: "👥"
              },
              {
                title: "Enhanced Performance",
                description: "Boost your productivity and achieve your goals with improved mental clarity and focus.",
                icon: "🎯"
              },
              {
                title: "Inner Peace",
                description: "Find balance and tranquility in your daily life through proper mental health care.",
                icon: "🌟"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Counselors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Meet Our Expert Counselors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your well-being
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {counselors.slice(0, 3).map((counselor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={counselor.image}
                    alt={counselor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{counselor.name}</h3>
                  <p className="text-purple-600 mb-2">{counselor.specialization}</p>
                  <p className="text-gray-600 mb-4">{counselor.experience} Experience</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-2 text-gray-600">4.9/5</span>
                    </div>
                    <button className="text-purple-600 font-semibold hover:text-purple-700">
                      View Profile →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Voices of Change
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from people who transformed their lives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finding CareSpacez was a turning point in my life. The support and guidance I received helped me overcome my anxiety.",
                author: "Sarah M.",
                role: "Client - 8 months",
                rating: 5
              },
              {
                quote: "The convenience of online sessions and the expertise of my counselor made all the difference in my healing journey.",
                author: "James R.",
                role: "Client - 1 year",
                rating: 5
              },
              {
                quote: "I'm grateful for the compassionate care and practical tools that helped me build better relationships.",
                author: "Emily L.",
                role: "Client - 6 months",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg relative"
              >
                <div className="absolute -top-4 left-8">
                  <span className="text-6xl text-purple-200">"</span>
                </div>
                <p className="text-gray-600 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of others who have already taken the first step towards better mental health.
              Start your journey today with a free consultation.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/signup"
                className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
                <span className="ml-2">✨</span>
              </Link>
            </motion.div>
            <p className="mt-6 text-white/80">
              No commitment required • Cancel anytime • 100% confidential
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 