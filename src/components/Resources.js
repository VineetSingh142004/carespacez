import React, { useState } from 'react';
import { BookOpen, Clock, User } from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'anxiety', name: 'Anxiety & Stress' },
    { id: 'depression', name: 'Depression' },
    { id: 'relationships', name: 'Relationships' },
    { id: 'academic', name: 'Academic Pressure' },
    { id: 'self-care', name: 'Self Care' }
  ];

  // Mock resources data
  const resources = [
    {
      id: 1,
      title: "Managing Academic Stress: A Student's Guide",
      category: "academic",
      readTime: "5 min read",
      author: "Dr. Sarah Johnson",
      preview: "Learn effective strategies to balance your studies and mental health...",
      type: "article"
    },
    {
      id: 2,
      title: "Understanding and Coping with Social Anxiety",
      category: "anxiety",
      readTime: "8 min read",
      author: "Dr. Michael Chen",
      preview: "Practical tips and techniques for managing social anxiety in the digital age...",
      type: "guide"
    },
    // Add more resources...
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resources</h2>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-2 text-sm text-purple-600 mb-2">
              <BookOpen className="w-4 h-4" />
              <span className="capitalize">{resource.type}</span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {resource.title}
            </h3>
            
            <p className="text-gray-600 mb-4">
              {resource.preview}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {resource.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {resource.readTime}
                </div>
              </div>
              
              <button className="text-purple-600 hover:text-purple-700">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources; 