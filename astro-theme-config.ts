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
    url: 'https://pascalamaliri.com',
    /** Subpath such as '/repo-name'. Keep empty when deploying at a domain root. */
    base: '',
    lang: 'en',
    locale: 'en_US',
    dateLocale: 'en-US',
    title: 'Pascal Amaliri',
    logoLabel: 'Pascal',
    description:
      'Fullstack engineer with a strong backend focus — I design and build scalable APIs, real-time systems, intuitive frontends, and AI-powered applications. I can own the full stack when needed, but backend architecture and performance is where I do my best work.',
      author: 'Pascal Amaliri',
    /** Optional absolute or root-relative image URL for homepage/search/about social previews. */
    defaultOgImage: '/og.png',
  },

  // The logo already links to `/`. Add items here if you want visible header links.
  // Example: [{ label: 'Projects', href: '/projects' }, { label: 'About', href: '/about' }]
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Search', href: '/search' },
  ] as NavItem[],

  // Footer links stay visible by default so readers have a stable way to move around.
  footerNav: [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Search', href: '/search' },
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
    provider: 'giscus',
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '0',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      customLightTheme: '/giscus-light.css',
      customDarkTheme: '/giscus-dark.css',
      lang: 'en',
      loading: 'eager',
    },
  },

  social: {
    website: '',
    email: 'pascalamaliri@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pascal-amaliri/',
    github: 'https://github.com/PascalAmah',
    whatsapp: 'https://wa.me/+2347062940343',
    instagram: 'https://instagram.com/chisax_',
    twitter: 'https://x.com/chisax_',
  } as Record<'website' | 'email' | 'linkedin' | 'github' | 'whatsapp' | 'instagram' | 'twitter', string>,

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
      ],
    },
    {
      label: 'Backend',
      names: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Flask', 'Django', 'PHP', 'FastAPI'],
    },
    {
      label: 'Databases',
      names: ['MongoDB', 'MySQL', 'Firebase', 'PostgresSQL'],
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
        'Graphql',
      ],
    },
  ],

  about: {
    /** Profile image URL. Leave empty to use the text-only About layout. */
    profileImage: '/pascal-professional.jpg',
    name: 'Pascal Amaliri',
    role: 'Full-stack developer',
    location: 'Lagos, Nigeria',
    focus: 'Software Engineering, Backend Development, and AI/ML.',
    /** Short bio used on the homepage about teaser. */
    shortBio: "I'm a full-stack software engineer from Nigeria with a passion for building robust, scalable systems that solve real problems.",
    lead: "I'm a full-stack software engineer from Nigeria with a passion for building robust, scalable systems that solve real problems. My work spans backend APIs, cloud-connected platforms, and AI-powered tools. Always with a focus on performance, clean architecture, and developer experience. I've shipped production systems across hospitality, e-commerce, education, and environmental tech, collaborating with cross-functional teams and leading backend initiatives. When I'm not writing code, I'm exploring new machine learning techniques or contributing to open-source projects.",
    headline: ['Building', 'scalable systems.'],
    statementLabel: 'Skills',
    statementTitle: 'What I work with.',
    statement:
      'This page is intentionally spare: a short bio, a few links, and enough context for readers who want to know who is writing.',
    careerLabel: 'Career',
    career: [
      {
        period: 'Nov 2025 - Present',
        title: 'Software Engineer | Backend',
        description: 'Outside Hospitaity',
      },
      {
        period: 'Dec 2025 - Feb 2025',
        title: 'Software Developer | Backend',
        description: 'AfroGoods',
      },
      {
        period: 'Sept 2025 - Present',
        title: 'Software Developer | Backend',
        description: 'Skil Connect',
      },
      {
        period: 'Sept 2024 - Feb 2025',
        title: 'Frontend Developer | React.js',
        description: 'Encounter Inc. - TripHoppa',
      },
      {
        period: '2023 - 2025',
        title: 'Software Engineering Student | Certificate Program',
        description: 'ALX',
      },
    ],
    interests: ['Backend Systems', 'AI & Machine Learning', 'Web Development', 'Mobile App Development'],
    interestsLabel: 'Interests',
    interestsHeading: 'What I enjoy working on',
  },
};

export default config;
