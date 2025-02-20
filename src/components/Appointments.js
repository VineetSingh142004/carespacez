import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';

const Appointments = () => {
  const [view, setView] = useState('upcoming'); // upcoming or past

  // Mock appointment data
  const appointments = {
    upcoming: [
      {
        id: 1,
        counselor: "Dr. Sarah Johnson",
        date: "2024-03-25",
        time: "14:00",
        type: "video",
        status: "confirmed"
      },
      {
        id: 2,
        counselor: "Dr. Michael Chen",
        date: "2024-03-28",
        time: "15:30",
        type: "chat",
        status: "pending"
      }
    ],
    past: [
      {
        id: 3,
        counselor: "Dr. Sarah Johnson",
        date: "2024-03-10",
        time: "11:00",
        type: "video",
        status: "completed"
      }
    ]
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Appointments</h2>
      
      {/* View Toggle */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            view === 'upcoming'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setView('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            view === 'past'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setView('past')}
        >
          Past
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {appointments[view].length === 0 ? (
          <p className="text-gray-600 text-center py-8">
            No {view} appointments found.
          </p>
        ) : (
          appointments[view].map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {appointment.counselor}
                  </h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      {appointment.type === 'video' ? (
                        <Video className="w-4 h-4 mr-2" />
                      ) : (
                        <MessageSquare className="w-4 h-4 mr-2" />
                      )}
                      {appointment.type === 'video' ? 'Video Call' : 'Chat Session'}
                    </div>
                  </div>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      appointment.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : appointment.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </span>
                </div>
              </div>
              
              {appointment.status === 'confirmed' && view === 'upcoming' && (
                <div className="mt-4 flex space-x-4">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                    Join Session
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-50">
                    Reschedule
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Appointments; 