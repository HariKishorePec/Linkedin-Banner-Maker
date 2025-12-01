import React, { useState } from "react";
import { Github, Mail, Globe, Terminal, Cloud, Database, Code2, Camera, X, Cpu, Layers, Briefcase, MapPin, ExternalLink, Hexagon, Zap } from "lucide-react";

const Banner = ({ theme, data }) => {
  const { name, role, tagline, email, currentPosition, location, website, github, stack, expertise, yearsExp, status } = data;

  const wrapperClass = "w-full aspect-[4/1] overflow-hidden relative select-none shadow-lg transition-all duration-300";

  // Left 25% (Spacer for DP), Right 75% (Content)
  const ContentLayout = ({ children, className = "" }) => (
    <div className={`w-full h-full flex ${className}`}>
      <div className="w-[25%] h-full shrink-0 relative" />
      <div className="flex-1 h-full relative pl-4 pr-8 py-4">{children}</div>
    </div>
  );

  // Helper to safely get array items
  const getStack = (idx) => stack[idx] || "";
  const getExpertise = (idx) => expertise[idx] || "";

  // 1. The Modern Stack (Dark Mode)
  if (theme === "modern") {
    return (
      <div className={`${wrapperClass} bg-slate-900 text-white`}>
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-[25%] h-full bg-slate-800/20 border-r border-white/5"></div>
        <ContentLayout>
          <div className="h-full flex flex-col justify-center relative z-10 pl-6">
            <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs tracking-wider uppercase mb-1">
              <Terminal size={14} />
              <span>{currentPosition}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-1">{name}</h1>
            <p className="text-xl text-slate-300 font-light mb-4">{role}</p>
            <div className="flex items-center gap-6 text-slate-400 text-xs mb-6">
              <span className="flex items-center space-x-2">
                <Code2 size={14} className="text-blue-400" />
                <span>{stack.slice(0, 3).join(", ")}</span>
              </span>
              <span className="flex items-center space-x-2">
                <Cloud size={14} className="text-blue-400" />
                <span>{stack.slice(3, 6).join(", ")}</span>
              </span>
            </div>
            <div className="flex items-center gap-5 text-xs font-mono text-slate-300 border-t border-white/10 pt-4 w-max">
              <div className="flex items-center gap-2 hover:text-blue-400">
                <Github size={14} />
                <span>{github}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400">
                <Globe size={14} />
                <span>{website}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400">
                <Mail size={14} />
                <span>{email}</span>
              </div>
            </div>
          </div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right hidden lg:block opacity-20">
            <div className="font-mono text-[10px] text-slate-500 space-y-1">
              <p>class Engineer &#123;</p>
              <p className="pl-4">exp: "{yearsExp}";</p>
              <p className="pl-4">
                stack: ["{getStack(0)}", "{getStack(1)}"];
              </p>
              <p>&#125;</p>
            </div>
          </div>
        </ContentLayout>
      </div>
    );
  }

  // 2. The Minimalist (Light Mode)
  if (theme === "clean") {
    return (
      <div className={`${wrapperClass} bg-white text-slate-800 border border-slate-200`}>
        <div className="absolute left-0 top-0 w-[25%] h-full bg-slate-50 border-r border-slate-100/50"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-emerald-50/50 to-transparent"></div>
        <ContentLayout>
          <div className="h-full flex flex-col justify-center pl-8 relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">{name}</h1>
            <p className="text-xl text-emerald-600 font-medium mb-3">{role}</p>
            <p className="text-slate-500 text-sm max-w-lg leading-relaxed mb-6 line-clamp-2">{tagline}</p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2 text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md text-xs font-medium border border-slate-200">
                <Globe size={14} />
                <span>{website}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md text-xs font-medium border border-slate-200">
                <Mail size={14} />
                <span>{email}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md text-xs font-medium border border-slate-200">
                <Github size={14} />
                <span>{github}</span>
              </div>
            </div>
          </div>
        </ContentLayout>
      </div>
    );
  }

  // 3. The Visionary (Gradient)
  if (theme === "bold") {
    return (
      <div className={`${wrapperClass} bg-gradient-to-r from-violet-800 to-fuchsia-700 text-white`}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-10"></div>
        <ContentLayout>
          <div className="h-full flex flex-col justify-center pl-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl max-w-2xl">
              <h1 className="text-3xl font-black uppercase tracking-widest">{name}</h1>
              <div className="w-12 h-1 bg-fuchsia-400 mt-1 mb-2 rounded-full"></div>
              <p className="text-lg font-medium text-violet-100 mb-4">{role}</p>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-wider mb-4">
                {stack.slice(0, 4).map((tech, i) => (
                  <span key={i} className="bg-black/20 px-2 py-1 rounded border border-white/5 uppercase">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-xs text-violet-200 font-mono opacity-80 pt-2 border-t border-white/10 flex gap-4">
                <span>{website}</span>
                <span>|</span>
                <span>{email}</span>
              </div>
            </div>
          </div>
        </ContentLayout>
      </div>
    );
  }

  // 4. The Architect (Blueprint/Grid)
  if (theme === "architect") {
    return (
      <div className={`${wrapperClass} bg-[#0f172a] text-sky-100`}>
        <div className="absolute inset-0 bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#0ea5e91a,transparent)]"></div>
        <ContentLayout>
          <div className="h-full flex flex-col justify-center pl-10 relative z-10">
            <div className="border-l-2 border-sky-500 pl-6">
              <h1 className="text-5xl font-thin tracking-tighter text-white mb-2">{name}</h1>
              <p className="text-xl text-sky-400 font-mono tracking-wide mb-6">{role.toUpperCase()}</p>
            </div>
            <div className="pl-6 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-400 font-light">
              {expertise.slice(0, 3).map((exp, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Cpu size={14} className="text-sky-600" /> {exp}
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-sky-600" /> {website}
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-600 border border-slate-700 px-2 py-1">VER: 2.0.4 | BLD: PROD</div>
        </ContentLayout>
      </div>
    );
  }

  // 5. The Corporate (Trust Blue)
  if (theme === "corporate") {
    return (
      <div className={`${wrapperClass} bg-slate-50 text-slate-800`}>
        <div className="absolute right-0 top-0 h-full w-2/3 bg-blue-900 clip-path-slant"></div>
        <div className="absolute right-0 top-0 h-full w-[65%] bg-blue-900 transform -skew-x-12 origin-top-right translate-x-12"></div>
        <div className="absolute right-0 top-0 h-full w-[60%] bg-blue-800 transform -skew-x-12 origin-top-right translate-x-12 opacity-50"></div>

        <ContentLayout>
          <div className="h-full flex items-center justify-between relative z-10 pr-12">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{name}</h1>
              <p className="text-lg text-blue-700 font-semibold mb-4">{role}</p>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <Briefcase size={14} /> {currentPosition}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} /> {location}
                </span>
              </div>
            </div>

            <div className="text-right text-blue-100 hidden md:block">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-2">Core Competencies</h3>
              <ul className="text-sm space-y-1 font-light">
                {expertise.slice(0, 3).map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-blue-400/30 text-xs font-mono">{email}</div>
            </div>
          </div>
        </ContentLayout>
      </div>
    );
  }

  // 6. The Noir (Sleek Dark)
  if (theme === "noir") {
    return (
      <div className={`${wrapperClass} bg-black text-white`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-60"></div>
        <ContentLayout>
          <div className="h-full flex flex-col justify-center items-center text-center relative z-10 pr-8">
            <h1 className="text-5xl font-black tracking-tighter mb-2 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">{name.toUpperCase()}</h1>
            <div className="h-px w-24 bg-neutral-700 my-4"></div>
            <p className="text-neutral-400 font-light tracking-[0.2em] uppercase text-sm mb-8">{role}</p>
            <div className="flex gap-8 text-neutral-500 text-xs font-mono uppercase">
              <span className="hover:text-white transition-colors cursor-pointer">{github.replace("/", "")}</span>
              <span className="hover:text-white transition-colors cursor-pointer">{website}</span>
            </div>
          </div>
        </ContentLayout>
      </div>
    );
  }

  // 7. The Startup (Vibrant & Energetic)
  if (theme === "startup") {
    return (
      <div className={`${wrapperClass} bg-white overflow-hidden`}>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute right-40 top-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <ContentLayout>
          <div className="h-full flex flex-col justify-center pl-8 relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-wide w-max mb-3 uppercase">{status}</div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-1">{name}</h1>
            <p className="text-xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-4">{role}</p>
            <div className="flex gap-2">
              {stack.slice(0, 3).map((tech, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-slate-500 text-xs font-medium">
              <Globe size={14} className="text-slate-900" /> {website}
            </div>
          </div>
        </ContentLayout>
      </div>
    );
  }

  // 8. The Terminal (Hacker/Dev)
  if (theme === "terminal") {
    return (
      <div className={`${wrapperClass} bg-[#0d1117] text-[#58a6ff]`}>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Code2 size={200} />
        </div>
        <ContentLayout>
          <div className="h-full font-mono flex flex-col justify-center pl-6 relative z-10">
            <div className="text-xs text-slate-500 mb-2">Last login: {new Date().toDateString()} on ttys000</div>
            <div className="text-lg text-white mb-1">
              <span className="text-pink-500">const</span> <span className="text-[#79c0ff]">profile</span> = <span className="text-white">&#123;</span>
            </div>
            <div className="pl-6 space-y-1 text-sm text-slate-300">
              <p>
                name: <span className="text-[#a5d6ff]">"{name}"</span>,
              </p>
              <p>
                role: <span className="text-[#a5d6ff]">"{role}"</span>,
              </p>
              <p>
                stack: [<span className="text-[#7ee787]">"{getStack(0)}"</span>, <span className="text-[#7ee787]">"{getStack(1)}"</span>, <span className="text-[#7ee787]">"{getStack(2)}"</span>],
              </p>
              <p>
                contact: <span className="text-[#a5d6ff]">"{email}"</span>
              </p>
            </div>
            <div className="text-white mt-1">&#125;;</div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[#7ee787]">➜</span> <span className="text-white">check_portfolio</span>
              <span className="animate-pulse w-2 h-4 bg-slate-500 block"></span>
            </div>
            <div className="text-xs text-slate-500 mt-1 pl-4">{website}</div>
          </div>
        </ContentLayout>
      </div>
    );
  }

  // 9. The Executive (Elegant Serif)
  if (theme === "executive") {
    return (
      <div className={`${wrapperClass} bg-[#1a1a1a] text-[#e5e5e5]`}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#242424]"></div>
        <div className="absolute top-0 right-[48%] w-px h-full bg-[#d4af37]"></div>

        <ContentLayout>
          <div className="h-full flex items-center justify-between relative z-10 pr-12">
            <div className="font-serif z-20">
              <h1 className="text-4xl text-white italic mb-2">{name}</h1>
              <p className="text-sm tracking-[0.2em] text-[#d4af37] uppercase">{role}</p>
            </div>

            <div className="text-right z-20">
              <div className="mb-4">
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Expertise</p>
                {expertise.slice(0, 2).map((exp, i) => (
                  <p key={i} className="text-sm text-neutral-300">
                    {exp}
                  </p>
                ))}
              </div>
              <div className="flex justify-end gap-4 text-[#d4af37]">
                <Globe size={16} />
                <Mail size={16} />
              </div>
              <p className="text-[10px] text-neutral-500 mt-2 font-mono">{website}</p>
            </div>
          </div>
        </ContentLayout>
      </div>
    );
  }

  // 10. The Mesh (Colorful Gradient)
  if (theme === "mesh") {
    return (
      <div className={`${wrapperClass} bg-white`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-violet-100 to-fuchsia-100"></div>
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-transparent rotate-12 blur-3xl"></div>

        <ContentLayout>
          <div className="h-full flex flex-col justify-center pl-8 relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Hexagon size={16} className="text-slate-900 fill-slate-900" />
              <span className="text-xs font-bold tracking-widest uppercase text-slate-900">Portfolio</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2">{name}</h1>
            <p className="text-lg text-slate-600 mb-6 max-w-lg line-clamp-2">{tagline}</p>

            <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/40 shadow-sm w-max">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <Zap size={12} className="text-yellow-500 fill-yellow-500" /> {getExpertise(0)}
              </span>
              <span className="w-px h-3 bg-slate-300"></span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <Database size={12} className="text-blue-500" /> {getExpertise(1)}
              </span>
              <span className="w-px h-3 bg-slate-300"></span>
              <span className="text-xs text-slate-500 font-mono">{website}</span>
            </div>
          </div>
        </ContentLayout>
      </div>
    );
  }

  return null;
};

const CaptureModal = ({ theme, data, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-8">
      <div className="absolute top-4 right-4">
        <button onClick={onClose} className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
          <X size={24} />
        </button>
      </div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Capture Mode</h3>
        <p className="text-slate-400">Take a screenshot now for the highest quality JPG.</p>
        <p className="text-slate-500 text-sm mt-1 font-mono">Win + Shift + S / Cmd + Shift + 4</p>
      </div>
      <div className="w-full max-w-[1200px] shadow-2xl">
        <Banner theme={theme} data={data} />
      </div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState({
    name: "HARI KISHORE",
    role: "Senior Full Stack Engineer",
    tagline: "Building scalable microservices & cloud-native solutions. Reducing latency & modernizing legacy systems.",
    currentPosition: "Engineer II @ Verizon",
    location: "Bengaluru, India",
    email: "harii@duck.com",
    website: "harikishore.vercel.app",
    github: "/HariKishorePec",
    stack: ["React", "Node", "Python", "AWS", "K8s", "Kafka"],
    expertise: ["Distributed Systems", "Microservices", "Elasticsearch"],
    yearsExp: "5 Years",
    status: "OPEN TO WORK",
  });

  const [captureTheme, setCaptureTheme] = useState(null);

  const handleArrayChange = (field, value) => {
    setData({ ...data, [field]: value.split(",").map((item) => item.trim()) });
  };

  const themes = [
    { id: "modern", name: "The Modern Stack", desc: "Dark mode, code-focused, depth." },
    { id: "clean", name: "The Minimalist", desc: "Clean, high-contrast, professional." },
    { id: "bold", name: "The Visionary", desc: "Bold gradients, stands out." },
    { id: "architect", name: "The Architect", desc: "Blueprint style, technical grid." },
    { id: "corporate", name: "The Corporate", desc: "Trustworthy blue, standard layout." },
    { id: "noir", name: "The Noir", desc: "Sleek black, ultra-minimal." },
    { id: "startup", name: "The Startup", desc: "Vibrant blobs, energetic." },
    { id: "terminal", name: "The Terminal", desc: "Hacker/IDE style for devs." },
    { id: "executive", name: "The Executive", desc: "Gold/Black, high-end serif." },
    { id: "mesh", name: "The Mesh", desc: "Soft pastel gradients, modern UI." },
  ];

  const InputGroup = ({ label, value, onChange, placeholder }) => (
    <div className="space-y-1">
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full px-3 py-2 border rounded-lg text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none transition-all" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      {captureTheme && <CaptureModal theme={captureTheme} data={data} onClose={() => setCaptureTheme(null)} />}

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-800">LinkedIn Banner Generator</h1>
          <p className="text-slate-600">Customize every detail below. The preview updates instantly across all 10 designs.</p>
        </div>

        {/* Dynamic Inputs Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-8">
          {/* Section 1: Personal Info */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">1</span>
              Personal Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InputGroup label="Display Name" value={data.name} onChange={(v) => setData({ ...data, name: v })} />
              <InputGroup label="Headline / Role" value={data.role} onChange={(v) => setData({ ...data, role: v })} />
              <InputGroup label="Current Position" value={data.currentPosition} onChange={(v) => setData({ ...data, currentPosition: v })} />
              <InputGroup label="Location" value={data.location} onChange={(v) => setData({ ...data, location: v })} />
              <InputGroup label="Status Badge" value={data.status} onChange={(v) => setData({ ...data, status: v })} />
              <InputGroup label="Years Experience" value={data.yearsExp} onChange={(v) => setData({ ...data, yearsExp: v })} />
              <div className="md:col-span-3">
                <InputGroup label="Tagline (Short Bio)" value={data.tagline} onChange={(v) => setData({ ...data, tagline: v })} />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-slate-100"></div>

          {/* Section 2: Links & Contact */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">2</span>
              Links & Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputGroup label="Email Address" value={data.email} onChange={(v) => setData({ ...data, email: v })} />
              <InputGroup label="Portfolio / Website" value={data.website} onChange={(v) => setData({ ...data, website: v })} />
              <InputGroup label="GitHub Handle" value={data.github} onChange={(v) => setData({ ...data, github: v })} />
            </div>
          </div>

          <div className="w-full h-px bg-slate-100"></div>

          {/* Section 3: Skills & Expertise */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">3</span>
              Skills & Expertise (Comma Separated)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Tech Stack (Used in Chips/Lists)" value={data.stack.join(", ")} onChange={(v) => handleArrayChange("stack", v)} placeholder="e.g. React, Node, AWS..." />
              <InputGroup label="Key Expertise (Used in Bullet points)" value={data.expertise.join(", ")} onChange={(v) => handleArrayChange("expertise", v)} placeholder="e.g. Microservices, System Design..." />
            </div>
          </div>
        </div>

        {/* Banners Display */}
        <div className="grid gap-12 pt-4">
          {themes.map((t, index) => (
            <div key={t.id} className="space-y-3">
              <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span className="bg-slate-200 text-slate-600 w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">{index + 1}</span>
                    {t.name}
                  </h3>
                  <p className="text-sm text-slate-500">{t.desc}</p>
                </div>
                <button onClick={() => setCaptureTheme(t.id)} className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors shadow-sm">
                  <Camera size={16} />
                  <span>Capture Mode</span>
                </button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <Banner theme={t.id} data={data} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
