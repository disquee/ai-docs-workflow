import React from 'react';
import { Video, FileAudio, Bot, FileText, CheckCircle, ArrowRight, ArrowDown, Zap, TrendingUp, Users, Sparkles, Clock, Target, Wallet } from 'lucide-react';

export default function App() {
  const steps = [
    {
      id: 1,
      title: "SME Knowledge Capture",
      owner: "Engineer / PM",
      type: "human",
      icon: Video,
      color: "border-blue-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      description: "Quick 5-min screen recording of feature functionality."
    },
    {
      id: 2,
      title: "Automated Transcription",
      owner: "AWS S3 / AI",
      type: "ai",
      icon: FileAudio,
      color: "border-indigo-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      description: "Speech-to-text pipeline extracts raw knowledge."
    },
    {
      id: 3,
      title: "AI Draft Generation",
      owner: "Cedric AI",
      type: "ai",
      icon: Bot,
      color: "border-indigo-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      description: "Structures text into standard guides & actionable steps."
    },
    {
      id: 4,
      title: "Technical Validation",
      owner: "Engineer / PM",
      type: "human",
      icon: FileText,
      color: "border-blue-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      description: "SME verifies accuracy, code snippets, and outcomes."
    },
    {
      id: 5,
      title: "Editorial Polish",
      owner: "Technical Writer",
      type: "human",
      icon: CheckCircle,
      color: "border-emerald-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      description: "Final UX copy review, style alignment, and publish."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 md:p-8 font-sans">
      {/* Presentation Slide Container */}
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-slate-300 relative lg:min-h-[900px]">
        
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-8 md:px-12 md:py-10 flex flex-col lg:flex-row justify-between items-center shadow-md z-20">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="text-indigo-400 w-5 h-5" />
                <h4 className="text-indigo-400 font-bold tracking-widest uppercase text-xs">Strategic Initiative Overview</h4>
              </div>
              <span className="text-indigo-400/50 hidden sm:inline">|</span>
              <a 
                href="https://disquedoesit.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-400 hover:text-indigo-300 font-bold tracking-widest uppercase text-xs transition-colors underline decoration-indigo-400/30 underline-offset-4"
              >
                disquedoesit.com
              </a>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">AI-Accelerated Documentation Workflow</h1>
            <p className="text-slate-400 text-sm md:text-base leading-snug">Optimizing resource constraints by shifting from manual drafting to an automated, engineer-driven knowledge pipeline.</p>
          </div>
          
          {/* Executive Dashboard Metrics */}
          <div className="w-full lg:w-auto mt-8 lg:mt-0 grid grid-cols-3 gap-2 sm:gap-4 lg:flex lg:space-x-8 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                <span className="text-xl sm:text-3xl font-bold text-emerald-400">80%</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-1">Time Saved</span>
            </div>
            <div className="hidden lg:block w-px h-12 bg-slate-700"></div>
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right border-l lg:border-l-0 border-slate-700">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-xl sm:text-3xl font-bold text-blue-400">100%</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-1">SME Accuracy</span>
            </div>
            <div className="hidden lg:block w-px h-12 bg-slate-700"></div>
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right border-l lg:border-l-0 border-slate-700">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                <span className="text-xl sm:text-3xl font-bold text-indigo-400">$0</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-1">Net New Tools</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-6 md:p-12 pb-16 flex flex-col justify-between bg-slate-50 relative">
          
          {/* Top Row: Target Outcomes */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 text-center lg:text-left">Target Business Outcomes</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
              <div className="bg-white p-5 lg:p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4 transition-all hover:shadow-md">
                <div className="bg-emerald-100 p-3 rounded-full shrink-0"><TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-600" /></div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base lg:text-lg">Increase Velocity</h3>
                  <p className="text-xs lg:text-sm text-slate-600 leading-snug mt-1">Eliminate writer bottlenecks. Docs are created concurrently with product development.</p>
                </div>
              </div>
              <div className="bg-white p-5 lg:p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4 transition-all hover:shadow-md">
                <div className="bg-blue-100 p-3 rounded-full shrink-0"><Users className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" /></div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base lg:text-lg">Empower SMEs</h3>
                  <p className="text-xs lg:text-sm text-slate-600 leading-snug mt-1">Engineers dictate knowledge easily via video, avoiding the friction of blank-page writing.</p>
                </div>
              </div>
              <div className="bg-white p-5 lg:p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4 transition-all hover:shadow-md">
                <div className="bg-indigo-100 p-3 rounded-full shrink-0"><Zap className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" /></div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base lg:text-lg">Optimize Writers</h3>
                  <p className="text-xs lg:text-sm text-slate-600 leading-snug mt-1">Shifts writers from manual drafters to high-value strategic editors and UX advisors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: The Workflow Pipeline */}
          <div className="relative flex-grow flex items-center py-10 my-6 lg:my-8">
            {/* Desktop: Horizontal Gradient Background connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-2 bg-gradient-to-r from-blue-300 via-indigo-300 to-emerald-300 -translate-y-1/2 z-0 rounded-full opacity-60"></div>
            
            {/* Mobile: Vertical Gradient Background connecting line */}
            <div className="block lg:hidden absolute top-4 bottom-4 left-1/2 w-2 bg-gradient-to-b from-blue-300 via-indigo-300 to-emerald-300 -translate-x-1/2 z-0 rounded-full opacity-60"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 w-full relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative flex flex-col group items-center">
                    {/* Node */}
                    <div className={`bg-white border-4 ${step.color} rounded-2xl p-6 shadow-xl flex flex-col items-center text-center w-full max-w-sm lg:h-full relative z-10 transform transition-transform group-hover:-translate-y-1`}>
                      {step.type === 'ai' && (
                        <div className="absolute -top-3 -right-3 lg:-right-3 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center">
                          <Sparkles className="w-3 h-3 mr-1" /> AI Process
                        </div>
                      )}
                      
                      <div className={`${step.bgColor} p-4 rounded-full mb-4 shadow-inner`}>
                        <Icon className={`w-8 h-8 ${step.iconColor}`} />
                      </div>
                      
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Step {step.id}</span>
                      <h3 className="font-bold text-slate-800 text-lg mb-3 leading-tight">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Desktop Arrows between nodes */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-20 text-slate-500 bg-white rounded-full border-2 border-slate-200 shadow-md p-1.5 hidden lg:block" style={{ transform: 'translate(50%, -50%)' }}>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}

                    {/* Mobile Arrows between nodes */}
                    {index < steps.length - 1 && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 text-slate-500 bg-white rounded-full border-2 border-slate-200 shadow-md p-1.5 block lg:hidden">
                        <ArrowDown className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Role Definition */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 text-center lg:text-left">Strategic Resource Allocation</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              <div className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 border-t-8 lg:border-t-0 lg:border-l-8 border-t-blue-500 lg:border-l-blue-500 flex flex-col md:flex-row items-center md:items-stretch space-y-4 md:space-y-0 md:space-x-6 shadow-sm">
                <div className="flex-shrink-0 text-center w-full md:w-32 flex flex-col justify-center">
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Role 1</span>
                  <span className="block text-xl font-black text-slate-800 leading-tight">Engineer<br className="hidden md:block"/>& PM</span>
                </div>
                <div className="h-px w-full md:w-px md:h-auto bg-slate-200"></div>
                <div className="text-center md:text-left flex flex-col justify-center">
                  <strong className="text-blue-700 block mb-2 text-lg">The Content Owners</strong>
                  <p className="text-sm text-slate-600 leading-relaxed">Provide the raw SME knowledge via standard demos and own the technical accuracy of the final generated output.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 border-t-8 lg:border-t-0 lg:border-l-8 border-t-emerald-500 lg:border-l-emerald-500 flex flex-col md:flex-row items-center md:items-stretch space-y-4 md:space-y-0 md:space-x-6 shadow-sm">
                <div className="flex-shrink-0 text-center w-full md:w-32 flex flex-col justify-center">
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Role 2</span>
                  <span className="block text-xl font-black text-slate-800 leading-tight">Technical<br className="hidden md:block"/>Writer</span>
                </div>
                <div className="h-px w-full md:w-px md:h-auto bg-slate-200"></div>
                <div className="text-center md:text-left flex flex-col justify-center">
                  <strong className="text-emerald-700 block mb-2 text-lg">The Strategic Advisors</strong>
                  <p className="text-sm text-slate-600 leading-relaxed">Freed from manual typing. Focus on establishing UX standards, enforcing minimalism, and final quality assurance.</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
        
        {/* Bottom Right Watermark */}
        <div className="absolute bottom-4 right-6 text-slate-400 text-xs font-semibold tracking-wider z-20">
          <a href="https://disquedoesit.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">
            disquedoesit.com
          </a>
        </div>
        
      </div>
    </div>
  );
}