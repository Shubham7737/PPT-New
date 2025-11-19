import React from 'react';
import { BarChart3, TrendingUp, Cpu, Gauge } from 'lucide-react';

// Component for the Analytics and Optimization service card
export default function ForthCard() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      
      {/* Analytics and Optimization Card */}
      <div
        className="
          max-w-md w-full
          p-8
          bg-gray-50/1
          border border-gray-100
          rounded-2xl
          shadow-2xl hover:shadow-cyan-300/50 transition-all duration-500
          transform hover:scale-[1.03]
          flex flex-col space-y-6
        "
      >
        <div className="flex items-center space-x-4">
          <BarChart3 className="w-12 h-12 text-cyan-600 p-2 bg-cyan-50 rounded-xl shadow-md" />
          <h1 className="text-3xl font-extrabold text-indigo-400">
            Analytics and Optimization
          </h1>
        </div>
        
        <p className="text-lg text-white leading-relaxed border-b pb-4 border-gray-100">
          Growth isn't guessing—it's data-driven. We transform raw metrics into actionable insights, ensuring every part of your e-commerce presence is **optimized for maximum profit and efficiency**.
        </p>

        <div className="space-y-4">
          
          {/* Feature 1: Deep Data Reporting */}
          <div className="flex items-start space-x-3">
            <Gauge className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl text-indigo-200">Comprehensive Performance Metrics</h3>
              <p className="text-white text-base">
                Track key metrics like **conversion rates, customer lifetime value (CLV),** and AOV (Average Order Value) with easy-to-read dashboards.
              </p>
            </div>
          </div>
          
          {/* Feature 2: A/B Testing */}
          <div className="flex items-start space-x-3">
            <Cpu className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl text-indigo-200">Conversion Rate Optimization (CRO)</h3>
              <p className="text-white text-base">
                Systematic **A/B testing** on landing pages, product descriptions, and checkout flows to eliminate friction and boost purchase completion.
              </p>
            </div>
          </div>

          {/* Feature 3: Strategy Refinement */}
          <div className="flex items-start space-x-3">
            <TrendingUp className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl text-indigo-200">Predictive Sales Forecasting</h3>
              <p className="text-white text-base">
                Use historical data to forecast trends, manage inventory more efficiently, and **scale marketing spend** for peak profitability periods.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <button
          className="mt-6 w-full py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-sky-600 transform transition duration-300 shadow-lg"
          onClick={() => console.log("Contact for Analytics Strategy")}
        >
          Get Your Free Performance Audit
        </button>
      </div>
      
    </div>
  );
}