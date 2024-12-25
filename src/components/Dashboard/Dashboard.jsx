import React, { useState } from 'react';
import { Menu, RefreshCw, PlusCircle, Search } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Sidebar from './Sidebar';

const RepositoryCard = ({ name, type, language, size, updatedAt, isPrivate, collaborators }) => (
  <div className="border-b p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer hover:bg-gray-50">
    <div className="flex justify-between items-start">
      <div className="w-full">
        <div className="flex items-center gap-2">
          <span className="font-medium text-lg hover:text-blue-600 transition-colors duration-200">{name}</span>
          <span className={`text-sm px-2 py-0.5 rounded-full ${isPrivate ? 'bg-gray-100' : 'bg-blue-100 text-blue-800'}`}>
            {isPrivate ? 'Private' : 'Public'}
          </span>
        </div>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-full ${
              language === 'React' ? 'bg-blue-500' : 
              language === 'Javascript' ? 'bg-yellow-500' :
              language === 'Python' ? 'bg-green-500' :
              language === 'Swift' ? 'bg-orange-500' :
              language === 'Java' ? 'bg-red-500' :
              language === 'HTML/CSS' ? 'bg-purple-500' : 
              'bg-gray-500'}`} 
            />
            {language}
          </div>
          <div>{size} KB</div>
          <div>Updated {updatedAt}</div>
        </div>
      </div>
      {collaborators && collaborators.length > 0 && (
        <div className="flex -space-x-2">
          {collaborators.map((initial, i) => (
            <div 
              key={i} 
              className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm border-2 border-white"
            >
              {initial}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const username = "Akash Ghosh";

  const repositories = [
    {
      name: 'design-system',
      type: 'react',
      language: 'React',
      size: '7320',
      updatedAt: '1 day ago',
      isPrivate: false,
    },
    {
      name: 'codeant-ci-app',
      type: 'javascript',
      language: 'Javascript',
      size: '5871',
      updatedAt: '2 days ago',
      isPrivate: true,
    },
    {
      name: 'analytics-dashboard',
      type: 'python',
      language: 'Python',
      size: '4521',
      updatedAt: '5 days ago',
      isPrivate: true,
    },
    {
      name: 'mobile-app',
      type: 'swift',
      language: 'Swift',
      size: '3096',
      updatedAt: '3 days ago',
      isPrivate: false,
    },
    {
      name: 'e-commerce-platform',
      type: 'java',
      language: 'Java',
      size: '6210',
      updatedAt: '6 days ago',
      isPrivate: true,
    },
    {
      name: 'blog-website',
      type: 'html',
      language: 'HTML/CSS',
      size: '1876',
      updatedAt: '4 days ago',
      isPrivate: false,
    },
    {
      name: 'social-network',
      type: 'php',
      language: 'PHP',
      size: '5432',
      updatedAt: '7 days ago',
      isPrivate: true,
    }
  ];

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    repo.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <img src="/ant-logo.svg" alt="CodeAnt AI" className="w-8 h-8" />
            <span>CodeAnt AI</span>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="p-2">
            <Menu size={24} />
          </button>
        </div>
        <MobileMenu 
          isOpen={isMenuOpen} 
          onToggle={() => setIsMenuOpen(false)}
          username={username}
        />
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-semibold">Repositories</h1>
              <p className="text-gray-600">33 total repositories</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border rounded hover:bg-gray-50 transition-colors duration-200">
                <RefreshCw size={20} />
              </button>
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
                <PlusCircle size={20} />
              </button>
            </div>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Repositories"
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          <div className="border rounded-lg overflow-hidden">
            {filteredRepositories.map((repo, index) => (
              <RepositoryCard key={index} {...repo} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex h-screen">
        {/* Sidebar Component */}
        <Sidebar username={username} />

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold">Repositories</h1>
                <p className="text-gray-600">33 total repositories</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50 transition-colors duration-200">
                  <RefreshCw size={18} />
                  <span>Refresh All</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
                  <PlusCircle size={18} />
                  <span>Add Repository</span>
                </button>
              </div>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Repositories"
                className="w-full px-4 py-2 pl-10 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <div className="border rounded-lg overflow-hidden">
              {filteredRepositories.map((repo, index) => (
                <RepositoryCard key={index} {...repo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;