import React, { useState } from 'react';
import { Shield, Video, MessageSquare, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CounselorFinder from '../components/CounselorFinder';

// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <button className="text-purple-600 font-medium hover:text-purple-700">
        Learn More →
      </button>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Mock services data
const services = [
  {
    id: 1,
    title: "Individual Therapy",
    description: "One-on-one sessions with a licensed therapist tailored to your needs.",
    icon: <MessageSquare className="w-6 h-6 text-purple-600" />
  },
  {
    id: 2,
    title: "Online Counseling",
    description: "Convenient and secure video sessions from the comfort of your home.",
    icon: <Video className="w-6 h-6 text-purple-600" />
  },
  {
    id: 3,
    title: "Crisis Support",
    description: "24/7 emergency support when you need it most.",
    icon: <Shield className="w-6 h-6 text-purple-600" />
  }
];

const Services = ({ isLoggedIn }) => {
  const [showFinder, setShowFinder] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setShowFinder(true);
    }
  };

  if (isLoggedIn && showFinder) {
    return <CounselorFinder />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Professional Mental Health Support
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Connect with experienced counselors who understand your unique needs
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Share Your Needs",
              description: "Tell us what's on your mind and what kind of support you're looking for"
            },
            {
              step: 2,
              title: "Match with Counselors",
              description: "We'll connect you with counselors who specialize in your areas of concern"
            },
            {
              step: 3,
              title: "Choose Your Counselor",
              description: "Review counselor profiles and select the one that feels right for you"
            },
            {
              step: 4,
              title: "Begin Your Journey",
              description: "Start your sessions and take the first step towards better mental health"
            }
          ].map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              {index < 3 && (
                <ArrowRight className="hidden md:block absolute top-1/4 -right-4 text-purple-600" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <button
            onClick={handleGetStarted}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300"
          >
            {isLoggedIn ? "Find Your Counselor" : "Sign In to Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services; 