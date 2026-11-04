
(() => {
  "use strict";
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const safeText = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const profile = {name:"Dereje Solomon", email:"derejesolomon363@gmail.com", phone:"+251922481727", github:"bekan25", linkedin:"dereje-solomon-9a6230370", telegram:"counqer1777"};
  const translations = {
    en:{nav:["About","Skills","Projects","Education","Toolkit","Case Studies","Hire Me"],badge:"Available for Opportunities",heroDesc:"I build web, mobile and AI-enabled software, with a focus on practical solutions for education, communities and businesses.",downloadCV:"Download CV",viewProjects:"View Projects →",getInTouch:"Get In Touch",aboutLabel:"Who I Am",aboutTitle:"Building tech that matters locally",skillsLabel:"Expertise",skillsTitle:"Technical Skills",projectsLabel:"Work",projectsTitle:"Featured Projects",educationLabel:"Academic Background",educationTitle:"Education & Credentials",languagesLabel:"Communication",languagesTitle:"Languages Spoken",contactLabel:"Get In Touch",contactTitle:"Let's build something great together",toolkitLabel:"Developer Toolkit",toolkitTitle:'Explore my <span class="gold">workspace</span>',terminalTitle:"Developer Terminal",terminalCopy:"Try a command to explore my skills, projects and contact details.",githubTitle:"GitHub Activity",contributions:"Contribution activity",recentRepos:"Recently updated repositories",caseLabel:"Beyond the screenshots",caseTitle:'Project <span class="gold">case studies</span>',caseIntro:"A closer look at the problem, architecture and engineering decisions behind selected work.",askAssistant:"Ask about my work"},
    om:{nav:["Waa'ee Koo","Dandeettii","Pirojektoota","Barnoota","Meeshaalee","Qorannoo Pirojektootaa","Na Qacaruu"],badge:"Carraa Hojiiif Banaadha",heroDesc:"Appii web, mobile fi AI irratti hundaa'e nan ijaara; barnoota, hawaasa fi daldalaaf furmaata qabatamaa irratti nan xiyyeeffadha.",downloadCV:"CV Buufadhu",viewProjects:"Pirojektoota Ilaali →",getInTouch:"Na Quunnami",aboutLabel:"Ani Eenyu",aboutTitle:"Teeknooloojii hawaasaaf bu'aa qabu ijaaruu",skillsLabel:"Muuxannoo",skillsTitle:"Dandeettii Teeknikaa",projectsLabel:"Hojiiwwan",projectsTitle:"Pirojektoota Filatamoo",educationLabel:"Seenaa Barnootaa",educationTitle:"Barnootaa fi Ragaa",languagesLabel:"Afaanota",languagesTitle:"Afaanota Dubbadhu",contactLabel:"Na Quunnami",contactTitle:"Waan gaarii waliin haa ijaarru",toolkitLabel:"Meeshaalee Developer",toolkitTitle:'Iddoo hojii koo <span class="gold">daawwadhu</span>',terminalTitle:"Terminal Developer",terminalCopy:"Dandeettii, pirojektootaa fi odeeffannoo quunnamtii koo baruuf ajaja barreessi.",githubTitle:"Sochii GitHub",contributions:"Sochii gumaachaa",recentRepos:"Repository yeroo dhihoo haaromfaman",caseLabel:"Ibsa pirojektootaa",caseTitle:'Qorannoo <span class="gold">pirojektootaa</span>',caseIntro:"Rakkoo, ijaarsa sirnaa fi murtoo teeknikaa pirojektoota filatamoo ilaali.",askAssistant:"Waa'ee hojii koo gaafadhu"},
    am:{nav:["ስለ እኔ","ክህሎቶች","ፕሮጀክቶች","ትምህርት","መሣሪያዎች","የፕሮጀክት ጥናቶች","አግኙኝ"],badge:"ለሥራ ዕድሎች ዝግጁ ነኝ",heroDesc:"ለትምህርት፣ ለማህበረሰብ እና ለንግድ ተግባራዊ መፍትሄዎችን የሚያቀርቡ የድር፣ የሞባይል እና AI ሶፍትዌሮችን እገነባለሁ።",downloadCV:"CV ያውርዱ",viewProjects:"ፕሮጀክቶችን ይመልከቱ →",getInTouch:"ያግኙኝ",aboutLabel:"ስለ እኔ",aboutTitle:"ለማህበረሰብ ጠቃሚ ቴክኖሎጂ መገንባት",skillsLabel:"ብቃት",skillsTitle:"ቴክኒካዊ ክህሎቶች",projectsLabel:"ሥራዎች",projectsTitle:"የተመረጡ ፕሮጀክቶች",educationLabel:"የትምህርት ዳራ",educationTitle:"ትምህርት እና ማረጋገጫዎች",languagesLabel:"ግንኙነት",languagesTitle:"የምናገራቸው ቋንቋዎች",contactLabel:"ያግኙኝ",contactTitle:"በጋራ ጥሩ ነገር እንገንባ",toolkitLabel:"የገንቢ መሣሪያዎች",toolkitTitle:'የሥራ ቦታዬን <span class="gold">ይመልከቱ</span>',terminalTitle:"የገንቢ Terminal",terminalCopy:"ስለ ክህሎቶቼ፣ ፕሮጀክቶቼ እና አድራሻዬ ለማወቅ ትዕዛዝ ያስገቡ።",githubTitle:"የGitHub እንቅስቃሴ",contributions:"የአስተዋጽኦ እንቅስቃሴ",recentRepos:"በቅርቡ የተዘመኑ ሪፖዚቶሪዎች",caseLabel:"የፕሮጀክት ጥናቶች",caseTitle:'የፕሮጀክት <span class="gold">ዝርዝር ጥናት</span>',caseIntro:"የተመረጡ ሥራዎችን ችግር፣ አወቃቀር እና የምህንድስና ውሳኔዎች ይመልከቱ።",askAssistant:"ስለ ሥራዬ ይጠይቁ"}
  };
  const translatedOriginals = new WeakMap();
  const translatedElements = new Set();
  const setLanguage = (lang) => {
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang === "om" ? "om" : lang;
    const nav = $$(".nav-links a");
    t.nav.forEach((v,i)=>{ if(nav[i]) nav[i].textContent=v; });
    const map = {".hero-badge":t.badge,".hero-desc":t.heroDesc,".hero-ctas .btn-primary":t.viewProjects,".hero-ctas .btn-secondary:nth-of-type(2)":t.downloadCV,".hero-ctas .btn-secondary:nth-of-type(3)":t.getInTouch,"#about .section-label":t.aboutLabel,"#about .section-title":t.aboutTitle,"#skills .section-label":t.skillsLabel,"#skills .section-title":t.skillsTitle,"#projects .section-label":t.projectsLabel,"#projects .section-title":t.projectsTitle,"#education .section-label":t.educationLabel,"#education .section-title":t.educationTitle,"#languages .section-label":t.languagesLabel,"#languages .section-title":t.languagesTitle,"#contact .section-label":t.contactLabel,"#contact .section-title":t.contactTitle,"[data-i18n=toolkitLabel]":t.toolkitLabel,"[data-i18n=toolkitTitle]":t.toolkitTitle,"[data-i18n=terminalTitle]":t.terminalTitle,"[data-i18n=terminalCopy]":t.terminalCopy,"[data-i18n=githubTitle]":t.githubTitle,"[data-i18n=contributions]":t.contributions,"[data-i18n=recentRepos]":t.recentRepos,"[data-i18n=caseLabel]":t.caseLabel,"[data-i18n=caseTitle]":t.caseTitle,"[data-i18n=caseIntro]":t.caseIntro,"[data-i18n=askAssistant]":t.askAssistant};
    Object.entries(map).forEach(([selector,value])=>{const el=$(selector);if(el)el.innerHTML=value;});

    const extraTranslations = {
      om:{
        ".hero-roles .role-tag":["Full-Stack Developer","React fi TypeScript","ASP.NET Core","Node.js fi API"],
        ".about-text p":["Ani barataa Computer Science waggaa 4ffaa Unity University keessatti baradhu; Full-Stack Developer dha.","Web, mobile, backend, database fi AI irratti hundaa'uun furmaata dijitaalaa ijaaruu nan jaalladha.","Hojiiwwan koo keessaa NEXORAS, BARNOOTAAI360 fi MERKATO jiru; pirojektoota dabalataa GitHub koo irratti argachuu dandeessa."],
        ".highlight-box h4":"Waan adda na taasisu",
        ".highlight-box>p":"Injinariingii qabatamaa, fooyya'iinsa itti fufiinsa qabu fi oomisha fayyadamaa giddu galeessa godhate.",
        ".highlight-item":["Ijaarsa application full-stack","Backend API fi database","Teeknooloojii barnootaa fi barnoota afaanota hedduu","Mobile application fi offline-first","Misooma oomisha AI irratti hundaa'e"],
        ".skill-card h4":["Backend Development","Frontend Development","Kuusdeetaa fi Data","Misooma Mobile","Afaanota Sagantaa","Meeshaalee fi Adeemsa Hojii"],
        ".project-top h3":["NEXORAS","BARNOOTAAI360","MERKATO","High School Management System","ETHIOPIA ONE"],
        ".project-top p":["The Global Action Network","Sirna barnootaa afaanota hedduu","Gabaa dijitaalaa","Sirna bulchiinsa mana barumsaa","Pirojektii dijitaalaa"],
        ".project-desc":["Waltajjii misoomaa namoota walqunnamsiisuu, uumuu, barachuu, waliin hojjechuu fi hojii raawwachuuf qophaa'e.","Pirojektii barnootaa kutaa 9–12 afaanota hedduu fi barnoota offline deeggaruuf qophaa'e.","Pirojektii gabaa dijitaalaa yeroo ammaa ijaaramaa jiru.","Pirojektii software bulchiinsa mana barumsaa; odeeffannoo dabalataa repository keessatti ilaali.","Repository GitHub keessatti argamu; kaayyoo fi implementation isaa source code irratti ilaali."],
        ".edu-univ":["Unity University · Itoophiyaa","Udacity · Online"],
        ".edu-degree":["BSc Computer Science","Programming / Web Development Certificate"],
        ".edu-date":["Barataa waggaa 4ffaa · Barachaa jira","2025"],
        ".edu-courses":["Programming · Data Structures · Algorithms · Database Systems · Web Development · Software Engineering","Leenjii dabalataa programming fi web development."],
        ".edu-badge":["Barachaa jira","Certificate"],
        ".lang-name":["English","Amharic","Afaan Oromoo"],
        ".lang-level":["Sadarkaa hojii","Afaan dhalootaa · Guutuu","Afaan dhalootaa · Guutuu"],
        ".contact-desc":"Pirojektoota freelance, tumsa fi internship irratti banaadha. Fintech, Super App architecture fi teeknooloojii Baha Afrikaaf bu'aa qabu irratti nan xiyyeeffadha.",
        ".cc-label":["Imeelii","Bilbila","Telegram","WhatsApp","GitHub","LinkedIn"],
        ".availability":"Carraa hojii haaraaf banaadha",
        ".de-case-card > p":["Waltajjii addunyaa namoota walqunnamsiisu, uumuu, barachuu fi waliin hojjechuuf gargaaru.","Sirna barnootaa afaanota hedduu barattoota sadarkaa lammaffaa Itoophiyaa deeggaru.","Pirojektii gabaa dijitaalaa bitataa fi gurgurtaa salphisuuf ijaaramaa jiru."],
        ".de-case-card summary":"Ijaarsa qoradhu",
        ".de-case-details b":["Ijaarsa Sirnaa","Deetaa fi yeroo-dhugaa","Fuuldura Appii","Haala pirojektii","Bal'ina oomishaa","Injineringii","Kaayyoo dizaayinii","Haala pirojektii","Xiyyeeffannoo","Haala hojii"],
        ".de-case-details p":["Clean Architecture kan Domain, Application, Infrastructure fi API layers qabu; CQRS/MediatR hojii application qindeessuuf.","PostgreSQL EF Core, UUID fi JSONB; Redis cache; SignalR qunnamtii yeroo-dhugaa.","React, TypeScript, Tailwind CSS fi Node.js gateway/ASP.NET bridge.","Pirojektii misoomaa. Suuraan oomishaa fi demo uummataa mirkanaa'e yeroo argamu ni dabalama.","Barnoota sadarkaa 9–12 afaan Ingiliffaa, Afaan Oromoo fi Amaariffaan deeggaru.","Node.js backend, PostgreSQL fi Android Kotlin/Compose with Room offline-first.","Gahee fayyadamaa, qabiyyee afaanota hedduu fi barnoota interneetii muraasa keessatti itti fufuu.","Pirojektii misoomaa; suuraalee uummataa fi demo mirkanaa'e yeroo argamu ni dabalama.","Marketplace workflow, barbaacha oomishaa fi muuxannoo bitataa/gurgurtaa.","Ijaaramaa jira. Bal'inni implementation fi demo uummataa yeroo guddatu ni haaromfama."],
        ".de-assistant-head b":"Gargaaraa Portfolio Dereje",
        ".de-assistant-head small":"Deebii gabaabaa waa'ee pirojektootaa fi dandeettii",
        ".de-assistant-bot":"Akkam! Waa'ee pirojektoota, teeknooloojii, barnootaa ykn quunnamtii Dereje na gaafadhu.",
        ".de-assistant-suggestions button":["Pirojektoota","Teeknooloojii","Quunnamtii"],
        ".de-assistant-note":"Gargaaraa portfolio keessaa · Tajaajila AI alaa ykn kuusaa odeeffannoo dhuunfaa hin fayyadamu",
        ".footer-copy":"© 2026 Dereje Solomon · Finfinnee, Itoophiyaa"
      },
      am:{
        ".hero-roles .role-tag":["Full-Stack Developer","React እና TypeScript","ASP.NET Core","Node.js እና API"],
        ".about-text p":["በUnity University የኮምፒውተር ሳይንስ የ4ኛ ዓመት ተማሪ እና Full-Stack Developer ነኝ።","የድር፣ የሞባይል፣ backend፣ database እና AI ቴክኖሎጂዎችን በመጠቀም ዲጂታል መፍትሄዎችን መገንባት እወዳለሁ።","አሁን የምሰራባቸው ፕሮጀክቶች NEXORAS፣ BARNOOTAAI360 እና MERKATO ናቸው። ሌሎችንም በGitHub ላይ ማየት ይችላሉ።"],
        ".highlight-box h4":"የሚለዩኝ ጥንካሬዎች",
        ".highlight-box>p":"ተግባራዊ ምህንድስና፣ ቀጣይ ማሻሻያ እና ተጠቃሚን ያማከለ ምርት።",
        ".highlight-item":["Full-stack application development","Backend API እና database","የትምህርት ቴክኖሎጂ እና ብዙ ቋንቋ ትምህርት","Mobile application እና offline-first","በAI ላይ የተመሰረተ ምርት ልማት"],
        ".skill-card h4":["Backend Development","Frontend Development","Database እና Data","Mobile Development","የፕሮግራሚንግ ቋንቋዎች","መሳሪያዎች እና የሥራ ሂደት"],
        ".project-top h3":["NEXORAS","BARNOOTAAI360","MERKATO","High School Management System","ETHIOPIA ONE"],
        ".project-top p":["The Global Action Network","ብዙ ቋንቋ የትምህርት ስርዓት","ዲጂታል ገበያ","የትምህርት ቤት አስተዳደር","ዲጂታል ፕሮጀክት"],
        ".project-desc":["ሰዎችን ለማገናኘት፣ ለመፍጠር፣ ለመማር፣ በጋራ ለመስራት እና እርምጃ ለመውሰድ የተዘጋጀ በልማት ላይ ያለ መድረክ።","ለ9–12 ክፍሎች ብዙ ቋንቋ እና offline learning የሚደግፍ የትምህርት ፕሮጀክት።","በአሁኑ ጊዜ በልማት ላይ ያለ ዲጂታል ገበያ ፕሮጀክት።","የትምህርት ቤት አስተዳደር ሶፍትዌር ፕሮጀክት፤ ዝርዝሩን repository ውስጥ ይመልከቱ።","በGitHub ላይ ያለ ፕሮጀክት፤ ወቅታዊ ወሰኑንና አፈጻጸሙን source code ውስጥ ይመልከቱ።"],
        ".edu-univ":["Unity University · ኢትዮጵያ","Udacity · Online"],
        ".edu-degree":["BSc ኮምፒውተር ሳይንስ","Programming / Web Development Certificate"],
        ".edu-date":["የ4ኛ ዓመት ተማሪ · በመማር ላይ","2025"],
        ".edu-courses":["Programming · Data Structures · Algorithms · Database Systems · Web Development · Software Engineering","ተጨማሪ የProgramming እና Web Development ትምህርት።"],
        ".edu-badge":["በትምህርት ላይ","Certificate"],
        ".lang-name":["እንግሊዝኛ","አማርኛ","አፋን ኦሮሞ"],
        ".lang-level":["የሙያ ብቃት","የትውልድ ቋንቋ · ሙሉ ብቃት","የትውልድ ቋንቋ · ሙሉ ብቃት"],
        ".contact-desc":"ለFreelance ፕሮጀክቶች፣ ትብብር እና internship ክፍት ነኝ። በፊንቴክ፣ Super App አወቃቀር እና ለምስራቅ አፍሪካ ጠቃሚ ቴክኖሎጂ ላይ እሰራለሁ።",
        ".cc-label":["ኢሜይል","ስልክ","Telegram","WhatsApp","GitHub","LinkedIn"],
        ".availability":"ለአዳዲስ የሥራ ዕድሎች ዝግጁ ነኝ",
        ".de-case-card > p":["ሰዎችን ለመገናኘት፣ ለመፍጠር፣ ለመማር እና በጋራ ለመስራት የሚያገናኝ ዓለም አቀፍ መድረክ።","ለኢትዮጵያ የሁለተኛ ደረጃ ተማሪዎች ብዙ ቋንቋ የሚደግፍ የትምህርት ስርዓት።","ለገዢዎችና ሻጮች ቀላል የዲጂታል ገበያ ልምድ የሚያቀርብ በልማት ላይ ያለ ፕሮጀክት።"],
        ".de-case-card summary":"አወቃቀሩን ይመልከቱ",
        ".de-case-details b":["አወቃቀር","ዳታ እና በቅጽበት","Frontend","የፕሮጀክት ሁኔታ","የምርት ወሰን","ኢንጂነሪንግ","የዲዛይን ትኩረት","የፕሮጀክት ሁኔታ","ትኩረት","ሁኔታ"],
        ".de-case-details p":["Domain፣ Application፣ Infrastructure እና API ንብርብሮች ያሉት Clean Architecture፤ CQRS/MediatR ለapplication workflow።","PostgreSQL EF Core፣ UUID እና JSONB፤ Redis cache፤ SignalR ለቅጽበታዊ ግንኙነት።","React፣ TypeScript፣ Tailwind CSS እና Node.js gateway/ASP.NET bridge።","በልማት ላይ ያለ ፕሮጀክት። የምርት ምስሎችና የተረጋገጠ demo ሲኖር ይጨመራሉ።","ለ9–12 ክፍሎች በእንግሊዝኛ፣ በአፋን ኦሮሞ እና በአማርኛ የትምህርት ድጋፍ።","Node.js backend፣ PostgreSQL እና Android Kotlin/Compose with Room offline-first።","የተጠቃሚ ሚናዎች፣ ብዙ ቋንቋ ይዘት እና ያለ በይነመረብ መማርን መቀጠል።","በልማት ላይ ያለ ፕሮጀክት፤ ምስሎችና የተረጋገጠ demo ሲኖር ይጨመራሉ።","የገበያ ሂደቶች፣ የምርት ፍለጋ እና የገዢ/ሻጭ ተሞክሮ።","በልማት ላይ ነው። የimplementation ዝርዝሮችና demo ሲገኙ ይዘምናሉ።"],
        ".de-assistant-head b":"የDereje Portfolio ረዳት",
        ".de-assistant-head small":"ስለ ፕሮጀክቶችና ክህሎቶች ፈጣን መልሶች",
        ".de-assistant-bot":"ሰላም! ስለ ፕሮጀክቶች፣ ቴክኖሎጂዎች፣ ትምህርት ወይም የDereje አድራሻ ይጠይቁኝ።",
        ".de-assistant-suggestions button":["ፕሮጀክቶች","ቴክኖሎጂ","አድራሻ"],
        ".de-assistant-note":"በPortfolio ውስጥ የሚሰራ ረዳት · ውጫዊ AI ወይም የግል ዳታ አይጠቀምም",
        ".footer-copy":"© 2026 Dereje Solomon · አዲስ አበባ፣ ኢትዮጵያ"
      }
    };
    const selectedExtra=extraTranslations[lang];
    if(selectedExtra) {
      Object.entries(selectedExtra).forEach(([selector,value])=>{
        $$(selector).forEach((el,i)=>{
          if(!translatedOriginals.has(el)){translatedOriginals.set(el,el.textContent);translatedElements.add(el);}
          const next=Array.isArray(value)?value[i]:value;
          if(next!==undefined)el.textContent=next;
        });
      });
    } else {
      translatedElements.forEach(el=>{el.textContent=translatedOriginals.get(el);});
    }
    document.title=lang==="om"?"Dereje Solomon — Full-Stack Developer | Portfolio":lang==="am"?"Dereje Solomon — የFull-Stack Developer ፖርትፎሊዮ":"Dereje Solomon — Full-Stack Developer & Super App Architect";

    try{localStorage.setItem("de-portfolio-lang",lang);}catch{}
    $$(".de-language-switch button").forEach(b=>{b.setAttribute("aria-pressed",String(b.dataset.lang===lang));});
  };
  const languageSwitch=document.createElement("div"); languageSwitch.className="de-language-switch"; languageSwitch.setAttribute("aria-label","Choose website language"); languageSwitch.setAttribute("role","group");
  languageSwitch.innerHTML='<button type="button" data-lang="en" aria-pressed="true">EN</button><button type="button" data-lang="om" aria-pressed="false">OM</button><button type="button" data-lang="am" aria-pressed="false">አማ</button>';
  const nav=$("#navbar"); if(nav) nav.append(languageSwitch);
  languageSwitch.addEventListener("click",e=>{const b=e.target.closest("button[data-lang]");if(b)setLanguage(b.dataset.lang);});
  let initial="en";try{const savedLanguage=localStorage.getItem("de-portfolio-lang");if(["en","om","am"].includes(savedLanguage))initial=savedLanguage;}catch{} setLanguage(initial);

  const terminalForm=$("#terminalForm"), terminalInput=$("#terminalInput"), terminalOutput=$("#terminalOutput");
  const commands={
    help:"Commands: about, skills, projects, education, contact, github, linkedin, toolkit, cases, home, clear. You can also use open projects.",
    about:"Dereje Solomon — Full-Stack Developer and Computer Science student focused on practical digital products.",
    skills:"React, TypeScript, JavaScript, Node.js, ASP.NET Core, C#, PostgreSQL, Firebase, Python, Java, C++ and Flutter.",
    projects:"NEXORAS, BARNOOTAAI360, MERKATO and selected software projects. Use open projects to jump to the showcase.",
    education:"Computer Science — Unity University. Explore the Education section for academic details.",
    contact:"Email: derejesolomon363@gmail.com | WhatsApp: +251 922 481 727 | GitHub: github.com/bekan25.",
    github:"Opening GitHub profile.",
    linkedin:"Opening LinkedIn profile.",
    toolkit:"Opening the Developer Toolkit section.",
    cases:"Opening Project Case Studies.",
    home:"Returning to the top of the portfolio."
  };
  const commandTargets={about:"#about",skills:"#skills",projects:"#projects",education:"#education",contact:"#contact",toolkit:"#developer-toolkit",cases:"#case-studies",home:"#home"};
  function runCommand(raw){
    const input=raw.trim();if(!input)return;
    const parts=input.toLowerCase().split(/\s+/);const cmd=parts[0];const action=parts[1];
    if(cmd==="clear"){terminalOutput.replaceChildren();return;}
    const target=cmd==="open"?commandTargets[action]:commandTargets[cmd];
    const answer=cmd==="open"?(target?"Opening "+action+" section.":"Unknown section. Try: projects, skills, toolkit, cases, contact."):commands[cmd]||"Command not found. Type help to see available commands.";
    const line=document.createElement("p");line.className="de-command";line.textContent="$ "+input;
    const result=document.createElement("p");result.className="de-result";result.textContent=answer;
    terminalOutput.append(line,result);terminalOutput.scrollTop=terminalOutput.scrollHeight;
    if(target)document.querySelector(target)?.scrollIntoView({behavior:"smooth",block:"start"});
    if(cmd==="github")window.open("https://github.com/bekan25","_blank","noopener,noreferrer");
    if(cmd==="linkedin")window.open("https://www.linkedin.com/in/dereje-solomon-9a6230370","_blank","noopener,noreferrer");
  }
  terminalForm?.addEventListener("submit",e=>{e.preventDefault();runCommand(terminalInput.value);terminalInput.value="";});
  $$(".de-command-chips button").forEach(b=>b.addEventListener("click",()=>runCommand(b.dataset.command)));

  const githubStats=$("#githubStats"), githubRepos=$("#githubRepos"), graph=$("#githubContribution"), graphStatus=$("#githubGraphStatus");
  const cacheRead=(key)=>{try{const x=JSON.parse(localStorage.getItem(key)||"null");return x&&Date.now()-x.time<6*60*60*1000?x.data:null;}catch{return null;}};
  const cacheWrite=(key,data)=>{try{localStorage.setItem(key,JSON.stringify({time:Date.now(),data}));}catch{}};
  async function getJson(url,timeout=6500){const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),timeout);try{const r=await fetch(url,{headers:{Accept:"application/vnd.github+json"},signal:controller.signal});if(!r.ok)throw new Error("HTTP "+r.status);return await r.json();}finally{clearTimeout(timer);}}
  function renderStats(user){githubStats.innerHTML=[["Public repos",user.public_repos],["Followers",user.followers],["Following",user.following]].map(([l,v])=>'<div class="de-stat"><strong>'+safeText(v)+'</strong><span>'+l+'</span></div>').join("");}
  function renderRepos(items){
    if(!Array.isArray(items)||!items.length){githubRepos.innerHTML='<p class="de-muted">No repository details available right now. <a href="https://github.com/bekan25" target="_blank" rel="noopener noreferrer">View GitHub profile</a>.</p>';return;}
    githubRepos.innerHTML=items.slice(0,5).map(r=>{
      let href="https://github.com/bekan25";
      try{const candidate=new URL(r.html_url);if(candidate.protocol==="https:"&&candidate.hostname==="github.com")href=candidate.href;}catch{}
      return '<a class="de-repo" href="'+safeText(href)+'" target="_blank" rel="noopener noreferrer"><b>'+safeText(r.name)+'</b><span>★ '+safeText(r.stargazers_count||0)+'</span></a>';
    }).join("");
  }
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
  const githubRefresh=$("#githubRefresh");
  githubRefresh?.addEventListener("click",async()=>{
    if(githubRefresh.disabled)return;
    githubRefresh.disabled=true;
    githubRefresh.textContent="Refreshing…";
    if(graphStatus)graphStatus.textContent="Checking GitHub activity…";
    try{await loadGithub();}finally{
      githubRefresh.disabled=false;
      githubRefresh.textContent="Refresh data";
    }
  });

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
  const hamburger=$("#hamburger"), navLinks=$("#navLinks");
  hamburger?.addEventListener("click",()=>hamburger.setAttribute("aria-expanded",String(navLinks?.classList.contains("open"))));
  navLinks?.addEventListener("click",event=>{
    if(event.target.closest("a")){
      navLinks.classList.remove("open");
      hamburger?.setAttribute("aria-expanded","false");
    }
  });
  document.addEventListener("keydown",event=>{
    if(event.key==="Escape"&&navLinks?.classList.contains("open")){
      navLinks.classList.remove("open");
      hamburger?.setAttribute("aria-expanded","false");
      hamburger?.focus();
    }
  });
  if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
})();
