import React from 'react';
import { Home, Code, Cloud, HelpCircle, Settings, HelpingHand, LogOut, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, onToggle, username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    onToggle();
  };

  return (
    <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/ant-logo.svg" alt="CodeAnt AI" className="w-8 h-8" />
            <span className="font-semibold">CodeAnt AI</span>
          </div>
          <button onClick={onToggle} className="p-2">
            <X size={24} />
          </button>
        </div>
        <div className="mt-4">
          <select className="w-full p-2 border rounded" defaultValue={username}>
            <option>{username}</option>
          </select>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <button className="w-full flex items-center gap-2 p-2 text-left">
          <Home size={20} />
          Repositories
        </button>
        <button className="w-full flex items-center gap-2 p-2 text-left">
          <Code size={20} />
          AI Code Review
        </button>
        <button className="w-full flex items-center gap-2 p-2 text-left">
          <Cloud size={20} />
          Cloud Security
        </button>
        <button className="w-full flex items-center gap-2 p-2 text-left">
          <HelpCircle size={20} />
          How to Use
        </button>
        <button className="w-full flex items-center gap-2 p-2 text-left">
          <Settings size={20} />
          Settings
        </button>
        <button className="w-full flex items-center gap-2 p-2 text-left">
          <HelpingHand size={20} />
          Support
        </button>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-2 p-2 text-left"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;