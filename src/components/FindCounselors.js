import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { counselors } from '../data/mockData';

const FindCounselors = () => {
  const [filters, setFilters] = useState({
    specialization: '',
    priceRange: '',
    language: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search counselors..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={filters.specialization}
              onChange={(e) => setFilters({...filters, specialization: e.target.value})}
            >
              <option value="">All Specializations</option>
              <option value="anxiety">Anxiety & Depression</option>
              <option value="relationships">Relationships</option>
              <option value="trauma">Trauma & PTSD</option>
            </select>
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={filters.language}
              onChange={(e) => setFilters({...filters, language: e.target.value})}
            >
              <option value="">All Languages</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="mandarin">Mandarin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Counselors Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {counselors.map((counselor) => (
          <div key={counselor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex">
              <img 
                src={counselor.image} 
                alt={counselor.name}
                className="w-32 h-32 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{counselor.name}</h3>
                    <p className="text-purple-600">{counselor.specialization}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2">{counselor.experience} Experience</p>
                <p className="text-gray-600 text-sm">{counselor.availability}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-purple-600 font-semibold">{counselor.priceRange}</span>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300">
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindCounselors; 