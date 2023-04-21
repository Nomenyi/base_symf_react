import React from 'react';
import { ChartBarIcon, HashtagIcon, UsersIcon, BellIcon } from '@heroicons/react/24/outline';

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-gray-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <ChartBarIcon className="w-6 h-6 mr-2" />
          <p className="text-sm font-medium">Chat</p>
        </div>
        <div className="flex items-center">
          <HashtagIcon className="w-6 h-6 mr-2" />
          <p className="text-sm font-medium">Explore</p>
        </div>
        <div className="flex items-center">
          <UsersIcon className="w-6 h-6 mr-2" />
          <p className="text-sm font-medium">Friends</p>
        </div>
        <div className="flex items-center">
          <BellIcon className="w-6 h-6 mr-2" />
          <p className="text-sm font-medium">Notifications</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
