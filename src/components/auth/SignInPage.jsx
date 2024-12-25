import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = ({ onLogin }) => {
  const [selectedOption, setSelectedOption] = useState('saas');
  const navigate = useNavigate();

  const handleAuth = () => {
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="relative hidden md:block md:w-1/2">
        <div className="absolute left-0 bottom-0">
          <img 
            src="/ant-logo.svg" 
            alt="Background Logo" 
            className="w-[350px] h-[350px]"
            style={{
              transform: 'translate(0%, -0%)',
              opacity: '0.3',
              filter: 'grayscale(100%)'
            }}
          />
        </div>

        <div className="relative z-10" style={{ position: 'relative' }}>
          {/* Main container with exact positioning */}
          <div style={{ 
            position: 'absolute',
            top: '140px',
            left: '60px'
          }}>
            {/* Stats Card */}
            <div className="bg-white rounded-3xl" 
                 style={{ 
                   position: 'absolute',
                   width: '400px',
                   height: '150px',
                   padding: '32px',
                   left: '120px',
                   top: '74px',
                   boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.12)',
                   backgroundColor: '#FFFFFF'
                 }}>
              <div className="mb-1">
                <div className="flex items-center gap-1 mb-1">
                  <img src="/logo.svg" alt="CodeAnt AI" className="w-7 h-7" />
                  <h2 className="text-lg font-medium">AI to Detect & Autofix Bad Code</h2>
                </div>
                <div className="h-px bg-gray-200 w-full"></div>
              </div>

              <div className="flex justify-between px">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">30+</div>
                  <div className="text-gray-600 text-sm">Language Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">10K+</div>
                  <div className="text-gray-600 text-sm">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">100K+</div>
                  <div className="text-gray-600 text-sm">Hours Saved</div>
                </div>
              </div>
            </div>

            {/* Issues Fixed Card */}
            <div 
              className="bg-white rounded-3xl relative" 
              style={{ 
                position: 'absolute',
                width: '250px',
                height: '130px',
                padding: '24px',
                left: '297px',
                top: '207px',
                boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.12)',
                backgroundColor: '#FFFFFF'
              }}
            >
              {/* Pie SVG Icon */}
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '15px',
                }}
              >
                <img 
                  src="/pie.svg"
                  alt="Statistics"
                  style={{
                    width: '50px',
                    height: '50px'
                  }}
                />
              </div>

              {/* "Issues Fixed" Text */}
              <span 
                className="text-gray-500"
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '65px',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}
              >
                Issues Fixed
              </span>

              {/* "500K+" Number */}
              <div 
                className="font-semibold"
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '80px',
                  fontSize: '36px',
                  lineHeight: '44px',
                  fontWeight: '600'
                }}
              >
                500K+
              </div>

              {/* Stats Row */}
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '145px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                  <span 
                    className="text-blue-500"
                    style={{
                      position: 'absolute',
                      left: '135px',
                      top: '-130px',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}
                  >
                    ↑14%
                  </span>
                  <span 
                    className="text-gray-500"
                    style={{
                      position: 'absolute',
                      left: '135px',
                      top: '-110px',
                      fontSize: '14px',
                      lineHeight: '20px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    This week
                  </span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center px-8">
        <div className="max-w-md w-full py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <img src="/logo.svg" alt="CodeAnt AI" className="h-8" />
              <span className="text-xl font-semibold">CodeAnt AI</span>
            </div>
            <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
          </div>

          <div className="flex gap-3 mb-8">
            <button 
              className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                selectedOption === 'saas' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setSelectedOption('saas')}
            >
              SAAS
            </button>
            <button 
              className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                selectedOption === 'self-hosted' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setSelectedOption('self-hosted')}
            >
              Self Hosted
            </button>
          </div>

          <div className="space-y-3">
            {selectedOption === 'self-hosted' ? (
              <>
                <button 
                  onClick={handleAuth}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50"
                >
                  <img src="/gitlab.svg" alt="GitLab" className="w-5 h-5" />
                  Self Hosted GitLab
                </button>
                <button 
                  onClick={handleAuth}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  Sign in with SSO
                </button>
              </>
            ) : (
              <>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50">
                  <img src="/github.svg" alt="Github" className="w-5 h-5" />
                  Sign in with Github
                </button>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50">
                  <img src="/bitbucket.svg" alt="Bitbucket" className="w-5 h-5" />
                  Sign in with Bitbucket
                </button>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50">
                  <img src="/azure.svg" alt="Azure" className="w-5 h-5" />
                  Sign in with Azure Devops
                </button>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50">
                  <img src="/gitlab.svg" alt="GitLab" className="w-5 h-5" />
                  Sign in with GitLab
                </button>
              </>
            )}
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            By signing up you agree to the <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;