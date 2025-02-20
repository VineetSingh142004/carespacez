import React from "react";
import { Heart, Users, Calendar, BookOpen } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Your Safe Space for Mental Wellness
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with specialized counselors, access resources, and begin your
          journey to better mental health.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Users className="w-12 h-12 text-purple-600" />}
            title="Expert Counselors"
            description="Connect with specialized counselors based on your specific needs and concerns."
          />
          <FeatureCard
            icon={<Calendar className="w-12 h-12 text-purple-600" />}
            title="Flexible Scheduling"
            description="Book sessions at your convenience, with both free and premium options available."
          />
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-purple-600" />}
            title="Resource Library"
            description="Access a wide range of mental health resources, articles, and self-help guides."
          />
          <FeatureCard
            icon={<Heart className="w-12 h-12 text-purple-600" />}
            title="Safe Environment"
            description="A judgment-free space where you can express yourself freely and safely."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number="1"
              title="Sign Up"
              description="Create your account and tell us about your needs"
            />
            <ProcessStep
              number="2"
              title="Match"
              description="Get matched with specialized counselors based on your preferences"
            />
            <ProcessStep
              number="3"
              title="Connect"
              description="Schedule and begin your sessions at your convenience"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="text-center">
    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;
