// Shoukear.com — shared behavior: nav, language switcher (EN/NL/AR + RTL),
// WhatsApp links, Cal.com booking embed.

// ─────────────────────────────────────────────────────────────────────
// SITE CONFIG — the only place you need to edit contact/booking details.
const CONFIG = {
  // Nour's WhatsApp number: country code + number, digits only (no +, no spaces).
  // Example for a Dutch mobile 06 12 34 56 78 → "31612345678".
  whatsapp: "31600000000",

  // Cal.com booking link, e.g. "shoukear/intro-call" (the part after cal.com/).
  // Leave "" until the Cal.com account + "intro call" event type exist —
  // the booking calendar on contact.html appears automatically once set.
  calLink: ""
};
// ─────────────────────────────────────────────────────────────────────

const I18N = {
  en: {
    "nav.home": "Home",
    "nav.adults": "Adults",
    "nav.kids": "Kids",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.book": "Book a lesson",
    "float.wa": "WhatsApp us",
    "footer.rights": "Shoukear. All rights reserved.",
    "footer.contact": "Contact",
    "footer.wa": "WhatsApp",
    "price.chip": "€25 per lesson · free intro call",
    "btn.intro": "Book a free intro call",
    "btn.introShort": "Book your intro call",
    "btn.explore": "Explore lessons",

    "home.docTitle": "Shoukear — Learn Arabic in the Netherlands",
    "home.heroTitle": "Learn Arabic with a native tutor, one-on-one",
    "home.heroLead": "Private Arabic lessons for adults and children, taught in person at libraries and cafes near you. Friendly, structured, and paced to how you actually learn.",
    "home.tracksTitle": "Two tracks, one tutor",
    "home.tracksIntro": "Whether you're an adult starting from scratch or looking for a teacher for your child, lessons are tailored to the learner.",
    "home.adultsTitle": "For Adults",
    "home.adultsText": "Structured conversation-first lessons for non-native speakers — travel, heritage, work, or just for fun.",
    "home.adultsLink": "See the adult track →",
    "home.kidsTitle": "For Kids",
    "home.kidsText": "Playful, age-appropriate Arabic lessons for children, with a focus on speaking confidence and reading basics.",
    "home.kidsLink": "See the kids track →",
    "home.whyTitle": "Why learn here",
    "home.why1t": "Native speaker",
    "home.why1p": "Learn from a native Arabic speaker with real teaching experience.",
    "home.why2t": "In your neighborhood",
    "home.why2p": "Lessons happen at public libraries and cafes near you — no commute to a studio.",
    "home.why3t": "Safe for families",
    "home.vogBadge": "✔ VOG certified",
    "home.why3p": "Verified good-conduct certificate (VOG) on file for parents' peace of mind.",
    "home.readyTitle": "Ready to start?",
    "home.readyText": "Book a free 15-minute intro call to find the right fit — no commitment required.",

    "adults.docTitle": "Arabic Lessons for Adults — Shoukear",
    "adults.heroTitle": "Arabic lessons for adults",
    "adults.heroLead": "For non-native speakers who want to actually speak Arabic — for travel, family, heritage, or work. Lessons are conversation-first and adapted to your level and goals.",
    "adults.howTitle": "How it works",
    "adults.how1t": "1. Free intro call",
    "adults.how1p": "A short, no-pressure call to understand your goals and current level.",
    "adults.how2t": "2. A plan for you",
    "adults.how2p": "Lessons built around what you actually want: everyday conversation, dialect, or classical Arabic (Fusha).",
    "adults.how3t": "3. Regular practice",
    "adults.how3p": "Weekly or biweekly one-on-one sessions in person, at a library or cafe convenient to you.",
    "adults.whoTitle": "Who this is for",
    "adults.who1": "Complete beginners who want a real head start before a trip or move",
    "adults.who2": "Heritage speakers who understand some Arabic but want to speak more confidently",
    "adults.who3": "Professionals who need working Arabic for their job",
    "adults.who4": "Anyone who's tried apps and wants an actual conversation partner",
    "adults.priceTitle": "Format & pricing",
    "adults.priceIntro": "Lessons are one-on-one and in person, €25 per lesson. Start with a free intro call — no commitment.",
    "adults.p1t": "Single lesson",
    "adults.p1p": "€25 per lesson — try it with no commitment and see if it's a fit.",
    "adults.p2t": "Lesson packages",
    "adults.p2p": "Weekly or biweekly sessions, building steady progress lesson by lesson.",
    "adults.p3t": "Free intro call",
    "adults.p3p": "A short call to talk goals, level, and schedule — then you decide.",
    "adults.ctaTitle": "Start with a free intro call",

    "kids.docTitle": "Arabic Lessons for Kids — Shoukear",
    "kids.heroTitle": "Arabic lessons for kids",
    "kids.heroLead": "Playful, patient, one-on-one Arabic lessons designed for children — building speaking confidence and reading basics at a pace that suits them.",
    "kids.vogBadge": "✔ VOG certified — certificate of good conduct on file",
    "kids.peaceTitle": "Built for parents' peace of mind",
    "kids.peaceText": "Every session takes place in a public setting — a library or cafe — so parents can stay nearby or join. Lesson plans are shared in advance and progress is tracked openly.",
    "kids.learnTitle": "What kids learn",
    "kids.l1t": "Speaking first",
    "kids.l1p": "Games, songs, and conversation to build comfort speaking Arabic out loud.",
    "kids.l2t": "Reading basics",
    "kids.l2p": "Letters, sounds, and simple words, building toward short stories.",
    "kids.l3t": "Culture & heritage",
    "kids.l3p": "Stories, traditions, and context that make the language stick.",
    "kids.ageTitle": "Age groups & format",
    "kids.ageText": "Lessons are one-on-one, €25 per lesson, and adapted to your child's age, attention span, and level — from first letters to confident little conversations. Book a free intro call to talk about what would suit your child.",
    "kids.ctaTitle": "Meet the tutor first — free intro call",

    "about.docTitle": "About — Shoukear",
    "about.heroTitle": "Hi, I'm Nour",
    "about.heroLead": "I'm a native Arabic speaker living in the Netherlands, and I love helping people find their voice in Arabic — whether you're starting from your very first letter or reconnecting with a language you grew up hearing. Lessons with me are relaxed, personal, and built around you.",
    "about.philTitle": "Teaching philosophy",
    "about.philText": "Speaking comes first. From the very first lesson we talk in Arabic — at your pace, with plenty of patience and zero judgment. Grammar and reading are woven in as you need them, so everything you learn is something you can actually use in a real conversation.",
    "about.credTitle": "Credentials & trust",
    "about.vogBadge": "✔ VOG certified",
    "about.vogText": "Holds a VOG (Verklaring Omtrent het Gedrag / certificate of good conduct), especially relevant for parents booking lessons for children.",
    "about.nativeTitle": "Native speaker",
    "about.nativeText": "Arabic is my mother tongue, and I teach both Modern Standard Arabic (Fusha) and everyday spoken Arabic — adapted to each learner's goals, for adults and children alike.",
    "about.meetTitle": "Want to meet first?",
    "about.meetText": "Book a free intro call — no commitment, just a conversation.",

    "contact.docTitle": "Contact & Booking — Shoukear",
    "contact.heroTitle": "Contact & booking",
    "contact.heroLead": "Book a free 15-minute intro call to find the right fit, or reach out directly on WhatsApp with any questions.",
    "contact.calTitle": "Book your free intro call online",
    "contact.calText": "Pick a time that suits you in the calendar below — the intro call is free and takes about 15 minutes.",
    "contact.bookTitle": "Book your free intro call",
    "contact.bookText": "The easiest way to get started: send a quick WhatsApp message with a few words about who the lessons are for (you or your child) and your level, and we'll plan a free 15-minute intro call together.",
    "contact.waBtn": "Chat on WhatsApp",
    "contact.knowTitle": "Good to know",
    "contact.know1": "Lessons take place in person at public libraries and cafes in the Netherlands — we'll pick a spot that's convenient for you.",
    "contact.know2": "Lessons are €25 each. Messages are usually answered within a day, and the intro call is free with no obligation at all."
  },

  nl: {
    "nav.home": "Home",
    "nav.adults": "Volwassenen",
    "nav.kids": "Kinderen",
    "nav.about": "Over mij",
    "nav.contact": "Contact",
    "nav.book": "Les boeken",
    "float.wa": "WhatsApp ons",
    "footer.rights": "Shoukear. Alle rechten voorbehouden.",
    "footer.contact": "Contact",
    "footer.wa": "WhatsApp",
    "price.chip": "€25 per les · gratis kennismaking",
    "btn.intro": "Plan een gratis kennismaking",
    "btn.introShort": "Plan je kennismaking",
    "btn.explore": "Bekijk de lessen",

    "home.docTitle": "Shoukear — Arabisch leren in Nederland",
    "home.heroTitle": "Leer Arabisch met een moedertaaldocent, één-op-één",
    "home.heroLead": "Privélessen Arabisch voor volwassenen en kinderen, op locatie in bibliotheken en cafés bij jou in de buurt. Vriendelijk, gestructureerd en in jouw tempo.",
    "home.tracksTitle": "Twee routes, één docent",
    "home.tracksIntro": "Of je nu als volwassene vanaf nul begint of een docent zoekt voor je kind: de lessen worden afgestemd op de leerling.",
    "home.adultsTitle": "Voor volwassenen",
    "home.adultsText": "Gestructureerde lessen met de nadruk op spreken, voor niet-moedertaalsprekers — voor reizen, familie, werk of gewoon voor je plezier.",
    "home.adultsLink": "Bekijk de route voor volwassenen →",
    "home.kidsTitle": "Voor kinderen",
    "home.kidsText": "Speelse Arabische lessen op maat van kinderen, gericht op spreekdurf en de basis van het lezen.",
    "home.kidsLink": "Bekijk de route voor kinderen →",
    "home.whyTitle": "Waarom hier leren",
    "home.why1t": "Moedertaalspreker",
    "home.why1p": "Leer van een moedertaalspreker Arabisch met echte leservaring.",
    "home.why2t": "Bij jou in de buurt",
    "home.why2p": "De lessen vinden plaats in openbare bibliotheken en cafés bij jou in de buurt — geen gereis naar een studio.",
    "home.why3t": "Veilig voor gezinnen",
    "home.vogBadge": "✔ VOG-verklaring",
    "home.why3p": "Een geldige Verklaring Omtrent het Gedrag (VOG) aanwezig, voor de gemoedsrust van ouders.",
    "home.readyTitle": "Klaar om te beginnen?",
    "home.readyText": "Plan een gratis kennismakingsgesprek van 15 minuten — geheel vrijblijvend.",

    "adults.docTitle": "Arabische les voor volwassenen — Shoukear",
    "adults.heroTitle": "Arabische les voor volwassenen",
    "adults.heroLead": "Voor niet-moedertaalsprekers die écht Arabisch willen spreken — voor reizen, familie, roots of werk. De lessen draaien om het gesprek en worden afgestemd op jouw niveau en doelen.",
    "adults.howTitle": "Zo werkt het",
    "adults.how1t": "1. Gratis kennismaking",
    "adults.how1p": "Een kort, vrijblijvend gesprek over je doelen en je huidige niveau.",
    "adults.how2t": "2. Een plan op maat",
    "adults.how2p": "Lessen rond wat jij echt wilt: alledaagse gesprekken, dialect of klassiek Arabisch (Fusha).",
    "adults.how3t": "3. Regelmatig oefenen",
    "adults.how3p": "Wekelijkse of tweewekelijkse één-op-één lessen op locatie, in een bibliotheek of café bij jou in de buurt.",
    "adults.whoTitle": "Voor wie is dit",
    "adults.who1": "Absolute beginners die een vliegende start willen vóór een reis of verhuizing",
    "adults.who2": "Mensen met Arabische roots die de taal deels verstaan maar vlotter willen spreken",
    "adults.who3": "Professionals die Arabisch nodig hebben voor hun werk",
    "adults.who4": "Iedereen die apps heeft geprobeerd en nu een echte gesprekspartner wil",
    "adults.priceTitle": "Vorm & tarieven",
    "adults.priceIntro": "De lessen zijn één-op-één en op locatie, €25 per les. Begin met een gratis kennismakingsgesprek — geheel vrijblijvend.",
    "adults.p1t": "Losse les",
    "adults.p1p": "€25 per les — probeer het vrijblijvend uit en kijk of het bij je past.",
    "adults.p2t": "Lespakketten",
    "adults.p2p": "Wekelijkse of tweewekelijkse lessen die stap voor stap vooruitgang opbouwen.",
    "adults.p3t": "Gratis kennismaking",
    "adults.p3p": "Een kort gesprek over doelen, niveau en planning — daarna beslis jij.",
    "adults.ctaTitle": "Begin met een gratis kennismaking",

    "kids.docTitle": "Arabische les voor kinderen — Shoukear",
    "kids.heroTitle": "Arabische les voor kinderen",
    "kids.heroLead": "Speelse, geduldige één-op-één lessen Arabisch voor kinderen — met aandacht voor spreekdurf en de basis van het lezen, in hun eigen tempo.",
    "kids.vogBadge": "✔ VOG-verklaring aanwezig (Verklaring Omtrent het Gedrag)",
    "kids.peaceTitle": "Gemoedsrust voor ouders",
    "kids.peaceText": "Elke les vindt plaats op een openbare plek — een bibliotheek of café — zodat ouders in de buurt kunnen blijven of aanschuiven. Lesplannen worden vooraf gedeeld en de voortgang is altijd inzichtelijk.",
    "kids.learnTitle": "Wat kinderen leren",
    "kids.l1t": "Eerst spreken",
    "kids.l1p": "Spelletjes, liedjes en gesprekjes om vertrouwd te raken met hardop Arabisch spreken.",
    "kids.l2t": "Basis van het lezen",
    "kids.l2p": "Letters, klanken en eenvoudige woorden, op weg naar korte verhaaltjes.",
    "kids.l3t": "Cultuur & roots",
    "kids.l3p": "Verhalen, tradities en context die de taal laten beklijven.",
    "kids.ageTitle": "Leeftijden & vorm",
    "kids.ageText": "De lessen zijn één-op-één, €25 per les, en afgestemd op de leeftijd, spanningsboog en het niveau van je kind — van de eerste letters tot zelfverzekerde gesprekjes. Plan een gratis kennismaking om te bespreken wat bij jouw kind past.",
    "kids.ctaTitle": "Maak eerst kennis met de docent — gratis",

    "about.docTitle": "Over mij — Shoukear",
    "about.heroTitle": "Hoi, ik ben Nour",
    "about.heroLead": "Ik ben moedertaalspreker Arabisch en woon in Nederland. Ik help mensen graag hun stem te vinden in het Arabisch — of je nu begint bij je allereerste letter of een taal oppakt waarmee je bent opgegroeid. Mijn lessen zijn ontspannen, persoonlijk en helemaal om jou heen gebouwd.",
    "about.philTitle": "Mijn lesaanpak",
    "about.philText": "Spreken staat voorop. Vanaf de allereerste les praten we in het Arabisch — in jouw tempo, met veel geduld en zonder oordeel. Grammatica en lezen komen aan bod wanneer jij ze nodig hebt, zodat alles wat je leert direct bruikbaar is in een echt gesprek.",
    "about.credTitle": "Diploma's & vertrouwen",
    "about.vogBadge": "✔ VOG-verklaring",
    "about.vogText": "In het bezit van een Verklaring Omtrent het Gedrag (VOG), extra belangrijk voor ouders die lessen boeken voor hun kind.",
    "about.nativeTitle": "Moedertaalspreker",
    "about.nativeText": "Arabisch is mijn moedertaal. Ik geef les in zowel Modern Standaard Arabisch (Fusha) als alledaags gesproken Arabisch — afgestemd op de doelen van elke leerling, volwassenen én kinderen.",
    "about.meetTitle": "Eerst kennismaken?",
    "about.meetText": "Plan een gratis kennismakingsgesprek — vrijblijvend, gewoon een gesprek.",

    "contact.docTitle": "Contact & boeken — Shoukear",
    "contact.heroTitle": "Contact & boeken",
    "contact.heroLead": "Plan een gratis kennismakingsgesprek van 15 minuten of stel je vraag direct via WhatsApp.",
    "contact.calTitle": "Plan je gratis kennismaking online",
    "contact.calText": "Kies hieronder in de kalender een moment dat jou uitkomt — het kennismakingsgesprek is gratis en duurt ongeveer 15 minuten.",
    "contact.bookTitle": "Plan je gratis kennismaking",
    "contact.bookText": "De makkelijkste manier om te beginnen: stuur een kort WhatsApp-bericht met voor wie de lessen zijn (jijzelf of je kind) en je niveau, dan plannen we samen een gratis kennismakingsgesprek van 15 minuten.",
    "contact.waBtn": "Chat via WhatsApp",
    "contact.knowTitle": "Handig om te weten",
    "contact.know1": "De lessen vinden plaats op locatie, in openbare bibliotheken en cafés in Nederland — we kiezen samen een plek die jou goed uitkomt.",
    "contact.know2": "Een les kost €25. Berichten worden meestal binnen een dag beantwoord en het kennismakingsgesprek is gratis en geheel vrijblijvend."
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.adults": "للكبار",
    "nav.kids": "للأطفال",
    "nav.about": "من أنا",
    "nav.contact": "تواصل",
    "nav.book": "احجز درسًا",
    "float.wa": "راسلنا على واتساب",
    "footer.rights": "Shoukear. جميع الحقوق محفوظة.",
    "footer.contact": "تواصل",
    "footer.wa": "واتساب",
    "price.chip": "‏€25 للدرس · مكالمة تعارف مجانية",
    "btn.intro": "احجز مكالمة تعارف مجانية",
    "btn.introShort": "احجز مكالمة التعارف",
    "btn.explore": "استكشف الدروس",

    "home.docTitle": "Shoukear — تعلّم العربية في هولندا",
    "home.heroTitle": "تعلّم العربية مع معلمة لغتها الأم، دروس فردية",
    "home.heroLead": "دروس عربية خصوصية للكبار والأطفال، وجهًا لوجه في المكتبات والمقاهي القريبة منك. أسلوب ودود ومنظّم يناسب طريقتك في التعلم.",
    "home.tracksTitle": "مساران، معلمة واحدة",
    "home.tracksIntro": "سواء كنت بالغًا تبدأ من الصفر أو تبحث عن معلمة لطفلك، الدروس مصممة على مقاس المتعلم.",
    "home.adultsTitle": "للكبار",
    "home.adultsText": "دروس منظمة تركّز على المحادثة لغير الناطقين بالعربية — للسفر أو الأصول العائلية أو العمل أو للمتعة.",
    "home.adultsLink": "اطّلع على مسار الكبار ←",
    "home.kidsTitle": "للأطفال",
    "home.kidsText": "دروس عربية ممتعة تناسب أعمار الأطفال، تركز على الثقة في التحدث وأساسيات القراءة.",
    "home.kidsLink": "اطّلع على مسار الأطفال ←",
    "home.whyTitle": "لماذا تتعلم هنا",
    "home.why1t": "معلمة لغتها الأم",
    "home.why1p": "تعلّم مع معلمة العربية لغتها الأم ولديها خبرة حقيقية في التدريس.",
    "home.why2t": "في حيّك القريب",
    "home.why2p": "تُعقد الدروس في المكتبات العامة والمقاهي القريبة منك — بلا عناء التنقل.",
    "home.why3t": "أمان تام للعائلات",
    "home.vogBadge": "✔ شهادة سلوك (VOG)",
    "home.why3p": "شهادة حسن سيرة وسلوك هولندية (VOG) موثّقة لطمأنة الوالدين.",
    "home.readyTitle": "هل أنت مستعد للبدء؟",
    "home.readyText": "احجز مكالمة تعارف مجانية لمدة ١٥ دقيقة لتتأكد أنها الخيار المناسب — دون أي التزام.",

    "adults.docTitle": "دروس العربية للكبار — Shoukear",
    "adults.heroTitle": "دروس العربية للكبار",
    "adults.heroLead": "لغير الناطقين بالعربية ممن يريدون التحدث بها فعلًا — للسفر أو العائلة أو الأصول أو العمل. الدروس تركّز على المحادثة وتُكيَّف مع مستواك وأهدافك.",
    "adults.howTitle": "كيف تسير الأمور",
    "adults.how1t": "١. مكالمة تعارف مجانية",
    "adults.how1p": "مكالمة قصيرة وبلا أي ضغط للتعرف على أهدافك ومستواك الحالي.",
    "adults.how2t": "٢. خطة على مقاسك",
    "adults.how2p": "دروس مبنية على ما تريده فعلًا: محادثة يومية، أو لهجة، أو العربية الفصحى.",
    "adults.how3t": "٣. تمرّن بانتظام",
    "adults.how3p": "جلسات فردية أسبوعية أو نصف شهرية وجهًا لوجه، في مكتبة أو مقهى يناسبك.",
    "adults.whoTitle": "لمن هذه الدروس",
    "adults.who1": "المبتدئون تمامًا الراغبون في انطلاقة حقيقية قبل سفر أو انتقال",
    "adults.who2": "أبناء الأصول العربية الذين يفهمون بعض العربية ويريدون التحدث بثقة أكبر",
    "adults.who3": "المهنيون الذين يحتاجون العربية في عملهم",
    "adults.who4": "كل من جرّب التطبيقات ويريد الآن شريك محادثة حقيقيًا",
    "adults.priceTitle": "النظام والأسعار",
    "adults.priceIntro": "الدروس فردية ووجهًا لوجه، بسعر ‏€25 للدرس الواحد. ابدأ بمكالمة تعارف مجانية — دون التزام.",
    "adults.p1t": "درس واحد",
    "adults.p1p": "‏€25 للدرس — جرّب دون أي التزام وانظر إن كان يناسبك.",
    "adults.p2t": "باقات الدروس",
    "adults.p2p": "جلسات أسبوعية أو نصف شهرية تبني تقدمًا ثابتًا درسًا بعد درس.",
    "adults.p3t": "مكالمة تعارف مجانية",
    "adults.p3p": "مكالمة قصيرة للحديث عن الأهداف والمستوى والمواعيد — ثم القرار لك.",
    "adults.ctaTitle": "ابدأ بمكالمة تعارف مجانية",

    "kids.docTitle": "دروس العربية للأطفال — Shoukear",
    "kids.heroTitle": "دروس العربية للأطفال",
    "kids.heroLead": "دروس عربية فردية ممتعة وصبورة مصممة للأطفال — تبني الثقة في التحدث وأساسيات القراءة بوتيرة تناسبهم.",
    "kids.vogBadge": "✔ شهادة حسن سيرة وسلوك هولندية (VOG) موثّقة",
    "kids.peaceTitle": "راحة بال الوالدين أولًا",
    "kids.peaceText": "تُعقد كل جلسة في مكان عام — مكتبة أو مقهى — ليتمكن الوالدان من البقاء قريبًا أو المشاركة. تُشارَك خطط الدروس مسبقًا ويُتابَع التقدم بشفافية.",
    "kids.learnTitle": "ماذا يتعلم الأطفال",
    "kids.l1t": "التحدث أولًا",
    "kids.l1p": "ألعاب وأغانٍ ومحادثات تبني الراحة في التحدث بالعربية بصوت عالٍ.",
    "kids.l2t": "أساسيات القراءة",
    "kids.l2p": "الحروف والأصوات والكلمات البسيطة، وصولًا إلى القصص القصيرة.",
    "kids.l3t": "الثقافة والهوية",
    "kids.l3p": "قصص وتقاليد وسياق يجعل اللغة راسخة في الذاكرة.",
    "kids.ageTitle": "الأعمار والنظام",
    "kids.ageText": "الدروس فردية بسعر ‏€25 للدرس، ومكيّفة مع عمر طفلك ومدى تركيزه ومستواه — من الحروف الأولى إلى محادثات صغيرة واثقة. احجز مكالمة تعارف مجانية للحديث عمّا يناسب طفلك.",
    "kids.ctaTitle": "تعرّف على المعلمة أولًا — مكالمة مجانية",

    "about.docTitle": "من أنا — Shoukear",
    "about.heroTitle": "مرحبًا، أنا نور",
    "about.heroLead": "أنا معلمة لغتها الأم العربية وأعيش في هولندا، وأحب مساعدة الناس على إيجاد صوتهم بالعربية — سواء كنت تبدأ من أول حرف أو تعيد وصل ما انقطع مع لغة نشأت على سماعها. دروسي مريحة وشخصية ومبنية حولك أنت.",
    "about.philTitle": "فلسفتي في التعليم",
    "about.philText": "التحدث يأتي أولًا. منذ الدرس الأول نتحدث بالعربية — بوتيرتك أنت، وبصبر كبير ودون أي إحراج. تُدمج القواعد والقراءة عند حاجتك إليها، فيكون كل ما تتعلمه قابلًا للاستخدام في محادثة حقيقية.",
    "about.credTitle": "المؤهلات والثقة",
    "about.vogBadge": "✔ شهادة سلوك (VOG)",
    "about.vogText": "حاصلة على شهادة حسن السيرة والسلوك الهولندية (VOG)، وهو أمر مهم خصوصًا للوالدين الذين يحجزون دروسًا لأطفالهم.",
    "about.nativeTitle": "اللغة الأم",
    "about.nativeText": "العربية لغتي الأم، وأدرّس الفصحى الحديثة والعامية اليومية معًا — بحسب أهداف كل متعلم، للكبار والأطفال على حد سواء.",
    "about.meetTitle": "تريد أن نتعارف أولًا؟",
    "about.meetText": "احجز مكالمة تعارف مجانية — بلا التزام، مجرد حديث.",

    "contact.docTitle": "التواصل والحجز — Shoukear",
    "contact.heroTitle": "التواصل والحجز",
    "contact.heroLead": "احجز مكالمة تعارف مجانية لمدة ١٥ دقيقة، أو تواصل مباشرة عبر واتساب لأي سؤال.",
    "contact.calTitle": "احجز مكالمة التعارف المجانية عبر الإنترنت",
    "contact.calText": "اختر الوقت الذي يناسبك في التقويم أدناه — مكالمة التعارف مجانية وتستغرق نحو ١٥ دقيقة.",
    "contact.bookTitle": "احجز مكالمة التعارف المجانية",
    "contact.bookText": "أسهل طريقة للبدء: أرسل رسالة واتساب قصيرة تخبرنا فيها لمن الدروس (لك أم لطفلك) وما مستواك، وسنرتب معًا مكالمة تعارف مجانية لمدة ١٥ دقيقة.",
    "contact.waBtn": "تحدث عبر واتساب",
    "contact.knowTitle": "معلومات مفيدة",
    "contact.know1": "تُعقد الدروس وجهًا لوجه في المكتبات العامة والمقاهي في هولندا — وسنختار معًا مكانًا يناسبك.",
    "contact.know2": "سعر الدرس ‏€25. يُرد على الرسائل عادة خلال يوم واحد، ومكالمة التعارف مجانية تمامًا ودون أي التزام."
  }
};

const LANG_KEY = "shoukear-lang";

function setLang(lang) {
  if (!I18N[lang]) lang = "en";
  const dict = I18N[lang];

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  const page = document.body.getAttribute("data-page");
  if (page && dict[page + ".docTitle"]) {
    document.title = dict[page + ".docTitle"];
  }

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });

  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* private mode — ignore */
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Mark current page in nav
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current) {
      a.setAttribute("aria-current", "page");
    }
  });

  // Language switcher
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });

  let stored = null;
  try {
    stored = localStorage.getItem(LANG_KEY);
  } catch (e) {
    /* ignore */
  }
  setLang(stored || "en");

  // Point every WhatsApp link at the number from CONFIG
  if (CONFIG.whatsapp) {
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach((a) => {
      a.href = "https://wa.me/" + CONFIG.whatsapp;
    });
  }

  initCalBooking();
});

// Cal.com inline booking embed (contact.html). Does nothing until
// CONFIG.calLink is set — then it reveals the #book section and loads
// the calendar. Embed snippet from https://cal.com → event type → Embed.
function initCalBooking() {
  const section = document.getElementById("book");
  const mount = document.getElementById("cal-embed");
  if (!section || !mount || !CONFIG.calLink) return;

  section.hidden = false;

  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = api;
          p(cal, ar);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  Cal("init", { origin: "https://cal.com" });
  Cal("inline", {
    elementOrSelector: "#cal-embed",
    calLink: CONFIG.calLink,
    config: { theme: "light" }
  });
}

/*
  Cookie-free analytics placeholder.
  Once a provider is chosen (e.g. Plausible or Fathom), add its
  script tag directly in the <head> of each HTML page.
*/
