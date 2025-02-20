import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';

const BookingFlow = ({ counselor, onClose }) => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    type: '',
    date: '',
    time: '',
    concerns: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', booking);
    // You would typically send this to your backend
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Book a Session with {counselor.name}
        </h2>

        {step === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Session Type</h3>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setBooking({ ...booking, type: 'video' });
                  setStep(2);
                }}
                className="w-full p-4 border rounded-lg flex items-center space-x-4 hover:border-purple-600"
              >
                <Video className="w-6 h-6 text-purple-600" />
                <div className="text-left">
                  <div className="font-semibold">Video Session</div>
                  <div className="text-sm text-gray-600">Face-to-face video call</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setBooking({ ...booking, type: 'chat' });
                  setStep(2);
                }}
                className="w-full p-4 border rounded-lg flex items-center space-x-4 hover:border-purple-600"
              >
                <MessageSquare className="w-6 h-6 text-purple-600" />
                <div className="text-left">
                  <div className="font-semibold">Chat Session</div>
                  <div className="text-sm text-gray-600">Text-based conversation</div>
                </div>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={booking.date}
                  onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <select
                  value={booking.time}
                  onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  {/* Add more time slots */}
                </select>
              </div>
              <button
                onClick={() => setStep(3)}
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What would you like to discuss?
                </label>
                <textarea
                  value={booking.concerns}
                  onChange={(e) => setBooking({ ...booking, concerns: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  rows="4"
                  placeholder="Brief description of your concerns..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingFlow; 