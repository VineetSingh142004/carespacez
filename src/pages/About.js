import React from 'react';
import { Users, Heart, Globe, Award, CheckCircle, Target, Lightbulb, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const executives = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop",
      bio: "Former Clinical Psychologist with 15+ years experience in youth counseling"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      bio: "Healthcare operations expert focused on making mental health accessible"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Counseling",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      bio: "Specialized in adolescent psychology and digital-age mental health challenges"
    },
    {
      name: "James Park",
      role: "Tech Innovation Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
      bio: "Expert in creating user-friendly digital mental health solutions"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Making Mental Health Care Accessible for Everyone
            </h1>
            <p className="text-xl text-white/90">
              We're on a mission to break down barriers and create a more supportive,
              understanding world for Gen Z and beyond.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-purple-600">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At CareSpacez, we believe that everyone deserves access to quality mental 
                health support. Our mission is to create a safe, supportive environment 
                where individuals can find the help they need, when they need it most.
              </p>
              <div className="flex items-center space-x-3 text-purple-600">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-600">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">Licensed Professional Counselors</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-600">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">Personalized Care Approach</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-purple-600">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision a world where mental health support is readily available, 
                stigma-free, and tailored to the unique challenges faced by today's 
                digital generation. Through technology and compassion, we're building 
                bridges to better mental health care.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-600 mb-2">Why CareSpacez?</h3>
                <p className="text-gray-600">
                  We understand the unique challenges of growing up in a digital age. 
                  Our platform is designed specifically with Gen Z in mind, offering 
                  modern solutions to modern problems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { icon: Users, stat: "10,000+", label: "Users Helped" },
              { icon: Heart, stat: "95%", label: "Satisfaction Rate" },
              { icon: Globe, stat: "24/7", label: "Support Available" },
              { icon: Award, stat: "500+", label: "Expert Counselors" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <item.icon className="w-8 h-8 text-purple-600 mx-auto" />
                <div className="text-3xl font-bold text-gray-800">{item.stat}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* New Journey Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="space-y-8">
              {[
                {
                  year: "2020",
                  title: "The Beginning",
                  description: "Founded during the pandemic when mental health needs were at their peak"
                },
                {
                  year: "2021",
                  title: "Platform Launch",
                  description: "Launched our core counseling platform with 50 certified therapists"
                },
                {
                  year: "2022",
                  title: "Expanding Access",
                  description: "Introduced sliding scale payments and free counseling programs for students"
                },
                {
                  year: "2023",
                  title: "Global Reach",
                  description: "Expanded to serve users across 30 countries with multi-language support"
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Personalized Care",
                description: "We match you with counselors who understand your specific needs and challenges"
              },
              {
                icon: Lightbulb,
                title: "Modern Solutions",
                description: "Utilizing technology to make mental health support more accessible and effective"
              },
              {
                icon: Shield,
                title: "Safe Space",
                description: "Creating a judgment-free environment where you can be yourself"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <item.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 relative group">
                  <div className="relative inline-block">
                    <img
                      src={executive.image}
                      alt={executive.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {executive.name}
                </h3>
                <p className="text-purple-600 font-medium mb-2">{executive.role}</p>
                <p className="text-sm text-gray-600">{executive.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Whether you're seeking support or looking to provide it, 
              we welcome you to be part of our growing community.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 