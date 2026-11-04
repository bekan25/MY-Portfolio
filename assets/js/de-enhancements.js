
(() => {
  "use strict";
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const safeText = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const profile = {name:"Dereje Solomon", email:"derejesolomon363@gmail.com", phone:"+251922481727", github:"bekan25", linkedin:"dereje-solomon-9a6230370", telegram:"bekan2025"};
  const translations = {
    en:{nav:["About","Skills","Projects","Education","Toolkit","Case Studies","Hire Me"],badge:"Available for Opportunities",heroDesc:"Building impactful fintech and e-commerce platforms for Ethiopia and East Africa — where deep computer science meets economic understanding.",viewProjects:"View Projects →",getInTouch:"Get In Touch",aboutLabel:"Who I Am",aboutTitle:"Building tech that matters locally",skillsLabel:"Expertise",skillsTitle:"Technical Skills",projectsLabel:"Work",projectsTitle:"Featured Projects",educationLabel:"Academic Background",educationTitle:"Education & Credentials",languagesLabel:"Communication",languagesTitle:"Languages Spoken",contactLabel:"Get In Touch",contactTitle:"Let's build something great together",toolkitLabel:"Developer Toolkit",toolkitTitle:'Explore my <span class="gold">workspace</span>',terminalTitle:"Developer Terminal",terminalCopy:"Try a command to explore my skills, projects and contact details.",githubTitle:"GitHub Activity",contributions:"Contribution activity",recentRepos:"Recently updated repositories",caseLabel:"Beyond the screenshots",caseTitle:'Project <span class="gold">case studies</span>',caseIntro:"A closer look at the problem, architecture and engineering decisions behind selected work.",askAssistant:"Ask about my work"},
    om:{nav:["Waa'ee Koo","Dandeettii","Pirojektoota","Barnoota","Meeshaalee","Qorannoo Pirojektootaa","Na Qacaruu"],badge:"Carraa Hojiiif Banaadha",heroDesc:"Itoophiyaa fi Baha Afrikaaf furmaata fintech fi e-commerce bu'a qabeessa ijaaruu — beekumsa computer science fi dinagdee walitti fiduun.",viewProjects:"Pirojektoota Ilaali →",getInTouch:"Na Quunnami",aboutLabel:"Ani Eenyu",aboutTitle:"Teeknooloojii hawaasaaf bu'aa qabu ijaaruu",skillsLabel:"Muuxannoo",skillsTitle:"Dandeettii Teeknikaa",projectsLabel:"Hojiiwwan",projectsTitle:"Pirojektoota Filatamoo",educationLabel:"Seenaa Barnootaa",educationTitle:"Barnootaa fi Ragaa",languagesLabel:"Afaanota",languagesTitle:"Afaanota Dubbadhu",contactLabel:"Na Quunnami",contactTitle:"Waan gaarii waliin haa ijaarru",toolkitLabel:"Meeshaalee Developer",toolkitTitle:'Iddoo hojii koo <span class="gold">daawwadhu</span>',terminalTitle:"Terminal Developer",terminalCopy:"Dandeettii, pirojektootaa fi odeeffannoo quunnamtii koo baruuf ajaja barreessi.",githubTitle:"Sochii GitHub",contributions:"Sochii gumaachaa",recentRepos:"Repository yeroo dhihoo haaromfaman",caseLabel:"Ibsa pirojektootaa",caseTitle:'Qorannoo <span class="gold">pirojektootaa</span>',caseIntro:"Rakkoo, ijaarsa sirnaa fi murtoo teeknikaa pirojektoota filatamoo ilaali.",askAssistant:"Waa'ee hojii koo gaafadhu"},
    am:{nav:["ስለ እኔ","ክህሎቶች","ፕሮጀክቶች","ትምህርት","መሣሪያዎች","የፕሮጀክት ጥናቶች","አግኙኝ"],badge:"ለሥራ ዕድሎች ዝግጁ ነኝ",heroDesc:"ለኢትዮጵያና ለምስራቅ አፍሪካ ተፅዕኖ ያላቸውን የፊንቴክና የኢ-ኮሜርስ መድረኮችን እገነባለሁ።",viewProjects:"ፕሮጀክቶችን ይመልከቱ →",getInTouch:"ያግኙኝ",aboutLabel:"ስለ እኔ",aboutTitle:"ለማህበረሰብ ጠቃሚ ቴክኖሎጂ መገንባት",skillsLabel:"ብቃት",skillsTitle:"ቴክኒካዊ ክህሎቶች",projectsLabel:"ሥራዎች",projectsTitle:"የተመረጡ ፕሮጀክቶች",educationLabel:"የትምህርት ዳራ",educationTitle:"ትምህርት እና ማረጋገጫዎች",languagesLabel:"ግንኙነት",languagesTitle:"የምናገራቸው ቋንቋዎች",contactLabel:"ያግኙኝ",contactTitle:"በጋራ ጥሩ ነገር እንገንባ",toolkitLabel:"የገንቢ መሣሪያዎች",toolkitTitle:'የሥራ ቦታዬን <span class="gold">ይመልከቱ</span>',terminalTitle:"የገንቢ Terminal",terminalCopy:"ስለ ክህሎቶቼ፣ ፕሮጀክቶቼ እና አድራሻዬ ለማወቅ ትዕዛዝ ያስገቡ።",githubTitle:"የGitHub እንቅስቃሴ",contributions:"የአስተዋጽኦ እንቅስቃሴ",recentRepos:"በቅርቡ የተዘመኑ ሪፖዚቶሪዎች",caseLabel:"የፕሮጀክት ጥናቶች",caseTitle:'የፕሮጀክት <span class="gold">ዝርዝር ጥናት</span>',caseIntro:"የተመረጡ ሥራዎችን ችግር፣ አወቃቀር እና የምህንድስና ውሳኔዎች ይመልከቱ።",askAssistant:"ስለ ሥራዬ ይጠይቁ"}
  };
  const setLanguage = (lang) => {
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang === "om" ? "om" : lang;
    const nav = $$(".nav-links a");
    t.nav.forEach((v,i)=>{ if(nav[i]) nav[i].textContent=v; });
    const map = {".hero-badge":t.badge,".hero-desc":t.heroDesc,".hero-ctas .btn-primary":t.viewProjects,".hero-ctas .btn-secondary":t.getInTouch,"#about .section-label":t.aboutLabel,"#about .section-title":t.aboutTitle,"#skills .section-label":t.skillsLabel,"#skills .section-title":t.skillsTitle,"#projects .section-label":t.projectsLabel,"#projects .section-title":t.projectsTitle,"#education .section-label":t.educationLabel,"#education .section-title":t.educationTitle,"#languages .section-label":t.languagesLabel,"#languages .section-title":t.languagesTitle,"#contact .section-label":t.contactLabel,"#contact .section-title":t.contactTitle,"[data-i18n=toolkitLabel]":t.toolkitLabel,"[data-i18n=toolkitTitle]":t.toolkitTitle,"[data-i18n=terminalTitle]":t.terminalTitle,"[data-i18n=terminalCopy]":t.terminalCopy,"[data-i18n=githubTitle]":t.githubTitle,"[data-i18n=contributions]":t.contributions,"[data-i18n=recentRepos]":t.recentRepos,"[data-i18n=caseLabel]":t.caseLabel,"[data-i18n=caseTitle]":t.caseTitle,"[data-i18n=caseIntro]":t.caseIntro,"[data-i18n=askAssistant]":t.askAssistant};
    Object.entries(map).forEach(([selector,value])=>{const el=$(selector);if(el)el.innerHTML=value;});

    const extraTranslations = {
      om:{
        ".hero-roles .role-tag":["Full-Stack Developer","Super App Architect","Fintech Integration","AI irratti fedhii"],
        ".about-text p":["Ani barataa Computer Science Unity University keessatti baradhu; teeknooloojii fayyadamuun rakkoolee dhugaa furuuf fedhii qaba.","Hojii koo irratti furmaata barnootaa, fintech fi bulchiinsa qabeenyaa Itoophiyaa keessatti bu'aa qaban ijaaruu irratti xiyyeeffadha.","Pirojektoonni koo haala naannoo fi fedhii fayyadamtootaa hubachuun kan qophaa'anidha; yaada gara furmaata hojiirra oolu jijjiiruuf nan hojjedha."],
        ".highlight-box h4":"Waan adda na taasisu",
        ".highlight-box>p":"Teeknooloojii fi dinagdee walitti fiduun furmaata ijaaruu.",
        ".highlight-item":["Ijaarsa Super App — module hedduu fi tajaajila adda addaa","Kaffaltii dijitaalaa naannoo — Telebirr fi Chapa","Furmaata barnootaa afaanota hedduu deeggaru","Beekumsa Computer Science fi dinagdee walitti fiduu","Gabaa Baha Afrikaa irratti xiyyeeffannoo"],
        ".skill-card h4":["Afaanota Sagantaa","Web fi Mobile","Kuusdeetaa fi Cloud","Fintech fi Kaffaltii","AI fi Walitti Hidhamiinsa","Meeshaalee fi Adeemsa Hojii"],
        ".project-top h3":["Adwa Super App","BD Express","Bekan Learning Bot","Smart Water Management","ADAWA Personal Stylist"],
        ".project-top p":["Waltajjii tajaajila hedduu","E-commerce fi logistics","Telegram bot barnootaa afaanota hedduu","Sirna hordoffii bishaanii","Gorsa uffannaa dhuunfaa"],
        ".project-desc":["Super App keessatti marketplace, savings fi health modules walitti fiduuf qophaa'e.","Waltajjii daldalaa online daldaltoota hedduu, hordoffii ajajaa fi kaffaltii naannoo deeggaruuf qophaa'e.","Bot Telegram barnoota Itoophiyaa afaanota hedduun dhiyeessu, gaaffilee shaakalaa fi hordoffii barnootaa qabu.","Sirna dijitaalaa itti fayyadama bishaan lafa keessaa QR validation fi analytics fayyadamuun hordofu.","App gorsa uffannaa fedhii fi filannoo fayyadamaa irratti hundaa'e."],
        ".edu-univ":["Unity University · Finfinnee","Rift Valley University · Itoophiyaa"],
        ".edu-degree":["BSc Computer Science","BA Economics"],
        ".edu-date":["Fulbaana 2022 – Amma","Fulbaana 2022 – Amma"],
        ".edu-courses":["Data Structures · Algorithms · Software Engineering · Database Systems · Mobile Development · AI Fundamentals","Microeconomics · Macroeconomics · Financial Markets · Econometrics · Development Economics"],
        ".edu-badge":["Barachaa jira","Barachaa jira"],
        ".lang-name":["English","Amharic","Afaan Oromoo"],
        ".lang-level":["Sadarkaa hojii","Afaan dhalootaa · Guutuu","Afaan dhalootaa · Guutuu"],
        ".contact-desc":"Pirojektoota freelance, tumsa fi internship irratti banaadha. Fintech, Super App architecture fi teeknooloojii Baha Afrikaaf bu'aa qabu irratti nan xiyyeeffadha.",
        ".cc-label":["Imeelii","Bilbila","Telegram","WhatsApp","GitHub","LinkedIn"],
        ".availability":"Carraa hojii haaraaf banaadha",
        ".footer-copy":"© 2026 Dereje Solomon · Finfinnee, Itoophiyaa"
      },
      am:{
        ".hero-roles .role-tag":["Full-Stack Developer","የSuper App አርክቴክት","የፊንቴክ ውህደቶች","ለAI ፍላጎት አለኝ"],
        ".about-text p":["በUnity University የኮምፒውተር ሳይንስ ተማሪ ሲሆን ቴክኖሎጂን በመጠቀም እውነተኛ ችግሮችን ለመፍታት እጥራለሁ።","ትኩረቴ በኢትዮጵያ የትምህርት፣ የፊንቴክ እና የሀብት አስተዳደር መፍትሄዎችን መገንባት ላይ ነው።","ፕሮጀክቶቼ የአካባቢውን አውድና የተጠቃሚዎችን ፍላጎት በመረዳት የተግባር መፍትሄዎችን ያቀርባሉ።"],
        ".highlight-box h4":"የሚለዩኝ ጥንካሬዎች",
        ".highlight-box>p":"ቴክኖሎጂንና ኢኮኖሚን በማጣመር መፍትሄ መገንባት።",
        ".highlight-item":["ባለብዙ ሞጁል Super App አወቃቀር","የአካባቢ ዲጂታል ክፍያ — Telebirr እና Chapa","ብዙ ቋንቋዎችን የሚደግፉ የትምህርት መፍትሄዎች","የኮምፒውተር ሳይንስና ኢኮኖሚ እውቀት","በምስራቅ አፍሪካ ገበያ ላይ ትኩረት"],
        ".skill-card h4":["የፕሮግራሚንግ ቋንቋዎች","ድር እና ሞባይል","ዳታቤዝ እና Cloud","ፊንቴክ እና ክፍያዎች","AI እና ውህደቶች","መሳሪያዎች እና የሥራ ሂደት"],
        ".project-top h3":["Adwa Super App","BD Express","Bekan Learning Bot","Smart Water Management","ADAWA Personal Stylist"],
        ".project-top p":["ባለብዙ አገልግሎት መድረክ","ባለብዙ ሻጭ ኢ-ኮሜርስ እና ሎጂስቲክስ","ባለብዙ ቋንቋ የTelegram ትምህርት ቦት","የውሃ አስተዳደር ክትትል","በAI የተደገፈ የፋሽን ምክር"],
        ".project-desc":["Marketplace፣ savings እና health ሞጁሎችን በአንድ የሞባይል ልምድ የሚያገናኝ Super App።","ብዙ ሻጮችን፣ የትዕዛዝ ክትትልን እና የአካባቢ ክፍያን የሚደግፍ የኦንላይን ገበያ።","የኢትዮጵያን የትምህርት ይዘት በብዙ ቋንቋዎች የሚያቀርብ Telegram bot።","QR validation እና analytics በመጠቀም የመሬት ውስጥ ውሃ አጠቃቀምን የሚከታተል ዲጂታል ስርዓት።","በተጠቃሚ ምርጫና ፍላጎት ላይ የተመሠረተ የፋሽን ምክር መተግበሪያ።"],
        ".edu-univ":["Unity University · አዲስ አበባ","Rift Valley University · ኢትዮጵያ"],
        ".edu-degree":["BSc ኮምፒውተር ሳይንስ","BA ኢኮኖሚክስ"],
        ".edu-date":["መስከረም 2022 – አሁን","መስከረም 2022 – አሁን"],
        ".edu-courses":["የዳታ መዋቅሮች · አልጎሪዝሞች · ሶፍትዌር ምህንድስና · ዳታቤዝ · ሞባይል ልማት · AI","ማይክሮ ኢኮኖሚክስ · ማክሮ ኢኮኖሚክስ · የፋይናንስ ገበያዎች · Econometrics"],
        ".edu-badge":["በትምህርት ላይ","በትምህርት ላይ"],
        ".lang-name":["እንግሊዝኛ","አማርኛ","አፋን ኦሮሞ"],
        ".lang-level":["የሙያ ብቃት","የትውልድ ቋንቋ · ሙሉ ብቃት","የትውልድ ቋንቋ · ሙሉ ብቃት"],
        ".contact-desc":"ለFreelance ፕሮጀክቶች፣ ትብብር እና internship ክፍት ነኝ። በፊንቴክ፣ Super App አወቃቀር እና ለምስራቅ አፍሪካ ጠቃሚ ቴክኖሎጂ ላይ እሰራለሁ።",
        ".cc-label":["ኢሜይል","ስልክ","Telegram","WhatsApp","GitHub","LinkedIn"],
        ".availability":"ለአዳዲስ የሥራ ዕድሎች ዝግጁ ነኝ",
        ".footer-copy":"© 2026 Dereje Solomon · አዲስ አበባ፣ ኢትዮጵያ"
      }
    };
    const selectedExtra=extraTranslations[lang];
    if(selectedExtra)Object.entries(selectedExtra).forEach(([selector,value])=>{$(selector).forEach((el,i)=>{const next=Array.isArray(value)?value[i]:value;if(next!==undefined)el.textContent=next;});});
    document.title=lang==="om"?"Dereje Solomon — Full-Stack Developer | Portfolio":lang==="am"?"Dereje Solomon — የFull-Stack Developer ፖርትፎሊዮ":"Dereje Solomon — Full-Stack Developer & Super App Architect";

    try{localStorage.setItem("de-portfolio-lang",lang);}catch{}
    $$(".de-language-switch button").forEach(b=>{b.setAttribute("aria-pressed",String(b.dataset.lang===lang));});
  };
  const languageSwitch=document.createElement("div"); languageSwitch.className="de-language-switch"; languageSwitch.setAttribute("aria-label","Choose website language");
  languageSwitch.innerHTML='<button type="button" data-lang="en" aria-pressed="true">EN</button><button type="button" data-lang="om" aria-pressed="false">OM</button><button type="button" data-lang="am" aria-pressed="false">አማ</button>';
  const nav=$("#navbar"); if(nav) nav.append(languageSwitch);
  languageSwitch.addEventListener("click",e=>{const b=e.target.closest("button[data-lang]");if(b)setLanguage(b.dataset.lang);});
  let initial="en";try{initial=localStorage.getItem("de-portfolio-lang")||"en";}catch{} setLanguage(initial);

  const terminalForm=$("#terminalForm"), terminalInput=$("#terminalInput"), terminalOutput=$("#terminalOutput");
  const commands={
    help:"Available commands: about, skills, projects, education, contact, github, clear.",
    about:"Dereje Solomon — Full-Stack Developer and Computer Science student focused on practical digital products.",
    skills:"Core stack: React, TypeScript, JavaScript, Node.js, ASP.NET Core, C#, PostgreSQL, Firebase, Python, Java, C++ and Flutter.",
    projects:"Featured work: NEXORAS (global action network), BARNOOTAAI360 (multilingual learning ecosystem), MERKATO (marketplace in progress), plus other repositories on GitHub.",
    education:"Computer Science — Unity University. Additional learning and project work across software engineering, databases, web and mobile development.",
    contact:"Email: derejesolomon363@gmail.com | WhatsApp: +251 922 481 727 | GitHub: github.com/bekan25 | LinkedIn: dereje-solomon-9a6230370",
    github:"Opening GitHub profile: https://github.com/bekan25"
  };
  function runCommand(raw){const cmd=raw.trim().toLowerCase().split(/\s+/)[0];if(!cmd)return;if(cmd==="clear"){terminalOutput.innerHTML="";return;}const answer=commands[cmd]||"Command not found. Type help to see available commands.";const line=document.createElement("p");line.className="de-command";line.textContent="$ "+raw;const result=document.createElement("p");result.className="de-result";result.textContent=answer;terminalOutput.append(line,result);terminalOutput.scrollTop=terminalOutput.scrollHeight;if(cmd==="github")window.open("https://github.com/bekan25","_blank","noopener");}
  terminalForm?.addEventListener("submit",e=>{e.preventDefault();runCommand(terminalInput.value);terminalInput.value="";});
  $$(".de-command-chips button").forEach(b=>b.addEventListener("click",()=>runCommand(b.dataset.command)));

  const githubStats=$("#githubStats"), githubRepos=$("#githubRepos"), graph=$("#githubContribution"), graphStatus=$("#githubGraphStatus");
  const cacheRead=(key)=>{try{const x=JSON.parse(localStorage.getItem(key)||"null");return x&&Date.now()-x.time<6*60*60*1000?x.data:null;}catch{return null;}};
  const cacheWrite=(key,data)=>{try{localStorage.setItem(key,JSON.stringify({time:Date.now(),data}));}catch{}};
  async function getJson(url,timeout=6500){const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),timeout);try{const r=await fetch(url,{headers:{Accept:"application/vnd.github+json"},signal:controller.signal});if(!r.ok)throw new Error("HTTP "+r.status);return await r.json();}finally{clearTimeout(timer);}}
  function renderStats(user){githubStats.innerHTML=[["Public repos",user.public_repos],["Followers",user.followers],["Following",user.following]].map(([l,v])=>'<div class="de-stat"><strong>'+safeText(v)+'</strong><span>'+l+'</span></div>').join("");}
  function renderRepos(items){if(!items?.length){githubRepos.innerHTML='<p class="de-muted">No repository details available right now. <a href="https://github.com/bekan25">View GitHub profile</a>.</p>';return;}githubRepos.innerHTML=items.slice(0,5).map(r=>'<a class="de-repo" href="'+safeText(r.html_url)+'" target="_blank" rel="noopener noreferrer"><b>'+safeText(r.name)+'</b><span>★ '+safeText(r.stargazers_count||0)+'</span></a>').join("");}
  function renderContribution(days){if(!graph)return;const list=Array.isArray(days)?days:[];const normalized=list.slice(-364);graph.innerHTML=normalized.map(d=>{const n=Number(d.count)||0;const level=n===0?0:n<3?1:n<6?2:n<10?3:4;return '<span class="de-day l'+level+'" title="'+safeText(d.date)+': '+n+' contributions"></span>';}).join("");if(graphStatus)graphStatus.textContent=normalized.length?"Last 52 weeks · public contribution data":"Contribution history unavailable";if(!normalized.length)graph.innerHTML='<span class="de-muted">Contribution graph unavailable. Your GitHub profile remains available above.</span>';}
  async function loadGithub(){
    const cachedUser=cacheRead("de-gh-user"),cachedRepos=cacheRead("de-gh-repos"),cachedDays=cacheRead("de-gh-days");
    if(cachedUser)renderStats(cachedUser);if(cachedRepos)renderRepos(cachedRepos);if(cachedDays)renderContribution(cachedDays);
    const tasks=[
      getJson("https://api.github.com/users/"+profile.github).then(d=>{cacheWrite("de-gh-user",d);renderStats(d);}).catch(()=>{if(!cachedUser)githubStats.innerHTML='<p class="de-muted">GitHub profile data is temporarily unavailable.</p>';}),
      getJson("https://api.github.com/users/"+profile.github+"/repos?sort=updated&per_page=5").then(d=>{cacheWrite("de-gh-repos",d);renderRepos(d);}).catch(()=>{if(!cachedRepos)renderRepos([]);}),
      getJson("https://github-contributions-api.jogruber.de/v4/"+profile.github+"?y=last").then(d=>{const days=d.contributions||[];cacheWrite("de-gh-days",days);renderContribution(days);}).catch(()=>{if(!cachedDays){if(graphStatus)graphStatus.textContent="Live graph unavailable — API may be rate-limited.";renderContribution([]);}})
    ];
    await Promise.allSettled(tasks);
  }
  loadGithub();

  const assistantToggle=$("#assistantToggle"), assistantPanel=$("#assistantPanel"), assistantClose=$("#assistantClose"), assistantForm=$("#assistantForm"), assistantInput=$("#assistantInput"), messages=$("#assistantMessages");
  const answers=[
    {keys:["project","build","work","portfolio"],answer:"Selected work includes NEXORAS (a global action network), BARNOOTAAI360 (a multilingual learning ecosystem), MERKATO (currently building), and other software projects. Open the Projects and Case Studies sections for details."},
    {keys:["skill","stack","technology","tech","language","code"],answer:"Dereje works with React, TypeScript, JavaScript, Node.js, ASP.NET Core, C#, PostgreSQL, Firebase, Python, Java, C++, Flutter, REST APIs and Git/GitHub."},
    {keys:["contact","email","phone","whatsapp","hire","reach"],answer:"You can contact Dereje at derejesolomon363@gmail.com or WhatsApp +251 922 481 727. LinkedIn: linkedin.com/in/dereje-solomon-9a6230370."},
    {keys:["education","university","study"],answer:"Dereje is a Computer Science student at Unity University in Addis Ababa."},
    {keys:["nexoras"],answer:"NEXORAS is a global action network built around Connect, Create, Learn, Act and Earn. Its planned stack includes ASP.NET Core Clean Architecture, React, PostgreSQL, Redis and SignalR."},
    {keys:["barnoota","barnootaai"],answer:"BARNOOTAAI360 is a multilingual learning ecosystem for Ethiopian Grades 9–12, designed around English, Afaan Oromoo and Amharic learning experiences."},
    {keys:["merkato"],answer:"MERKATO is a marketplace project currently in development."}
  ];
  function addMessage(text,isUser=false){const p=document.createElement("p");p.className=isUser?"de-assistant-user":"de-assistant-bot";p.textContent=text;messages.append(p);messages.scrollTop=messages.scrollHeight;}
  function answerQuestion(q){const normalized=q.toLowerCase();const found=answers.find(x=>x.keys.some(k=>normalized.includes(k)));return found?found.answer:"I can help with projects, NEXORAS, BARNOOTAAI360, MERKATO, technologies, education and contact details. Try asking about one of these topics.";}
  function ask(q){if(!q.trim())return;addMessage(q,true);addMessage(answerQuestion(q));}
  assistantToggle?.addEventListener("click",()=>{const opening=assistantPanel.hidden;assistantPanel.hidden=!opening;assistantToggle.setAttribute("aria-expanded",String(opening));if(opening)assistantInput.focus();});
  assistantClose?.addEventListener("click",()=>{assistantPanel.hidden=true;assistantToggle.setAttribute("aria-expanded","false");assistantToggle.focus();});
  assistantForm?.addEventListener("submit",e=>{e.preventDefault();ask(assistantInput.value);assistantInput.value="";});
  $$(".de-assistant-suggestions button").forEach(b=>b.addEventListener("click",()=>ask(b.dataset.ask)));

  const backTop=$(".de-back-top");window.addEventListener("scroll",()=>backTop?.classList.toggle("visible",window.scrollY>500),{passive:true});
  $("#hamburger")?.addEventListener("click",()=>$("#hamburger")?.setAttribute("aria-expanded",String($("#navLinks")?.classList.contains("open"))));
  if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
})();
