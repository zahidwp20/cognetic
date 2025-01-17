import React from 'react';
import { Brain, Command, Zap, Shield, Lock, Code, Database } from 'lucide-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Navlogo from '../img/cognetic-logo.png';
import Heroicon from '../img/hero-icon.png';

function CogneticLogo() {
  return (
    <div className="w-24 h-24 mx-auto mb-8">
      <Brain className="w-full h-full text-[#FF6B2C]" />
    </div>
  );
}

function CustomWalletButton() {
  const { connected } = useWallet();
  return (
    <WalletMultiButton className="!bg-[#FF6B2C] hover:!bg-[#E55A1F] transition-colors">
      {connected ? 'Connect wallet' : 'Connect wallet'}
    </WalletMultiButton>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0A051F] text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 lg:bg-transparent backdrop-blur-sm z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img className="w-32 h-full" src={Navlogo} alt="Nav Logo" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-[#FF6B2C] transition-colors">Features</a>
            <CustomWalletButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
			<section className=" min-h-screen flex items-center justify-center px-6">
				<div className="max-w-7xl mx-auto pt-16 text-center">
					<div className="flex justify-center mb-6">
						<div className="relative animate-float">
							<div className="absolute inset-0 bg-[#FF6B2C] blur-3xl opacity-20 rounded-full animate-pulse"></div>
              <img src={Heroicon} className="mx-auto w-44 h-44 p-8" alt="Hero Icon" />
						</div>
					</div>
					<h1 className="text-5xl font-bold mb-4">
            Built for developers: <span className="text-[#FF6B2C]">Seamless model routing,</span>
          </h1>
          <h2 className="text-5xl font-bold text-[#FF6B2C] mb-6">empowered by Solana.</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            One API key to rule them all. Seamlessly integrate Claude, Groq, OpenAI,
            and more into your applications.
          </p>
				</div>
			</section>

      {/* Features Section */}
      <section className="pt-10 pb-12 px-6" id="features">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Cognetic?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#110936] p-8 rounded-lg">
            <Command className="w-10 h-10 text-[#FF6B2C] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Single API Integration</h3>
            <p className="text-gray-300">One endpoint to access multiple LLM providers. Simplify your development workflow.</p>
          </div>
          <div className="bg-[#110936] p-8 rounded-lg">
            <Zap className="w-10 h-10 text-[#FF6B2C] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Routing</h3>
            <p className="text-gray-300">Automatically route requests to the most efficient and cost-effective LLM provider.</p>
          </div>
          <div className="bg-[#110936] p-8 rounded-lg">
            <Shield className="w-10 h-10 text-[#FF6B2C] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-300">Bank-grade encryption and security measures to protect your data and API keys.</p>
          </div>
          <div className="bg-[#110936] p-8 rounded-lg">
            <Lock className="w-10 h-10 text-[#FF6B2C] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Privacy Guaranteed</h3>
            <p className="text-gray-300">We never store or process your prompts. Your data remains confidential and is directly routed to your chosen LLM provider.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="pt-12 pb-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">How Cognetic Works</h2>
        <div className="flex flex-col items-center max-w-lg mx-auto">
          <div className="bg-[#110936] p-6 rounded-lg mb-8 w-full">
            <Code className="w-6 h-6 text-[#FF6B2C] mb-2" />
            <div className="text-sm">Your Request</div>
          </div>
          <div className="w-0.5 h-16 bg-[#FF6B2C]"></div>
          <div className="bg-[#110936] p-6 rounded-lg mb-8 w-full">
            <Database className="w-6 h-6 text-[#FF6B2C] mb-2" />
            <div className="text-sm">Cognetic Router</div>
            <div className="text-xs text-gray-300">Smart routing & load balancing</div>
          </div>
          <div className="w-0.5 h-16 bg-[#FF6B2C]"></div>
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="bg-[#110936] p-4 rounded-lg text-center">
              <div className="text-sm">Claude</div>
            </div>
            <div className="bg-[#110936] p-4 rounded-lg text-center">
              <div className="text-sm">OpenAI</div>
            </div>
            <div className="bg-[#110936] p-4 rounded-lg text-center">
              <div className="text-sm">Groq</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#110936] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-32 h-full" src={Navlogo} alt="Footer Logo" />
          </div>
          <div className="text-sm text-gray-300">
            © 2025 Cognetic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;