import React from 'react';
import { MessageSquare, Clock, Smile, Users } from 'lucide-react';

// Component for the Customer Support & Engagement service card
export default function ThirdCard() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      
      {/* Customer Support & Engagement Card */}
      <div
        className="
          max-w-md w-full
          p-8
          bg-gray-50/1
          border border-gray-100
          rounded-2xl
          shadow-2xl hover:shadow-indigo-300/50 transition-all duration-500
          transform hover:scale-[1.03]
          flex flex-col space-y-6
        "
      >
        <div className="flex items-center space-x-4">
          <MessageSquare className="w-12 h-12 text-teal-600 p-2 bg-white rounded-xl shadow-md" />
          <h1 className="text-3xl font-extrabold text-indigo-300">
            Customer Support and Engagement
          </h1>
        </div>
        
        <p className="text-lg text-white leading-relaxed border-b pb-4 border-gray-100">
          We ensure your customers always feel valued and heard. Our service is designed to handle interactions promptly and proactively, turning standard support into a powerful tool for **retention and brand loyalty**.
        </p>

        <div className="space-y-4">
          
          {/* Feature 1: 24/7 Availability */}
          <div className="flex items-start space-x-3">
            <Clock className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl text-indigo-200">24/7 Multi-Channel Support</h3>
              <p className="text-white text-base">
                Instant responsiveness through **live chat** and prompt email handling ensures your store operates globally, around the clock.
              </p>
            </div>
          </div>
          
          {/* Feature 2: Proactive Engagement */}
          <div className="flex items-start space-x-3">
            <Smile className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl text-indigo-200">Proactive Customer Service</h3>
              <p className="text-white text-base">
                We go beyond reactive support by engaging users with feedback forms and personalized follow-ups to **build stronger relationships**.
              </p>
            </div>
          </div>

          {/* Feature 3: Loyalty & Retention */}
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl text-indigo-200">Loyalty and Brand Advocacy</h3>
              <p className="text-white text-base">
                Exceptional service drives positive reviews and transforms happy customers into dedicated **brand advocates**, boosting word-of-mouth growth.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <button
          className="mt-6 w-full py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-xl font-bold text-lg hover:from-teal-600 hover:to-green-600 transform transition duration-300 shadow-lg"
          onClick={() => console.log("Contact for Customer Support Strategy")}
        >
          Elevate Your Customer Experience
        </button>
      </div>
      
    </div>
  );
}