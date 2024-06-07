import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeetcodeIcon from '../OnlinePresence/LeetcodeIcon';
import { faInstagram, faLinkedin, faFacebook, faGithub, faYoutube,IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface FontAwesomeProfile {
  name: string;
  icon: IconDefinition;
  url: string;
  color: string;
  isCustom: false;
}

interface CustomProfile {
  name: string;
  icon: JSX.Element;
  url: string;
  color: string;
  isCustom: true;
}

type Profile = FontAwesomeProfile | CustomProfile;



const profiles: Profile[]=[
  { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com/lakshay08_', color: '#E1306C',isCustom:false },
  { name: 'LinkedIn', icon: faLinkedin, url: 'https://linkedin.com/in/lakshay13', color: '#0077B5',isCustom:false },
  { name: 'Facebook', icon: faFacebook, url: 'https://facebook.com/lr08', color: '#1877F2',isCustom:false },
  { name: 'GitHub', icon: faGithub, url: 'https://github.com/yourprofile', color: '#333',isCustom:false },
  { name: 'LeetCode', icon: <LeetcodeIcon />, url: 'https://leetcode.com/u/lakshayrawal0899', color: '#FFA116', isCustom: true },
  { name: 'YouTube', icon: faYoutube, url: 'https://youtube.com/yourprofile', color: '#FF0000',isCustom:false },
];

const OnlinePresence = () => {
 
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 w-full text-center">
        <h1 className="text-4xl font-bold">Online Presence</h1>
        <p className="mt-2">Connect with me on various platforms</p>
      </header>

      <main className="p-6 flex flex-wrap justify-center space-x-6 space-y-6">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md p-6 rounded-lg transition-transform duration-500 hover:scale-105 flex flex-col items-center"
          >
            {profile.isCustom ? (
              <div className="text-6xl mb-4" style={{ color: profile.color }}>
                {profile.icon}
              </div>
            ) : (
              <FontAwesomeIcon icon={profile.icon as IconDefinition} className="text-6xl mb-4" style={{ color: profile.color }} />
            )}
            <span className="text-xl font-semibold">{profile.name}</span>
          </a>
        ))}
      </main>
    </div>
  )
}

export default OnlinePresence