"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../components/Logo'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa'
import Services from '@/components/Services'
import ComputerServices from '@/components/ComputerServices'
import WebSolutions from '@/components/WebSolutions'
import Computer3D from '@/components/Computer3D'
import LoginPage from './login/page'
import SignupPage from './signup/page'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
]

export default function Home() {
  const [lang, setLang] = useState('en')
  const [isVisible, setIsVisible] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [modalOpen, setModalOpen] = useState<'login' | 'signup' | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Theme classes
  const bgGradient = theme === 'dark'
    ? 'bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]'
    : 'bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#c7d2fe]';
  const textColor = theme === 'dark' ? 'text-[#00f2fe]' : 'text-[#1a237e]';
  const overlayGradient = theme === 'dark'
    ? 'bg-gradient-to-br from-[#0a0a0a]/95 via-[#1a1a1a]/90 to-[#00f2fe]/80 mix-blend-multiply'
    : 'bg-gradient-to-br from-[#f8fafc]/95 via-[#e0e7ef]/90 to-[#a5b4fc]/80 mix-blend-multiply';

  const openLogin = () => setModalOpen('login')
  const openSignup = () => setModalOpen('signup')
  const closeModal = () => setModalOpen(null)

  return (
    <main className={`min-h-screen relative ${theme === 'dark' ? 'dark' : 'light'}`}>
      {/* Enhanced Background Effects */}
      <div className={`fixed inset-0 ${bgGradient}`}></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00f2fe]/5 via-transparent to-transparent animate-pulse"></div>
      
      {/* Background Image Layer */}
      <div className="fixed inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-60"></div>
      
      {/* Strong Gradient Overlay for Clarity */}
      <div className={`fixed inset-0 ${overlayGradient}`}></div>
      
      {/* Background Pattern with Overlay */}
      <div className="fixed inset-0 bg-[url('/tech-pattern.svg')] bg-repeat opacity-10"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a1a]/90 to-[#0a0a0a]/90"></div>

      {/* Additional Glow Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-[#00f2fe]/10 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_100%,_var(--tw-gradient-stops))] from-[#7367f0]/10 via-transparent to-transparent"></div>

      {/* Content with backdrop blur */}
      <div className="relative z-10">
        {/* Top Bar with slide-in animation */}
        <div className={`bg-[#0a0a0a]/80 backdrop-blur-md ${textColor} text-xs py-2 px-4 flex justify-between items-center transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#7367f0] transition-colors cursor-pointer flex items-center gap-2">
              <span className="text-lg">📞</span> 6260******
            </span>
            <span className="hover:text-[#7367f0] transition-colors cursor-pointer flex items-center gap-2">
              <span className="text-lg">✉️</span> anandcomputer29@gmail.com
            </span>
          </div>
        <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#7367f0] transition-all duration-300 hover:scale-110"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#7367f0] transition-all duration-300 hover:scale-110"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#7367f0] transition-all duration-300 hover:scale-110"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#7367f0] transition-all duration-300 hover:scale-110"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-[#7367f0] transition-all duration-300 hover:scale-110"><FaGithub /></a>
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 p-2 rounded-full border border-[#00f2fe]/30 bg-[#1a1a1a]/60 hover:bg-[#00f2fe]/10 transition-all duration-300 flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-[#1a237e] text-lg" />}
            </button>
        </div>
      </div>

        {/* Header with fade-in animation */}
        <header className={`bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} ${theme === 'light' ? 'bg-white/80 shadow-blue-100' : ''}`}>
          <div className="container flex flex-col md:flex-row justify-between items-center py-2 gap-2">
            <div className="flex items-center">
            <Logo />
          </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
            <select
              value={lang}
              onChange={e => setLang(e.target.value)}
                className={`px-3 py-1.5 rounded-lg border focus:outline-none transition-all duration-300 text-sm ${theme === 'dark' ? 'bg-[#1a1a1a] text-[#00f2fe] border-[#00f2fe]/20 focus:border-[#00f2fe] hover:bg-[#1a1a1a]/80' : 'bg-white text-[#1a237e] border-[#a5b4fc]/40 focus:border-[#1a237e] hover:bg-blue-50'}`}
              aria-label="Language Switcher"
            >
              {LANGUAGES.map(l => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
              <div className="flex gap-2">
                <button onClick={openLogin} className="px-4 py-1.5 rounded bg-[#00f2fe]/20 text-[#00f2fe] font-semibold hover:bg-[#00f2fe]/40 transition">Login</button>
                <button onClick={openSignup} className="px-4 py-1.5 rounded bg-[#7367f0]/20 text-[#7367f0] font-semibold hover:bg-[#7367f0]/40 transition">Signup</button>
        </div>
            </div>
          </div>
        </header>

        {/* Navigation Bar with slide-in animation */}
        <nav className={`backdrop-blur-md shadow-lg flex justify-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} ${theme === 'dark' ? 'bg-[#0a0a0a]/80 text-[#00f2fe]' : 'bg-white/80 text-[#1a237e] shadow-blue-100'}`}>
          <div className="container flex flex-wrap justify-center md:justify-between space-x-8 py-3 text-sm md:text-base">
            <a href="#home" className={`font-semibold relative group ${theme === 'dark' ? 'hover:text-[#7367f0]' : 'hover:text-[#7c3aed]'}`}>{lang === 'hi' ? 'होम' : 'Home'}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00f2fe] transition-all duration-300 group-hover:w-full"></span></a>
            <a href="#quick-links" className={`font-semibold relative group ${theme === 'dark' ? 'hover:text-[#7367f0]' : 'hover:text-[#7c3aed]'}`}>{lang === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00f2fe] transition-all duration-300 group-hover:w-full"></span></a>
            <a href="#services" className={`font-semibold relative group ${theme === 'dark' ? 'hover:text-[#7367f0]' : 'hover:text-[#7c3aed]'}`}>{lang === 'hi' ? 'सेवाएँ' : 'Services'}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00f2fe] transition-all duration-300 group-hover:w-full"></span></a>
            <a href="#about" className={`font-semibold relative group ${theme === 'dark' ? 'hover:text-[#7367f0]' : 'hover:text-[#7c3aed]'}`}>{lang === 'hi' ? 'परिचय' : 'About'}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00f2fe] transition-all duration-300 group-hover:w-full"></span></a>
            <a href="#contact" className={`font-semibold relative group ${theme === 'dark' ? 'hover:text-[#7367f0]' : 'hover:text-[#7c3aed]'}`}>{lang === 'hi' ? 'संपर्क' : 'Contact'}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00f2fe] transition-all duration-300 group-hover:w-full"></span></a>
          </div>
        </nav>

        {/* Hero Section with fade-in and slide-up animation */}
        <section id="home" className={`relative backdrop-blur-md py-20 shadow-lg transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} overflow-hidden ${theme === 'dark' ? 'text-[#00f2fe]' : 'text-[#1a237e]'}`}>
          {/* Hero background image */}
          <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-80 z-0"></div>
          {/* Overlay for readability */}
          <div className={`absolute inset-0 z-10 ${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'}`}></div>
          <div className="relative z-20">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#7367f0]">
                  {lang === 'hi' ? 'आनंद कंप्यूटर्स में आपका स्वागत है' : 'Welcome to Anand Computers'}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-[#7367f0]">
                  {lang === 'hi' ? 'एमपीऑनलाइन और कंप्यूटर सेवाएँ - मध्य प्रदेश में सरकारी और डिजिटल सेवाओं के लिए आपका विश्वसनीय पोर्टल।' : 'MPOnline & Computer Services - Your trusted portal for government and digital services in Madhya Pradesh.'}
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/services"
                    className="bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 text-[#00f2fe] font-semibold px-8 py-3 rounded-lg border border-[#00f2fe]/20 hover:border-[#00f2fe]/40 transition-all duration-300 hover:scale-105"
                  >
                    {lang === 'hi' ? 'सेवाएँ देखें' : 'Explore Services'}
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Computer3D />
              </div>
          </div>
        </div>
      </section>

        {/* Services Components */}
        <div id="services"><Services theme={theme} /></div>
        <div id="computer-services"><ComputerServices theme={theme} /></div>
        <div id="web-solutions"><WebSolutions theme={theme} /></div>

        {/* Footer with fade-in animation */}
        <footer className={`backdrop-blur-md py-16 mt-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${theme === 'dark' ? 'bg-[#0a0a0a]/90 text-[#00f2fe]' : 'bg-white/90 text-[#1a237e] shadow-blue-100'}`}
          id="footer">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo />
              <p className="mt-6 text-[#7367f0]">MPOnline & Computer Services - Dewas, Madhya Pradesh</p>
              <div className="mt-6 flex space-x-6">
                <a href="#" className="text-[#7367f0] hover:text-[#00f2fe] transition-all duration-300 hover:scale-110" aria-label="Facebook">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="text-[#7367f0] hover:text-[#00f2fe] transition-all duration-300 hover:scale-110" aria-label="Twitter">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="#" className="text-[#7367f0] hover:text-[#00f2fe] transition-all duration-300 hover:scale-110" aria-label="Instagram">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-[#7367f0] hover:text-[#00f2fe] transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href="#" className="text-[#7367f0] hover:text-[#00f2fe] transition-all duration-300 hover:scale-110" aria-label="GitHub">
                  <FaGithub className="text-2xl" />
                </a>
              </div>
          </div>
          <div>
              <h4 className="text-xl font-semibold mb-6" id="about">{lang === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}</h4>
              <ul className="space-y-4">
                <li><Link href="/services" className="text-[#7367f0] hover:text-[#00f2fe] transition-colors">{lang === 'hi' ? 'सेवाएँ' : 'Services'}</Link></li>
                <li><Link href="/about" className="text-[#7367f0] hover:text-[#00f2fe] transition-colors">{lang === 'hi' ? 'परिचय' : 'About Us'}</Link></li>
                <li><Link href="/contact" className="text-[#7367f0] hover:text-[#00f2fe] transition-colors">{lang === 'hi' ? 'संपर्क' : 'Contact'}</Link></li>
                <li><Link href="/privacy" className="text-[#7367f0] hover:text-[#00f2fe] transition-colors">{lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}</Link></li>
                <li><Link href="/terms" className="text-[#7367f0] hover:text-[#00f2fe] transition-colors">{lang === 'hi' ? 'नियम और शर्तें' : 'Terms & Conditions'}</Link></li>
            </ul>
          </div>
          <div>
              <h4 className="text-xl font-semibold mb-6" id="contact">{lang === 'hi' ? 'संपर्क करें' : 'Contact Us'}</h4>
              <ul className="space-y-4 text-[#7367f0]">
                <li className="hover:text-[#00f2fe] transition-colors cursor-pointer flex items-center gap-3">
                  <span className="text-lg">✉️</span> anandcomputer29@gmail.com
                </li>
                <li className="hover:text-[#00f2fe] transition-colors cursor-pointer flex items-center gap-3">
                  <span className="text-lg">📞</span> 6260******
                </li>
                <li className="hover:text-[#00f2fe] transition-colors cursor-pointer flex items-center gap-3">
                  <span className="text-lg">📍</span> Dewas, Madhya Pradesh
                </li>
                <li className="hover:text-[#00f2fe] transition-colors cursor-pointer flex items-center gap-3">
                  <span className="text-lg">⏰</span> 9:00 AM - 8:00 PM
                </li>
            </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">{lang === 'hi' ? 'न्यूज़लेटर' : 'Newsletter'}</h4>
              <p className="text-[#7367f0] mb-6">{lang === 'hi' ? 'हमारे न्यूज़लेटर के लिए साइन अप करें' : 'Sign up for our newsletter'}</p>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder={lang === 'hi' ? 'आपका ईमेल' : 'Your email'}
                  className="px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#00f2fe]/20 text-[#00f2fe] placeholder-[#00f2fe]/50 focus:outline-none focus:border-[#00f2fe] transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 text-[#00f2fe] rounded-lg border border-[#00f2fe]/20 hover:border-[#00f2fe]/40 transition-all duration-300 hover:scale-105"
                >
                  {lang === 'hi' ? 'सब्सक्राइब' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-[#00f2fe]/10 mt-12 pt-8 text-center text-[#7367f0] text-sm">
            <p>&copy; {new Date().getFullYear()} Anand Computers. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Modal overlay */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative bg-white dark:bg-[#181a20] rounded-xl shadow-2xl p-0 w-full max-w-md animate-fade-in" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700" onClick={closeModal}>&times;</button>
            <div className="flex justify-center gap-4 mt-4 mb-2">
              <button onClick={openLogin} className={`px-4 py-2 rounded-t-lg font-semibold ${modalOpen==='login' ? 'bg-[#00f2fe]/20 text-[#00f2fe]' : 'bg-transparent text-gray-500'}`}>Login</button>
              <button onClick={openSignup} className={`px-4 py-2 rounded-t-lg font-semibold ${modalOpen==='signup' ? 'bg-[#7367f0]/20 text-[#7367f0]' : 'bg-transparent text-gray-500'}`}>Signup</button>
            </div>
            <div className="p-6">
              {modalOpen === 'login' ? <LoginPage /> : <SignupPage />}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function quickServices(lang: string) {
  return [
    {
      title: lang === 'hi' ? 'जन्म प्रमाणपत्र' : 'Birth Certificate',
      description: lang === 'hi' ? 'ऑनलाइन जन्म प्रमाणपत्र के लिए आवेदन करें और अपनी आवेदन स्थिति ट्रैक करें।' : 'Apply for birth certificate online and track your application status.',
      link: '/services/birth-certificate',
      icon: '/icons/birth-certificate.png',
    },
    {
      title: lang === 'hi' ? 'आय प्रमाणपत्र' : 'Income Certificate',
      description: lang === 'hi' ? 'हमारे पोर्टल के माध्यम से अपना आय प्रमाणपत्र सत्यापित और जारी करें।' : 'Get your income certificate verified and issued through our portal.',
      link: '/services/income-certificate',
      icon: '/icons/income-certificate.png',
    },
    {
      title: lang === 'hi' ? 'संपत्ति कर' : 'Property Tax',
      description: lang === 'hi' ? 'ऑनलाइन संपत्ति कर का भुगतान करें और भुगतान इतिहास देखें।' : 'Pay your property tax online and view payment history.',
      link: '/services/property-tax',
      icon: '/icons/property-tax.png',
    },
    {
      title: lang === 'hi' ? 'आधार सेवाएँ' : 'Aadhaar Services',
      description: lang === 'hi' ? 'आसानी से अपना आधार कार्ड अपडेट या डाउनलोड करें।' : 'Update or download your Aadhaar card easily.',
      link: '/services/aadhaar',
      icon: '/icons/aadhaar.png',
    },
  ]
} 