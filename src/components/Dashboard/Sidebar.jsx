import React from 'react';
import { Home, Code, Cloud, HelpCircle, Settings, HelpingHand, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const sidebarOptions = [
    { name: 'Repositories', icon: <Home size={20} />, active: true },
    { name: 'AI Code Review', icon: <Code size={20} /> },
    { name: 'Cloud Security', icon: <Cloud size={20} /> },
    { name: 'How to Use', icon: <HelpCircle size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> }
  ];

  const bottomOptions = [
    { name: 'Support', icon: <HelpingHand size={20} /> },
    { name: 'Logout', icon: <LogOut size={20} />, onClick: handleLogout }
  ];

  return (
    <div className="w-64 border-r bg-white flex flex-col h-screen">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 mb-4">
          <img src="/logo.svg" alt="CodeAnt AI" className="w-8 h-8" />
          <span className="font-medium">CodeAnt AI</span>
        </div>
        
        <select 
          className="w-full p-2 border rounded mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" 
          defaultValue={username}
        >
          <option>{username}</option>
        </select>
      </div>

      <nav className="flex-1 p-2">
        {sidebarOptions.map((option, index) => (
          <button 
            key={index}
            className={`w-full flex items-center gap-2 p-2 ${
              option.active 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            } rounded-lg mb-2 transition-colors duration-200`}
          >
            {option.icon}
            <span className="flex-1 text-left">{option.name}</span>
          </button>
        ))}
      </nav>

      <div className="p-2 mt-auto border-t">
        {bottomOptions.map((option, index) => (
          <button 
            key={index}
            onClick={option.onClick}
            className="w-full flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg mb-2 last:mb-0 transition-colors duration-200"
          >
            {option.icon}
            <span className="flex-1 text-left">{option.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;