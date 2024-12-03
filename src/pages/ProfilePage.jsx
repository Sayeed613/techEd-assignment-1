import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import PersonalInfo from '../components/PersonalInfo';
import BioSection from '../components/BioSection';
import LanguageSection from '../components/Languages';
import SocialMediaSection from '../components/SocialMediaSection';
import EducationSection from '../components/EducationSection';
import WorkExperienceSection from '../components/WorkExperienceSection';

const ProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState('Profile');

  return (
    <div className="flex h-screen w-[90%] m-auto">
      <Sidebar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <div className="flex-grow p-6  ">
        {selectedSection === 'Profile' && (
          <>
            <PersonalInfo />
            <BioSection />
            <LanguageSection />
            <SocialMediaSection />
          </>
        )}
        <EducationSection />
         <WorkExperienceSection />
      </div>
    </div>
  );
};

export default ProfilePage;
