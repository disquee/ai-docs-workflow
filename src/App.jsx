import React from 'react';
import { Video, FileAudio, Bot, FileText, CheckCircle, ArrowRight, Zap, TrendingUp, Users, Sparkles } from 'lucide-react';

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
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-slate-300 relative" style={{ minHeight: '900px' }}>
        
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-12 py-10 flex justify-between items-center">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Sparkles className="text-indigo-400 w-6 h-6" />
              <h4 className="text-indigo-400 font-semibold tracking-widest uppercase text-sm">Strategic Initiative</h4>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">AI-Accelerated Documentation Workflow</h1>
            <p className="text-slate-300 mt-2 text-lg max-w-3xl">Optimizing resource constraints by shifting from manual drafting to an automated, engineer-driven knowledge pipeline.</p>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <div className="text-3xl font-bold text-emerald-400">80%</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Est. Time Saved</div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-12 pb-16 flex flex-col justify-between bg-slate-50">
          
          {/* Top Row: The Value Proposition */}
          <div className="grid grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-full"><TrendingUp className="w-6 h-6 text-emerald-600" /></div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Increase Velocity</h3>
                <p className="text-sm text-slate-600 leading-snug mt-1">Eliminate writer bottlenecks. Docs are created concurrently with product development.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full"><Users className="w-6 h-6 text-blue-600" /></div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Empower SMEs</h3>
                <p className="text-sm text-slate-600 leading-snug mt-1">Engineers dictate knowledge easily via video, avoiding the friction of blank-page writing.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full"><Zap className="w-6 h-6 text-indigo-600" /></div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Optimize Writers</h3>
                <p className="text-sm text-slate-600 leading-snug mt-1">Shifts writers from manual drafters to high-value strategic editors and UX advisors.</p>
              </div>
            </div>
          </div>

          {/* Middle Row: The Workflow Pipeline */}
          <div className="relative flex-grow flex items-center mb-12 mt-4">
            {/* Background connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-1.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-5 gap-5 w-full relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative flex flex-col">
                    {/* Node */}
                    <div className={`bg-white border-4 ${step.color} rounded-xl p-6 shadow-lg flex flex-col items-center text-center h-full relative z-10`}>
                      {step.type === 'ai' && (
                        <div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider flex items-center">
                          <Sparkles className="w-3 h-3 mr-1" /> AI Process
                        </div>
                      )}
                      
                      <div className={`${step.bgColor} p-4 rounded-full mb-4`}>
                        <Icon className={`w-8 h-8 ${step.iconColor}`} />
                      </div>
                      
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step {step.id}</span>
                      <h3 className="font-bold text-slate-800 text-lg mb-2 leading-tight">{step.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Arrows between nodes */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-slate-400 bg-slate-50 rounded-full border border-slate-200 shadow-sm p-1 hidden lg:block" style={{ transform: 'translate(50%, -50%)' }}>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Role Definition */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-slate-100 rounded-lg p-8 border-l-4 border-blue-500 flex items-center space-x-6">
              <div className="flex-shrink-0 text-center">
                <span className="block text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Role 1</span>
                <span className="block text-xl font-black text-slate-800">Engineer / PM</span>
              </div>
              <div className="w-px h-16 bg-slate-300"></div>
              <div>
                <strong className="text-blue-700 block mb-1 text-lg">The Content Owners</strong>
                <p className="text-sm text-slate-600">Provide the raw SME knowledge via standard demos and own the technical accuracy of the final generated output.</p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-lg p-8 border-l-4 border-emerald-500 flex items-center space-x-6">
              <div className="flex-shrink-0 text-center">
                <span className="block text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Role 2</span>
                <span className="block text-xl font-black text-slate-800">Technical Writer</span>
              </div>
              <div className="w-px h-16 bg-slate-300"></div>
              <div>
                <strong className="text-emerald-700 block mb-1 text-lg">The Strategic Advisors</strong>
                <p className="text-sm text-slate-600">Freed from manual typing. Focus on establishing UX standards, enforcing minimalism, and final quality assurance.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}