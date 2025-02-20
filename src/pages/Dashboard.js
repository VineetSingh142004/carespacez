import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Appointments from '../components/Appointments';
import Resources from '../components/Resources';
import FindCounselors from '../components/FindCounselors';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'overview'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'appointments'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                My Appointments
              </button>
              <button
                onClick={() => setActiveTab('counselors')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'counselors'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Find Counselors
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'resources'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Resources
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
            {activeTab === 'overview' && <DashboardOverview />}
            {activeTab === 'appointments' && <Appointments />}
            {activeTab === 'counselors' && <FindCounselors />}
            {activeTab === 'resources' && <Resources />}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardOverview = () => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome Back!</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">Next Appointment</h3>
        <p className="text-gray-600">No upcoming appointments</p>
        <button className="mt-4 text-purple-600 hover:text-purple-700">
          Schedule Now →
        </button>
      </div>
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Quick Resources</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Stress Management Guide</li>
          <li>• Meditation Basics</li>
          <li>• Sleep Improvement Tips</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Dashboard; 