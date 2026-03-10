import React from 'react';
import { Video, FileAudio, Bot, FileText, CheckCircle, ArrowDown, User, Sparkles, AlertCircle } from 'lucide-react';

export default function App() {
  const steps = [
    {
      id: 1,
      title: "Record Feature Demo",
      owner: "Engineer / PM",
      role: "SME Input",
      type: "human",
      icon: Video,
      color: "bg-slate-100 border-slate-300 text-slate-700",
      iconColor: "text-slate-500",
      description: "Record an MP4 screen share explaining the feature. State the goal, dependencies, and explain each step using clear action verbs.",
      details: ["Provide background & end goal", "Use 'Step 1 - Click...' format", "Keep it minimal & focused"]
    },
    {
      id: 2,
      title: "Automated Transcription",
      owner: "AWS S3 / Transcribe",
      role: "AI Process",
      type: "ai",
      icon: FileAudio,
      color: "bg-blue-50 border-blue-200 text-blue-800",
      iconColor: "text-blue-500",
      description: "Upload the MP4 recording to the designated S3 folder to automatically generate a raw text transcript of the walkthrough.",
      details: ["Audio to text conversion", "Automated via S3 upload"]
    },
    {
      id: 3,
      title: "AI Draft Generation",
      owner: "Cedric AI",
      role: "AI Process",
      type: "ai",
      icon: Bot,
      color: "bg-indigo-50 border-indigo-200 text-indigo-800",
      iconColor: "text-indigo-500",
      description: "Run the raw transcript through AI tool to automatically organize, structure, and format the text into a standard guide.",
      details: ["Formats raw text into User Guide", "Structures prerequisites & steps"]
    },
    {
      id: 4,
      title: "Formatting & API Updates",
      owner: "Engineer / PM",
      role: "Doc Owner",
      type: "human",
      icon: FileText,
      color: "bg-slate-100 border-slate-300 text-slate-700",
      iconColor: "text-slate-500",
      description: "Review the AI-generated draft. Format the User Guide, update technical API references, and ensure all examples actually work.",
      details: ["Test all examples", "Add full results for steps", "Address the 'sneaky gotchas'"]
    },
    {
      id: 5,
      title: "Advisory Review & Polish",
      owner: "Technical Writer",
      role: "Advisory/Editor",
      type: "human",
      icon: CheckCircle,
      color: "bg-emerald-50 border-emerald-200 text-emerald-800",
      iconColor: "text-emerald-500",
      description: "Writer reviews the draft for active voice, present tense, and minimalism. Final console content review is completed.",
      details: ["Fix wordsmithing", "Ensure UX copy standards", "Final publish"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">AI-Forward Documentation Workflow</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A modernized approach to technical documentation that reduces turnaround times by leveraging AI for drafting, allowing Engineers to own the content and Writers to act as strategic advisors.
          </p>
        </header>

        {/* Strategy Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="flex items-center text-lg font-semibold text-slate-800 mb-2">
              <User className="w-5 h-5 mr-2 text-blue-500" />
              Role Shift: Engineers & PMs
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Act as the primary <strong>owners</strong> of the technical documentation. Instead of writing from scratch, provide the raw SME knowledge via structured video demos and refine the AI outputs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="flex items-center text-lg font-semibold text-slate-800 mb-2">
              <AlertCircle className="w-5 h-5 mr-2 text-emerald-500" />
              Role Shift: Tech Writers
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Serve in an <strong>advisory</strong> role due to resource constraints. Focus on providing templates, guidance, editing for minimalism, and polishing the final AI-generated drafts.
            </p>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-slate-200 rounded-full md:left-1/2 md:-ml-0.5 z-0 hidden md:block"></div>

          <div className="space-y-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Center Node / Number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-slate-100 shadow-md flex items-center justify-center z-10 my-4 md:my-0 mx-4 relative">
                    {step.type === 'ai' ? (
                      <Sparkles className={`w-6 h-6 ${step.iconColor}`} />
                    ) : (
                      <span className="text-xl font-bold text-slate-400">{step.id}</span>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 px-4">
                    <div className={`p-6 rounded-2xl border shadow-sm ${step.color} transition-transform hover:-translate-y-1 duration-200`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-lg bg-white bg-opacity-50 mr-3`}>
                            <Icon className={`w-6 h-6 ${step.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{step.title}</h3>
                            <div className="text-xs font-semibold uppercase tracking-wider opacity-70 mt-1">
                              {step.owner} • {step.role}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm opacity-90 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-1.5">
                        {step.details.map((detail, i) => (
                          <li key={i} className="text-xs flex items-center opacity-80">
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 mr-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mobile connecting arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center w-full my-2 text-slate-300">
                      <ArrowDown className="w-6 h-6" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}