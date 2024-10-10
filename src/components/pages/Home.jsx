// import React from 'react';
// import Header from '../Header';
// import AccountSection from '../AccountSection';
// import QuickLinks from '../QuickLinks';
// import SpecialOffers from '../SpecialOffers';
// import BottomNavigation from '../BottomNavigation';

// function HomePage() {
//   return (
//     <>
//       <div className="animate-slide-in mb-16">
//         <Header />
//         <AccountSection />
//         <QuickLinks />
//         <SpecialOffers />
//       </div>
//       <BottomNavigation />
//     </>
//   );
// }

// export default HomePage;


import React from 'react';
import Header from '../Header';
import AccountSection from '../AccountSection';
import QuickLinks from '../QuickLinks';
import SpecialOffers from '../SpecialOffers';
import BottomNavigation from '../BottomNavigation';

function HomePage() {
  return (
    <>
      <div className="animate-slide-in mb-16"> {/* Apply the same animation to the entire container */}
        <Header className="animate-slide-in" /> {/* Header with the same slide-in effect */}
        <AccountSection />
        <QuickLinks />
        <SpecialOffers />
      </div>
      <BottomNavigation />
    </>
  );
}

export default HomePage;
