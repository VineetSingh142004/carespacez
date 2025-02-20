import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Tag } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestions, setOpenQuestions] = useState([]);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'counseling', name: 'Counseling' },
    { id: 'technical', name: 'Technical' },
    { id: 'privacy', name: 'Privacy & Security' },
    { id: 'billing', name: 'Billing' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: "What is CareSpacez and how does it work?",
      answer: "CareSpacez is an online mental health platform that connects users with licensed therapists and counselors. We provide various services including one-on-one counseling, group sessions, and self-help resources, all accessible through our secure platform."
    },
    {
      id: 2,
      category: 'counseling',
      question: "How do I choose the right counselor for me?",
      answer: "Our platform uses a matching system that considers your specific needs, preferences, and concerns. You can also browse counselor profiles, read reviews, and schedule initial consultations to find the best fit for you."
    },
    {
      id: 3,
      category: 'technical',
      question: "What technical requirements do I need for online sessions?",
      answer: "You'll need a stable internet connection, a device with a camera and microphone (for video sessions), and a private, quiet space. Our platform works on most modern browsers and mobile devices."
    },
    {
      id: 4,
      category: 'privacy',
      question: "How do you ensure my privacy and confidentiality?",
      answer: "We use end-to-end encryption for all communications and comply with HIPAA regulations. Your personal information and session content are strictly confidential and stored securely."
    },
    {
      id: 5,
      category: 'billing',
      question: "What are your payment options and pricing?",
      answer: "We offer flexible payment plans including per-session pricing and monthly subscriptions. We accept major credit cards, HSA/FSA cards, and some insurance plans. Pricing varies based on the type of service and counselor."
    },
    // Add more FAQs as needed
  ];

  const toggleQuestion = (id) => {
    setOpenQuestions(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find answers to commonly asked questions about our services
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openQuestions.includes(faq.id) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openQuestions.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-gray-50"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">
            Our support team is here to help you 24/7
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300"
          >
            Contact Support
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 