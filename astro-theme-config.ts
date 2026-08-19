type NavItem = {
  label: string;
  href: string;
};

/**
 * astro-theme-config.ts
 *
 * Central configuration for the Tone theme.
 * Most site-level customization should happen in this file.
 */

const config = {
  site: {
    /** Production origin, used for canonical links, sitemap, and Open Graph metadata. */
    url: 'https://amaliri.com.ng',
    /** Subpath such as '/repo-name'. Keep empty when deploying at a domain root. */
    base: '/',
    lang: 'en',
    locale: 'en_US',
    dateLocale: 'en-US',
    title: 'Pascal Amaliri',
    logoLabel: 'Pascal',
    description:
      'Full-stack engineer building scalable APIs, real-time systems, intuitive frontends, and AI-powered applications. I own the full stack when needed, but backend architecture is where I do my best work.',
    author: 'Pascal Amaliri',
    /** Optional absolute or root-relative image URL for homepage/search/about social previews. */
    defaultOgImage: '/amaliri.png',
    /** Résumé PDF served from /public. */
    resumeUrl: '/pascal-amaliri-resume.pdf',
  },

  // The logo already links to `/`. Add items here if you want visible header links.
  // Example: [{ label: 'Projects', href: '/projects' }, { label: 'About', href: '/about' }]
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ] as NavItem[],

  // Footer links stay visible by default so readers have a stable way to move around.
  footerNav: [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ] as NavItem[],

  content: {
    categoryOrder: [
      'Design',
      'Getting Started',
      'Markdown',
      'Open Source',
      'Systems',
      'Notes',
      'Research',
      'Performance',
      'MDX',
    ],
  },

  behavior: {
    smoothScroll: true,
  },

  comments: {
    mode: 'off',
  },

  social: {
    website: '',
    email: 'pascalamaliri@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pascal-amaliri/',
    github: 'https://github.com/PascalAmah',
    whatsapp: 'https://wa.me/+2347062940343',
    instagram: 'https://instagram.com/chisax_',
    twitter: 'https://x.com/chisax_',
  } as Record<
    'website' | 'email' | 'linkedin' | 'github' | 'whatsapp' | 'instagram' | 'twitter',
    string
  >,

  skills: [
    {
      label: 'Frontend',
      names: [
        'React.js',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Redux',
        'Astro',
      ],
    },
    {
      label: 'Backend',
      names: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Flask', 'Django', 'PHP', 'FastAPI'],
    },
    {
      label: 'Databases',
      names: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'],
    },
    {
      label: 'Tools & AI/ML',
      names: [
        'Git',
        'GitHub',
        'Docker',
        'CI/CD',
        'Agile',
        'pandas',
        'scikit-learn',
        'Transformers',
        'REST APIs',
        'GraphQL',
      ],
    },
  ],

  home: {
    /** Hero — outcome-led, not a job title. */
    hero: {
      status: 'Available for backend & full-stack roles',
      headline: 'Software engineer who ships systems that stay up.',
      subhead:
        'I design scalable APIs, real-time platforms, and AI-powered apps. Backend architecture and performance is where I do my best work and I can own the full stack when it counts.',
      primaryCta: { label: 'View work', href: '/projects' },
      secondaryCta: { label: 'Résumé', href: '/pascal-amaliri-resume.pdf' },
      /** Hero visual: 'terminal' (signature) or 'portrait' (uses about.profileImage). */
      visual: 'terminal' as 'terminal' | 'portrait',
      /** Lines rendered in the terminal card. `cmd` lines get a prompt + typing. */
      terminal: [
        { cmd: 'whoami' },
        { out: 'pascal — fullstack software engineer' },
        { cmd: 'cat stack.txt' },
        { out: 'Node · NestJS · Python · FastAPI · Postgres · Docker' },
        { cmd: './ship --status' },
        { out: '✓ 6 systems in production' },
      ] as { cmd?: string; out?: string }[],
    },
    /** Honest, factual proof chips — scope shipped, not invented traffic numbers. */
    metrics: [
      { value: '6', label: 'Production systems shipped' },
      { value: '5', label: 'Industries: fintech, e-commerce, edu, hospitality, Web3' },
      { value: '3+', label: 'Years building for the web' },
      { value: 'Full-stack', label: 'Backend-focused, ships end to end' },
    ],
    /** Companies/contexts, surfaced as a trust row under the hero. */
    proof: ['Outside Hospitality', 'AfroGoods', 'Skil Connect', 'TripHoppa'],
    /** Curated skills for the homepage — depth signal, not a 30-item dump. */
    coreSkills: [
      'Node.js',
      'NestJS',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'MongoDB',
      'TypeScript',
      'Docker',
    ],
    familiarSkills: [
      'React.js',
      'Next.js',
      'Express.js',
      'Django',
      'Redux',
      'GraphQL',
      'Redis',
      'CI/CD',
    ],
    /**
     * Testimonials — REPLACE these placeholders with real, attributable quotes.
     * The entries below are obvious templates so nothing fake ships by accident.
     * Delete any you can't fill; set to [] to hide the section entirely.
     * Shape: { quote: string, name: string, role: string }
     */
    testimonials: [
      // {
      //   quote: 'Placeholder — replace with a real quote about working with you (impact, reliability, ownership).',
      //   name: 'Full Name',
      //   role: 'Role · Company',
      // },
      // {
      //   quote: 'Placeholder — a teammate or lead describing a specific strength (e.g. owned backend reliability end to end).',
      //   name: 'Full Name',
      //   role: 'Role · Company',
      // },
      // {
      //   quote: 'Placeholder — a client or manager on outcomes you delivered. Keep it short and specific.',
      //   name: 'Full Name',
      //   role: 'Role · Company',
      // },
    ] as { quote: string; name: string; role: string }[],
  },

  about: {
    /** Profile image URL. Leave empty to use the text-only About layout. */
    profileImage: '/pascal-professional.jpg',
    name: 'Pascal Amaliri',
    role: 'Full-stack developer',
    location: 'Lagos, Nigeria',
    focus: 'Software Engineering, Backend Development, and AI/ML.',
    /** Short bio used on the homepage about teaser. */
    shortBio:
      'Full-stack software engineer from Nigeria. I build robust, scalable systems, APIs, real-time platforms, and AI tools that solve real problems.',
    lead: 'I’m a full-stack software engineer from Nigeria. I build robust, scalable systems, APIs, real-time platforms, intuitive frontends, and AI-powered tools. I’ve shipped production systems across hospitality, e-commerce, education, and environmental tech. I’ve led backend initiatives, collaborated with cross-functional teams, and built everything from Stripe-integrated checkout flows to on-chain smart contracts. When I’m not writing code, I’m exploring machine learning or contributing to open-source projects.',
    headline: ['Building', 'scalable systems.'],
    statementLabel: 'Skills',
    statementTitle: 'What I work with.',
    careerLabel: 'Career',
    career: [
      {
        period: 'Nov 2025 – Present',
        title: 'Software Engineer',
        role: 'Backend',
        description: 'Outside Hospitality',
        type: 'Contract',
        remote: true,
        bullets: [
          'Built and maintained backend services powering hospitality operations and booking workflows',
          'Designed RESTful APIs consumed by web and mobile clients with a focus on reliability and low latency',
          'Improved system observability by adding structured logging and error tracking across services',
        ],
      },
      {
        period: 'Dec 2025 – Feb 2026',
        title: 'Software Developer',
        role: 'Backend',
        description: 'AfroGoods',
        type: 'Contract',
        remote: true,
        bullets: [
          'Developed backend features for an e-commerce platform serving African merchants and buyers',
          'Integrated payment and logistics APIs to streamline order fulfilment across regions',
          'Collaborated with frontend team to define API contracts and accelerate feature delivery',
        ],
      },
      {
        period: 'Sept 2025 – Nov 2025',
        title: 'Software Developer',
        role: 'Backend',
        description: 'Skil Connect',
        type: 'Contract',
        remote: true,
        bullets: [
          'Built API endpoints for a skills-matching platform connecting professionals with opportunities',
          'Implemented user profile and matching logic backed by PostgreSQL and Node.js',
          'Participated in sprint planning and code reviews to maintain quality across the codebase',
        ],
      },
      {
        period: 'Sept 2024 – Mar 2025',
        title: 'Frontend Developer',
        description: 'Encounter Inc. – TripHoppa',
        type: 'Freelance',
        remote: true,
        bullets: [
          'Built interactive React.js interfaces for a travel discovery and booking product',
          'Translated Figma designs into pixel-accurate, responsive components with strong attention to accessibility',
          'Coordinated with backend engineers to integrate APIs for real-time trip data and user itineraries',
        ],
      },
      {
        period: '2023 – 2025',
        title: 'Software Engineering Student',
        description: 'ALX Africa',
        type: 'Certificate Program',
        remote: false,
        bullets: [
          'Completed an intensive two-year software engineering program covering systems programming, backend development, and web technologies',
          'Built projects in C, Python, JavaScript, and shell scripting with emphasis on performance and low-level understanding',
          'Collaborated with a global cohort on team projects, code reviews, and peer-learning sessions',
        ],
      },
    ] as {
      period: string;
      title: string;
      role?: string;
      description: string;
      type: string;
      remote: boolean;
      bullets: string[];
    }[],
    interests: [
      'Backend Systems',
      'AI & Machine Learning',
      'Web Development',
      'Mobile App Development',
    ],
    interestsLabel: 'Interests',
    interestsHeading: 'What I enjoy working on',

    /**
     * Journey — the story behind the timeline. Each string is its own paragraph.
     * Edit freely; these are drawn from your real path (ALX, the frontend → backend shift).
     */
    journeyLabel: 'Journey',
    journeyHeading: 'How I got into tech',
    journey: [
      'My journey into software engineering started with curiosity about how the products I used every day actually worked. That curiosity led me to the ALX Software Engineering program, where I spent two years learning how to build reliable, scalable software—not just write code.',
      'I began on the frontend, building React interfaces at TripHoppa and shipping polished UIs. But I kept following the thread behind the screen: the APIs, the data models, the parts that decide whether a system stays up under load. The deeper I went, the clearer it became that backend architecture was where I did my best work.',
      "Since then I've led backend initiatives across hospitality, e-commerce, and Web3—designing scalable APIs, real-time platforms, and AI-powered tools. I still own the full stack when a project calls for it, but reliable, well-architected systems are what I care about most. When I'm not building, I'm usually exploring machine learning or contributing to open source.",
    ],

    /**
     * Certifications — add real, earned credentials only.
     * `logo` (optional): path to an issuer logo in /public, e.g. '/alx-logo.png'.
     * `credentialUrl` (optional): omit to render a non-linked entry.
     * Shape: { title, issuer, year, logo?, credentialUrl? }
     */
    certificationsLabel: 'Credentials',
    certificationsHeading: 'Certifications earned',
    certifications: [
      {
        title: 'Software Engineering — Certificate Program',
        issuer: 'ALX Africa',
        year: '2025',
        logo: '/alx-logo.png',
        credentialUrl: '',
      },
      // Add more as you earn them, e.g.:
      // {
      //   title: 'Backend Web Development',
      //   issuer: 'Provider',
      //   year: '2025',
      //   logo: '/provider-logo.png',
      //   credentialUrl: 'https://…',
      // },
    ] as {
      title: string;
      issuer: string;
      year: string;
      logo?: string;
      credentialUrl?: string;
    }[],
  },
};

export default config;
