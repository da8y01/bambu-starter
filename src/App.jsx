import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, Welcome } from './pages';

const App = () => {
  return (
    <>
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/campaigns" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Welcome />} />

          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
    <footer className="bg-[#13131a] text-white text-center py-4">
      <p className="text-sm">
        BambuStarter by Bambu Labs 2023. All rights reserved.
      </p>
    </footer>
    </>
  )
}

export default App