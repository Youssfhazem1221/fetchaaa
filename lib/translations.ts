export type TranslationType = typeof translations.en;

export const translations = {
  en: {
    navbar: {
      services: 'Services',
      process: 'Process',
      useCases: 'Use cases',
      proof: 'Proof',
      faq: 'FAQ',
      audit: 'Audit',
    },
    hero: {
      badge: 'AI automation agency / CRM builds & live operations',
      title: 'Fetch AI Operations',
      description:
        'You are losing revenue right now — to slow replies, missed follow-ups, and a CRM nobody updates. We build the systems that fix all three: AI-powered lead response, custom CRMs, and full operations automation. Done for you in 48 hours.',
      btnAudit: 'Book a free systems audit',
      btnProof: 'See operating proof',
      stats: [
        { label: 'First launch', value: '48h' },
        { label: 'Lead coverage', value: '24/7' },
        { label: 'Reply target', value: '<60s' },
      ],
    },
    ticker: {
      text: 'AI OPERATIONS // CUSTOM CRM BUILDS // DONE FOR YOU // 48H FIRST LAUNCH // MENA // EU // US MARKETS // LEAD RESPONSE IN <60s // NO-SHOW RECOVERY // REVENUE AUTOMATION // ',
    },
    services: {
      badge: 'What we build',
      title: 'Stop losing money between your ads and your calendar.',
      description:
        'Every business has the same three leaks: leads that go cold before anyone replies, a CRM that nobody trusts, and a team drowning in manual tasks. Fetch closes all three. We build the AI systems, custom CRMs, and operations workflows that turn your current chaos into a machine that runs itself.',
      items: [
        {
          title: 'Lead response engine',
          description:
            'Every lead replied to in under 60 seconds — automatically. We capture inquiries from every channel, score their intent, and push only the hot ones to your team. No more "we meant to follow up."',
          details: ['WhatsApp, email, forms', 'Intent scoring', 'Spam filtering'],
        },
        {
          title: 'Custom CRM builds',
          description:
            'Your spreadsheet is not a CRM. We build you a proper custom CRM — pipeline stages, auto-updates, deal tracking, and follow-up sequences — fitted exactly to how your team sells.',
          details: ['Pipeline & deal tracking', 'Auto-updates from AI', 'Follow-up sequences'],
        },
        {
          title: 'Full operations automation',
          description:
            'Connect every tool your team uses into one clean workflow. Bookings, reminders, CRM updates, escalations — all automatic. Your team focuses on closing, not chasing.',
          details: ['CRM sync & updates', 'Calendar & bookings', 'Team handoffs'],
        },
      ],
      cta: 'Scope this system',
      capabilities: [
        'Custom CRM architecture',
        'AI agent logic',
        'Full tool integrations',
      ],
    },
    livePerformance: {
      badge: 'Operating proof',
      title: 'Inquiry to booked revenue, without the handoff drift.',
      flow: [
        {
          label: 'Capture',
          title: 'Every channel feeds one intake queue.',
          meta: 'Forms / WhatsApp / Instagram / email',
        },
        {
          label: 'Reason',
          title: 'AI scores urgency, fit, and next action.',
          meta: 'Intent / budget / timing / risk',
        },
        {
          label: 'Commit',
          title: 'CRM, calendar, and team alerts stay synced.',
          meta: 'HubSpot / GHL / Slack / Calendly',
        },
      ],
      liveVolume: 'live volume',
      resultSnapshot: 'result snapshot',
      snapshotStats: [
        { value: '0.4s', label: 'fastest lead classification' },
        { value: '14', label: 'active automations in one build' },
        { value: '3', label: 'handoff routes with human override' },
      ],
      workflowMap: 'n8n-style workflow map',
      workflowTitle: 'The automation your team can picture before it launches.',
      workflowDesc:
        'A visible system flow helps buyers understand what gets automated, where humans stay in control, and how every lead moves toward revenue.',
      workflowNodes: [
        {
          label: 'Webhook trigger',
          detail: 'Lead arrives from form, WhatsApp, paid ad, or inbox.',
        },
        {
          label: 'AI qualification',
          detail: 'Intent, budget, urgency, and risk get scored instantly.',
        },
        {
          label: 'Route logic',
          detail: 'Branches split hot leads, nurture flows, and edge cases.',
        },
        {
          label: 'Book or notify',
          detail: 'Calendar slots, CRM stages, and team alerts update together.',
        },
        {
          label: 'Human override',
          detail: 'Low-confidence replies pause for review before sending.',
        },
        {
          label: 'Follow-up loop',
          detail: 'No-shows, stale deals, and missing fields trigger recovery.',
        },
      ],
      backendSystemView: 'backend system view',
      backendH3: 'A real workflow your team can trust.',
      backendDesc:
        'Intake, AI reasoning, memory, branch logic, CRM updates, and human review shown as the backend system customers rarely get to see.',
      backendStats: [
        'active run: lead_4821',
        'avg path: 0.4s to routed',
        'fallback: human approval gate',
      ],
      diagramNodes: [
        { label: 'Lead form', sub: 'new inquiry' },
        { label: 'AI agent', sub: 'qualify + decide' },
        { label: 'Fit?', sub: 'true / false' },
        { label: 'Book call', sub: 'calendar + CRM' },
        { label: 'Human review', sub: 'safe fallback' },
      ],
      subNodes: [
        { label: 'Model', sub: 'intent + tone' },
        { label: 'Memory', sub: 'lead history' },
        { label: 'Tools', sub: 'CRM actions' },
      ],
      workflowStatus: 'Workflow status',
      workflowStatusDetail: 'Fully automated & monitored',
    },
    process: {
      badge: 'How we work',
      title: 'From broken process to running system in one sprint.',
      steps: [
        {
          title: 'Find the money leak',
          desc: 'We audit your lead sources, response times, CRM gaps, calendar drops, and team handoffs. In one call we can usually spot the biggest revenue leak your team does not even know exists.',
        },
        {
          title: 'Build the system',
          desc: 'We design the AI logic, CRM architecture, qualification rules, and routing paths — all fitted to how your team already works, not how a consultant thinks they should.',
        },
        {
          title: 'Connect everything',
          desc: 'We wire the system into your existing CRM, inboxes, calendar, WhatsApp, and internal alerts. No switching tools. No retraining your team. It just runs.',
        },
        {
          title: 'Monitor and improve',
          desc: 'We watch the logs every week, improve response quality, fix edge cases, and expand coverage as your business grows. You get a system that gets better over time.',
        },
      ],
    },
    bentoGrid: {
      badge: 'Who we help',
      title: 'Your industry. Your problem. Our system.',
      description:
        'The pain is always the same: leads going cold, appointments not showing up, CRMs nobody updates, and a team spending half their day on tasks a machine should handle. We fix that.',
      cases: [
        {
          industry: 'Real estate',
          title: 'The buyer called your competitor because you replied an hour late.',
          metric: '3x faster response',
          lines: [
            'Lead arrives from Facebook or portal',
            'AI qualifies budget, area, and timeline instantly',
            'Viewing booked and CRM updated — no rep needed',
          ],
        },
        {
          industry: 'Clinics & medical centers',
          title: 'Empty slots cost you money. No-shows cost you more.',
          metric: 'Zero no-shows in 3 weeks',
          lines: [
            'Patient enquires on WhatsApp',
            'AI checks symptoms, availability, and confirms booking',
            'Smart reminders eliminate no-shows automatically',
          ],
        },
        {
          industry: 'E-commerce & retail',
          title: 'Your support inbox is a revenue graveyard.',
          metric: '953+ staff hours recovered',
          lines: [
            'Customer stalls or raises an issue',
            'System resolves, escalates, or recovers the sale',
            'Human steps in only for complex cases',
          ],
        },
      ],
    },
    caseStudies: {
      badge: 'Measured outcomes',
      title: 'Proof that reads like an ops report.',
      description:
        'The best automation work becomes boring in the right way: fewer delays, cleaner handoffs, and numbers your team can check.',
      stats: [
        {
          market: 'E-commerce',
          outcome: '953+ hours removed',
          system:
            'Automated order processing and email triage across 114k+ messages.',
          result: 'Equivalent to 5.4 months of support labor recovered.',
          score: '98',
        },
        {
          market: 'SaaS',
          outcome: '91% faster replies',
          system:
            'Tier-1 customer support agent across three languages with escalation logic.',
          result:
            'Global coverage without forcing the team into a new inbox.',
          score: '95',
        },
        {
          market: 'Clinics',
          outcome: '3 weeks, zero no-shows',
          system:
            'WhatsApp intake, booking confirmation, reminder, and triage workflow.',
          result: 'Cleaner schedules and fewer manual confirmation calls.',
          score: '92',
        },
      ],
      confidence: 'confidence score',
    },
    about: {
      badge: 'Who we are',
      title: 'We are operators, not consultants.',
      description:
        'We have seen what breaks inside growing businesses — the spreadsheet masquerading as a CRM, the lead that slipped because nobody replied in time, the team copying data between five tools every morning. We build the systems that eliminate all of that. Permanently.',
      team: [
        {
          name: 'Youssf Hazem',
          role: 'CEO',
          focus: 'Revenue strategy, marketing & sales systems',
          background:
            'Spent years watching businesses lose money not from bad products but from broken operations. Turns every bottleneck into a build brief — so the system we ship always targets real revenue, not features.',
        },
        {
          name: 'Mohammed Ahmed',
          role: 'Chief Technical Officer',
          focus: 'AI engineering, CRM architecture & automation',
          background:
            'Architects the AI logic, custom CRM systems, data pipelines, and integrations that make everything run. If it needs to be built or connected, he builds it.',
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'The questions every business owner asks us.',
      items: [
        {
          q: 'We already have a CRM — do we need a new one?',
          a: 'Maybe not. If your current CRM is actually being used and updated, we connect to it. But if your team ignores it or it is missing key stages, we can build a custom one that fits how you actually sell — in one sprint.',
        },
        {
          q: 'How fast can you get this running?',
          a: 'Lead response, CRM sync, and booking workflows typically launch in 48 hours. A full custom CRM build with AI qualification takes one focused sprint — usually one to two weeks.',
        },
        {
          q: 'Do we need to replace our current tools?',
          a: 'No. We connect to what your team already uses — HubSpot, GoHighLevel, Salesforce, Calendly, Slack, WhatsApp, email, and forms. You keep your tools. We make them work together.',
        },
        {
          q: 'What if the AI says something wrong to a customer?',
          a: 'Every system we build has confidence thresholds and human approval gates. If the AI is not sure, it pauses and flags a teammate — it never guesses on important replies.',
        },
        {
          q: 'How does pricing work?',
          a: 'You pay a one-time build fee for the sprint and CRM setup, then a monthly operating fee that covers hosting, monitoring, improvements, and support. No surprise invoices.',
        },
      ],
    },
    contact: {
      badge: 'Free systems audit',
      title: 'Tell us where the money is leaking. We will show you how to stop it.',
      description:
        'Describe the one thing that costs you the most right now — slow replies, empty calendar slots, a CRM your team ignores, or a follow-up process that depends on memory. We will map exactly what to build and what it is worth.',
      outputs: [
        'Custom workflow map',
        'Revenue leak estimate',
        '48-hour launch roadmap',
      ],
      formBadge: 'audit request',
      formTitle: 'Book your free audit',
      name: 'Full name',
      email: 'Work email',
      industry: 'Industry',
      region: 'Region',
      bottleneck: 'Your biggest operational pain right now',
      placeholderBottleneck:
        'Slow replies? CRM chaos? Leads going cold? Empty slots? Tell us exactly what is breaking.',
      submit: 'Request my free audit',
      sending: 'Sending...',
      chat: 'Chat on WhatsApp',
      successTitle: 'Audit request received.',
      successDesc:
        'We have your details. We will review your situation and send you a tailored workflow map and revenue estimate within 48 hours.',
      successReset: 'Submit another request',
      industries: {
        real_estate: 'Real estate',
        clinics: 'Clinics / medical',
        ecommerce: 'E-commerce',
        other: 'Other',
      },
      regions: {
        us: 'United States',
        mena: 'MENA',
        eu: 'Europe',
        other: 'Other',
      },
    },
    footer: {
      description:
        'We build AI-powered lead response systems, custom CRMs, and full operations automation for businesses that are tired of losing revenue to slow replies and broken processes.',
      audit: 'Book a free audit',
      whatsapp: 'WhatsApp us now',
      copyright: 'Copyright 2026 Fetch AI Agency. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    cta: {
      badge: 'live now',
      label: 'Chat on WhatsApp',
      message:
        "Hi Fetch team, I'd like to book a free audit for my business. I want to see what you can automate for us.",
    },
  },
  ar: {
    navbar: {
      services: 'الخدمات',
      process: 'طريقة شغلنا',
      useCases: 'مين بنساعده',
      proof: 'نتائج حقيقية',
      faq: 'أسئلة شائعة',
      audit: 'احجز فحص مجاني',
    },
    hero: {
      badge: 'وكالة أتمتة ذكية / CRM مخصص / أنظمة تشغيل كاملة',
      title: 'Fetch لأنظمة التشغيل الذكية',
      description:
        'كل يوم بيعدي من غير رد سريع، ده فلوس اتخسرت. بنبني لك نظام يرد على عملاءك خلال 60 ثانية، CRM مخصص لشركتك، وأتمتة كاملة للعمليات. كل ده بنعملهولك إنت وتطلع شغال في 48 ساعة.',
      btnAudit: 'احجز فحص مجاني دلوقتي',
      btnProof: 'شوف نتائج حقيقية',
      stats: [
        { label: 'أول إطلاق', value: '48 ساعة' },
        { label: 'تغطية العملاء', value: '24/7' },
        { label: 'وقت الرد', value: 'أقل من 60 ث' },
      ],
    },
    ticker: {
      text: 'أتمتة ذكية // CRM مخصص لشركتك // رد في أقل من 60 ثانية // إطلاق في 48 ساعة // الشرق الأوسط وأوروبا وأمريكا // صفر غياب في المواعيد // استرجاع مبيعات ضائعة // بنعملهولك إنت // ',
    },
    services: {
      badge: 'اللي بنبنيه لشركتك',
      title: 'وقفنا نشوف الفلوس بتتسرب منين — وسدينا التسريب.',
      description:
        'كل شركة بتعاني من نفس المشاكل الثلاثة: عملاء بيستفسروا وما حدش بيرد في الوقت الصح، CRM ما حدش بيحدثه، وفريق بيضيع نصف يومه في تاسكات المفروض ماكينة تعملها. إحنا بنحل الثلاثة دول.',
      items: [
        {
          title: 'نظام الرد الفوري على العملاء',
          description:
            'مفيش استفسار بيعدي من غير رد تاني. النظام بيلتقط كل رسالة من كل قناة، بيحلل جدية العميل، وبيرد في أقل من 60 ثانية. فريقك مش بيتكلم غير مع الجاد فعلاً.',
          details: ['واتساب، إيميل، نماذج', 'تقييم جدية العميل', 'فلترة الرسائل المزعجة'],
        },
        {
          title: 'CRM مخصص لشركتك',
          description:
            'الإكسيل مش CRM. بنبنيلك CRM بيتناسب مع طريقة مبيعاتك الفعلية — مراحل الديل، تتبع تلقائي، تسلسل متابعة، وتحديثات من الذكاء الاصطناعي من غير ما حد يلمسه.',
          details: ['مراحل الديل والمتابعة', 'تحديثات تلقائية بالذكاء', 'تسلسل متابعة العملاء'],
        },
        {
          title: 'أتمتة كاملة للعمليات',
          description:
            'ربط كل أدواتك في مسار واحد منظم. حجوزات، تذكيرات، تحديث الـ CRM، توجيه الفريق — كل ده بيتعمل أوتوماتيك. فريقك يركز على الإغلاق مش على المتابعة.',
          details: ['مزامنة الـ CRM والحجوزات', 'تذكيرات وتنبيهات تلقائية', 'تسليم المهام للفريق'],
        },
      ],
      cta: 'حدد تفاصيل نظامك',
      capabilities: [
        'بناء CRM مخصص',
        'عميل ذكاء اصطناعي',
        'ربط كامل مع الأدوات',
      ],
    },
    livePerformance: {
      badge: 'إثباتات التشغيل اللحظية',
      title: 'من استفسار العميل لحجز الموعد وتحقيق الإيرادات، بدون أي تسريب.',
      flow: [
        {
          label: 'الالتقاط',
          title: 'كل القنوات بتصب في قائمة انتظار واحدة.',
          meta: 'نماذج الموقع / واتساب / إنستجرام / الإيميل',
        },
        {
          label: 'التحليل والربط',
          title: 'الذكاء الاصطناعي بيحدد الأهمية، وجاهزية العميل، والخطوة الجاية.',
          meta: 'الجدية / الميزانية / التوقيت / المخاطر',
        },
        {
          label: 'التنفيذ والمزامنة',
          title: 'مزامنة لحظية للـ CRM، النتيجة، وتنبيهات فريق العمل.',
          meta: 'HubSpot / GHL / Slack / Calendly',
        },
      ],
      liveVolume: 'حجم العمليات الفوري',
      resultSnapshot: 'لقطة سريعة للنتائج',
      snapshotStats: [
        { value: '0.4 ثانية', label: 'أسرع تصنيف للعملاء المهتمين' },
        { value: '14', label: 'أتمتة نشطة في نظام واحد متكامل' },
        { value: '3', label: 'مسارات تسليم للموظفين مع بوابة مراجعة' },
      ],
      workflowMap: 'مخطط مسار العمل (بأسلوب n8n)',
      workflowTitle: 'أتمتة واضحة ومفهومة لفريقك بالكامل قبل بدء التشغيل.',
      workflowDesc:
        'مخطط النظام الواضح بيساعدك تفهم إيه اللي بيتم أتمتته، وفين بيتدخل الموظف البشري، وإزاي كل عميل بيتحول لأرباح فعلية.',
      workflowNodes: [
        {
          label: 'مُحفز الـ Webhook',
          detail: 'وصول العميل من نموذج الموقع، واتساب، إعلان ممول، أو صندوق الرسائل.',
        },
        {
          label: 'التقييم بالذكاء الاصطناعي',
          detail: 'تقييم الجدية، الميزانية، الأهمية، والمخاطر لحظياً.',
        },
        {
          label: 'منطق توجيه المسار',
          detail: 'توزيع العملاء المهتمين جداً، وحملات المتابعة، والحالات الخاصة.',
        },
        {
          label: 'حجز الموعد أو التنبيه',
          detail: 'تحديث مواعيد النتيجة، مراحل الـ CRM، وتنبيهات الفريق في نفس الوقت.',
        },
        {
          label: 'التحكم والموافقة البشرية',
          detail: 'إيقاف الردود غير المؤكدة لمراجعتها يدوياً قبل إرسالها للعميل.',
        },
        {
          label: 'حلقة المتابعة المستمرة',
          detail: 'التعامل تلقائياً مع عدم الحضور، الصفقات المعلقة، وتحديث البيانات الناقصة.',
        },
      ],
      backendSystemView: 'شاشة النظام الخلفية',
      backendH3: 'مسار عمل حقيقي يقدر فريقك يعتمد عليه.',
      backendDesc:
        'الالتقاط، تحليل الذكاء الاصطناعي، الذاكرة، توجيه المسارات، تحديثات الـ CRM، والمراجعة البشرية كما تظهر في النظام الخلفي الذي نادراً ما تراه.',
      backendStats: [
        'التشغيل النشط: عميل_4821',
        'متوسط الوقت: 0.4 ثانية للتوجيه',
        'بديل الأمان: بوابة الموافقة البشرية',
      ],
      diagramNodes: [
        { label: 'نموذج العميل', sub: 'استفسار جديد' },
        { label: 'عميل افتراضي', sub: 'تقييم + قرار' },
        { label: 'مناسب للخدمة؟', sub: 'نعم / لا' },
        { label: 'حجز المكالمة', sub: 'النتيجة + الـ CRM' },
        { label: 'مراجعة بشرية', sub: 'بديل أمان' },
      ],
      subNodes: [
        { label: 'النموذج اللغوي', sub: 'النية + النبرة' },
        { label: 'الذاكرة المشتركة', sub: 'تاريخ العميل' },
        { label: 'الأدوات والربط', sub: 'إجراءات الـ CRM' },
      ],
      workflowStatus: 'حالة مسار العمل',
      workflowStatusDetail: 'مؤتمت ومراقب بالكامل',
    },
    process: {
      badge: 'طريقة شغلنا',
      title: 'من مشكلة واضحة لنظام شغال في سبرنت واحد.',
      steps: [
        {
          title: 'نلاقي فين الفلوس بتتسرب',
          desc: 'في كول واحد بنقدر نحدد أكبر تسريب مالي في شركتك — سواء كان رد بطيء، CRM مش بيتحدث، مواعيد بتتقفل أو فريق بيضيع وقته في تاسكات يدوية.',
        },
        {
          title: 'نبني النظام والـ CRM',
          desc: 'بنصمم منطق الذكاء الاصطناعي، هيكل الـ CRM المخصص، قواعد التأهيل، ومسارات التوجيه — كل ده على أساس طريقة بيعك الفعلية مش طريقة نظرية.',
        },
        {
          title: 'نربط كل حاجة ببعض',
          desc: 'بنربط النظام بالـ CRM، الواتساب، الإيميل، النتيجة، والتنبيهات الداخلية. مفيش تغيير في أدواتك. مفيش تدريب من أول. بيشتغل وبس.',
        },
        {
          title: 'نتابع ونطور كل أسبوع',
          desc: 'بنراقب السجلات، بنحسن جودة الردود، بنصلح الحالات الخاصة، وبنكبر التغطية مع نمو شركتك. نظام بيتحسن مع الوقت مش بيتقادم.',
        },
      ],
    },
    bentoGrid: {
      badge: 'مين بنساعده',
      title: 'مجالك. مشكلتك. نظامنا.',
      description:
        'الوجع دايماً واحد: عملاء بيستفسروا ومحدش رد، مواعيد بتتكنسل، CRM مش بيتحدث، وفريق بيضيع نصف يومه في تاسكات المفروض ماكينة تعملها. إحنا بنصلح ده.',
      cases: [
        {
          industry: 'العقارات',
          title: 'العميل اتصل بالمنافس لأنك ردِّيت بعد ساعة.',
          metric: 'رد أسرع بـ 3 أضعاف',
          lines: [
            'عميل جه من فيسبوك أو بوابة عقارية',
            'الذكاء الاصطناعي قيّم الميزانية والموقع فوراً',
            'حجز معاينة والـ CRM اتحدث — من غير مندوب',
          ],
        },
        {
          industry: 'العيادات والمراكز الطبية',
          title: 'الأوبشن الفاضية خسارة. الغياب خسارة أكبر.',
          metric: '3 أسابيع بدون أي غياب',
          lines: [
            'مريض سأل على الواتساب',
            'النظام فحص التوافر وأكد الحجز أوتوماتيك',
            'تذكيرات ذكية صفّرت حالات الغياب',
          ],
        },
        {
          industry: 'التجارة الإلكترونية',
          title: 'صندوق الرسائل دا مقبرة مبيعات.',
          metric: '+953 ساعة عمل اتستردت',
          lines: [
            'عميل واقف أو عنده مشكلة',
            'النظام يحل أو يتصعد أو يسترد البيع',
            'الموظف بيتدخل في الحالات الصعبة بس',
          ],
        },
      ],
    },
    caseStudies: {
      badge: 'النتائج المحققة بالأرقام',
      title: 'إثباتات ونتائج واضحة كأنها تقرير تشغيلي.',
      description:
        'أفضل أتمتة هي اللي بتتحول لأرقام مستقرة وواضحة: تأخير أقل، تسليم مهام منظم، وأرقام فريقك يقدر يتأكد منها بنفسه في أي وقت.',
      stats: [
        {
          market: 'التجارة الإلكترونية',
          outcome: 'توفير +953 ساعة عمل',
          system: 'معالجة تلقائية للطلبات وتصنيف رسائل الإيميل لأكتر من 114 ألف رسالة.',
          result: 'ما يعادل استرجاع 5.4 أشهر من مجهود فريق الدعم بالكامل.',
          score: '98',
        },
        {
          market: 'الشركات التقنية (SaaS)',
          outcome: 'رد أسرع بنسبة 91%',
          system: 'عميل افتراضي للدعم الفني بـ 3 لغات مع منطق توجيه متطور للحالات الصعبة.',
          result: 'تغطية عالمية ممتازة بدون إجبار فريقك على استخدام نظام رسائل جديد.',
          score: '95',
        },
        {
          market: 'العيادات والمراكز الطبية',
          outcome: '3 أسابيع بدون أي غياب',
          system: 'مسار كامل لالتقاط بيانات المرضى على واتساب، تأكيد الحجز، التنبيهات، والتوجيه.',
          result: 'مواعيد منظمة تماماً وتقليل مكالمات التأكيد اليدوية بالكامل.',
          score: '92',
        },
      ],
      confidence: 'معدل الدقة والثقة',
    },
    about: {
      badge: 'إحنا مين',
      title: 'إحنا مشغّلين مش استشاريين.',
      description:
        'شايفين بعيننا إيه اللي بيكسر الشركات الناشئة والمتنامية — إكسيل بيتنكر إنه CRM، عميل ضاع لأن محدش رد في الوقت، وفريق بيكوبي داتا بين 5 أدوات كل صباح. إحنا بنبني الأنظمة اللي بتخلي ده كله من الماضي.',
      team: [
        {
          name: 'يوسف حازم',
          role: 'الرئيس التنفيذي',
          focus: 'استراتيجية الإيرادات، التسويق والمبيعات',
          background:
            'قضى سنين بيشوف شركات بتخسر مش بسبب المنتج الوحش — بسبب العمليات المكسورة. بيحول كل مشكلة لبريف بناء عشان كل نظام بنشحنه يستهدف أرباح حقيقية مش فيتشرز.',
        },
        {
          name: 'محمد أحمد',
          role: 'المدير التقني',
          focus: 'هندسة الذكاء الاصطناعي وبناء الـ CRM',
          background:
            'بيصمم منطق الذكاء الاصطناعي، أنظمة الـ CRM المخصصة، مسارات البيانات، والربط اللي بيخلي كل حاجة تشتغل. لو محتاج تتبني أو تترابط — هو اللي بيبنيها.',
        },
      ],
    },
    faq: {
      badge: 'أسئلة شائعة',
      title: 'الأسئلة اللي كل صاحب شركة بيسألها.',
      items: [
        {
          q: 'عندنا CRM — محتاجين واحد جديد؟',
          a: 'يمكن لأ. لو الـ CRM بتاعك بيتحدث فعلاً وفريقك بيستخدمه، هنربط عليه. بس لو فريقك بيتجاهله أو ناقص مراحل مهمة، بنبنيلك واحد مخصص بيتناسب مع طريقة بيعك الحقيقية — في سبرنت واحد.',
        },
        {
          q: 'في قد إيه ممكن تطلقوا النظام؟',
          a: 'نظام الرد على العملاء، مزامنة الـ CRM، وحجز المواعيد — ده بيتطلق في 48 ساعة. بناء CRM مخصص كامل مع تأهيل بالذكاء الاصطناعي بياخد سبرنت مركز، عادةً أسبوع لأسبوعين.',
        },
        {
          q: 'هنحتاج نغير أدواتنا الحالية؟',
          a: 'لأ خالص. بنربط على اللي فريقك شغال عليه فعلاً — HubSpot، GoHighLevel، Salesforce، Calendly، Slack، واتساب، إيميل، ونماذج. أدواتك تفضل. إحنا بنخليها تشتغل مع بعض.',
        },
        {
          q: 'لو الذكاء الاصطناعي مش متأكد من الرد، إيه اللي بيحصل؟',
          a: 'كل نظام بنبنيه فيه مستويات ثقة وبوابات موافقة بشرية. لو الذكاء الاصطناعي مش متأكد، بيوقف وبيعلم الموظف — مبيخمنش في الردود المهمة أبداً.',
        },
        {
          q: 'التسعير عندكم شغال إزاي؟',
          a: 'بتدفع مرة واحدة للسبرنت وإعداد الـ CRM، وبعدين رسوم شهرية تشمل الاستضافة، المراقبة، التحسينات، والدعم. مفيش فواتير مفاجأة.',
        },
      ],
    },
    contact: {
      badge: 'فحص مجاني للأنظمة',
      title: 'قولنا فين الفلوس بتتسرب. هنوريك إزاي توقف التسريب.',
      description:
        'اوصفلنا أكبر مشكلة بتكلفك دلوقتي — رد بطيء، أوبشنات فاضية، CRM ما حدش بيحدثه، أو متابعة بتعتمد على الذاكرة. هنعملك مخطط لأكتر نظام ممكن يغير شركتك، ونقولك يستاهل قد إيه.',
      outputs: [
        'مخطط مسار عمل مخصص',
        'تقدير حجم التسريب المالي',
        'خطة إطلاق في 48 ساعة',
      ],
      formBadge: 'طلب الفحص',
      formTitle: 'احجز فحصك المجاني دلوقتي',
      name: 'الاسم الكامل',
      email: 'إيميل العمل',
      industry: 'مجال الشركة',
      region: 'المنطقة',
      bottleneck: 'أكبر مشكلة بتواجهك دلوقتي',
      placeholderBottleneck: 'رد بطيء؟ CRM فوضى؟ عملاء بيضيعوا؟ مواعيد فاضية؟ قولنا بالظبط إيه اللي مكسور.',
      submit: 'اطلب الفحص المجاني',
      sending: 'جاري الإرسال...',
      chat: 'اتكلم معانا على واتساب',
      successTitle: 'وصلنا طلبك!',
      successDesc:
        'شكراً. هنراجع وضعك ونبعتلك مخطط تفصيلي وتقدير مالي خلال 48 ساعة.',
      successReset: 'ابعت طلب تاني',
      industries: {
        real_estate: 'العقارات',
        clinics: 'العيادات والمراكز الطبية',
        ecommerce: 'التجارة الإلكترونية',
        other: 'مجال تاني',
      },
      regions: {
        us: 'الولايات المتحدة',
        mena: 'الشرق الأوسط وشمال أفريقيا',
        eu: 'أوروبا',
        other: 'منطقة تانية',
      },
    },
    footer: {
      description:
        'بنبني أنظمة رد فوري، CRM مخصص، وأتمتة عمليات كاملة للشركات اللي تعبت من خسارة الإيرادات بسبب الرد البطيء والعمليات المكسورة.',
      audit: 'احجز فحص مجاني',
      whatsapp: 'كلمنا على واتساب',
      copyright: '© 2026 وكالة Fetch للذكاء الاصطناعي. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
    cta: {
      badge: 'متاحين دلوقتي',
      label: 'كلمنا على واتساب',
      message: 'أهلاً بفريق Fetch، عايز أحجز فحص مجاني لشركتي وأشوف إيه اللي تقدروا تأتمتوه لينا.',
    },
  },
};
