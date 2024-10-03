// src/components/HomePage.js
import React from 'react';
import Header from '../Header';
import AccountSection from '../AccountSection';
import QuickLinks from '../QuickLinks';
import SpecialOffers from '../SpecialOffers';
import BottomNavigation from '../BottomNavigation';

function HomePage() {
  return (
    <>
      <Header />
      <AccountSection />
      <QuickLinks />
      <SpecialOffers />
      <BottomNavigation />
    </>
  );
}

export default HomePage;