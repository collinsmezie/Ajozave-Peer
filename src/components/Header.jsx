// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-red-600">Ajozave</div>
      <div className="flex space-x-4">
        {/* <i className="fas fa-search text-gray-600"></i>
        <i className="fas fa-bell text-gray-600"></i>
        <i className="fas fa-user-circle text-gray-600"></i> */}
        <i className="search-icon">🔍</i>
        <i className="notifications-icon">🔔</i>
        <i className="profile-icon">👤</i>
      </div>
    </div>
  );
};

export default Header;


