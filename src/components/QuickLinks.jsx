





// src/components/AccountSection.js
import React from 'react';

const AccountSection = () => {
  return (
    <div className="p-4 bg-white shadow-md mt-4">
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-semibold">Naira Account</span>
        <span className="text-red-600">See All</span>
      </div>
      <div className="bg-blue-700 text-white p-4 rounded-lg mt-4">
        <div className="text-lg font-semibold">₦********</div>
        <div className="mt-2">
          <p>0096132921</p>
          <p>Savings - Regular</p>
          <p>Chimezie Obinwa</p>
        </div>
        <i className="fas fa-eye absolute top-4 right-4 text-white"></i>
      </div>
    </div>
  );
};

export default AccountSection;
