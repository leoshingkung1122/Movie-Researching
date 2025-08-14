import React from 'react';
import { getSummaryData } from '../constants/summaryData.jsx';

function SummaryPage({ formData, onStartNewSurvey }) {
  // Create array of data to display
  const summaryData = getSummaryData(formData);

  // Add comment if exists
  if (formData.Comment) {
    summaryData.push({
      key: 'Comment',
      label: 'Comment',
      value: formData.Comment,
      icon: (
        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      ),
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      isComment: true
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full mx-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Data Submitted Successfully!</h1>
          <p className="text-lg text-gray-600">Thank you for providing us with your information</p>
        </div>

        {/* Summary Content */}
        <div className="space-y-5 mb-10">
          {summaryData.map((item, index) => (
            <div key={item.key} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <div className={`flex items-center gap-4`}>
                <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center flex-shrink-0 ${item.isComment ? 'mt-1' : ''}`}>
                  {item.icon}
                </div>
                <div className={`${item.isComment ? 'flex-1 min-w-0' : 'flex-1'}`}>
                  <p className="text-sm text-gray-500 font-medium mb-1">{item.label}</p>
                  <p className="text-xl font-semibold text-gray-800 break-words">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onStartNewSurvey}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
          >
            Start New Survey
          </button>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
