const experience = [
  {
    "company": "Sprouts AI",
    "role": "Software Engineer (Streaming Media SDK & C++/Objective-C)",
    "where": "Chicago, IL, USA",
    "dates": "Mar 2025 — Present",
    "state": "CURRENT",
    "items": [
      "Led technical direction, system architecture, and API design for a C++/Objective-C media playback SDK adopted by 4 third-party partners, cutting integration time 45% by aligning requirements with partner organizations and shipping versioned APIs and reference players.",
      "Improved media playback performance, cutting time-to-first-frame 38% and rebuffering 42% in QoE telemetry, by building an HLS/DASH adaptive streaming engine with bandwidth estimation and H.264/HEVC/AV1 rendition switching.",
      "Root-caused and resolved 60+ complex issues spanning the media framework, SDK, and connectivity layer, raising session reliability to 99.9% by adding packet captures, trace logging, and crash symbolication with LLDB and Instruments.",
      "Served 200K+ monthly playback sessions at a 0.4% error rate by building an HTML5 video playback module in JavaScript using MSE and EME with DRM license handling, buffer management, and codec detection.",
      "Accelerated feature delivery 30% and cut production regressions 35% by embedding GenAI tools (code assistants, agents) into daily workflow and leading design discussions and code reviews for system health."
    ]
  },
  {
    "company": "Resilience Inc",
    "role": "Software Engineer (Media Playback & Mobile/Objective-C)",
    "where": "Chicago, IL, USA",
    "dates": "Aug 2023 — Mar 2025",
    "items": [
      "Increased user engagement 40% by shipping media player features on iOS and Android mobile devices in Objective-C and C++, integrating AVFoundation and CoreMedia for HLS/DASH playback.",
      "Cut video startup latency by 30% by implementing adaptive bitrate selection, segment prefetching, and hardware H.264/HEVC decoding through VideoToolbox, improving customer experience for 50K+ monthly users.",
      "Kept A/V drift under 20 ms across 3 device classes by building an AAC audio pipeline with timestamp A/V sync in the media framework.",
      "Raised device-to-device casting connectivity success 25% by implementing Bonjour/mDNS discovery and RTSP/RTP session handling over Wi-Fi with automatic reconnection and networking protocol fallbacks.",
      "Reduced crash rate 50% by root-causing memory and threading defects and driving playback API design with design teams."
    ]
  },
  {
    "company": "Tata Steel",
    "role": "Software Engineer (Embedded Media & Networking)",
    "where": "",
    "dates": "Apr 2021 — Aug 2023",
    "items": [
      "Cut manual inspection time 60% by developing C/C++ services for 500+ Linux embedded devices streaming live camera video through an RTSP/RTP ingest and H.264 FFmpeg encode pipeline.",
      "Delivered 30+ live camera feeds to 10,000+ users with under 3 s latency by packaging streams into HLS and building a JavaScript web media player with MSE based playback.",
      "Achieved 40% faster responses and 99.99% uptime by engineering the connectivity layer on TCP/UDP, multicast, and MQTT networking protocols.",
      "Demonstrated technical leadership leading 8 engineers, defining system architecture and running code reviews to ship 12 on-time releases.",
      "Improved deployment reliability 45% by building Jenkins and Docker CI/CD pipelines with automated tests for firmware and streaming services."
    ]
  }
];

const projects = [
  {name:'CME MDP 3.0 Multicast Feed Handler',subtitle:'1M+ packets/sec · sub-10µs per packet',description:'A multi-threaded C++17 UDP multicast receiver with sequence-gap detection, recovery and lock-free SPSC queues.',tags:['C++17','UDP multicast','Linux'],kind:'systems',url:'https://github.com/devthedevil/CME-Multicast-Market-Data-Feed-Handler-C-',icon:'⌁'},
  {name:'MetalCompositor',subtitle:'Real-time GPU video composition',description:'Composites multiple camera streams at 60 fps under 8 ms using Metal shaders, CVPixelBuffer / IOSurface textures and triple buffering.',tags:['Swift','Metal','CoreVideo'],kind:'media',url:'https://github.com/devthedevil/metal-compositor',icon:'◉'},
  {name:'Oxide-HV',subtitle:'Rust hypervisor',description:'A low-level Rust project exploring virtualization, isolation and system boundaries.',tags:['Rust','Hypervisor','Isolation'],kind:'systems',url:'https://github.com/devthedevil/oxide-hv',demo:'https://oxide-hv.vercel.app/',icon:'⬡'},
  {name:'EXPOS',subtitle:'Experimental operating system',description:'An operating systems project exploring kernel fundamentals and low-level execution.',tags:['Operating systems','C','Kernel'],kind:'systems',url:'https://github.com/devthedevil/EXPOS',icon:'◩'},
  {name:'Character Device Driver',subtitle:'Linux device interface',description:'A character driver project connecting kernel-level device behavior with user-space operations.',tags:['Linux','Kernel','C'],kind:'systems',url:'https://github.com/devthedevil/Character-Device-Driver',icon:'▤'},
  {name:'Strata',subtitle:'C++ storage server',description:'A storage server project focused on systems-level engineering and data paths.',tags:['C++','Storage','Systems'],kind:'systems',url:'https://github.com/devthedevil/strata',icon:'▥'},
  {name:'16-Bit RISC Processor',subtitle:'Hardware architecture',description:'A 16-bit processor design built through a hands-on hardware lab.',tags:['RISC','CPU','Digital design'],kind:'systems',url:'https://github.com/devthedevil/Hardware-lab',icon:'▦'},
  {name:'Keystone',subtitle:'Transactional control-plane metadata store',description:'A Go metadata store with mTLS auth, RBAC-scoped gRPC APIs, signed audit logs and encryption at rest.',tags:['Go','gRPC','mTLS','RBAC'],kind:'systems',url:'https://github.com/devthedevil/keystone',icon:'⌘'},
  {name:'Real-time Stock Market Analysis',subtitle:'Streaming data pipeline',description:'A real-time market data collection and analysis pipeline.',tags:['Streaming','Data','Cloud'],kind:'platform',url:'https://github.com/devthedevil/Realtime-Stock-Market-Analysis',icon:'⌁'},
  {name:'TradeSentinel',subtitle:'Market intelligence dashboard',description:'A market-analysis experience that brings live signals into a focused workflow.',tags:['Analytics','Signals','Web'],kind:'platform',url:'https://github.com/devthedevil/tradesentinel',demo:'https://tradesentinel.vercel.app/',icon:'◎'},
  {name:'Voting App',subtitle:'Kubernetes application',description:'A voting application deployed with Kubernetes orchestration.',tags:['Kubernetes','Containers','Cloud'],kind:'platform',url:'https://github.com/devthedevil/Kubernetes-K8',icon:'▱'},
  {name:'MCP',subtitle:'Model Context Protocol',description:'An exploration of tool integration and context exchange for AI-enabled workflows.',tags:['MCP','Tools','Integration'],kind:'platform',url:'https://github.com/devthedevil/MCP',icon:'⟷'},
  {name:'AgentFlow',subtitle:'Agent orchestration',description:'An agent workflow built around the OpenAI Agent SDK and tool orchestration.',tags:['Agents','Orchestration','LLM'],kind:'platform',url:'https://github.com/devthedevil/openAI-Agent-SDK',icon:'⌘'},
  {name:'AskMyStore',subtitle:'LangGraph store assistant',description:'A conversational shopping assistant combining retrieval and tool orchestration.',tags:['LangGraph','RAG','Agents'],kind:'platform',url:'https://github.com/devthedevil/AskMyStore',demo:'https://ask-my-store.vercel.app/',icon:'✳'},
  {name:'LangChain Chat with Search',subtitle:'Grounded conversational search',description:'A chat workflow bringing search context into a LangChain-powered assistant.',tags:['LangChain','Search','LLM'],kind:'platform',url:'https://github.com/devthedevil/LangChain-Chat-with-Search',icon:'⌕'},
  {name:'AeroInvoice',subtitle:'Invoice ingestion & quote extraction',description:'An AI-powered API for document ingestion and structured quote extraction.',tags:['AI','API','Documents'],kind:'platform',url:'https://github.com/devthedevil/aero-invoice-intelligence',icon:'▤'},
  {name:'AgentEval',subtitle:'Swift agent evaluations',description:'Evaluation tooling for measuring agent output quality and behavior.',tags:['Swift','Evals','Agents'],kind:'platform',url:'https://github.com/devthedevil/swift-agent-evals',icon:'◌'},
  {name:'adserve',subtitle:'Advertising delivery system',description:'A backend project focused on advertising delivery workflows.',tags:['Backend','Serving','APIs'],kind:'platform',url:'https://github.com/devthedevil/adserve',icon:'▣'},
  {name:'Pitch Perfect',subtitle:'iOS audio experience',description:'A Swift iOS project for playful voice recording and audio effects.',tags:['iOS','Swift','Audio'],kind:'media',url:'https://github.com/devthedevil/Pitch_Perfect',icon:'♫'},
  {name:'Strangers',subtitle:'Social discovery experience',description:'A web experience for connecting people through a focused discovery flow.',tags:['React','Community','Web'],kind:'platform',url:'https://github.com/devthedevil/Strangers',demo:'https://strangers-react.vercel.app/',icon:'◉'},
  {name:'HireLoop',subtitle:'Hiring workflow platform',description:'A hiring workflow project designed to clarify candidate and recruiter interactions.',tags:['Product','Workflow','Web'],kind:'platform',url:'https://github.com/devthedevil/hireloop',icon:'⟳'},
  {name:'Tic Tac Toe',subtitle:'Android game',description:'An Android implementation of the classic game with a mobile interaction model.',tags:['Android','Kotlin','Mobile'],kind:'platform',url:'https://github.com/devthedevil/TicTacToe-Game',icon:'⊞'}
];

const experienceRoot = document.querySelector('#experience-list');
experienceRoot.innerHTML = experience.map((job, index) => `<article class="experience-item ${index === 0 ? 'open' : ''}"><button class="experience-toggle" aria-expanded="${index === 0}"><span class="experience-index"><i></i>0${index+1}</span><span class="experience-title"><b>${job.company} ${job.state ? `<small>${job.state}</small>` : ''}</b><em>${job.role}${job.where ? ` · ${job.where}` : ''}</em></span><span class="experience-dates">${job.dates}</span><span class="experience-plus">+</span></button><div class="experience-content"><ul>${job.items.map(item => `<li>${item}</li>`).join('')}</ul></div></article>`).join('');

const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); reveal.unobserve(entry.target); } }), {threshold:.12});
const grid = document.querySelector('#project-grid');
const renderProjects = filter => {
  const visible = projects.filter(project => filter === 'all' || project.kind === filter);
  grid.innerHTML = visible.map((project, index) => `<article class="project-card" style="--order:${index}"><div class="project-card-top"><span class="project-icon">${project.icon}</span><span class="project-type">${project.kind.toUpperCase()}</span><span class="project-open">↗</span></div><h3>${project.name}</h3><small>${project.subtitle}</small><p>${project.description}</p><div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="project-links"><a href="${project.url}" target="_blank" rel="noreferrer">SourceCode <b>↗</b></a>${project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Technical Demo <b>↗</b></a>` : ''}</div></article>`).join('');
  document.querySelector('#project-count').textContent = visible.length.toString().padStart(2, '0');
  grid.querySelectorAll('.project-card').forEach(card => reveal.observe(card));
};
renderProjects('all');

document.querySelectorAll('.project-filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.project-filters button').forEach(item => item.classList.remove('active'));
  button.classList.add('active'); renderProjects(button.dataset.filter);
}));
document.querySelectorAll('.experience-toggle').forEach(button => button.addEventListener('click', () => {
  const item = button.closest('.experience-item'); item.classList.toggle('open');
  button.setAttribute('aria-expanded', String(item.classList.contains('open')));
}));

const lines = ['Faster first frame across devices', 'Reliable partner integrations', 'Adaptive playback as networks change', 'Audio and video that stay in sync'];
let lineIndex = 0;
setInterval(() => { const line = document.querySelector('#rotating-copy'); line.classList.add('fade'); setTimeout(() => { lineIndex = (lineIndex + 1) % lines.length; line.textContent = lines[lineIndex]; line.classList.remove('fade'); }, 280); }, 3200);
document.querySelectorAll('.craft-card,.signal-panel,.experience-item,.belief-copy,.belief-art,.paper-card').forEach(item => reveal.observe(item));
document.querySelector('.hero').addEventListener('pointermove', event => { const box = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty('--mx', `${event.clientX-box.left}px`); event.currentTarget.style.setProperty('--my', `${event.clientY-box.top}px`); });
