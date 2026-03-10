import React, { useState } from 'react';
import { Video, FileAudio, Bot, FileText, CheckCircle, ArrowDown, User, Sparkles, AlertCircle, RefreshCw, PenTool } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('diagram'); // 'diagram', 'generator', 'reviewer'
  
  // State for AI Tools
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Gemini API call with exponential backoff
  const callGeminiAPI = async (prompt, systemPrompt) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // The execution environment provides the key at runtime
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] }
    };

    const maxRetries = 5;
    const delays = [1000, 2000, 4000, 8000, 16000];

    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "No output generated.";
      } catch (err) {
        if (i === maxRetries - 1) {
          throw new Error("Failed to connect to AI after multiple attempts. Please try again.");
        }
        await new Promise(resolve => setTimeout(resolve, delays[i]));
      }
    }
  };

  const handleGenerateDraft = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setError('');
    setOutputText('');

    const systemPrompt = `You are "Cedric AI", an expert technical documentation assistant. 
    Your job is to take a raw, messy video transcript and turn it into a clean, structured User Guide draft.
    
    Formatting rules:
    1. Start with a brief "Background" or "Purpose" section.
    2. Include a "Prerequisites" or "Before you begin" section if applicable.
    3. Format the actual actions as numbered steps.
    4. Use active voice and start steps with action verbs (e.g., "Click the Admin button").
    5. Be minimal and concise. Do not add marketing fluff.`;

    try {
      const result = await callGeminiAPI(`Raw Transcript:\n\n${inputText}`, systemPrompt);
      setOutputText(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReviewCopy = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setError('');
    setOutputText('');

    const systemPrompt = `You are an expert Technical Writer and Editor reviewing a documentation draft.
    You must ruthlessly review the draft based on the following specific team rules:
    1. Address the user directly (speak TO them, not ABOUT them).
    2. Use Active Voice and Present Tense.
    3. Minimalism: Be concise. Don't sell the feature.
    4. Ensure expected results are clear for each step (the "sneaky gotchas").
    
    Output format:
    - First, provide a bulleted list of specific critique points and improvements.
    - Second, provide a fully rewritten, polished version of the draft below the critique.`;

    try {
      const result = await callGeminiAPI(`Documentation Draft to review:\n\n${inputText}`, systemPrompt);
      setOutputText(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Shared UI for the text areas
  const renderAITool = (title, description, placeholder, buttonText, onExecute, inputLabel) => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>
      <p className="text-slate-600 mb-6">{description}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Column */}
        <div className="flex flex-col h-full">
          <label className="text-sm font-semibold text-slate-700 mb-2">{inputLabel}</label>
          <textarea 
            className="flex-grow w-full h-64 lg:h-96 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            placeholder={placeholder}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button 
            onClick={onExecute}
            disabled={isLoading || !inputText.trim()}
            className="mt-4 w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            {isLoading ? (
              <><RefreshCw className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
            ) : (
              <>{buttonText}</>
            )}
          </button>
        </div>

        {/* Output Column */}
        <div className="flex flex-col h-full">
          <label className="text-sm font-semibold text-slate-700 mb-2">AI Output</label>
          <div className="flex-grow w-full h-64 lg:h-full p-4 border border-slate-300 rounded-lg bg-slate-50 overflow-y-auto">
            {error && (
              <div className="text-red-600 flex items-center p-4 bg-red-50 rounded-lg">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <p>{error}</p>
              </div>
            )}
            {!error && !outputText && !isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <Sparkles className="w-8 h-8 mb-2 opacity-50" />
                <p>Output will appear here</p>
              </div>
            )}
            {isLoading && (
              <div className="h-full flex items-center justify-center text-indigo-500">
                <RefreshCw className="w-8 h-8 animate-spin" />
              </div>
            )}
            {outputText && !isLoading && (
              <div className="prose prose-sm max-w-none text-slate-800 whitespace-pre-wrap">
                {outputText}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">AI Documentation Workspace</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A modernized approach to technical documentation. Use the workflow diagram as a guide, or jump into the tools to generate and review your drafts automatically.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8 border-b border-slate-200 pb-2">
          <button 
            onClick={() => setActiveTab('diagram')}
            className={`px-4 py-2 font-semibold rounded-t-lg transition-colors flex items-center ${activeTab === 'diagram' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            <Video className="w-4 h-4 mr-2" />
            Workflow Diagram
          </button>
          <button 
            onClick={() => { setActiveTab('generator'); setInputText(''); setOutputText(''); }}
            className={`px-4 py-2 font-semibold rounded-t-lg transition-colors flex items-center ${activeTab === 'generator' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            <Bot className="w-4 h-4 mr-2" />
            Draft Generator
          </button>
          <button 
            onClick={() => { setActiveTab('reviewer'); setInputText(''); setOutputText(''); }}
            className={`px-4 py-2 font-semibold rounded-t-lg transition-colors flex items-center ${activeTab === 'reviewer' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            <PenTool className="w-4 h-4 mr-2" />
            Copy Reviewer
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'diagram' && (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
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
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-slate-200 rounded-full md:left-1/2 md:-ml-0.5 z-0 hidden md:block"></div>
              <div className="space-y-6 relative z-10">
                {[
                  {
                    id: 1, title: "Record Feature Demo", owner: "Engineer / PM", role: "SME Input", type: "human", icon: Video, color: "bg-slate-100 border-slate-300 text-slate-700", iconColor: "text-slate-500", description: "Record an MP4 screen share explaining the feature. State the goal, dependencies, and explain each step using clear action verbs.", details: ["Provide background & end goal", "Use 'Step 1 - Click...' format", "Keep it minimal & focused"]
                  },
                  {
                    id: 2, title: "Automated Transcription", owner: "AWS S3 / Transcribe", role: "AI Process", type: "ai", icon: FileAudio, color: "bg-blue-50 border-blue-200 text-blue-800", iconColor: "text-blue-500", description: "Upload the MP4 recording to the designated S3 folder to automatically generate a raw text transcript of the walkthrough.", details: ["Audio to text conversion", "Automated via S3 upload"]
                  },
                  {
                    id: 3, title: "AI Draft Generation", owner: "Cedric AI", role: "AI Process", type: "ai", icon: Bot, color: "bg-indigo-50 border-indigo-200 text-indigo-800", iconColor: "text-indigo-500", description: "Run the raw transcript through the Cedric AI tool to automatically organize, structure, and format the text into a standard guide.", details: ["Formats raw text into User Guide", "Structures prerequisites & steps"]
                  },
                  {
                    id: 4, title: "Formatting & API Updates", owner: "Engineer / PM", role: "Doc Owner", type: "human", icon: FileText, color: "bg-slate-100 border-slate-300 text-slate-700", iconColor: "text-slate-500", description: "Review the AI-generated draft. Format the User Guide, update technical API references, and ensure all examples actually work.", details: ["Test all examples", "Add full results for steps", "Address the 'sneaky gotchas'"]
                  },
                  {
                    id: 5, title: "Advisory Review & Polish", owner: "Technical Writer", role: "Advisory/Editor", type: "human", icon: CheckCircle, color: "bg-emerald-50 border-emerald-200 text-emerald-800", iconColor: "text-emerald-500", description: "Writer reviews the draft for active voice, present tense, and minimalism. Final console content review is completed.", details: ["Fix wordsmithing", "Ensure UX copy standards", "Final publish"]
                  }
                ].map((step, index, arr) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;
                  return (
                    <div key={step.id} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div className="hidden md:block md:w-1/2"></div>
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-slate-100 shadow-md flex items-center justify-center z-10 my-4 md:my-0 mx-4 relative">
                        {step.type === 'ai' ? <Sparkles className={`w-6 h-6 ${step.iconColor}`} /> : <span className="text-xl font-bold text-slate-400">{step.id}</span>}
                      </div>
                      <div className="w-full md:w-1/2 px-4">
                        <div className={`p-6 rounded-2xl border shadow-sm ${step.color} transition-transform hover:-translate-y-1 duration-200`}>
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center">
                              <div className={`p-2 rounded-lg bg-white bg-opacity-50 mr-3`}>
                                <Icon className={`w-6 h-6 ${step.iconColor}`} />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg">{step.title}</h3>
                                <div className="text-xs font-semibold uppercase tracking-wider opacity-70 mt-1">{step.owner} • {step.role}</div>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm opacity-90 mb-4 leading-relaxed">{step.description}</p>
                          <ul className="space-y-1.5">
                            {step.details.map((detail, i) => (
                              <li key={i} className="text-xs flex items-center opacity-80">
                                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 mr-2"></span>{detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {index < arr.length - 1 && (
                        <div className="md:hidden flex justify-center w-full my-2 text-slate-300"><ArrowDown className="w-6 h-6" /></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'generator' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderAITool(
              "AI Draft Generator",
              "Paste the raw transcript output from your demo video. The AI will parse the text and structure it into a user guide format with prerequisites and numbered action steps.",
              "Paste raw transcript text here... (e.g., 'Okay so today I'm going to show you how to upload a file to S3. First you want to log into the console...')",
              "✨ Generate Draft",
              handleGenerateDraft,
              "Raw Transcript"
            )}
          </div>
        )}

        {activeTab === 'reviewer' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             {renderAITool(
              "AI Copy Reviewer",
              "Paste a draft document. The AI will review it against the team's style guide rules (active voice, present tense, minimalism) and provide improvement suggestions along with a polished rewrite.",
              "Paste drafted documentation here... (e.g., 'The user should click the button to make the file upload. This is a great feature because it saves time.')",
              "✨ Review Copy",
              handleReviewCopy,
              "Documentation Draft"
            )}
          </div>
        )}

      </div>
    </div>
  );
}
